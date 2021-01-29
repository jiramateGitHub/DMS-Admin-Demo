import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    dms_metadata_list: [],
    dms_business_metadata: {},
    current_dms_metadata: {}
}

const getters = {
    vSelectBaseCategories: (state) => {
        let myArray = [];
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(state.dms_metadata_list)) {
            myArray.push({ code: value.bc_id, label: value.bc_name })
        }
        return myArray
    },
    fetchDmsMetadata: (state) => {
        return state.dms_metadata_list;
    },
    getBusinessMetadata: (state) => {
        return state.dms_business_metadata;
    },
    getCurrentMetadata: (state) => {
        return state.current_dms_metadata;
    }
}

const actions = {
    async fetchDmsMetadata({ commit }) {
        mixinHttpRequest.methods.get("/dms_metadata/").then(res => { commit("fetchDmsMetadata", { res }) })
    },
    async getBusinessMetadata({ commit, state }) {
        mixinHttpRequest.methods.get("/dms_business_metadata/join/" + state.current_dms_metadata.meta_id).then(res => { commit("setBusinessMetadata", { res }) })
    },
    async setCurrentMetadata({ commit }, payload) {
        commit("setCurrentMetadata", { payload })
    }
}

const mutations = {
    fetchDmsMetadata(state, { res }) {
        state.dms_metadata_list = res.data;
    },
    setBusinessMetadata(state, { res }) {
        state.dms_business_metadata = res.data;
    },
    setCurrentMetadata(state, { payload }) {
        state.current_dms_metadata = payload;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}