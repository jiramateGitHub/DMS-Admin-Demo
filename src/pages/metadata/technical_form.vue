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
                    @click="addItem()"
                  >
                    <span class="btn-label"
                      ><i class="material-icons">add</i></span
                    >
                    เพิ่มฟิลด์
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th style="width: 5%">#</th>
                          <th style="width: 20%">ฟิลด์ข้อมูลในตารางข้อมูล</th>
                          <th style="width: 15%">ประเภทข้อมูล</th>
                          <th style="width: 10%">ความกว้างของฟิลด์ข้อมูล</th>
                          <th style="width: 12%">คีย์ข้อมูล</th>
                          <th style="width: 12%">ตัวอย่างข้อมูล</th>
                          <th style="width: 10%">หมายเหตุ</th>
                          <th style="width: 8%">ข้อมูลนิรนาม</th>
                          <th style="width: 8%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in $v.items.$each.$iter"
                          :key="index"
                        >
                          <td class="text-center">{{ genIndex(index) }}</td>
                          <td>
                            <input
                              type="text"
                              placeholder="ระบุชื่อฟิลด์ เช่น รหัสพนักงาน"
                              :class="{
                                'input-required': $v.$error,
                              }"
                              v-model.trim="item.tcd_attribute.$model"
                            />
                          </td>
                          <td class="text-right">
                            <v-select
                              class="style-chooser"
                              placeholder="เลือกรายการ"
                              :options="optionType"
                              :class="{
                                'style-chooser-required': $v.$error,
                              }"
                              v-model="item.tcd_type.$model"
                            ></v-select>
                          </td>
                          <td class="text-right">
                            <input
                              type="number"
                              placeholder=""
                              :class="{
                                'input-required': $v.$error,
                              }"
                              v-model="item.tcd_length.$model"
                            />
                          </td>
                          <td class="text-right">
                            <v-select
                              class="style-chooser"
                              placeholder="เลือกรายการ"
                              :options="optionKey"
                              :class="{
                                'style-chooser-required': $v.$error,
                              }"
                              v-model="item.tcd_key.$model"
                            ></v-select>
                          </td>
                          <td class="text-right">
                            <input
                              type="text"
                              placeholder="ตัวอย่าง A001"
                              :class="{
                                'input-required': $v.$error,
                              }"
                              v-model="item.tcd_sample.$model"
                            />
                          </td>
                          <td class="text-right">
                            <input
                              type="text"
                              placeholder=""
                              v-model="item.tcd_comment.$model"
                            />
                          </td>
                          <td class="text-center">
                            <div class="togglebutton">
                              <label>
                                <input
                                  type="checkbox"
                                  checked=""
                                  v-model="item.tcd_anonymous.$model"
                                />
                                <span class="toggle"></span>
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
                              @click="deleteItem(index)"
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
                <div class="col-sm-12 text-right">
                  <button
                    class="btn btn-success"
                    rel="tooltip"
                    data-placement="top"
                    title="คลิกเพื่อบันทึกข้อมูล"
                    @click="formValidation()"
                  >
                    <span class="btn-label"
                      ><i class="material-icons">check</i></span
                    >
                    บันทึก
                  </button>
                </div>
              </div>
            </div>
            <div class="card-footer text-right"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if=" showNotify">
      <notify states="alert-danger" v-bind:detail="messageNotify" />
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import notify from "../../components/modules/notify.vue";

export default {
  name: "TechnicalForm",
  components: {
    notify,
  },
  data() {
    return {
      submitted: false,
      showNotify: false,
      messageNotify: "s",
      items: [
        {
          tcd_attribute: "",
          tcd_type: "",
          tcd_length: 0,
          tcd_key: "",
          tcd_sample: "",
          tcd_anonymous: false,
          tcd_comment: "",
        },
      ],
      optionType: [
        { label: "Spatial", code: "1" },
        { label: "JSON", code: "2" },
        { label: "TINYINT", code: "4" },
        { label: "SMALLINT", code: "5" },
        { label: "INT", code: "6" },
        { label: "BIGINT", code: "7" },
        { label: "DECIMAL", code: "8" },
        { label: "FLOAT", code: "9" },
        { label: "DOUBLE", code: "10" },
        { label: "REAL", code: "11" },
        { label: "BIT", code: "12" },
        { label: "BOOLEAN", code: "13" },
        { label: "SERIAL", code: "14" },
        { label: "DATE", code: "15" },
        { label: "DATETIME", code: "16" },
        { label: "TIMESTAMP", code: "17" },
        { label: "YEAR", code: "18" },
        { label: "CHAR", code: "19" },
        { label: "VARCHAR", code: "20" },
        { label: "TINYTEXT", code: "21" },
        { label: "TEXT", code: "22" },
        { label: "MEDIUMTEXT", code: "23" },
        { label: "BINARY", code: "24" },
        { label: "VARBINARY", code: "25" },
        { label: "TINYBLOB", code: "26" },
        { label: "BLOB", code: "27" },
        { label: "MEDIUMBLOB", code: "28" },
        { label: "LONGBLOB", code: "29" },
        { label: "ENUM", code: "30" },
      ],
      optionKey: [
        { label: "-", code: "0" },
        { label: "PK", code: "1" },
        { label: "FK", code: "2" },
      ],
    };
  },
  validations: {
    items: {
      required,
      minLength: minLength(1),
      $each: {
        tcd_attribute: {
          required,
        },
        tcd_type: {
          required,
        },
        tcd_length: {
          required,
        },
        tcd_key: {
          required,
        },
        tcd_sample: {
          required,
        },
        tcd_anonymous: {},
        tcd_comment: {},
      },
    },
  },
  methods: {
    genIndex: function (index) {
      return parseInt(index) + 1;
    },
    formValidation() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.items.$touch();
      if (this.$v.$invalid) {
        this.showNotify = true;
        this.messageNotify = "กรุณากรอกข้อมูลให้ครบถ้วน";
        setTimeout(() => (this.showNotify = false), 3000);
        return;
      }

      this.formSave();
    },
    formSave() {
      console.log(this.items);
      // this.$router.replace({ path: "/metadata" });
    },
    addItem: function () {
      this.items.push({
        tcd_attribute: "",
        tcd_type: "",
        tcd_length: 0,
        tcd_key: "",
        tcd_sample: "",
        tcd_anonymous: false,
        tcd_comment: "",
      });
    },
    deleteItem: function (index) {
      console.log(this.items.length);
      if (parseInt(this.items.length) <= 1) {
        this.showNotify = true;
        this.messageNotify = "ไม่สามารถลบแถวได้";
        setTimeout(() => (this.showNotify = false), 3000);
      } else {
        this.$swal
          .fire({
            title: "คุณต้องการลบใช้หรือไม่",
            text: "คุณจะไม่สามารถย้อนกลับการลบได้!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.items.splice(index, 1);

              this.$swal.fire("ลบสำเร็จ!", "", "success");
            }
          });
      }
    },
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

.input-required {
  border-style: 1px solid;
  border-color: red;
}

.row {
  padding-bottom: 1%;
}

.style-chooser-required .vs__dropdown-toggle,
.style-chooser-required .vs__dropdown-menu {
  border: 1px solid;
  border-color: red;
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #ffffff;
}

.form-check .form-check-sign:before {
  background-color: #3f51b5;
}

.form-check .form-check-sign:before {
  position: absolute;
}
</style>
