import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    search_filter: {
        bc_id: {
            code: 0
        },
        grp_id: {
            code: 0
        },
        ins_id: {
            code: 0
        },
        meta_active: {
            code: 1
        },
    },
    dms_metadata_list: [],
    dms_metadata_count: [],
}

const getters = {
    fetchDmsMetadata: (state) => {
        var objList = state.dms_metadata_list;

        if (state.search_filter.bc_id.code != 0) {
            objList = objList.filter((res) => res.meta_bc_id == state.search_filter.bc_id.code);
        }
        if (state.search_filter.grp_id.code != 0) {
            objList = objList.filter((res) => res.meta_grp_id == state.search_filter.grp_id.code);
        }
        if (state.search_filter.ins_id.code != 0) {
            objList = objList.filter((res) => res.meta_ins_id == state.search_filter.ins_id.code);
        }
        if (state.search_filter.meta_active.code != 0) {
            if (state.search_filter.meta_active.code == 1) {
                objList = objList.filter((res) => res.meta_active == "Y");
            } else {
                objList = objList.filter((res) => res.meta_active == "N");
            }
        }
        return objList
    },
    countDmsMetadataByBc: (state) => {
        return state.dms_metadata_count;
    },

}

const actions = {
    async fetchDmsMetadata({ commit }) {
        mixinHttpRequest.methods.get("/dms_metadata/").then(res => { commit("fetchDmsMetadata", { res }) })
    },
    async countDmsMetadataByBc({ commit }) {
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 1,
            meta_active: "Y",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 1,
            meta_active: "N",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 2,
            meta_active: "Y",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 2,
            meta_active: "N",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 3,
            meta_active: "Y",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 3,
            meta_active: "N",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 4,
            meta_active: "Y",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
        await mixinHttpRequest.methods.post("/dms_metadata/countbc", {
            meta_bc_id: 4,
            meta_active: "N",
        }).then(res => { commit("countDmsMetadataByBc", { res }) })
    },
    async setFilter({ state }, payload) {
        console.log(payload)
        state.search_filter = payload
    }
}

const mutations = {
    fetchDmsMetadata(state, { res }) {
        state.dms_metadata_list = res.data;
    },
    countDmsMetadataByBc(state, { res }) {
        if (state.dms_metadata_count.length == 8) {
            state.dms_metadata_count = [];
        }
        state.dms_metadata_count.push(res.data[0].count);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}