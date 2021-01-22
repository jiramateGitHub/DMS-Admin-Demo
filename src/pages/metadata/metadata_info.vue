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
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
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
