<template>
  <div>
    <form @submit.prevent="formValidation">
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
                    <label class="form__label"
                      >ชุดข้อข้อมูล <code>*</code>
                      <span
                        v-if="submitted && !$v.meta_name.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      >
                    </label>
                  </div>
                  <div class="col-sm-12">
                    <input
                      type="text"
                      placeholder="ระบุชื่อชุดข้อข้อมูล เช่น ผู้บริหารและพนักงาน"
                      :class="{ 'input-required': $v.meta_name.$error }"
                      v-model.trim="meta_name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label
                      >เลขที่เมทาดาตา <code>*</code
                      ><span
                        v-if="submitted && !$v.meta_code.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <input
                      type="text"
                      :class="{ 'input-required': $v.meta_code.$error }"
                      placeholder="ระบุเลขที่เมทาดาตา เช่น 01-01-01"
                      v-model="meta_code"
                    />
                  </div>

                  <div class="col-sm-6">
                    <label
                      >หมวดหมู่ข้อมูล <code>*</code
                      ><span
                        v-if="submitted && !$v.meta_bc_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectBaseCategories"
                      :class="{
                        'style-chooser-required': $v.meta_bc_object.$error,
                      }"
                      v-model="meta_bc_object"
                    ></v-select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label
                      >เจ้าของข้อมูล <code>*</code
                      ><span
                        v-if="submitted && !$v.meta_code.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <input
                      type="text"
                      :class="{ 'input-required': $v.bsds_owner.$error }"
                      placeholder="ระบุเจ้าของข้อมูล เช่น ฝ่ายบริหารงานบุคคล"
                      v-model="bsds_owner"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label
                      >หน่วยงานภายใน <code>*</code
                      ><span
                        v-if="submitted && !$v.meta_ins_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectInstitution"
                      :class="{
                        'style-chooser-required': $v.meta_ins_object.$error,
                      }"
                      v-model="meta_ins_object"
                    ></v-select>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <label
                      >คำอธิบาย <code>*</code
                      ><span
                        v-if="submitted && !$v.bsds_text.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <textarea
                      rows="4"
                      cols="50"
                      :class="{ 'input-required': $v.bsds_text.$error }"
                      placeholder="ระบบุคำอธิบายของชื่อชุดข้อมูล"
                      v-model="bsds_text"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label>แหล่งที่มาของคำอธิบาย </label><br />
                    <input
                      type="text"
                      placeholder="ระบุแหล่งที่มาของคำอธิบาย เช่น ข้อบังคับบุคคล พ.ศ. 2559"
                      v-model="bsds_ref"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label>URL เพิ่มเติม </label><br />
                    <input
                      type="text"
                      placeholder="ระบุ URL เพิ่มเติม เช่น www.google.com"
                      v-model="bsds_url"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <label
                      >คําสําคัญ (Keywords) <code>*</code>
                      <span
                        v-if="submitted && !$v.meta_bsk_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="ระบุคําสําคัญที่เกี่ยวข้องกับชุดข้อมูล"
                      taggable
                      multiple
                      :class="{
                        'style-chooser-required': $v.meta_bsk_object.$error,
                      }"
                      v-model="meta_bsk_object"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label
                      >ภาษาที่ใช้ <code>*</code
                      ><span
                        v-if="submitted && !$v.meta_lg_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      multiple
                      placeholder="เลือกรายการ"
                      :options="vSelectBaseLanguages"
                      :class="{
                        'style-chooser-required': $v.meta_lg_object.$error,
                      }"
                      v-model="meta_lg_object"
                    ></v-select>
                  </div>
                  <div class="col-sm-6">
                    <label
                      >รูปแบบข้อมูล <code>*</code
                      ><span
                        v-if="submitted && !$v.meta_ft_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectBaseFormats"
                      :class="{
                        'style-chooser-required': $v.meta_ft_object.$error,
                      }"
                      v-model="meta_ft_object"
                    ></v-select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <label
                      >ความถี่ในการเผยแพร่ข้อมูล <code>*</code>
                      <span
                        v-if="submitted && !$v.meta_dt_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectBaseDurations"
                      :class="{
                        'style-chooser-required': $v.meta_dt_object.$error,
                      }"
                      v-model="meta_dt_object"
                    ></v-select>
                  </div>
                  <div class="col-sm-6">
                    <label
                      >ขอบเขตที่เผยแพร่ข้อมูล <code>*</code>
                      <span
                        v-if="submitted && !$v.meta_sc_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectBaseScopes"
                      :class="{
                        'style-chooser-required': $v.meta_sc_object.$error,
                      }"
                      v-model="meta_sc_object"
                    ></v-select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label
                      >สิทธิ์ในการใช้ข้อมูล <code>*</code>
                      <span
                        v-if="submitted && !$v.meta_pers_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectBasePermissions"
                      :class="{
                        'style-chooser-required': $v.meta_pers_object.$error,
                      }"
                      v-model="meta_pers_object"
                    ></v-select>
                  </div>
                  <div class="col-sm-6">
                    <label
                      >ระดับชั้นความลับ <code>*</code>
                      <span
                        v-if="submitted && !$v.meta_cf_object.required"
                        class="text-danger"
                      >
                        This field is required.</span
                      ></label
                    ><br />
                    <v-select
                      placeholder="เลือกรายการ"
                      :options="vSelectBaseClassified"
                      :class="{
                        'style-chooser-required': $v.meta_cf_object.$error,
                      }"
                      v-model="meta_cf_object"
                    ></v-select>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-6">
                    <label>ชื่อ-นามสกุล ผู้ติดต่อ </label><br />
                    <input
                      type="text"
                      placeholder="ระบุชื่อและนามสกุล"
                      v-model="metac_name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label>อีเมล์ผู้ติดต่อ </label><br />
                    <input
                      type="text"
                      placeholder="ระบุอีเมล์ เช่น abc@abc.com"
                      v-model="metac_email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label>เบอร์โทรผู้ติดต่อ </label><br />
                    <input
                      type="text"
                      placeholder="ระบุเบอร์โทร"
                      v-model="metac_phone"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 text-right">
                    <button
                      class="btn btn-success"
                      type="submit"
                      rel="tooltip"
                      data-placement="top"
                      title="คลิกเพื่อบันทึกข้อมูล"
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
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
export default {
  name: "BusinessForm",
  props: {},
  data() {
    return {
      meta_name: null,
      meta_code: null,
      bsds_text: null,
      bsds_owner: null,
      bsds_ref: null,
      bsds_url: null,
      metac_name: null,
      metac_email: null,
      metac_phone: null,
      meta_bc_object: null,
      meta_grp_object: null,
      meta_ins_object: null,
      meta_bsk_object: null,
      meta_lg_object: null,
      meta_dt_object: null,
      meta_ft_object: null,
      meta_sc_object: null,
      meta_pers_object: null,
      meta_cf_object: null,
      options: ["foo", "bar", "baz"],
      submitted: false,
    };
  },
  validations: {
    meta_name: {
      required,
      minLength: maxLength(255),
    },
    meta_code: {
      required,
      minLength: maxLength(255),
    },
    bsds_text: {
      required,
      minLength: maxLength(255),
    },
    bsds_owner: {
      required,
      minLength: maxLength(255),
    },
    meta_bc_object: {
      required,
      minLength: maxLength(255),
    },
    meta_ins_object: {
      required,
      minLength: maxLength(255),
    },
    meta_lg_object: {
      required,
      minLength: maxLength(255),
    },
    meta_ft_object: {
      required,
      minLength: maxLength(255),
    },
    meta_bsk_object: {
      required,
      minLength: maxLength(255),
    },
    meta_dt_object: {
      required,
      minLength: maxLength(255),
    },
    meta_sc_object: {
      required,
      minLength: maxLength(255),
    },
    meta_pers_object: {
      required,
      minLength: maxLength(255),
    },
    meta_cf_object: {
      required,
      minLength: maxLength(255),
    },
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
    formValidation() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("invalid!");
        return;
      }

      this.formSave();
      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.meta_lg_object));
    },
    formSave() {
      let saveObj = {
        meta_name: this.meta_name,
        meta_code: this.meta_code,
        bsds_text: this.bsds_text,
        bsds_owner: this.bsds_owner,
        bsds_ref: this.bsds_ref,
        bsds_url: this.bsds_url,
        metac_name: this.metac_name,
        metac_email: this.metac_email,
        metac_phone: this.metac_phone,
        bc_id: this.meta_bc_object.code,
        ins_id: this.meta_ins_object.code,
        bsk_id: this.meta_bsk_object,
        lg_id: this.meta_lg_object,
        dt_id: this.meta_dt_object.code,
        ft_id: this.meta_ft_object.code,
        sc_id: this.meta_sc_object.code,
        pers_id: this.meta_pers_object.code,
        cf_id: this.meta_cf_object.code,
      };
      console.log(saveObj);
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(saveObj));

      // this.$router.replace({ path: "/metadata/technical_form" });
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
<style scope>
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

.input-required {
  border-style: 1px solid;
  border-color: red;
}

.vs__search,
.vs__search:focus {
  color: grey;
}

.style-chooser-required .vs__dropdown-toggle,
.style-chooser-required .vs__dropdown-menu {
  border: 1px solid;
  border-color: red;
}

.style-chooser .vs__selected {
  background-color: #e7a33d;
}
</style>
