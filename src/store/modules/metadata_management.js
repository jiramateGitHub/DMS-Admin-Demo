import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    dms_metadata: [],
}

const getters = {
    vSelectBaseCategories: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.dms_metadata)) {
            myArray.push({ code: value.bc_id, label: value.bc_name })
        }
        return myArray
    },
    fetchDmsMetadata: (state) => {
        return state.dms_metadata;
    }
}

const actions = {
    async fetchDmsMetadata({ commit }) {
        mixinHttpRequest.methods.get("/dms_metadata/").then(res => { commit("fetchDmsMetadata", { res }) })
    }
}

const mutations = {
    fetchDmsMetadata(state, { res }) {
        state.dms_metadata = res.data;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}