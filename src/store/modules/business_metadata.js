import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    state_error: false,
    state_save: {},
    type_form_edit: false,
    current_dms_metadata: {},
    current_dms_business_metadata: {},
}

const getters = {
    businessSaveStatus: (state) => {
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
    getCurrentDmsMetadata: (state) => {
        return state.current_dms_metadata;
    },
    getCurrentBusinessMetadata: (state) => {
        return state.current_dms_business_metadata;
    },
}

const actions = {
    async setTypeFormEdit({ commit }, type) {
        commit("setTypeFormEdit", { type })
    },
    async setCurrentDmsMetadata({ commit }, payload) {
        let res = payload;
        commit("setCurrentDmsMetadata", { res })
    },
    async saveMetadata({ commit }, payload) {
        console.log(payload)
        let setStateError = true
            // Step 1 : Insert payload_dms_metadata into database.
        let payload_dms_metadata = {
            meta_code: payload.meta_code,
            meta_name: payload.meta_name,
            meta_active: "Y",
            meta_create_user: 1,
            meta_update_user: 1,
            meta_bc_id: payload.meta_bc_object.code,
            meta_grp_id: payload.meta_grp_object.code,
            meta_ins_id: payload.meta_ins_object.code,
        };
        //**-- Insert level (1) -----------------------*/
        await mixinHttpRequest.methods.post("/dms_metadata/", payload_dms_metadata)
            .then(async(res) => {
                commit("setCurrentDmsMetadata", { res })
                if (res.status == 200) {
                    //**-- Insert level (2) -----------------------------------------------------------------------------------*/
                    // Step 2 : Insert payload_dms_business_metadata into database.
                    //          set payload value "bsm_meta_id" form res.data.meta_id
                    //          affer step 1 complate.
                    let payload_dms_business_metadata = {
                        bsm_comment: "",
                        bsm_active: "Y",
                        bsm_meta_id: res.data.meta_id
                    };
                    await mixinHttpRequest.methods.post("/dms_business_metadata/", payload_dms_business_metadata)
                        .then(async(res) => {
                            commit("setStateError", { res })
                            if (res.status == 200) {
                                //**-- Insert level (3) -----------------------------------------------------------------------------------*/
                                // Step 3 : Insert payload_dms_business_classified into database.
                                //          set payload value "bsm_meta_id" form res.data.meta_id
                                //          affer step 1 complate.
                                let payload_dms_business_classified = {
                                    bcf_cf_id: payload.meta_cf_object.code,
                                    bcf_bsm_id: res.data.bsm_id
                                };
                                await mixinHttpRequest.methods.post("/dms_business_classified/", payload_dms_business_classified)
                                    .then(res => commit("setStateSave", { res }))
                                    .catch((err) => {
                                        commit("setStateError", setStateError)
                                        console.log(err)
                                    });
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 4 : Insert payload_dms_business_description into database.
                                //          set payload value "bsm_meta_id" form res.data.meta_id
                                //          affer step 1 complate.
                                let payload_dms_business_description = {
                                    bsds_text: payload.bsds_text,
                                    bsds_owner: payload.bsds_owner,
                                    bsds_ref: payload.bsds_ref,
                                    bsds_url: payload.bsds_url,
                                    bsds_bsm_id: res.data.bsm_id,
                                };
                                await mixinHttpRequest.methods.post("/dms_business_description/", payload_dms_business_description)
                                    .then(res => commit("setStateSave", { res }))
                                    .catch((err) => {
                                        commit("setStateError", setStateError)
                                        console.log(err)
                                    });
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 5 : Insert payload_dms_business_duration into database.
                                //          set payload value "bsd_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                let payload_dms_business_duration = {
                                    bsd_dt_id: payload.meta_dt_object.code,
                                    bsd_bsm_id: res.data.bsm_id,
                                };
                                await mixinHttpRequest.methods.post("/dms_business_duration/", payload_dms_business_duration)
                                    .then(res => commit("setStateSave", { res }))
                                    .catch((err) => {
                                        commit("setStateError", setStateError)
                                        console.log(err)
                                    });
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 6 : Insert payload_dms_business_format into database.
                                //          set payload value "bsf_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                let payload_dms_business_format = {
                                    bsf_bsm_id: res.data.bsm_id,
                                    bsf_ft_id: payload.meta_ft_object.code,
                                };
                                await mixinHttpRequest.methods.post("/dms_business_format/", payload_dms_business_format)
                                    .then(res => commit("setStateSave", { res }))
                                    .catch((err) => {
                                        commit("setStateError", setStateError)
                                        console.log(err)
                                    });
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 7 : Insert payload_dms_business_permission into database.
                                //          set payload value "bsp_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                let payload_dms_business_permission = {
                                    bsp_pers_id: payload.meta_pers_object.code,
                                    bsp_bsm_id: res.data.bsm_id,
                                };
                                await mixinHttpRequest.methods.post("/dms_business_permission/", payload_dms_business_permission)
                                    .then(res => commit("setStateSave", { res }))
                                    .catch((err) => {
                                        commit("setStateError", setStateError)
                                        console.log(err)
                                    });
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 8 : Insert payload_dms_business_scope into database.
                                //          set payload value "bss_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                let payload_dms_business_scope = {
                                    bss_bsm_id: res.data.bsm_id,
                                    bss_sc_id: payload.meta_sc_object.code,
                                };
                                await mixinHttpRequest.methods.post("/dms_business_scope/", payload_dms_business_scope)
                                    .then(res => commit("setStateSave", { res }))
                                    .catch((err) => {
                                        commit("setStateError", setStateError)
                                        console.log(err)
                                    });
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 9 : Insert payload_dms_business_keyword into database.
                                //          set payload value "bsk_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                for (var i = 0; i < payload.meta_bsk_object.length; i++) {
                                    let payload_dms_business_keyword = {
                                        bsk_text: payload.meta_bsk_object[i],
                                        bsk_bsm_id: res.data.bsm_id,
                                    };
                                    await mixinHttpRequest.methods.post("/dms_business_keyword/", payload_dms_business_keyword)
                                        .then(res => commit("setStateSave", { res }))
                                        .catch((err) => {
                                            commit("setStateError", setStateError)
                                            console.log(err)
                                        });
                                }
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 10 : Insert payload_dms_business_language into database.
                                //          set payload value "bsk_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                for (var j = 0; j < payload.meta_lg_object.length; j++) {
                                    let payload_dms_business_language = {
                                        bsl_bsm_id: res.data.bsm_id,
                                        bsl_lg_id: payload.meta_lg_object[j].code,
                                    };
                                    await mixinHttpRequest.methods.post("/dms_business_language/", payload_dms_business_language)
                                        .then(res => commit("setStateSave", { res }))
                                        .catch((err) => {
                                            commit("setStateError", setStateError)
                                            console.log(err)
                                        });
                                }
                                //**-- End Step -------------------------------------------------------------------------------------------*/
                            } else {
                                commit("setStateError", setStateError)
                            }
                        })
                        .catch((err) => {
                            commit("setStateError", setStateError)
                            console.log(err)
                        });
                    // Step 2.1 : Insert payload_dms_metadata_contact into database.
                    //          set payload value "bsm_meta_id" form res.data.meta_id
                    //          affer step 1 complate.
                    let payload_dms_metadata_contact = {
                        metac_name: payload.metac_name,
                        metac_phone: payload.metac_phone,
                        metac_email: payload.metac_email,
                        metac_detail: "",
                        metac_meta_id: res.data.meta_id
                    };
                    await mixinHttpRequest.methods.post("/dms_metadata_contact/", payload_dms_metadata_contact)
                        .then(res => commit("setStateSave", { res }))
                        .catch(err => alert(err));

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
    async getCurrentBusinessMetadata({ commit, state }) {
        mixinHttpRequest.methods.get("/dms_business_metadata/join/" + state.current_dms_metadata.meta_id).then(res => { commit("setCurrentBusinessMetadata", { res }) })
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
    setCurrentDmsMetadata(state, { res }) {
        if (res.data != undefined) {
            state.current_dms_metadata = res.data;
        } else {
            state.current_dms_metadata = res;
        }
    },
    setCurrentBusinessMetadata(state, { res }) {
        state.current_dms_business_metadata = res.data;
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}