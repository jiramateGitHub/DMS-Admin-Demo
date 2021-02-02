<template>
  <div>
    <transition @before-enter="scrollTop" name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
