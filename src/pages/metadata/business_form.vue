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
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุชื่อชุดข้อข้อมูล เช่น ผู้บริหารและพนักงาน"
                    v-model="meta_name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>เลขที่เมทาดาตา <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุเลขที่เมทาดาตา เช่น 01-01-01"
                    v-model="meta_code"
                  />
                </div>

                <div class="col-sm-6">
                  <label>หมวดหมู่ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseCategories"
                    v-model="meta_bc_object"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>เจ้าของข้อมูล <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุเจ้าของข้อมูล เช่น ฝ่ายบริหารงานบุคคล"
                  />
                </div>
                <div class="col-sm-6">
                  <label>หน่วยงานภายใน <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectInstitution"
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
                    placeholder="ระบบุคำอธิบายของชื่อชุดข้อมูล"
                    v-model="bsds_text"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>แหล่งที่มาของคำอธิบาย <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุแหล่งที่มาของคำอธิบาย เช่น ข้อบังคับบุคคล พ.ศ. 2559"
                  />
                </div>
                <div class="col-sm-6">
                  <label>คําสําคัญ (Keywords) <code>*</code></label
                  ><br />
                  <v-select taggable multiple />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-6">
                  <label>ภาษาที่ใช้ <code>*</code></label
                  ><br />
                  <v-select
                    multiple
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseLanguages"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label>รูปแบบข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseFormats"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <label>URL เพิ่มเติม <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุ URL เพิ่มเติม เช่น www.google.com"
                    v-model="bsds_url"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>ความถี่ในการเผยแพร่ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseDurations"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label>ขอบเขตที่เผยแพร่ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseScopes"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>สิทธิ์ในการใช้ข้อมูล <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBasePermissions"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label>ระดับชั้นความลับ <code>*</code></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseClassified"
                  ></v-select>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-6">
                  <label>ชื่อ-นามสกุล ผู้ติดต่อ <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุชื่อและนามสกุล"
                    v-model="metac_name"
                  />
                </div>
                <div class="col-sm-6">
                  <label>อีเมล์ผู้ติดต่อ <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุอีเมล์ เช่น abc@abc.com"
                    v-model="metac_email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label>เบอร์โทรผู้ติดต่อ <code>*</code></label
                  ><br />
                  <input
                    type="text"
                    name="required"
                    required="true"
                    placeholder="ระบุเบอร์โทร"
                    v-model="metac_phone"
                  />
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BusinessForm",
  props: {},
  data() {
    return {
      meta_name: "",
      meta_code: "",
      bsds_text: "",
      bsds_url: "",
      metac_name: "",
      metac_email: "",
      metac_phone: "",
      meta_bc_object:null,
      meta_grp_object:null,
      meta_ins_object:null,
      meta_bsk_object:null,
      meta_lg_object:null,
      meta_dt_object:null,
      meta_ft_object:null,
      meta_sc_object:null,
      meta_pers_object:null,
      meta_cf_object:null,
      options: ["foo", "bar", "baz"],
      render: (createElement) => createElement("span", "❌"),
    };
  },
  created() {
    this.fetchvSelectBase();
  },
  methods: {
    ...mapActions({
      fetchBaseCategoriesAction: "vselect_dms_base/fetchBaseCategories",
      fetchBaseClassifiedAction: "vselect_dms_base/fetchBaseClassified",
      fetchBaseDatagroupsAction: "vselect_dms_base/fetchBaseDatagroups",
      fetchBaseDurationsAction: "vselect_dms_base/fetchBaseDurations",
      fetchBaseFormatsAction: "vselect_dms_base/fetchBaseFormats",
      fetchBaseLanguagesAction: "vselect_dms_base/fetchBaseLanguages",
      fetchBasePermissionsAction: "vselect_dms_base/fetchBasePermissions",
      fetchBaseScopesAction: "vselect_dms_base/fetchBaseScopes",
      fetchInstitutionAction: "vselect_dms_base/fetchInstitution",
    }),
    fetchvSelectBase() {
      this.fetchBaseCategoriesAction();
      this.fetchBaseClassifiedAction();
      this.fetchBaseDatagroupsAction();
      this.fetchBaseDurationsAction();
      this.fetchBaseFormatsAction();
      this.fetchBaseLanguagesAction();
      this.fetchBasePermissionsAction();
      this.fetchBaseScopesAction();
      this.fetchInstitutionAction();
    },
    Next() {
      console.log(this.selected)
      this.$router.replace({ path: "/metadata/technical_form" });
    },
  },
  computed: {
    ...mapGetters({
      vSelectBaseCategories: "vselect_dms_base/vSelectBaseCategories",
      vSelectBaseClassified: "vselect_dms_base/vSelectBaseClassified",
      vSelectBaseDatagroups: "vselect_dms_base/vSelectBaseDatagroups",
      vSelectBaseDurations: "vselect_dms_base/vSelectBaseDurations",
      vSelectBaseFormats: "vselect_dms_base/vSelectBaseFormats",
      vSelectBaseLanguages: "vselect_dms_base/vSelectBaseLanguages",
      vSelectBasePermissions: "vselect_dms_base/vSelectBasePermissions",
      vSelectBaseScopes: "vselect_dms_base/vSelectBaseScopes",
      vSelectInstitution: "vselect_dms_base/vSelectInstitution",
    }),
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
