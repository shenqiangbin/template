import api from './api'

export default {
    login(username, password) {
        //在调用之前，需要添加一个 header   

        api.defaults.headers.common['Authorization'] = 'Basic ' + btoa(username + ":" + password);

        return api({
            url: '/user',
            method: 'get',
            params: {
                //ID: 12345
            }
        });
    }
}
