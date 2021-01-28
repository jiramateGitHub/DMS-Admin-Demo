<template>
  <div>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Modal title</h4>
          <button
            class="btn btn-fab btn-modal"
            rel="tooltip"
            data-dismiss="modal"
            aria-hidden="true"
            title="คลิกเพื่อปิด"
          >
            ปิด
          </button>
        </div>
        <div class="modal-body">
          <p>
           ...
          </p>
          <div class="form-group bmd-form-group is-filled">
            <label class="label-control">Datetime Picker</label>
            <input
              type="text"
              class="form-control datetimepicker"
              value="07/02/2018"
            />
            <span class="material-input"></span>
            <span class="material-input"></span>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetadataInfo",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input {
  width: 100%;
  padding: 5px;
  border: none; /* <-- This thing here */
  border: solid 1px #ccc;
  border-radius: 5px;
}
textarea {
  width: 100%;
  padding: 5px;
  border: none; /* <-- This thing here */
  border: solid 1px #ccc;
  border-radius: 5px;
}
.row {
  padding-bottom: 1%;
}
</style>
