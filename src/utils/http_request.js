import Axios from "axios";
const baseApiURL = process.env.VUE_APP_API_ROOT;
const JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
const headers = {
    Authorization: "Bearer " + JWTToken
};
export default {
    methods: {
        get(methodName) {
            // create a promise for the axios request
            const promise = Axios.get(baseApiURL + methodName, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        },
        post(methodName, payload) {
            // create a promise for the axios request
            const promise = Axios.post(baseApiURL + methodName, payload, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        },

        put(methodName, payload) {
            // create a promise for the axios request
            const promise = Axios.put(baseApiURL + methodName, payload, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        },

        delete(methodName, payload) {
            // create a promise for the axios request
            const promise = Axios.delete(baseApiURL + methodName, payload, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        }
    }
};