export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/c5f327aa-25b9-4f32-8004-02fa7082c853/SG-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_ICON = "https://occ-0-7874-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeDS2c81QQanRv7GsPW_2LXIDeqTHunXple_KX1-vjI7wr3jVjlGBjY-bb-Xrcm6ZIAO-6WiFv4uD9jfMZKBbEkh8u_awEk.png?r=540"
export const AVATAR_URL = "https://avatars.githubusercontent.com/u/75574476?v=4"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_API_TOKEN
  }
};

export const POSTER_PATH = "https://image.tmdb.org/t/p/w500/"

export const LANGUAGE = [
  {
    identifier: "en",
    value: "English"
  },
  {
    identifier: "hindi",
    value: "Hindi"
  },
  {
    identifier: "spanish",
    value: "Spanish"
  }
]


