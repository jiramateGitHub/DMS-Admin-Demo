<template>
  <div class="wrapper">
    <div class="sidebar" data-color="rose" data-background-color="white">
      <div class="sidebar-wrapper">
        <div class="user">
          <div class="user-info">
            <a data-toggle="collapse" href="#collapseExample" class="username">
                <h5>Data Management System</h5>
            </a>
          </div>
        </div>
        <ul class="nav">
          <li class="nav-item " @click="dashboard()">
            <a class="nav-link">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item" @click="metadata()">
            <a class="nav-link">
              <i class="material-icons">settings</i>
              <p>Meatadata</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
  },
  data() {
    return {};
  },
  methods: {
    dashboard () {
      this.$router.push({ path: '/dashboard' })
    },
    metadata () {
      this.$router.push({ path: '/metadata' })
    }
  }
};
</script>
