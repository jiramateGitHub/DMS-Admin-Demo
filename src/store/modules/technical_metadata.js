import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    state_error: false,
    state_save: {},
    type_form_edit: false,
    tsm_meta_id: null,
    dms_technical_metadata: {},
    current_dms_technical_detail: [],
}

const getters = {
    technicalSaveStatus: (state) => {
        if (!state.state_error) {
            return {
                code: "0",
                message: "บันทึกข้อมูลสำเร็จ"
            }
        } else {
            return {
                code: "1",
                message: "บันทึกไม่ข้อมูลสำเร็จ"
            }
        }
    },
    typeFormEdit: (state) => {
        return state.type_form_edit;
    },
    getDmsTechnicalMetadata: (state) => {
        return state.dms_technical_metadata;
    },
    getCurrentDmsTechnicalDetail: (state) => {
        return state.current_dms_technical_detail;
    },
}

const actions = {
    async setTypeFormEdit({ commit }, type) {
        commit("setTypeFormEdit", type)
    },

    async setMetaId({ commit }, payload) {
        commit("setMetaId", payload)
    },
    async saveMetadata({ commit, state }, payload) {
        let setStateError = true
            // Step 1 : Insert payload_dms_technical_metadata into database.
        let payload_dms_technical_metadata = {
            tsm_meta_id: state.tsm_meta_id,
        };
        //**-- Insert level (1) -----------------------*/
        await mixinHttpRequest.methods.post("/dms_technical_metadata", payload_dms_technical_metadata)
            .then(async(res) => {
                commit("setDmsTechnicalMetadata", { res })
                if (res.status == 200) {
                    //**-- Insert level (2) -----------------------------------------------------------------------------------*/
                    // Step 2 : Insert payload_dms_technical_detail into database.
                    //          affer step 1 complate, set payload value "tcd_tsm_id" form res.data.tsm_id
                    for (var i = 0; i < payload.length; i++) {
                        let payload_dms_technical_detail = {
                            tcd_tsm_id: res.data.tsm_id,
                            tcd_seq: i,
                            tcd_attribute: payload[i].tcd_attribute,
                            tcd_type: payload[i].tcd_type.label,
                            tcd_length: payload[i].tcd_length,
                            tcd_key: payload[i].tcd_key.label,
                            tcd_sample: payload[i].tcd_sample,
                            tcd_comment: payload[i].tcd_comment,
                            tcd_anonymous: payload[i].tcd_anonymous,
                            tcd_active: "Y",
                            tcd_create_user: 1,
                            tcd_update_user: 1,
                        };
                        await mixinHttpRequest.methods.post("/dms_technical_detail", payload_dms_technical_detail)
                            .then(res => commit("setStateSave", { res }))
                            .catch(err => console.log(err));
                    }

                    setStateError = false
                    commit("setStateError", setStateError)
                } else {
                    commit("setStateError", setStateError)
                }
            })
            .catch((err) => {
                console.log(err)
                commit("setStateError", setStateError)
            })
    },
    async updateMetadata({ commit }, payload) {
        let tsm_id = payload[0].dms_technical_metadatum.tsm_id
        let payload_dms_technical_detail = {
            tcd_active: "N"
        };
        await mixinHttpRequest.methods.put("/dms_technical_detail/active_all/" + tsm_id, payload_dms_technical_detail)
            .then(async res => {
                if (res.status == 200) {
                    for (var i = 0; i < payload.length; i++) {
                        let payload_dms_technical_detail = {
                            tcd_tsm_id: tsm_id,
                            tcd_seq: i,
                            tcd_attribute: payload[i].tcd_attribute,
                            tcd_type: payload[i].tcd_type.label == undefined ? payload[i].tcd_type : payload[i].tcd_type.label,
                            tcd_length: payload[i].tcd_length,
                            tcd_key: payload[i].tcd_key.label == undefined ? payload[i].tcd_key : payload[i].tcd_key.label,
                            tcd_sample: payload[i].tcd_sample,
                            tcd_comment: payload[i].tcd_comment,
                            tcd_anonymous: payload[i].tcd_anonymous,
                            tcd_active: "Y",
                            tcd_create_user: 1,
                            tcd_update_user: 1,
                        };
                        await mixinHttpRequest.methods.post("/dms_technical_detail", payload_dms_technical_detail)
                            .then(res => commit("setStateSave", { res }))
                            .catch(err => console.log(err));
                    }
                    commit("setStateError", false)
                } else {
                    commit("setStateError", true)
                }
            })
    },
    async getCurrentTechnicalMetadata({ commit }, payload) {
        // payload is dms_technical_metadatum.tsm_id
        if (payload != null) {
            mixinHttpRequest.methods.get("/dms_technical_detail/join/" + payload).then(res => { commit("setCurrentDmsTechnicalDetail", { res }) })
        } else {
            let res = {};
            commit("setCurrentDmsTechnicalDetail", { res })
        }
    },


}

const mutations = {
    setStateError(state, res) {
        state.state_error = res
    },
    setStateSave(state, { res }) {
        state.state_save = res.data
    },
    setTypeFormEdit(state, type) {
        state.type_form_edit = type
    },
    setMetaId(state, res) {
        state.tsm_meta_id = res
    },
    setDmsTechnicalMetadata(state, { res }) {
        state.dms_technical_metadata = res.data
    },
    setCurrentDmsTechnicalDetail(state, { res }) {
        state.current_dms_technical_detail = res.data
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}