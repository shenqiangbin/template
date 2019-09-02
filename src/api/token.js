export const TOKEN_KEY = 'authtoken'
export const COOKIE_KEY = 'JSESSIONID'

export const getToken = function(key){
    key = key || TOKEN_KEY
    var val = localStorage.getItem(key);
    return val || null;
}

export const getCookie = name => {
    name = name || COOKIE_KEY;
    var arr
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if ((arr = document.cookie.match(reg)))
        return unescape(arr[2])
    else 
        return null
  }