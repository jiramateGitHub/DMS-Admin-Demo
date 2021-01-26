import Vue from 'vue'
import Vuex from 'vuex'
import dms_base_categories from './modules/metadata_management'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        dms_base_categories
    },
    strict: debug
})