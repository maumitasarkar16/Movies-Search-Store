import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, USER_ICON } from '../utils/constant';

const Header = () => {

    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }


    //this part will be executed only once whenever a user sign in or sign out and stores the user object in browser every time page loads
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //Sign In
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                //navigate to browse page
                navigate("/browse")
            } else {
                //Sign out
                dispatch(removeUser())
                //navigate to home page
                navigate("/")
                
            }
        });

        //when component is unmount unsubscribe is called
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div className='absolute bg-gradient-to-b from-black px-[130px] py-2 z-10 w-screen flex justify-between'>
                <img src={LOGO} alt="header" height="500px" width="180px" />

                {user && (<div className=' m-4 flex cursor-pointer'>
                    <img className="h-12 w-12" src={user.photoURL !== null ? user.photoURL : USER_ICON} alt="user-icon" />
                    <button className='text-white font-bold ' onClick={handleSignOut}>(Sign Out)</button>
                </div>)}
            </div>
        </div>
    )
}

export default Header