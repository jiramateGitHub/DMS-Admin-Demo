import mixinHttpRequest from '../utils/http_request.js'

const state = {
    jwtToken: "",
    UsID: ""
}

const getters = {
    getToken: (state) => {
        if (state.jwtToken == "" || state.jwtToken == null) {
            return null
        } else {
            return state.jwtToken
        }
    },
}

const actions = {
    async auth({ commit }, payload) {
        let paylaod = {
            "username": payload.username,
            "password": payload.password
        };
        await mixinHttpRequest.methods.post("/ums_user/login", paylaod).then(async(res) => {
            if (res.data.success) {
                localStorage.jwtToken = res.data.token;
                await commit("setToken", { res })
                await mixinHttpRequest.methods.get("/ums_user/user").then(async(response) => {
                    localStorage.UsID = response.data.user.UsID;
                    commit("setUser", { response })
                });
            }
        });
    },
}

const mutations = {
    setToken(state, { res }) {
        console.log(res.data)
        state.jwtToken = res.data.token;
    },
    setUser(state, { response }) {
        console.log(response.data)
        state.UsID = response.data.user.UsID;
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}