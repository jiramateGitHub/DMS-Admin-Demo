import mixinHttpRequest from '../../utils/http_request.js'

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
        mixinHttpRequest.methods.get("/dms_base_categories").then(res => { commit("fetchBaseCategories", { res }) })
    },
    async fetchBaseClassified({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_classified").then(res => { commit("fetchBaseClassified", { res }) })
    },
    async fetchBaseDatagroups({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_datagroups").then(res => { commit("fetchBaseDatagroups", { res }) })
    },
    async fetchBaseDurations({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_durations").then(res => { commit("fetchBaseDurations", { res }) })
    },
    async fetchBaseFormats({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_formats").then(res => { commit("fetchBaseFormats", { res }) })
    },
    async fetchBaseLanguages({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_languages").then(res => { commit("fetchBaseLanguages", { res }) })
    },
    async fetchBasePermissions({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_permissions").then(res => { commit("fetchBasePermissions", { res }) })
    },
    async fetchBaseScopes({ commit }) {
        mixinHttpRequest.methods.get("/dms_base_scopes").then(res => { commit("fetchBaseScopes", { res }) })
    },
    async fetchInstitution({ commit }) {
        mixinHttpRequest.methods.get("/dms_institution").then(res => { commit("fetchInstitution", { res }) })
    },
}

const mutations = {
    fetchBaseCategories(state, { res }) {
        state.base_categories = res.data;
    },
    fetchBaseClassified(state, { res }) {
        state.base_classified = res.data;
    },
    fetchBaseDatagroups(state, { res }) {
        state.base_datagroups = res.data;
    },
    fetchBaseDurations(state, { res }) {
        state.base_durations = res.data;
    },
    fetchBaseFormats(state, { res }) {
        state.base_formats = res.data;
    },
    fetchBaseLanguages(state, { res }) {
        state.base_languages = res.data;
    },
    fetchBasePermissions(state, { res }) {
        state.base_permissions = res.data;
    },
    fetchBaseScopes(state, { res }) {
        state.base_scopes = res.data;
    },
    fetchInstitution(state, { res }) {
        state.institution = res.data;
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}