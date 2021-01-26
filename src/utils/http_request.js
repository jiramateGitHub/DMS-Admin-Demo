import axios from 'axios'

class HttpRequest {
    constructor(url = process.env.VUE_APP_API_ROOT) {
        // this.axios = axios
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 120000
        })

        this.axiosInstance.interceptors.request.use(function(config) {
            // Do something before request is sent
            return config
        }, function(error) {
            // Do something with request error
            return Promise.reject(error)
        })

        // Add a response interceptor
        this.axiosInstance.interceptors.response.use(function(response) {
            // Do something with response data
            return response
        }, function(error) {
            // Do something with response error
            return Promise.reject(error)
        })
    }

    setHeader(header) {
        // this.axiosInstance.defaults.headers.common[header.key] = header.value
        this.axiosInstance.defaults.headers.common = header
        this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    get(methodName, data) {
        let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
        let headers = {
            Authorization: "Bearer " + JWTToken
        };
        return this.axiosInstance.get(methodName, {
            params: data,
            headers: headers
        })
    }

    create(methodName, data) {
        return this.axiosInstance.post(methodName, data)
    }

    update(methodName, data) {
        return this.axiosInstance.put(methodName, data)
    }

    delete(methodName, param, data) {
        return this.axiosInstance.delete(methodName, {
            params: param,
            data: data
        })
    }

}

export default HttpRequest