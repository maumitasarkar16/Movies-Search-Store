import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR_URL } from '../utils/constant';

const Login = () => {
    const dispatch = useDispatch()
 
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, seterrorMessage] = useState(null)

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log("Name----", name)
        // console.log("Email----", email)
        // console.log("Password----", password)

        if (isSignInForm) {
            //Login 
            const validateFormMsg = checkValidate(undefined, email.current.value, password.current.value)
            seterrorMessage(validateFormMsg)
            if (validateFormMsg) return;

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //console.log("old user===", user)
                    updateProfile(user, {
                        photoURL: AVATAR_URL
                    }).then(() => {
                        // update the store
                        const { photoURL } = auth.currentUser;
                        dispatch(addUser({ photoURL: photoURL }))
                    }).catch((error) => {
                        seterrorMessage(error.message)
                    });
                    //console.log("new user===", user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage)
                });


        } else {
            //Create User
            const validateFormMsg = checkValidate(name.current.value, email.current.value, password.current.value)
            seterrorMessage(validateFormMsg)
            if (validateFormMsg) return;

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: AVATAR_URL
                    }).then(() => {
                        // update the store
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        seterrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage)
                });


        }


    }

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    return (
        <div>
            <Header />
            <div className="absolute"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/c5f327aa-25b9-4f32-8004-02fa7082c853/SG-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-login" /></div>

            <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h2 className="text-3xl font-bold py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>

                {/* {!isSignInForm && <input type="text" name="name" placeholder="Full Name" value={name} className="p-4 my-3 w-full bg-gray-700 rounded-lg border-[1px] border-slate-300" onChange={handleName} />}
                <input type="text" name="email" placeholder="Email Address" value={email} className="p-4 my-3 w-full bg-gray-700 rounded-lg border-[1px] border-slate-300" onChange={handleEmail} />
                <input type="password" name="password" placeholder="Password" value={password} className="p-4 my-3 w-full  bg-gray-700 rounded-lg border-[1px] border-slate-300" onChange={handlePassword} /> */}

                {!isSignInForm && <input type="text" name="name" ref={name} placeholder="Full Name" className="p-4 my-3 w-full bg-gray-700 rounded-lg border-[1px] border-slate-300" />}
                <input type="text" name="email" ref={email} placeholder="Email Address" className="p-4 my-3 w-full bg-gray-700 rounded-lg border-[1px] border-slate-300" />
                <input type="password" name="password" ref={password} placeholder="Password" className="p-4 my-3 w-full  bg-gray-700 rounded-lg border-[1px] border-slate-300" />

                <p className="p-2 m-2 font-bold text-red-500" >{errorMessage}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleSubmitForm}> {isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                <p className="cursor-pointer" onClick={handleSignInForm}>{isSignInForm ? "New to Netflix. Sign Up now." : "Already registerd? Sign In now."}</p>

            </form>
        </div>
    )
}

export default Login