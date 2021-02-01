<template>
  <div class="wrapper">
    <div class="sidebar" data-color="rose" data-background-color="white">
      <div class="sidebar-wrapper">
        <div class="user">
          <div class="user-info">
            <a data-toggle="collapse" href="#collapseExample">
              <span>
                <h5>AllOSoft Co.,Ltd.</h5>
              </span>
            </a>
          </div>
        </div>
        <ul class="nav">
          <router-link to="/dashboard" @click="scrollToTop()">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="material-icons">dashboard</i>
                <p>Dashboard</p>
              </a>
            </li>
          </router-link>
          <router-link to="/metadata" @click="scrollToTop()">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="material-icons">settings</i>
                <p>Metadata</p>
              </a>
            </li>
          </router-link>
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
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style >
.main-dashboard {
  position: relative;
  float: right;
  width: calc(100% - 260px);
  transition: 0.33s, cubic-bezier(0.685, 0.0473, 0.346, 1);
}
</style>
