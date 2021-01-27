import Axios from "axios";

let api = process.env.VUE_APP_API_ROOT;
let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
let headers = {
    Authorization: "Bearer " + JWTToken
};

const state = {
    base_categories: [],
    base_classified: [],
    base_datagroups: [],
    base_durations: [],
    base_formats: [],
    base_languages: [],
    base_permissions: [],
    base_scopes: [],
    institution: [],
}

const getters = {
    vSelectBaseCategories: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_categories)) {
            myArray.push({ code: value.bc_id, label: value.bc_name })
        }
        return myArray
    },
    vSelectBaseClassified: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_classified)) {
            myArray.push({ code: value.cf_id, label: value.cf_text })
        }
        return myArray
    },
    vSelectBaseDatagroups: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_datagroups)) {
            myArray.push({ code: value.grp_id, label: value.grp_name })
        }
        return myArray
    },
    vSelectBaseDurations: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_durations)) {
            myArray.push({ code: value.dt_id, label: value.dt_text })
        }
        return myArray
    },
    vSelectBaseFormats: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_formats)) {
            myArray.push({ code: value.ft_id, label: value.ft_text })
        }
        return myArray
    },
    vSelectBaseLanguages: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_languages)) {
            myArray.push({ code: value.lg_id, label: value.lg_text })
        }
        return myArray
    },
    vSelectBasePermissions: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_permissions)) {
            myArray.push({ code: value.pers_id, label: value.pers_text })
        }
        return myArray
    },
    vSelectBaseScopes: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.base_scopes)) {
            myArray.push({ code: value.sc_id, label: value.sc_text })
        }
        return myArray
    },
    vSelectInstitution: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.institution)) {
            myArray.push({ code: value.ins_id, label: value.ins_name })
        }
        return myArray
    },
}

const actions = {
    async fetchBaseCategories({ commit }) {
        await Axios.get(api + "/dms_base_categories", { headers: headers })
            .then(res => commit("fetchBaseCategories", { res }))
            .catch(err => alert(err));
    },
    async fetchBaseClassified({ commit }) {
        await Axios.get(api + "/dms_base_classified", { headers: headers })
            .then(res => commit("fetchBaseClassified", { res }))
            .catch(err => alert(err));
    },
    async fetchBaseDatagroups({ commit }) {
        await Axios.get(api + "/dms_base_datagroups", { headers: headers })
            .then(res => commit("fetchBaseDatagroups", { res }))
            .catch(err => alert(err));
    },
    async fetchBaseDurations({ commit }) {
        await Axios.get(api + "/dms_base_durations", { headers: headers })
            .then(res => commit("fetchBaseDurations", { res }))
            .catch(err => alert(err));
    },
    async fetchBaseFormats({ commit }) {
        await Axios.get(api + "/dms_base_formats", { headers: headers })
            .then(res => commit("fetchBaseFormats", { res }))
            .catch(err => alert(err));
    },
    async fetchBaseLanguages({ commit }) {
        await Axios.get(api + "/dms_base_languages", { headers: headers })
            .then(res => commit("fetchBaseLanguages", { res }))
            .catch(err => alert(err));
    },
    async fetchBasePermissions({ commit }) {
        await Axios.get(api + "/dms_base_permissions", { headers: headers })
            .then(res => commit("fetchBasePermissions", { res }))
            .catch(err => alert(err));
    },
    async fetchBaseScopes({ commit }) {
        await Axios.get(api + "/dms_base_scopes", { headers: headers })
            .then(res => commit("fetchBaseScopes", { res }))
            .catch(err => alert(err));
    },
    async fetchInstitution({ commit }) {
        await Axios.get(api + "/dms_institution", { headers: headers })
            .then(res => commit("fetchInstitution", { res }))
            .catch(err => alert(err));
    },
}

const mutations = {
    fetchBaseCategories(state, { res }) {
        state.base_categories = res.data;
        console.log(state.base_categories);
    },
    fetchBaseClassified(state, { res }) {
        state.base_classified = res.data;
        console.log(state.base_classified);
    },
    fetchBaseDatagroups(state, { res }) {
        state.base_datagroups = res.data;
        console.log(state.base_datagroups);
    },
    fetchBaseDurations(state, { res }) {
        state.base_durations = res.data;
        console.log(state.base_durations);
    },
    fetchBaseFormats(state, { res }) {
        state.base_formats = res.data;
        console.log(state.base_formats);
    },
    fetchBaseLanguages(state, { res }) {
        state.base_languages = res.data;
        console.log(state.base_languages);
    },
    fetchBasePermissions(state, { res }) {
        state.base_permissions = res.data;
        console.log(state.base_permissions);
    },
    fetchBaseScopes(state, { res }) {
        state.base_scopes = res.data;
        console.log(state.base_scopes);
    },
    fetchInstitution(state, { res }) {
        state.institution = res.data;
        console.log(state.institution);
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}