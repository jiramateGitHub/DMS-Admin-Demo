// import DmsBaseCategories from '@/resources/dms_base_categories'
// const dmsService = new DmsBaseCategories()
import Axios from "axios";

let api = "http://localhost:3000/api/dms_base_categories/";
// let yourJWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE2MTE1NTg2ODMwNzksImV4cCI6MTYxMTU1ODY4MzEzOX0.c-_ROyG-LiLxdHhU2Dd2XQ54rOnRzE-E60PPS9DagoE"

const state = {
    user: []
}

const getters = {}

const actions = {
    // async getUser({ commit }) {
    //     console.log("getUser");
    //     let data = null;
    //     commit('SET_USER', data)
    // }
    async getUser({ commit }) {
        // let yourConfig = {
        //     headers: {
        //         Authorization: "Bearer " + yourJWTToken
        //     }
        // }
        await Axios.get(api)
            .then(res => commit("SET_USER", { res }))
            .catch(err => alert(err));
    },
}

const mutations = {
    SET_USER(state, { res }) {
        console.log(res.data);
        state.user = res.data;
    },
    // SET_USER(state, data) {
    //     console.log("getUser");
    //     console.log(data);
    //     state.user = data
    // }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}