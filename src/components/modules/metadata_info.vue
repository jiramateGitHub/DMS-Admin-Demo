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
            <span
              style="color: grey"
              v-for="(value, index) in getBusinessMetadata.dms_base_formats"
              :key="index"
            >
              {{ value.ft_text
              }}<span
                v-if="index < getBusinessMetadata.dms_base_formats.length - 1"
                >,</span
              >
            </span></label
          >
          <br />
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
      <div class="row" style="padding-top: 10px">
        <div class="col-sm-12">
          <h4>รายละเอียดเชิงเทคนิค</h4>
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
                  <th style="width: 9%">ประเภทข้อมูล</th>
                  <th style="width: 10%">ความกว้างของฟิลด์ข้อมูล</th>
                  <th style="width: 9%">คีย์ข้อมูล</th>
                  <th style="width: 29%">ตัวอย่างข้อมูล</th>
                  <th style="width: 10%">หมายเหตุ</th>
                  <th style="width: 8%">ข้อมูลนิรนาม</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td
                    v-if="getCurrentDmsTechnicalDetailList == null"
                    colspan="8"
                  >
                    ไม่พบรายการในตาราง
                  </td>
                </tr>
                <tr
                  v-for="(item, index) in getCurrentDmsTechnicalDetailList"
                  :key="index"
                >
                  <td class="text-center">{{ genIndex(index) }}</td>
                  <td>
                    {{ item.tcd_attribute }}
                  </td>
                  <td class="text-center">
                    {{ item.tcd_type }}
                  </td>
                  <td class="text-center">
                    {{ item.tcd_length }}
                  </td>
                  <td class="text-center">
                    {{ item.tcd_key }}
                  </td>
                  <td class="text-left">
                    {{ item.tcd_sample }}
                  </td>
                  <td class="text-left">
                    {{ item.tcd_comment }}
                  </td>
                  <td class="text-center">
                    <i v-if="item.tcd_anonymous == '1'" class="material-icons"
                      >check_circle_outline</i
                    >
                    <!-- <div class="togglebutton">
                      <label>
                        <input
                          type="checkbox"
                          v-model="item.tcd_anonymous"
                          disabled
                        />
                        <span class="toggle"></span>
                      </label>
                    </div> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <pre>{{ getCurrentDmsTechnicalDetailList }}</pre>
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
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapActions({}),
    genIndex: function(index) {
      return parseInt(index) + 1;
    },
  },
  computed: {
    ...mapGetters({
      getCurrentMetadata: "business_metadata/getCurrentDmsMetadata",
      getBusinessMetadata: "business_metadata/getCurrentBusinessMetadata",
      getCurrentDmsTechnicalDetailList:
        "technical_metadata/getCurrentDmsTechnicalDetail",
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
