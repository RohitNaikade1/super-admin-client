import cookie from 'js-cookie'
import history from './history';
import jwt from 'jwt-decode';
// Set in Cookie
export const setCookie = (key, value) => {
    if (window !== 'undefiend') {
        cookie.set(key, value, {
            expires: 1
        }) 
    }
}
// remove from cookie
export const removeCookie = key => {
    if (window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        });
    }
};

export const getCookie = key => {
    if (window !== 'undefined') {
        return cookie.get(key);
    }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getLocalStorage = () => {
    if (window !== 'undefined') {
        return JSON.parse(localStorage.getItem('token'));
    }
};

// Remove from localstorage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    console.log(response.data)
    setCookie('token', response.data.token);
    setLocalStorage('token', response.data.token);
    next();
};

// Access user info from localstorage
export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('token')) {
                const data={
                    token:JSON.parse(localStorage.getItem('token')),
                    role:JSON.parse(localStorage.getItem('role'))
                }
                // console.log(data)
                return data;
            } else {
                return false;
            }
        }
    }
};

export const signout = () => {
    removeCookie('token');
    removeLocalStorage('token');
    history.push('/login');
    window.location.reload(false);
};

export const updateUser = (response, next) => {
    console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response);
    if (typeof window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('token'));
        auth = response.data;
        localStorage.setItem('token', JSON.stringify(auth));
    }
    next();
};