import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    dms_metadata_list: [],
}

const getters = {
    fetchDmsMetadata: (state) => {
        return state.dms_metadata_list;
    },

}

const actions = {
    async fetchDmsMetadata({ commit }) {
        mixinHttpRequest.methods.get("/dms_metadata/").then(res => { commit("fetchDmsMetadata", { res }) })
    },
}

const mutations = {
    fetchDmsMetadata(state, { res }) {
        state.dms_metadata_list = res.data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}