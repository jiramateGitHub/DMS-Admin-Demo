import Sidebar from "@/components/layouts/Sidebar.vue";

import Dashboard from "@/pages/dashboard/dashboard.vue";
import Metadata from "@/pages/metadata/metadata.vue";
import BusineesForm from "@/pages/metadata/business_form.vue";
import TechnicalForm from "@/pages/metadata/technical_form.vue";
import BaseConfig from "@/pages/config/base_config.vue";
import AuthDev from "@/components/auth_dev.vue";
import Index from "@/pages/index.vue";

const routes = [{
    path: "/",
    component: Sidebar,
    redirect: "/auth",
    children: [{
            path: "dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "metadata",
            name: "Metadata",
            component: Metadata
        },
        {
            path: "metadata/business_form",
            name: "BusineesForm",
            component: BusineesForm
        },
        {
            path: "metadata/technical_form",
            name: "TechnicalForm",
            component: TechnicalForm
        },
        {
            path: "base_config",
            name: "BaseConfigs",
            component: BaseConfig
        },
        {
            path: "auth",
            name: "authDev",
            component: AuthDev
        },
        {
            path: "index",
            name: "Home",
            component: Index
        }
    ]
}];

export default routes;