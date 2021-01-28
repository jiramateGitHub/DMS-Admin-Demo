import Axios from "axios";

let api = process.env.VUE_APP_API_ROOT;
let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
let headers = {
    Authorization: "Bearer " + JWTToken
};

const state = {
    base_categories: [],
    base_datagroups: [],
    base_durations: [],
    base_formats: [],
    base_languages: [],
    base_permissions: [],
    base_scopes: [],
}

const getters = {
    vSelectBaseCategories: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_categories)) {
            myArray.push({ code: value.bc_id, label: value.bc_name })
        }
        return myArray
    }
}

const actions = {
    async fetchBaseCategories({ commit }) {
        await Axios.get(api + "/dms_base_categories", { headers: headers })
            .then(res => commit("fetchBaseCategories", { res }))
            .catch(err => alert(err));
    }
}

const mutations = {
    fetchBaseCategories(state, { res }) {
        state.base_categories = res.data;
        console.log(state.base_categories);
    }

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}