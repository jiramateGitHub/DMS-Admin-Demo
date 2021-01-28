import Axios from "axios";

let api = process.env.VUE_APP_API_ROOT;
let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
let headers = {
    Authorization: "Bearer " + JWTToken
};

const state = {
    state_error: false,
    dms_metadata: {},
    dms_business_metadata: {},
    dms_metadata_contact: {},
    dms_business_description: {},
    dms_business_classified: {},
    dms_business_duration: {},
    dms_business_format: {},
    dms_business_permission: {},
    dms_business_scope: {},
    dms_business_keyword: [],
    dms_business_language: [],
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
    getDmsMetadata: (state) => {
        return state.dms_metadata;
    },

}

const actions = {
    async saveMetadata({ commit }, payload) {
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
        await Axios.post(api + "/dms_metadata", payload_dms_metadata, { headers: headers })
            .then(async(res) => {
                commit("setDmsMetadata", { res })
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
                    await Axios.post(api + "/dms_business_metadata", payload_dms_business_metadata, { headers: headers })
                        .then(async(res) => {
                            commit("setDmsBusinessMetadata", { res })
                            if (res.status == 200) {
                                //**-- Insert level (3) -----------------------------------------------------------------------------------*/
                                // Step 3 : Insert payload_dms_business_classified into database.
                                //          set payload value "bsm_meta_id" form res.data.meta_id
                                //          affer step 1 complate.
                                let payload_dms_business_classified = {
                                    bcf_cf_id: payload.meta_cf_object.code,
                                    bcf_bsm_id: res.data.bsm_id
                                };
                                await Axios.post(api + "/dms_business_classified", payload_dms_business_classified, { headers: headers })
                                    .then(res => commit("setDmsBusinessClassified", { res }))
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
                                await Axios.post(api + "/dms_business_description", payload_dms_business_description, { headers: headers })
                                    .then(res => commit("setDmsBusinessDescription", { res }))
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
                                await Axios.post(api + "/dms_business_duration", payload_dms_business_duration, { headers: headers })
                                    .then(res => commit("setDmsBusinessDuration", { res }))
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
                                await Axios.post(api + "/dms_business_format", payload_dms_business_format, { headers: headers })
                                    .then(res => commit("setDmsBusinessFormat", { res }))
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
                                await Axios.post(api + "/dms_business_permission", payload_dms_business_permission, { headers: headers })
                                    .then(res => commit("setDmsBusinessPermission", { res }))
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
                                await Axios.post(api + "/dms_business_scope", payload_dms_business_scope, { headers: headers })
                                    .then(res => commit("setDmsBusinessScope", { res }))
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
                                    await Axios.post(api + "/dms_business_keyword", payload_dms_business_keyword, { headers: headers })
                                        .then(res => commit("setDmsBusinessKeyword", { res }))
                                        .catch((err) => {
                                            commit("setStateError", setStateError)
                                            console.log(err)
                                        });
                                }
                                //**-- End Step -------------------------------------------------------------------------------------------*/

                                // Step 10 : Insert payload_dms_business_language into database.
                                //          set payload value "bsk_bsm_id" form res.data.bsm_id
                                //          affer step 1 complate.
                                console.log(payload.meta_lg_object)
                                for (var j = 0; j < payload.meta_lg_object.length; j++) {
                                    let payload_dms_business_language = {
                                        bsl_bsm_id: res.data.bsm_id,
                                        bsl_lg_id: payload.meta_lg_object[j].code,
                                    };
                                    await Axios.post(api + "/dms_business_language", payload_dms_business_language, { headers: headers })
                                        .then(res => commit("setDmsBusinessLanguage", { res }))
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
                    await Axios.post(api + "/dms_metadata_contact", payload_dms_metadata_contact, { headers: headers })
                        .then(res => commit("setMetadataContact", { res }))
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

    // async edit({ commit }, payload) {
    //     await Axios.put(api + "/dms_base_categories", { headers: headers })
    //         .then(res => commit("fetchBaseCategories", { res }))
    //         .catch(err => alert(err));
    // },

}

const mutations = {
    setStateError(state, res) {
        state.state_error = res
    },
    setDmsMetadata(state, { res }) {
        state.dms_metadata = res.data
        console.log("mutations setDmsMetadata")
        console.log(state.dms_metadata);
    },
    setMetadataContact(state, { res }) {
        state.dms_metadata_contact = res.data
        console.log("mutations setMetadataContact")
        console.log(state.dms_metadata_contact);
    },
    setDmsBusinessMetadata(state, { res }) {
        state.dms_business_metadata = res.data
        console.log("mutations setDmsBusinessMetadata")
        console.log(state.dms_business_metadata);
    },
    setDmsBusinessClassified(state, { res }) {
        state.dms_business_classified = res.data
        console.log("mutations setDmsBusinessClassified")
        console.log(state.dms_business_classified);
    },
    setDmsBusinessDescription(state, { res }) {
        state.dms_business_description = res.data
        console.log("mutations setDmsBusinessDescription")
        console.log(state.dms_business_description);
    },
    setDmsBusinessDuration(state, { res }) {
        state.dms_business_duration = res.data
        console.log("mutations setDmsBusinessDuration")
        console.log(state.dms_business_duration);
    },
    setDmsBusinessFormat(state, { res }) {
        state.dms_business_format = res.data
        console.log("mutations setDmsBusinessFormat")
        console.log(state.dms_business_format);
    },
    setDmsBusinessPermission(state, { res }) {
        state.dms_business_permission = res.data
        console.log("mutations setDmsBusinessPermission")
        console.log(state.dms_business_permission);
    },
    setDmsBusinessScope(state, { res }) {
        state.dms_business_scope = res.data
        console.log("mutations setDmsBusinessScope")
        console.log(state.dms_business_scope);
    },
    setDmsBusinessKeyword(state, { res }) {
        state.dms_business_keyword.push(res.data)
        console.log("mutations setDmsBusinessKeyword")
        console.log(state.dms_business_keyword);
    },
    setDmsBusinessLanguage(state, { res }) {
        state.dms_business_language.push(res.data)
        console.log("mutations setDmsBusinessLanguage")
        console.log(state.dms_business_language);
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}