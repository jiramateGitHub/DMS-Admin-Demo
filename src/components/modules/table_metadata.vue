<template>
  <div>
    <div class="card">
      <div class="card-header card-header-info card-header-icon">
        <div class="card-icon">
          <i class="material-icons">assignment</i>
        </div>
        <h4 class="card-title" id="datatablessss">
          ตารางแสดงรายการชุดข้อมูล
        </h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <button
              class="btn btn-primary"
              rel="tooltip"
              data-placement="top"
              data-original-title="คลิกเพื่อเพิ่มข้อมูล"
              @click="addMetadata()"
            >
              <span class="btn-label"><i class="material-icons">add</i></span>
              เพิ่มชุดข้อมูล
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="material-datatables">
              <table
                ref="lists"
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
                    v-if="fetchDmsMetadataList.length == 0"
                    class="text-center"
                  >
                    <td colspan="7">
                      ไม่พบรายการในตาราง
                    </td>
                  </tr>
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
                      <!-- <button
                        type="button"
                        rel="tooltip"
                        class="btn btn-fab"
                        data-placement="top"
                        title="คลิกเพื่อนำเข้าชุดข้อมูล"
                        data-toggle="modal"
                        data-target="#importModal"
                      >
                        <i class="material-icons">upload_file</i>
                      </button> -->
                      <button
                        type="button"
                        rel="tooltip"
                        class="btn btn-fab btn-primary"
                        data-placement="top"
                        title="คลิกเพื่อค้นหาข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        style="margin-left: 5px"
                        v-on:click="openInfo(value.meta_id)"
                      >
                        <i class="material-icons">search</i>
                      </button>
                      <button
                        type="button"
                        rel="tooltip"
                        class="btn btn-fab btn-warning"
                        data-placement="top"
                        title="คลิกเพื่อแก้ไขข้อมูล"
                        style="margin-left: 5px"
                        v-on:click="openEdit(value.meta_id)"
                      >
                        <i class="material-icons">edit</i>
                      </button>
                      <button
                        type="button"
                        rel="tooltip"
                        class="btn btn-fab btn-danger"
                        data-placement="top"
                        title="คลิกเพื่อลบข้อมูล"
                        style="margin-left: 5px"
                        v-on:click="openDelete(value.meta_id)"
                      >
                        <i class="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-12">
        <pre>{{ fetchDmsMetadataList[0] }}</pre>
      </div>
    </div> -->

    <!-- Info Modal -->
    <div id="content">
      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content" id="section-to-print">
            <div class="modal-header">
              <h3 class="modal-title text-left" style="margin: 5px">
                ชื่อชุดข้อมูล: {{ modalTitle }}
              </h3>
              <button
                class="btn btn-primary btn-modal"
                data-placement="top"
                title="ส่งออกคำอธิบายข้อมูล"
                style="margin: 0px"
                id="btncapture"
                @click="generatePdf"
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

    <!-- Import Modal -->
    <div>
      <div
        class="modal fade"
        id="importModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title text-left" style="margin: 5px">
                นำเข้าชุดข้อมูล: {{ modalTitle }}
              </h3>
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
            <MetadataImport />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions, mapGetters } from "vuex";
import MetadataInfo from "./metadata_info.vue";
import MetadataImport from "./metadata_import.vue";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

export default {
  name: "TableMetadata",
  components: {
    MetadataInfo,
    MetadataImport,
  },
  data() {
    return {
      modalTitle: "",
    };
  },
  created() {
    this.fetchDmsMetadataAction();
  },
  mounted() {
    // var _this = this;
    this.$nextTick(() => {
      $(function() {
        $("#btncapture").click(async function() {
          window.print();
        });
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        // $(".btn-action1").click(function(e) {
        //   console.log(e)
        //   _this.openModal(e, "info");
        // });
        // $(".btn-action2").click(function(e) {
        //   _this.openModal(e, "edit");
        // });
        // $(".btn-action3").click(function(e) {
        //   _this.openModal(e, "delete");
        // });
      });
    });
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
      setMetaIdAction: "technical_metadata/setMetaId",
    }),
    async addMetadata() {
      await this.setTypeFormEditBAction(false);
      this.$router.replace({ path: "/metadata/business_form" });
    },
    openModal(e, type) {
      let meta_id = e.currentTarget.id;
      console.log(meta_id + " " +type)
      if (type == "info") this.openInfo(parseInt(meta_id));
      if (type == "edit") this.openEdit(parseInt(meta_id));
      if (type == "delete") this.openDelete(parseInt(meta_id));
    },
    async openInfo(meta_id) {
      let index = await this.fetchDmsMetadataList.findIndex(
        (item) => item.meta_id === meta_id
      );
      let obj_metadata = this.fetchDmsMetadataList[index];

      await this.setCurrentDmsMetadataAction(obj_metadata);
      await this.getBusinessMetadataAction();
      if (obj_metadata.dms_technical_metadatum == null) {
        await this.getTechnicalMetadataAction(null);
      } else {
        console.log(obj_metadata.dms_technical_metadatum);
        await this.getTechnicalMetadataAction(
          obj_metadata.dms_technical_metadatum.tsm_id
        );
      }
      await this.setMetaIdAction(obj_metadata.meta_id);

      this.modalTitle = obj_metadata.meta_name;
    },
    async openEdit(meta_id) {
      let index = this.fetchDmsMetadataList.findIndex(
        (item) => item.meta_id === meta_id
      );
      console.log("meta_id : " + meta_id);
      let obj_metadata = this.fetchDmsMetadataList[index];
      this.modalTitle = obj_metadata.meta_name;

      this.$swal
        .fire({
          title: "เลือกรายการที่ต้องการแก้ไข",
          text: "ชื่อชุดข้อมูล: " + obj_metadata.meta_name,
          width: 650,
          icon: "question",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Business",
          denyButtonText: "Technical",
          cancelButtonText: "ยกเลิก",
          denyButtonColor: "#999999",
          cancelButtonColor: "#F44336",
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            // Edit Business metadata
            await this.setTypeFormEditBAction(true);
            await this.setCurrentDmsMetadataAction(obj_metadata);
            await this.getBusinessMetadataAction();
            this.$router.replace({ path: "/metadata/business_form" });
          } else if (result.isDenied) {
            // Edit Technical metadata
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
    async openDelete(meta_id) {
      let index = this.fetchDmsMetadataList.findIndex(
        (item) => item.meta_id === meta_id
      );
      let obj_metadata = this.fetchDmsMetadataList[index];
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
    generatePdf() {
      console.log("pdf");
    },
  },
};
</script>

<style>
@media print {
  body * {
    visibility: hidden;
  }
  #section-to-print,
  #section-to-print * {
    visibility: visible;
  }
}
.pagination {
  display: inline-flex;
}
</style>
