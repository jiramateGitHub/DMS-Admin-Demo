<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
              <div class="card-icon">
                <i class="material-icons">search</i>
              </div>
              <h3 class="card-title">
                <span>หมวดหมู่ข้อมูล</span>
              </h3>
            </div>
            <div class="card-footer text-right">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <v-select
                  placeholder="เลือกรายการ"
                  :options="vSelectBaseCategories"
                ></v-select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">public</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลสาธารณะ</p>
              <h3 class="card-title">
                <span class="text-success">4</span> / 4
              </h3>
            </div>
            <div class="card-footer text-right">
              <p class="card-category"></p>
              <div class="stats">
                <i class="material-icons">local_offer</i>
                <span class="text-success">ข้อมูลใช้งาน</span> /
                <span class="text-primary">ข้อมูลทั้งหมด</span>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">equalizer</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลทั้งหมด</p>
              <h3 class="card-title">
                <span class="text-success">100</span> / 100
              </h3>
            </div>
            <div class="card-footer text-right">
              <p class="card-category"></p>
              <div class="stats">
                <i class="material-icons">local_offer</i>
                <span class="text-success">ข้อมูลใช้งาน</span> /
                <span class="text-primary">ข้อมูลทั้งหมด</span>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-6">
          <div class="card">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">search</i>
              </div>
              <h4 class="card-title">ค้นหา</h4>
            </div>
            <div class="card-footer text-right">
              {{vSelectBaseCategories}}
            </div>
          </div>
        </div>
      </div>
      <TableMetadata />
    </div>
  </div>
</template>

<script>
import TableMetadata from "../../components/modules/table_metadata.vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Metadata",
  props: {},
  components: {
    TableMetadata,
  },
  created() {
    this.fetchBaseCategories();
  },
  methods: {
    ...mapActions({
      fetchBaseCategoriesAction: "dms_base_categories/fetchBaseCategories",
    }),
    fetchBaseCategories() {
      this.fetchBaseCategoriesAction();
    },
  },
  computed: {
    ...mapState({
      baseCategoriesList: (state) => state.metadata_management.base_categories,
    }),
     ...mapGetters({
      vSelectBaseCategories: 'dms_base_categories/vSelectBaseCategories'
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
