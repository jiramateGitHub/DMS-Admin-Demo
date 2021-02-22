import Axios from "axios";
import { mapGetters } from "vuex";
const baseApiURL = process.env.VUE_APP_API_ROOT;
export default {
    methods: {
        get(methodName) {
            const headers = {
                Authorization: "Bearer " + localStorage.jwtToken
            };
            // create a promise for the axios request
            const promise = Axios.get(baseApiURL + methodName, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        },
        post(methodName, payload) {
            const headers = {
                Authorization: "Bearer " + localStorage.jwtToken
            };
            // create a promise for the axios request
            const promise = Axios.post(baseApiURL + methodName, payload, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        },

        put(methodName, payload) {
            const headers = {
                Authorization: "Bearer " + localStorage.jwtToken
            };
            // create a promise for the axios request
            const promise = Axios.put(baseApiURL + methodName, payload, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        },

        delete(methodName, payload) {
            const headers = {
                Authorization: "Bearer " + localStorage.jwtToken
            };
            // create a promise for the axios request
            const promise = Axios.delete(baseApiURL + methodName, payload, { headers: headers })

            // using .then, create a new promise which extracts the data
            const dataPromise = promise.then((res) => res).catch((err) => console.log(err));

            // return it
            return dataPromise
        }
    },
    computed: {
        ...mapGetters({
            jwtToken: "auth_dev/getToken",
        }),
    },
};