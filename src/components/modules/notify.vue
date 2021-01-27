<template >
  <div class="Notify">
    <div
      v-show="elementVisible"
      data-notify="container"
      v-bind:class="states"
      class="notify-style col-11 col-md-4 alert alert-with-icon animated fadeInDown hideElement"
      role="alert"
      data-notify-position="top-right"
    >
      <button
        @click="close()"
        type="button"
        aria-hidden="true"
        class="close btn-close"
        data-notify="dismiss"
      >
        <i class="material-icons">close</i></button
      ><i data-notify="icon" class="material-icons">notifications</i
      ><span data-notify="title"></span>
      <span data-notify="message"> {{ detail }} </span
      ><a href="#" target="_blank" data-notify="url"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Notify",
  props: {
    states: String,
    detail: String,
  },
  data() {
    return {
      elementVisible: true,
    };
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 3000);
  },
  methods: {
    close() {
      this.elementVisible = false;
    },
  },
};
</script>

<style >
.notify-style {
  display: inline-block;
  margin: 15px auto;
  position: fixed;
  transition: all 0.5s ease-in-out 0s;
  z-index: 1031;
  top: 20px;
  right: 20px;
}

.btn-close {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -9px;
  z-index: 1033;
}
</style>