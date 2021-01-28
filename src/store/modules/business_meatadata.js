import Axios from "axios";

let api = process.env.VUE_APP_API_ROOT;
let JWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"
let headers = {
    Authorization: "Bearer " + JWTToken
};

const state = {
    base_categories: [],
    dms_metadata: {},
    dms_business_metadata: {},
    dms_metadata_contact: {},
    dms_business_description: {},
    dms_business_classified: {},
    dms_business_duration: {},
    dms_business_format: {},
    dms_business_keyword: {},
    dms_business_language: {},
    dms_business_permission: {},
    dms_business_scope: {},
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
}

const actions = {
    async fetch({ commit }) {
        await Axios.get(api + "/dms_base_categories", { headers: headers })
            .then(res => commit("fetchFood", { res }))
            .catch(err => alert(err));
    },
    async saveMetadata({ commit }, payload) {

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
        }
        await Axios.post(api + "/dms_metadata", payload_dms_metadata, { headers: headers })
            .then(async(res) => {
                commit("setDmsMetadata", { res })

                // Step 2 : Insert payload_dms_business_metadata into database.
                //          set payload value "bsm_meta_id" form state.dms_business_metadata.meta_id
                //          affer step 1 complate.
                if (res.status == 200) {
                    let payload_dms_business_metadata = {
                        bsm_comment: "",
                        bsm_active: "Y",
                        bsm_meta_id: res.data.meta_id
                    }
                    await Axios.post(api + "/dms_business_metadata", payload_dms_business_metadata, { headers: headers })
                        .then(res => commit("setDmsBusinessMetadata", { res }))
                        .catch(err => alert(err));
                } else {
                    console.log("flase state.dms_business_metadata.meta_id")
                }
            })
            .catch((err) => {
                alert(err)
            })


        //     // bsds_text: payload.bsds_text,
        //     // bsds_owner: payload.bsds_owner,
        //     // bsds_ref: payload.bsds_ref,
        //     // bsds_url: payload.bsds_url,
        //     // metac_name: payload.metac_name,
        //     // metac_email: payload.metac_email,
        //     // metac_phone: payload.metac_phone,
        //     // bc_id: payload.meta_bc_object.code,
        //     // ins_id: payload.meta_ins_object.code,
        //     // bsk_id: payload.meta_bsk_object,
        //     // lg_id: payload.meta_lg_object,
        //     // dt_id: payload.meta_dt_object.code,
        //     // ft_id: payload.meta_ft_object.code,
        //     // sc_id: payload.meta_sc_object.code,
        //     // pers_id: payload.meta_pers_object.code,
        //     // cf_id: payload.meta_cf_object.code,
    },

    // async edit({ commit }, payload) {
    //     await Axios.put(api + "/dms_base_categories", { headers: headers })
    //         .then(res => commit("fetchBaseCategories", { res }))
    //         .catch(err => alert(err));
    // },


}

const mutations = {
    setDmsMetadata(state, { res }) {
        state.dms_metadata = res.data
        console.log("mutations setDmsMetadata")
        console.log(state.dms_metadata);
    },
    setDmsBusinessMetadata(state, { res }) {
        state.dms_business_metadata = res.data
        console.log("mutations setDmsBusinessMetadata")
        console.log(state.dms_business_metadata);
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}