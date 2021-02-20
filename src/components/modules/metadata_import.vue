<template>
  <div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-12">
          <!--UPLOAD-->
          <form enctype="multipart/form-data" novalidate>
            <div class="dropbox">
              <input type="file" multiple accept="*" class="input-file" />
              <p>
                Drag your file(s) here to begin<br />
                or click to browse
              </p>
              <p>Uploading  files...</p>
            </div>
          </form>
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
<!-- SASS styling -->
<style>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
