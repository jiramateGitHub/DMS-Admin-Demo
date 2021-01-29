<template>
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
                    class="table table-striped table-color-header table-hover table-border"
                    cellspacing="0"
                    width="100%"
                    style="width: 100%"
                  >
                    <thead>
                      <tr class="text-center">
                        <th width="10%">รหัสชุดข้อมูล</th>
                        <th width="30%">ชุดข้อมูล</th>
                        <th width="15%">เจ้าของชุดข้อมูล</th>
                        <th width="15%">หมวดหมู่ข้อมูล</th>
                        <th width="10%">วันที่ปรับปรุง</th>
                        <th width="20%" class="disabled-sorting">
                          การดำเนินการ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(food, index) in fetchDmsMetadataList"
                        :key="index"
                      >
                        <td class="text-center">{{ index + 1 }}</td>
                        <td v-if="index !== editIndex">{{ food.meta_code }}</td>
                        <td v-if="index !== editIndex">{{ food.meta_name }}</td>
                        <td v-if="index !== editIndex">
                          {{ food.dms_base_category.bc_name }}
                        </td>
                        <td v-if="index !== editIndex" class="text-center">
                          {{ food.meta_update_time | moment("calendar") }}
                        </td>
                        <td v-if="index !== editIndex" class="text-center">
                          <button
                            type="button"
                            rel="tooltip"
                            class="btn btn-primary"
                            data-placement="top"
                            title="คลิกเพื่อค้นหาข้อมูล"
                            data-toggle="modal"
                            data-target="#myModal"
                            v-on:click="openInfo(food)"
                          >
                            <i class="material-icons">search</i>
                          </button>
                          <button
                            style="margin-left: 5px"
                            type="button"
                            rel="tooltip"
                            class="btn btn-warning"
                            data-placement="top"
                            title="คลิกเพื่อแก้ไขข้อมูล"
                            v-on:click="openEdit(food)"
                          >
                            <i class="material-icons">edit</i>
                          </button>
                          <button
                            style="margin-left: 5px"
                            type="button"
                            rel="tooltip"
                            class="btn btn-danger"
                            data-placement="top"
                            title="คลิกเพื่อลบข้อมูล"
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
          <MetadataInfo />
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
      infoIndex: -1,
      editIndex: -1,
      modalTitle: "",
    };
  },
  created() {
    this.fetchDmsMetadataAction();
  },
  methods: {
    ...mapActions({
      fetchDmsMetadataAction: "metadata_management/fetchDmsMetadata",
      setCurrentMetadataAction: "metadata_management/setCurrentMetadata",
      getBusinessMetadataAction: "metadata_management/getBusinessMetadata",
    }),
    addMetadata() {
      this.$router.replace({ path: "/metadata/business_form" });
    },
    async openInfo(obj_metadata) {
      this.modalTitle = obj_metadata.meta_name;
      await this.setCurrentMetadataAction(obj_metadata);
      await this.getBusinessMetadataAction();
    },
     openEdit(obj_metadata) {
      this.$swal
        .fire({
          title: "เลือกรายการที่ต้องการแก้ไข",
          text: "ชื่อชุดข้อมูล: "+obj_metadata.meta_name,
          width: 650,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Business`,
          denyButtonText: `Technical`,
          cancelButtonText: `ยกเลิก`,
          denyButtonColor: "#999999",
          cancelButtonColor: "#F44336"
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            this.$swal.fire("Changes are not saved", "", "info");
          }
        });

      // await this.setCurrentMetadataAction(obj_metadata);
      // await this.getBusinessMetadataAction();
    },
  },
  computed: {
    ...mapGetters({
      fetchDmsMetadataList: "metadata_management/fetchDmsMetadata",
    }),
  },
};
</script>