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
                  <label>ชุดข้อข้อมูล <code>*</code></label>
                </div>
                <div class="col-sm-12">
                  <input type="text" name="required" required="true" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>ชุดข้อข้อมูล <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>

                <div class="col-sm-6">
                  <label>ชุดข้อข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>เจ้าของข้อมูล <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
                <div class="col-sm-6">
                  <label>หน่วยงานภายใน <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12">
                  <label>คำอธิบาย <code>*</code></label
                  ><br />
                  <textarea
                    name="required"
                    required="true"
                    rows="4"
                    cols="50"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>แหล่งที่มาของคำอธิบาย <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
                <div class="col-sm-6">
                  <label>คําสําคัญ (Keywords) <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    value="Amsterdam,Washington,Sydney,Beijing"
                    class="form-control tagsinput"
                    data-role="tagsinput"
                    data-color="info"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-6">
                  <label>ภาษาที่ใช้ <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
                <div class="col-sm-6">
                  <label>รูปแบบข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <label>URL เพิ่มเติม <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>ความถี่ในการเผยแพร่ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label>ขอบเขตที่เผยแพร่ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>สิทธิ์ในการใช้ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label>ระดับชั้นความลับ <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="options"
                  ></v-select>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-6">
                  <label>ชื่อ-นามสกุล ผู้ติดต่อ <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
                <div class="col-sm-6">
                  <label>อีเมล์ผู้ติดต่อ <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>เบอร์โทรผู้ติดต่อ <code>*</code></label
                  ><br />
                  <input type="text" name="required" required="true" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-right">
                  <button
                    class="btn btn-primary"
                    rel="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                    @click="Next()"
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
  name: "BusinessForm",
  props: {},
  methods: {
    Next() {
      this.$router.replace({ path: "/metadata/technical_form" });
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
