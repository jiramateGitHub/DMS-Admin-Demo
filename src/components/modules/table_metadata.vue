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
                  เพิ่มข้อมูล
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
                        <th>รหัสชุดข้อมูล</th>
                        <th>ชุดข้อมูล</th>
                        <th>เจ้าของชุดข้อมูล</th>
                        <th>หมวดหมู่ข้อมูล</th>
                        <th>วันที่ปรับปรุง</th>
                        <th class="disabled-sorting">การดำเนินการ</th>
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
                        <td v-if="index !== editIndex">{{ food.dms_base_category.bc_name }}</td>
                        <td v-if="index !== editIndex" class="text-center">{{ food.meta_update_time| moment("calendar")  }}</td>
                        <td v-if="index !== editIndex" class="text-center">
                          <button
                            type="button"
                            class="btn btn-danger mr-2"
                            v-on:click="deleteFood(index, food._id)"
                          >
                            ลบ
                          </button>
                          <button
                            type="button"
                            class="btn btn-warning"
                            v-on:click="openEdit(index, food)"
                          >
                            แก้ไข
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <pre>{{ fetchDmsMetadataList }}</pre>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-md-12">
                <div class="material-datatables">
                  <table
                    id="datatables"
                    class="table table-striped table-color-header table-hover table-border"
                    cellspacing="0"
                    width="100%"
                    style="width: 100%"
                  >
                    <thead class="text-primary">
                      <tr>
                        <th>รหัสชุดข้อมูล</th>
                        <th>ชุดข้อมูล</th>
                        <th>เจ้าของชุดข้อมูล</th>
                        <th>หมวดหมู่ข้อมูล</th>
                        <th>วันที่ปรับปรุง</th>
                        <th class="disabled-sorting">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td class="text-center">61</td>
                        <td class="text-center">25/04/2011</td>
                        <td class="td-actions text-center">
                          <button
                            type="button"
                            rel="tooltip"
                            class="btn btn-primary"
                            data-placement="top"
                            title="คลิกเพื่อค้นหาข้อมูล"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            <i class="material-icons">search</i>
                          </button>
                          <button
                            type="button"
                            rel="tooltip"
                            class="btn btn-warning"
                            data-placement="top"
                            title="คลิกเพื่อแก้ไขข้อมูล"
                          >
                            <i class="material-icons">edit</i>
                          </button>
                          <button
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
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <MetadataInfo />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MetadataInfo from "../../pages/metadata/metadata_info.vue";

export default {
  name: "TableMetadata",
  props: {},
  components: {
    MetadataInfo,
  },
  data() {
    return {
      editIndex: -1,
      name: "",
      price: 0,
    };
  },
  created() {
    this.fetchDmsMetadataAction();
  },
  methods: {
    ...mapActions({
      fetchDmsMetadataAction: "metadata_management/fetchDmsMetadata",
    }),
    addMetadata() {
      this.$router.replace({ path: "/metadata/business_form" });
    },
  },
  computed: {
    ...mapGetters({
      fetchDmsMetadataList: "metadata_management/fetchDmsMetadata",
    }),
  },
};
</script>