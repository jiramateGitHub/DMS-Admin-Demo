<template>
  <div>
    <div class="modal-body">
      <div class="row section-form">
        <div class="col-sm-12">
          <label
            >เลขที่เมทาดาตา:
            <span style="color: grey">{{
              getCurrentMetadata.meta_code
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >หมวดหมู่ข้อมูล:
            <span style="color: grey">{{
              getCurrentMetadata.dms_base_category.bc_name 
            }}</span></label
          ><br />
        </div>
        <div class="col-sm-6">
          <label
            >กลุ่มข้อมูล:
            <span style="color: grey">{{
              getCurrentMetadata.dms_base_datagroup.grp_name 
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >เจ้าของข้อมูล:
            <span style="color: grey">{{
              getBusinessMetadata.dms_business_descriptions[0].bsds_owner 
            }}</span></label
          ><br />
        </div>
        <div class="col-sm-6">
          <label
            >หน่วยงานภายใน:
            <span style="color: grey">{{
              getCurrentMetadata.dms_institution.ins_name  
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-12">
          <label
            >คำอธิบาย:
            <span style="color: grey">{{
              getBusinessMetadata.dms_business_descriptions[0].bsds_text
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-12">
          <label
            >แหล่งที่มาของคำอธิบาย:
            <span style="color: grey">{{
              getBusinessMetadata.dms_business_descriptions[0].bsds_ref 
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-12">
          <label
            >URL เพิ่มเติม:
            <span style="color: grey">{{
              getBusinessMetadata.dms_business_descriptions[0].bsds_url 
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row" style="padding-top: 10px">
        <div class="col-sm-12">
          <h4>รายละเอียดเพิ่มเติม</h4>
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-12">
          <label>คําสําคัญ (Keywords): </label>
          <span
            v-for="(value, index) in getBusinessMetadata.dms_business_keywords"
            :key="index"
          >
            <span
              style="margin-left: 5px"
              class="badge badge-pill badge-success"
              >{{ value.bsk_text }}</span
            >
          </span>
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >ภาษาที่ใช้:
            <span
              style="color: grey"
              v-for="(value, index) in getBusinessMetadata.dms_base_languages"
              :key="index"
            >
              {{ value.lg_text
              }}<span
                v-if="index < getBusinessMetadata.dms_base_languages.length - 1"
                >,</span
              >
            </span></label
          ><br />
        </div>
        <div class="col-sm-6">
          <label
            >รูปแบบข้อมูล:
            <span style="color: grey">{{
              getBusinessMetadata.dms_base_formats[0].ft_text
            }}</span></label
          ><br />
        </div>
      </div>

      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >ความถี่ในการเผยแพร่ข้อมูล:
            <span style="color: grey">{{
              getBusinessMetadata.dms_base_durations[0].dt_text
            }}</span></label
          ><br />
        </div>
        <div class="col-sm-6">
          <label
            >ขอบเขตที่เผยแพร่ข้อมูล:
            <span style="color: grey">{{
              getBusinessMetadata.dms_base_scopes[0].sc_text
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >สิทธิ์ในการใช้ข้อมูล:
            <span style="color: grey">{{
              getBusinessMetadata.dms_base_permissions[0].pers_text
            }}</span></label
          ><br />
        </div>
        <div class="col-sm-6">
          <label
            >ระดับชั้นความลับ:
            <span style="color: grey">{{
              getBusinessMetadata.dms_base_classifieds[0].cf_text
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row" style="padding-top: 10px">
        <div class="col-sm-12">
          <h4>รายละเอียดการติดต่อ</h4>
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >ชื่อ-นามสกุล ผู้ติดต่อ:
            <span style="color: grey">{{
              getCurrentMetadata.dms_metadata_contacts[0].metac_name
            }}</span></label
          ><br />
        </div>
        <div class="col-sm-6">
          <label
            >อีเมล์ผู้ติดต่อ:
            <span style="color: grey">{{
              getCurrentMetadata.dms_metadata_contacts[0].metac_email
            }}</span></label
          ><br />
        </div>
      </div>
      <div class="row section-form">
        <div class="col-sm-6">
          <label
            >เบอร์โทรผู้ติดต่อ:
            <span style="color: grey">{{
              getCurrentMetadata.dms_metadata_contacts[0].metac_phone
            }}</span></label
          ><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MetadataInfo",
  props: {
    meta_id: Number,
  },
  created() {},
  methods: {
    ...mapActions({}),
  },
  computed: {
    ...mapGetters({
      getCurrentMetadata: "business_metadata/getCurrentDmsMetadata",
      getBusinessMetadata: "business_metadata/getCurrentBusinessMetadata",
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

.modal-lg {
  max-width: 1200px;
}
</style>

