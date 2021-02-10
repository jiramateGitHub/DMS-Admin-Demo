<template>
  <div>
    <div class="modal-body">
        
    </div>
    <div class="modal-footer">
      <div class="row">
        <button
          class="btn btn-success"
          rel="tooltip"
          data-placement="top"
          title="คลิกเพื่อบันทึกข้อมูล"
        >
          <span class="btn-label"><i class="material-icons">check</i></span>
          บันทึก
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MetadataImport",
  props: {
    meta_id: Number,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapActions({}),
  },
  computed: {
    ...mapGetters({}),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
