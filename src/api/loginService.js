import api from './api'

export default {
    login(username, password) {
        //在调用之前，需要添加一个 header   
        if (username && password)
            api.defaults.headers.common['Authorization'] = 'Basic ' + btoa(username + ":" + password);

        return api({
            url: '/user',
            method: 'get',
            params: {
                //ID: 12345
            }
        });
    },
    logout() {
        return api({
            url: '/logout',
            method: 'post'
        });
    },
    authenticate(successCallback, failCallback) {
        this.login(null, null)
            .then(response => {
                if (response.status == 200) {
                    if (successCallback)
                        successCallback();
                } else {
                    if (failCallback)
                        failCallback();
                }
            })
            .catch(function () {
                if (failCallback)
                    failCallback();
            });
    }
}
