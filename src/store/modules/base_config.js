import mixinHttpRequest from '../../utils/http_request.js'

const state = {
    state_error: false,
    base: {
        dms_base_categories: {},
        dms_base_classified: {},
        dms_base_datagroups: {},
        dms_base_durations: {},
        dms_base_formats: {},
        dms_base_languages: {},
        dms_base_permissions: {},
        dms_base_scopes: {},
        dms_institution: {},
    }
}

const getters = {
    baseSaveStatus: (state) => {
        if (!state.state_error) {
            return {
                code: "0",
                message: "สำเร็จ"
            }
        } else {
            return {
                code: "1",
                message: "ไม่สำเร็จ"
            }
        }
    },
    fetchBaseConfig: (state) => {
        return state.base;
    },
}

const actions = {
    async fetchBaseConfig({ commit }) {
        commit("setStateError", true)
        await mixinHttpRequest.methods.get("/dms_base_categories/").then(res => { commit("setBaseCategories", res) })
        await mixinHttpRequest.methods.get("/dms_base_datagroups/").then(res => { commit("setBaseDatagroups", res) })
        await mixinHttpRequest.methods.get("/dms_base_durations/").then(res => { commit("setBaseDurations", res) })
        await mixinHttpRequest.methods.get("/dms_base_formats/").then(res => { commit("setBaseFormats", res) })
        await mixinHttpRequest.methods.get("/dms_base_languages/").then(res => { commit("setBaseLanguages", res) })
        await mixinHttpRequest.methods.get("/dms_base_permissions/").then(res => { commit("setBasePermissions", res) })
        await mixinHttpRequest.methods.get("/dms_base_scopes/").then(res => { commit("setBaseScopes", res) })
        await mixinHttpRequest.methods.get("/dms_base_classified/").then(res => { commit("setBaseClassified", res) })
        await mixinHttpRequest.methods.get("/dms_institution/").then(res => { commit("setInstitution", res) })
        commit("setStateError", false)
    },

    async saveBase({ commit }, payload) {
        commit("setStateError", true)
        if (payload.base_type == 1) {
            let temp_payload = {
                "bc_name": payload.form.inputValue,
                "bc_create_user": 1,
                "bc_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_categories/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 2) {
            let temp_payload = {
                "grp_name": payload.form.inputValue,
                "grp_create_user": 1,
                "grp_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_datagroups/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 3) {
            let temp_payload = {
                "ins_name": payload.form.inputValue,
                "ins_create_user": 1,
                "ins_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_institution/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 4) {
            let temp_payload = {
                "lg_text": payload.form.inputValue,
                "lg_create_user": 1,
                "lg_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_languages/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 5) {
            let temp_payload = {
                "ft_text": payload.form.inputValue,
                "ft_create_user": 1,
                "ft_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_formats/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 6) {
            let temp_payload = {
                "dt_text": payload.form.inputValue,
                "dt_create_user": 1,
                "dt_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_durations/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 7) {
            let temp_payload = {
                "sc_text": payload.form.inputValue,
                "sc_create_user": 1,
                "sc_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_scopes/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 8) {
            let temp_payload = {
                "pers_text": payload.form.inputValue,
                "pers_create_user": 1,
                "pers_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_permissions/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 9) {
            let temp_payload = {
                "cf_text": payload.form.inputValue,
                "cf_create_user": 1,
                "cf_update_user": 1
            }
            await mixinHttpRequest.methods.post("/dms_base_classified/", temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        }
    },

    async deleteBase({ commit }, payload) {
        commit("setStateError", true)
        if (payload.base_type == 1) {
            let temp_payload = {
                "bc_active": "N",
                "bc_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_categories/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 2) {
            let temp_payload = {
                "grp_active": "N",
                "grp_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_datagroups/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 3) {
            let temp_payload = {
                "ins_active": "N",
                "ins_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_institution/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 4) {
            let temp_payload = {
                "lg_active": "N",
                "lg_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_languages/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 5) {
            let temp_payload = {
                "ft_active": "N",
                "ft_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_formats/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 6) {
            let temp_payload = {
                "dt_active": "N",
                "dt_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_durations/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 7) {
            let temp_payload = {
                "sc_active": "N",
                "sc_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_scopes/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 8) {
            let temp_payload = {
                "pers_active": "N",
                "pers_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_permissions/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        } else if (payload.base_type == 9) {
            let temp_payload = {
                "cf_active": "N",
                "cf_update_user": 1
            }
            await mixinHttpRequest.methods.put("/dms_base_classified/" + payload.base_id, temp_payload).then(res => {
                if (res.status == 200) {
                    commit("setStateError", false)
                }
            })
        }
    }
}

const mutations = {
    setStateError(state, res) {
        state.state_error = res
    },
    setBaseCategories(state, res) {
        state.base.dms_base_categories = res.data
    },
    setBaseDatagroups(state, res) {
        state.base.dms_base_datagroups = res.data
    },
    setBaseDurations(state, res) {
        state.base.dms_base_durations = res.data
    },
    setBaseFormats(state, res) {
        state.base.dms_base_formats = res.data
    },
    setBaseLanguages(state, res) {
        state.base.dms_base_languages = res.data
    },
    setBasePermissions(state, res) {
        state.base.dms_base_permissions = res.data
    },
    setBaseScopes(state, res) {
        state.base.dms_base_scopes = res.data
    },
    setBaseClassified(state, res) {
        state.base.dms_base_classified = res.data
    },
    setInstitution(state, res) {
        state.base.dms_institution = res.data
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}