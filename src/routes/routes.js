import Sidebar from "@/components/layouts/Sidebar.vue";

import Dashboard from "@/pages/dashboard/dashboard.vue";
import Metadata from "@/pages/metadata/metadata.vue";
import BusineesForm from "@/pages/metadata/business_form.vue";
import TechnicalForm from "@/pages/metadata/technical_form.vue";
import AuthDev from "@/components/auth_dev.vue";

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
            path: "auth",
            name: "authDev",
            component: AuthDev
        }
    ]
}];

export default routes;