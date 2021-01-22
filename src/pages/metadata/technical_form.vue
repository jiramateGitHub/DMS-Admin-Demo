<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-6">
          <div class="card">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">เพิ่มชุดข้อมูล</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <button
                    class="btn btn-primary"
                    rel="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                    @click="Save()"
                  >
                    <span class="btn-label"
                      ><i class="material-icons">add</i></span
                    >
                    เพิ่มฟิลด์
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>ฟิลด์ข้อมูลในตารางข้อมูล</th>
                          <th>ประเภทข้อมูล</th>
                          <th>ความกว้างของฟิลด์ข้อมูล</th>
                          <th>คีย์ข้อมูล</th>
                          <th>ตัวอย่างข้อมูล</th>
                          <th>หมายเหตุ</th>
                          <th>ข้อมูลนิรนาม</th>
                          <th>ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">1</td>
                          <td>Andrew Mike</td>
                          <td>Develop</td>
                          <td class="text-center">2013</td>
                          <td class="text-right">€ 99,225</td>
                          <td class="text-right">€ 99,225</td>
                          <td class="text-right">€ 99,225</td>
                          <td class="text-center">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  checked
                                />
                                <span class="form-check-sign">
                                  <span class="check"></span>
                                </span>
                              </label>
                            </div>
                          </td>
                          <td class="td-actions text-center">
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-6 text-left">
                  <button
                    class="btn btn-danger"
                    rel="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                    @click="Back()"
                  >
                    <span class="btn-label"
                      ><i class="material-icons">navigate_before</i></span
                    >
                    ย้อนกลับ
                  </button>
                </div>
                <div class="col-sm-6 text-right">
                  <button
                    class="btn btn-primary"
                    rel="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                    @click="Save()"
                  >
                    <span class="btn-label"
                      ><i class="material-icons">navigate_next</i></span
                    >
                    ถัดไป
                  </button>
                </div>
              </div>
            </div>
            <div class="card-footer text-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnicalForm",
  props: {},
  methods: {
    Back() {
      this.$router.replace({ path: "/metadata/business_form" });
    },
    Save() {
      this.$router.replace({ path: "/metadata" });
    },
  },
  data() {
    return {
      options: ["foo", "bar", "baz"],
      render: (createElement) => createElement("span", "❌"),
    };
  },
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
