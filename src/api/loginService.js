import api from './api'

export default {
    login(){       
        return api({ 
            url: '/account/captcha',
            method: 'get', 
            params: {
                ID: 12345
            }
        });
    }
}
