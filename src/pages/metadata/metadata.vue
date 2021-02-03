<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
              <div class="card-icon">
                <i class="material-icons">find_in_page</i>
              </div>
              <h3 class="card-title">
                <span>หมวดหมู่ข้อมูล</span>
              </h3>
            </div>
            <div class="card-footer text-left">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <label>หมวดหมู่ข้อมูล</label><br />
                <v-select
                  v-model="searchFilter.bc_id"
                  :options="optionBaseCategories"
                  @input="reloadTable"
                  :clearable="false"
                ></v-select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">search</i>
              </div>
              <h3 class="card-title">ค้นหา</h3>
            </div>
            <div class="card-footer text-left">
              <div class="col-md-4">
                <label>กลุ่มข้อมูล</label><br />
                <v-select
                  v-model="searchFilter.grp_id"
                  :options="optionBaseDatagroups"
                  @input="reloadTable"
                  :clearable="false"
                ></v-select>
              </div>
              <div class="col-md-4">
                <label>หน่วยงานภายใน</label><br />
                <v-select
                  v-model="searchFilter.ins_id"
                  :options="optionInstitution"
                  @input="reloadTable"
                  :clearable="false"
                ></v-select>
              </div>
              <div class="col-md-4">
                <label>สถานะชุดข้อมูล </label><br />
                <v-select
                  v-model="searchFilter.meta_active"
                  :options="optionActive"
                  @input="reloadTable"
                  :clearable="false"
                ></v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <TableMetadata />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TableMetadata from "../../components/modules/table_metadata.vue";

export default {
  name: "Metadata",
  data() {
    return {
      searchFilter: {
        case: 0,
        bc_id: {
          code: "0",
          label: "ทั้งหมด",
        },
        grp_id: {
          code: "0",
          label: "ทั้งหมด",
        },
        ins_id: {
          code: "0",
          label: "ทั้งหมด",
        },
        meta_active: {
          code: "1",
          label: "ใช้งาน",
        },
      },
      optionBaseCategories: [],
      optionBaseDatagroups: [],
      optionInstitution: [],
      optionActive: [
        { code: 1, label: "ใช้งาน" },
        { code: 2, label: "ไม่ใช้งาน" },
      ],
    };
  },
  components: {
    TableMetadata,
  },
  created() {
    this.fetchBaseCategories();
  },
  mounted() {
    this.optionBaseCategories = this.vSelectBaseCategories;
    this.optionBaseDatagroups = this.vSelectBaseDatagroups;
    this.optionInstitution = this.vSelectInstitution;

    this.optionActive.unshift({ code: 0, label: "ทั้งหมด" });
    this.optionBaseCategories.unshift({ code: 0, label: "ทั้งหมด" });
    this.optionBaseDatagroups.unshift({ code: 0, label: "ทั้งหมด" });
    this.optionInstitution.unshift({ code: 0, label: "ทั้งหมด" });
  },
  computed: {
    ...mapGetters({
      vSelectBaseCategories: "vselect_dms_base/vSelectBaseCategories",
      vSelectBaseDatagroups: "vselect_dms_base/vSelectBaseDatagroups",
      vSelectInstitution: "vselect_dms_base/vSelectInstitution",
    }),
  },
  methods: {
    ...mapActions({
      fetchBaseCategoriesAction: "vselect_dms_base/fetchBaseCategories",
      fetchBaseDatagroupsAction: "vselect_dms_base/fetchBaseDatagroups",
      fetchInstitutionAction: "vselect_dms_base/fetchInstitution",
      setFilterAction: "metadata_management/setFilter",
    }),
    async fetchBaseCategories() {
      await this.fetchBaseCategoriesAction();
      await this.fetchBaseDatagroupsAction();
      await this.fetchInstitutionAction();
    },
    reloadTable() {
      this.setFilterAction(this.searchFilter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  padding: 0px;
}
</style>
