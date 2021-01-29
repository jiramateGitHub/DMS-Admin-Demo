import Axios from "axios";

let api = process.env.VUE_APP_API_ROOT;
let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
let headers = {
    Authorization: "Bearer " + JWTToken
};

const state = {
    state_error: false,
    tsm_meta_id: null,
    dms_technical_metadata: {},
    dms_technical_detail: [],
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
    getDmsTechnicalMetadata: (state) => {
        return state.dms_technical_metadata;
    },
    getDmsTechnicalDetail: (state) => {
        return state.dms_technical_detail;
    },

}

const actions = {
    async saveMetadata({ commit, state }, payload) {
        let setStateError = true
            // Step 1 : Insert payload_dms_technical_metadata into database.
        let payload_dms_technical_metadata = {
            tsm_meta_id: state.tsm_meta_id,
        };
        //**-- Insert level (1) -----------------------*/
        await Axios.post(api + "/dms_technical_metadata", payload_dms_technical_metadata, { headers: headers })
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
                        console.log(payload_dms_technical_detail)
                        await Axios.post(api + "/dms_technical_detail", payload_dms_technical_detail, { headers: headers })
                            .then(res => commit("setDmsTechnicalDetail", { res }))
                            .catch(err => alert(err));
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
    async setMetaId({ commit }, payload) {
        commit("setMetaId", payload)
    }

}

const mutations = {
    setStateError(state, res) {
        state.state_error = res
    },
    setMetaId(state, res) {
        state.tsm_meta_id = res
    },
    setDmsTechnicalMetadata(state, { res }) {
        state.dms_technical_metadata = res.data
        console.log("mutations dms_technical_metadata")
        console.log(state.dms_technical_metadata);
    },
    setDmsTechnicalDetail(state, { res }) {
        state.dms_technical_detail.push(res.data)
        console.log("mutations dms_technical_detail")
        console.log(state.dms_technical_detail);
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}