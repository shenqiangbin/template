export const TOKEN_KEY = 'authtoken'

export const getToken = function(key){
    key = key || TOKEN_KEY
    var val = localStorage.getItem(key);
    return val || null;
}