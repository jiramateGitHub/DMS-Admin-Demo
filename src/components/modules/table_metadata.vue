<template >
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-info card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">ตารางแสดงรายการชุดข้อมูล</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <button
                  class="btn btn-primary"
                  rel="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                  aria-describedby="tooltip614929"
                  @click="addMetadata()"
                >
                  <span class="btn-label"
                    ><i class="material-icons">add</i></span
                  >
                  เพิ่มชุดข้อมูล
                  <div class="ripple-container"></div>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="material-datatables">
                  <table
                    id="datatables"
                    class="table table-striped table-color-header table-hover table-border"
                    cellspacing="0"
                    width="100%"
                    style="width: 100%"
                  >
                    <thead>
                      <tr class="text-center">
                        <th width="5%">#</th>
                        <th width="10%">รหัส</th>
                        <th width="22%">ชุดข้อมูล</th>
                        <th width="10%">หมวดหมู่ข้อมูล</th>
                        <th width="13%">กลุ่มชุดข้อมูล</th>
                        <th width="15%">หน่วยงานภายใน</th>
                        <th width="18%" class="disabled-sorting">ดำเนินการ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(value, index) in fetchDmsMetadataList"
                        :key="index"
                      >
                        <td class="text-center">{{ index + 1 }}</td>
                        <td>{{ value.meta_code }}</td>
                        <td>{{ value.meta_name }}</td>
                        <td>
                          {{ value.dms_base_category.bc_name }}
                        </td>
                        <td>
                          {{ value.dms_base_datagroup.grp_name }}
                        </td>
                        <td>
                          {{ value.dms_institution.ins_name }}
                        </td>
                        <td class="text-center">
                          <button
                            type="button"
                            rel="tooltip"
                            class="btn btn-fab btn-primary"
                            data-placement="top"
                            title="คลิกเพื่อค้นหาข้อมูล"
                            data-toggle="modal"
                            data-target="#myModal"
                            v-on:click="openInfo(value)"
                          >
                            <i class="material-icons">search</i>
                          </button>
                          <button
                            style="margin-left: 5px"
                            type="button"
                            rel="tooltip"
                            class="btn btn-fab btn-warning"
                            data-placement="top"
                            title="คลิกเพื่อแก้ไขข้อมูล"
                            v-on:click="openEdit(value)"
                          >
                            <i class="material-icons">edit</i>
                          </button>
                          <button
                            style="margin-left: 5px"
                            type="button"
                            rel="tooltip"
                            class="btn btn-fab btn-danger"
                            data-placement="top"
                            title="คลิกเพื่อลบข้อมูล"
                            v-on:click="openDelete(value)"
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
            <!-- <div class="row">
              <div class="col-md-12">
                <pre>{{ fetchDmsMetadataList }}</pre>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Classic Modal -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-left" style="margin: 5px">
              ชื่อชุดข้อมูล: {{ modalTitle }}
            </h3>
            <button
              class="btn btn-primary btn-modal"
              data-placement="top"
              title="ส่งออกคำอธิบายข้อมูล"
              style="margin: 0px"
            >
              <span class="btn-label"
                ><i class="material-icons">file_copy</i></span
              >
              ส่งออกคำอธิบายข้อมูล
            </button>
            <button
              class="btn btn-modal"
              data-dismiss="modal"
              aria-hidden="true"
              title="คลิกเพื่อปิด"
              style="margin: 0px 0px 0px 5px"
            >
              ปิด
            </button>
          </div>
          <MetadataInfo v-if="modalTitle != ''" />
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MetadataInfo from "./metadata_info.vue";

export default {
  name: "TableMetadata",
  props: {},
  components: {
    MetadataInfo,
  },
  data() {
    return {
      modalTitle: "",
    };
  },
  created() {
    this.fetchDmsMetadataAction();
  },
  computed: {
    ...mapGetters({
      fetchDmsMetadataList: "metadata_management/fetchDmsMetadata",
    }),
  },
  methods: {
    ...mapActions({
      fetchDmsMetadataAction: "metadata_management/fetchDmsMetadata",
      setCurrentDmsMetadataAction: "business_metadata/setCurrentDmsMetadata",
      getBusinessMetadataAction: "business_metadata/getCurrentBusinessMetadata",
      getTechnicalMetadataAction:
        "technical_metadata/getCurrentTechnicalMetadata",
      setTypeFormEditBAction: "business_metadata/setTypeFormEdit",
      setTypeFormEditTAction: "technical_metadata/setTypeFormEdit",
      updateMetadataActiveAction: "business_metadata/updateMetadataActive",
    }),
    async addMetadata() {
      await this.setTypeFormEditBAction(false);
      this.$router.replace({ path: "/metadata/business_form" });
    },
    async openInfo(obj_metadata) {
      this.modalTitle = obj_metadata.meta_name;
      await this.setCurrentDmsMetadataAction(obj_metadata);
      await this.getBusinessMetadataAction();
    },
    async openEdit(obj_metadata) {
      this.$swal
        .fire({
          title: "เลือกรายการที่ต้องการแก้ไข",
          text: "ชื่อชุดข้อมูล: " + obj_metadata.meta_name,
          width: 650,
          icon: "question",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Business`,
          denyButtonText: `Technical`,
          cancelButtonText: `ยกเลิก`,
          denyButtonColor: "#999999",
          cancelButtonColor: "#F44336",
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            await this.setTypeFormEditBAction(true);
            await this.setCurrentDmsMetadataAction(obj_metadata);
            await this.getBusinessMetadataAction();
            this.$router.replace({ path: "/metadata/business_form" });
          } else if (result.isDenied) {
            await this.setCurrentDmsMetadataAction(obj_metadata);
            await this.setTypeFormEditTAction(true);
            if (obj_metadata.dms_technical_metadatum == null) {
              await this.getTechnicalMetadataAction(null);
            } else {
              await this.getTechnicalMetadataAction(
                obj_metadata.dms_technical_metadatum.tsm_id
              );
            }
            this.$router.replace({ path: "/metadata/technical_form" });
          }
        });
    },
    async openDelete(obj_metadata) {
      this.$swal
        .fire({
          title: "คุณต้องการลบ “" + obj_metadata.meta_name + "” ใช่หรือไม่",
          text: "คุณจะไม่สามารถย้อนกลับการลบได้!",
          icon: "warning",
          width: 650,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await this.setCurrentDmsMetadataAction(obj_metadata);
            await this.updateMetadataActiveAction();
            await this.fetchDmsMetadataAction();
            this.$swal.fire("ลบสำเร็จ!", "", "success");
          }
        });
    },
  },
};
</script>
