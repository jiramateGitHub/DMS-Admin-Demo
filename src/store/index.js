import Vue from 'vue'
import Vuex from 'vuex'

import metadata_management from './modules/metadata_management'
import business_metadata from './modules/business_metadata'
import technical_metadata from './modules/technical_metadata'
import vselect_dms_base from './modules/vselect_dms_base'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        metadata_management,
        business_metadata,
        technical_metadata,
        vselect_dms_base
    },
    strict: debug
})