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
              <h4 class="card-title" v-if="typeFormEdit.type === false">
                เพิ่มชุดข้อมูล
              </h4>
              <h4 class="card-title" v-if="typeFormEdit.type === true">
                แก้ไขชุดข้อมูล
              </h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <h4>รายละเอียดชุดข้อมูล</h4>
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-12">
                  <label class="form__label"
                    >ชุดข้อข้อมูล <code>*</code>
                    <span
                      v-if="submitted && !$v.form.meta_name.required"
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
                    :class="{ 'input-required': $v.form.meta_name.$error }"
                    v-model="form.meta_name"
                  />
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-4">
                  <label
                    >เลขที่เมทาดาตา <code>*</code
                    ><span
                      v-if="submitted && !$v.form.meta_code.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <input
                    type="text"
                    :class="{ 'input-required': $v.form.meta_code.$error }"
                    placeholder="ระบุเลขที่เมทาดาตา เช่น 01-01-01"
                    v-model="form.meta_code"
                  />
                </div>

                <div class="col-sm-4">
                  <label
                    >หมวดหมู่ข้อมูล <code>*</code
                    ><span
                      v-if="submitted && !$v.form.meta_bc_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseCategories"
                    :class="{
                      'style-chooser-required': $v.form.meta_bc_object.$error,
                    }"
                    v-model="form.meta_bc_object"
                  ></v-select>
                </div>
                <div class="col-sm-4">
                  <label
                    >กลุ่มข้อมูล <code>*</code
                    ><span
                      v-if="submitted && !$v.form.meta_grp_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseDatagroups"
                    :class="{
                      'style-chooser-required': $v.form.meta_grp_object.$error,
                    }"
                    v-model="form.meta_grp_object"
                  ></v-select>
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-6">
                  <label
                    >เจ้าของข้อมูล <code>*</code
                    ><span
                      v-if="submitted && !$v.form.bsds_owner.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <input
                    type="text"
                    :class="{ 'input-required': $v.form.bsds_owner.$error }"
                    placeholder="ระบุเจ้าของข้อมูล เช่น ฝ่ายบริหารงานบุคคล"
                    v-model="form.bsds_owner"
                  />
                </div>
                <div class="col-sm-6">
                  <label
                    >หน่วยงานภายใน <code>*</code
                    ><span
                      v-if="submitted && !$v.form.meta_ins_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectInstitution"
                    :class="{
                      'style-chooser-required': $v.form.meta_ins_object.$error,
                    }"
                    v-model="form.meta_ins_object"
                  ></v-select>
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-12">
                  <label
                    >คำอธิบาย <code>*</code
                    ><span
                      v-if="submitted && !$v.form.bsds_text.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <textarea
                    rows="4"
                    cols="50"
                    :class="{ 'input-required': $v.form.bsds_text.$error }"
                    placeholder="ระบบุคำอธิบายของชื่อชุดข้อมูล"
                    v-model="form.bsds_text"
                  />
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-6">
                  <label>แหล่งที่มาของคำอธิบาย </label><br />
                  <input
                    type="text"
                    placeholder="ระบุแหล่งที่มาของคำอธิบาย เช่น ข้อบังคับบุคคล พ.ศ. 2559"
                    v-model="form.bsds_ref"
                  />
                </div>
                <div class="col-sm-6">
                  <label>URL เพิ่มเติม </label><br />
                  <input
                    type="text"
                    placeholder="ระบุ URL เพิ่มเติม เช่น www.google.com"
                    v-model="form.bsds_url"
                  />
                </div>
              </div>
              <div class="row" style="padding-top: 10px">
                <div class="col-sm-12">
                  <h4>รายละเอียดเพิ่มเติม</h4>
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-12">
                  <label
                    >คําสําคัญ (Keywords) <code>*</code>
                    <span
                      v-if="submitted && !$v.form.meta_bsk_object.required"
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
                      'style-chooser-required': $v.form.meta_bsk_object.$error,
                    }"
                    v-model="form.meta_bsk_object"
                  />
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-6">
                  <label
                    >ภาษาที่ใช้ <code>*</code
                    ><span
                      v-if="submitted && !$v.form.meta_lg_object.required"
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
                      'style-chooser-required': $v.form.meta_lg_object.$error,
                    }"
                    v-model="form.meta_lg_object"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label
                    >รูปแบบข้อมูล <code>*</code
                    ><span
                      v-if="submitted && !$v.form.meta_ft_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseFormats"
                    :class="{
                      'style-chooser-required': $v.form.meta_ft_object.$error,
                    }"
                    v-model="form.meta_ft_object"
                  ></v-select>
                </div>
              </div>

              <div class="row section-form">
                <div class="col-sm-6">
                  <label
                    >ความถี่ในการเผยแพร่ข้อมูล <code>*</code>
                    <span
                      v-if="submitted && !$v.form.meta_dt_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseDurations"
                    :class="{
                      'style-chooser-required': $v.form.meta_dt_object.$error,
                    }"
                    v-model="form.meta_dt_object"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label
                    >ขอบเขตที่เผยแพร่ข้อมูล <code>*</code>
                    <span
                      v-if="submitted && !$v.form.meta_sc_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseScopes"
                    :class="{
                      'style-chooser-required': $v.form.meta_sc_object.$error,
                    }"
                    v-model="form.meta_sc_object"
                  ></v-select>
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-6">
                  <label
                    >สิทธิ์ในการใช้ข้อมูล <code>*</code>
                    <span
                      v-if="submitted && !$v.form.meta_pers_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBasePermissions"
                    :class="{
                      'style-chooser-required': $v.form.meta_pers_object.$error,
                    }"
                    v-model="form.meta_pers_object"
                  ></v-select>
                </div>
                <div class="col-sm-6">
                  <label
                    >ระดับชั้นความลับ <code>*</code>
                    <span
                      v-if="submitted && !$v.form.meta_cf_object.required"
                      class="text-danger"
                    >
                      This field is required.</span
                    ></label
                  ><br />
                  <v-select
                    placeholder="เลือกรายการ"
                    :options="vSelectBaseClassified"
                    :class="{
                      'style-chooser-required': $v.form.meta_cf_object.$error,
                    }"
                    v-model="form.meta_cf_object"
                  ></v-select>
                </div>
              </div>
              <div class="row" style="padding-top: 10px">
                <div class="col-sm-12">
                  <h4>รายละเอียดการติดต่อ</h4>
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-6">
                  <label>ชื่อ-นามสกุล ผู้ติดต่อ </label><br />
                  <input
                    type="text"
                    placeholder="ระบุชื่อและนามสกุล"
                    v-model="form.metac_name"
                  />
                </div>
                <div class="col-sm-6">
                  <label>อีเมล์ผู้ติดต่อ </label><br />
                  <input
                    type="text"
                    placeholder="ระบุอีเมล์ เช่น abc@abc.com"
                    v-model="form.metac_email"
                  />
                </div>
              </div>
              <div class="row section-form">
                <div class="col-sm-6">
                  <label>เบอร์โทรผู้ติดต่อ </label><br />
                  <input
                    type="text"
                    placeholder="ระบุเบอร์โทร"
                    v-model="form.metac_phone"
                  />
                </div>
              </div>
              <div class="row" style="padding-top: 10px">
                <div class="col-sm-6 text-left">
                  <button
                    class="btn"
                    data-placement="top"
                    title="คลิกเพื่อเคลียร์ข้อมูล"
                    @click="formClear()"
                  >
                    เคลียร์
                  </button>
                  <button
                    class="btn btn-warning"
                    data-placement="top"
                    title="คลิกเพื่อแก้ไขข้อมูล"
                    @click="formTest()"
                  >
                    Test Data
                  </button>
                </div>
                <div class="col-sm-6 text-right">
                  <button
                    @click="formValidation()"
                    class="btn btn-success"
                    type="submit"
                    data-placement="top"
                    title="คลิกเพื่อบันทึกข้อมูล"
                    :disabled="
                      submitStatus === 'PENDING' || submitStatus === 'ERROR'
                    "
                  >
                    <span class="btn-label"
                      ><i class="material-icons">check</i></span
                    >
                    &nbsp;
                    <span v-if="submitStatus === 'OK'">บันทึก</span>
                    <span v-if="submitStatus === 'PENDING'"
                      >กำลังบันทึกข้อมูล...</span
                    >
                    <span v-if="submitStatus === 'ERROR'"
                      >เกิดข้อผิดพลาด กรุณารีเฟรชหน้าเว็บ!</span
                    >
                  </button>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-md-12">
                  <!-- <pre>{{ getCurrentMetadata }}</pre> -->
                  <!-- <pre>{{ getBusinessMetadata }}</pre> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="submitted && showNotityWarning">
      <notify states="alert-danger" detail="กรุณากรอกข้อมูลให้ครบถ้วน" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
import notify from "../../components/modules/notify.vue";
export default {
  name: "BusinessForm",
  components: {
    notify,
  },
  props: ["edit_meta_id"],
  data() {
    return {
      form: {
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
      },
      submitted: null,
      submitStatus: null,
      showNotityWarning: false,
    };
  },
  validations: {
    form: {
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
      meta_grp_object: {
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
  },
  created() {
    this.fetchvSelectBase();
    this.submitStatus = "OK";
    if (this.typeFormEdit.type == undefined) {
      this.setTypeFormBEditAction(false);
    } else if (this.typeFormEdit.type) {
      this.formEdit();
    }
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
      getCurrentMetadata: "business_metadata/getCurrentDmsMetadata",
      getBusinessMetadata: "business_metadata/getCurrentBusinessMetadata",
      businessSaveStatus: "business_metadata/businessSaveStatus",
      typeFormEdit: "business_metadata/typeFormEdit",
    }),
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
      saveAction: "business_metadata/saveMetadata",
      updateAction: "business_metadata/updateMetadata",
      setTypeFormEditBAction: "business_metadata/setTypeFormEdit",
      setTypeFormEditTAction: "technical_metadata/setTypeFormEdit",
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
        this.showNotityWarning = true;
        setTimeout(() => (this.showNotityWarning = false), 3000);
        return;
      }

      this.formSave();
    },
    async formSave() {
      this.submitStatus = "PENDING";

      let payload = this.form;

      if (this.typeFormEdit) {
        await this.updateAction(payload);
      } else {
        await this.saveAction(payload);
      }

      if (this.businessSaveStatus.code == 0) {
        this.submitStatus = "OK";
        if (this.typeFormEdit) {
          this.$swal.fire({
            title: "บันทึกชุดข้อมูลสำเร็จ",
            icon: "success",
            confirmButtonText: "ตกลง",
            preConfirm: () => {
              this.$router.replace({ path: "/metadata" });
            },
          });
        } else {
          this.$swal
            .fire({
              title: "บันทึกชุดข้อมูลสำเร็จ",
              text: "คุณต้องการจัดการชุดข้อมูลเชิงเทคนิคหรือไม่!",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ยืนยัน",
              cancelButtonText: "ยกเลิก",
            })
            .then(async (result) => {
              if (result.isConfirmed) {
                await this.setTypeFormEditTAction(false);
                this.$router.replace({ path: "/metadata/technical_form" });
              } else {
                this.$router.replace({ path: "/metadata/" });
              }
            });
        }
      } else {
        this.submitStatus = "ERROR";
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    formEdit() {
      // getCurrentMetadata
      // getBusinessMetadata
      this.form.meta_name = this.getCurrentMetadata.meta_name;
      this.form.meta_code = this.getCurrentMetadata.meta_code;
      this.form.bsds_text = this.getBusinessMetadata.dms_business_descriptions[0].bsds_text;
      this.form.bsds_owner = this.getBusinessMetadata.dms_business_descriptions[0].bsds_owner;
      this.form.bsds_ref = this.getBusinessMetadata.dms_business_descriptions[0].bsds_ref;
      this.form.bsds_url = this.getBusinessMetadata.dms_business_descriptions[0].bsds_url;
      this.form.metac_name = this.getCurrentMetadata.dms_metadata_contacts[0].metac_name;
      this.form.metac_email = this.getCurrentMetadata.dms_metadata_contacts[0].metac_email;
      this.form.metac_phone = this.getCurrentMetadata.dms_metadata_contacts[0].metac_phone;

      this.form.meta_bc_object = {
        code: this.getCurrentMetadata.dms_base_category.bc_id,
        label: this.getCurrentMetadata.dms_base_category.bc_name,
      };

      this.form.meta_grp_object = {
        code: this.getCurrentMetadata.dms_base_datagroup.grp_id,
        label: this.getCurrentMetadata.dms_base_datagroup.grp_name,
      };

      this.form.meta_ins_object = {
        code: this.getCurrentMetadata.dms_institution.ins_id,
        label: this.getCurrentMetadata.dms_institution.ins_name,
      };

      let temp_meta_bsk_object = [];
      // eslint-disable-next-line no-unused-vars
      for (const [key, value] of Object.entries(
        this.getBusinessMetadata.dms_business_keywords
      )) {
        temp_meta_bsk_object.push(value.bsk_text);
      }
      this.form.meta_bsk_object = temp_meta_bsk_object;

      let temp_meta_lg_object = [];
      // eslint-disable-next-line no-unused-vars
      for (const [key, value] of Object.entries(
        this.getBusinessMetadata.dms_base_languages
      )) {
        temp_meta_lg_object.push({
          code: value.lg_id,
          label: value.lg_text,
        });
      }
      this.form.meta_lg_object = temp_meta_lg_object;

      this.form.meta_dt_object = {
        code: this.getBusinessMetadata.dms_base_durations[0].dt_id,
        label: this.getBusinessMetadata.dms_base_durations[0].dt_text,
      };
      this.form.meta_ft_object = {
        code: this.getBusinessMetadata.dms_base_formats[0].ft_id,
        label: this.getBusinessMetadata.dms_base_formats[0].ft_text,
      };
      this.form.meta_sc_object = {
        code: this.getBusinessMetadata.dms_base_scopes[0].sc_id,
        label: this.getBusinessMetadata.dms_base_scopes[0].sc_text,
      };
      this.form.meta_pers_object = {
        code: this.getBusinessMetadata.dms_base_permissions[0].pers_id,
        label: this.getBusinessMetadata.dms_base_permissions[0].pers_text,
      };
      this.form.meta_cf_object = {
        code: this.getBusinessMetadata.dms_base_classifieds[0].cf_id,
        label: this.getBusinessMetadata.dms_base_classifieds[0].cf_text,
      };
    },
    formTest() {
      this.form.meta_name = "ทดสอบ";
      this.form.meta_code = "TEST001";
      this.form.bsds_text = "คำอธิบาย";
      this.form.bsds_owner = "เจ้าของข้อมูล";
      this.form.bsds_ref = "แหล่งที่มาของคำอธิบาย";
      this.form.bsds_url = "URL เพิ่มเติม";
      this.form.metac_name = "ชื่อ-นามสกุล ผู้ติดต่อ";
      this.form.metac_email = "อีเมล์ผู้ติดต่อ";
      this.form.metac_phone = "เบอร์โทรผู้ติดต่อ";
      this.form.meta_bc_object = {
        code: 1,
        label: "ข้อมูลส่วนบุคคล",
      };

      (this.form.meta_grp_object = {
        code: 1,
        label: "สถิติทางการ",
      }),
        (this.form.meta_ins_object = {
          code: 1,
          label: "สำนักงานสถิติแห่งชาติ",
        }),
        (this.form.meta_bsk_object = ["key1", "key2"]);
      this.form.meta_lg_object = [
        { code: 1, label: "ภาษาไทย" },
        { code: 2, label: "ภาษาอังกฤษ" },
      ];
      this.form.meta_dt_object = {
        code: 1,
        label: "ไม่เผยแพร่",
      };
      this.form.meta_ft_object = {
        code: 1,
        label: "JSON",
      };
      this.form.meta_sc_object = {
        code: 1,
        label: "ภายในหน่วยงาน",
      };
      this.form.meta_pers_object = {
        code: 1,
        label: "ใช้โดยอิสระ",
      };
      this.form.meta_cf_object = {
        code: 1,
        label: "ไม่เป็นความลับ",
      };
    },
    formClear() {
      this.form.meta_name = "";
      this.form.meta_code = "";
      this.form.bsds_text = "";
      this.form.bsds_owner = "";
      this.form.bsds_ref = "";
      this.form.bsds_url = "";
      this.form.metac_name = "";
      this.form.metac_email = "";
      this.form.metac_phone = "";
      this.form.meta_bc_object = null;
      this.form.meta_grp_object = null;
      this.form.meta_ins_object = null;
      this.form.meta_bsk_object = null;
      this.form.meta_lg_object = null;
      this.form.meta_dt_object = null;
      this.form.meta_ft_object = null;
      this.form.meta_sc_object = null;
      this.form.meta_pers_object = null;
      this.form.meta_cf_object = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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

.section-form {
  margin-left: 5px;
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
</style>
