import Axios from "axios";

let api = process.env.VUE_APP_API_ROOT;
let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
let headers = {
    Authorization: "Bearer " + JWTToken
};

const state = {
    state_error: false,
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
    async saveMetadata({ commit }, payload) {
        let setStateError = true
            // Step 1 : Insert payload_dms_technical_metadata into database.
        let payload_dms_technical_metadata = {
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
        await Axios.post(api + "/dms_technical_metadata", payload_dms_technical_metadata, { headers: headers })
            .then(async(res) => {
                commit("setDmsTechnicalMetadata", { res })
                if (res.status == 200) {
                    //**-- Insert level (2) -----------------------------------------------------------------------------------*/
                    // Step 2 : Insert payload_dms_technical_detail into database.
                    //          affer step 1 complate, set payload value "tcd_tsm_id" form res.data.tsm_id
                    let payload_dms_technical_detail = {
                        metac_name: payload.metac_name,
                        metac_phone: payload.metac_phone,
                        metac_email: payload.metac_email,
                        metac_detail: "",
                        metac_meta_id: res.data.meta_id
                    };
                    await Axios.post(api + "/dms_technical_detail", payload_dms_technical_detail, { headers: headers })
                        .then(res => commit("setDmsTechnicalDetail", { res }))
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

}

const mutations = {
    setStateError(state, res) {
        state.state_error = res
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