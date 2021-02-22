<template>
  <div class="wrapper">
    <div class="sidebar" data-color="rose" data-background-color="white">
      <div class="sidebar-wrapper">
        <div class="user">
          <div class="user-info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              style="padding:0px"
            >
              <span class="text-center">
                <h4 style="margin:0px">AllOSoft</h4>
              </span>
            </a>
          </div>
        </div>
        <ul class="nav">
          <router-link
            tag="li"
            active-class="active"
            to="/dashboard"
            @click="scrollToTop()"
          >
            <a class="nav-link" href="#">
              <i class="material-icons">dashboard</i>
              <p>รายงานแดชบอร์ด</p>
            </a>
          </router-link>
          <router-link
            tag="li"
            active-class="active"
            to="/metadata"
            @click="scrollToTop()"
          >
            <a class="nav-link" href="#">
              <i class="material-icons">toc</i>
              <p>จัดการเมทาดาตา</p>
            </a>
          </router-link>
          <router-link
            tag="li"
            active-class="active"
            to="/base_config"
            @click="scrollToTop()"
          >
            <a class="nav-link" href="#">
              <i class="material-icons">settings</i>
              <p>จัดการข้อมูลพื้นฐาน</p>
            </a>
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

<style>
.main-dashboard {
  position: relative;
  float: right;
  width: calc(100% - 260px);
  transition: 0.33s, cubic-bezier(0.685, 0.0473, 0.346, 1);
}

scrollbar-on .main-panel {
  height: 100%;
  max-height: 100%;
}

.wrapper {
  position: relative;
  top: 0;
  height: 100%;
}
</style>
