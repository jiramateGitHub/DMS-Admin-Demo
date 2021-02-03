<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">table_chart</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลทั้งหมด</p>
              <h3 class="card-title">
                <span class="text-success">{{
                  countDmsMetadataByBc[0] +
                    countDmsMetadataByBc[2] +
                    countDmsMetadataByBc[4] +
                    countDmsMetadataByBc[6]
                }}</span>
                / {{(countDmsMetadataByBc[0] + countDmsMetadataByBc[1]) +
                (countDmsMetadataByBc[2] + countDmsMetadataByBc[3]) +
                (countDmsMetadataByBc[4] + countDmsMetadataByBc[5]) +
                (countDmsMetadataByBc[6] + countDmsMetadataByBc[7])}}
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
          <div class="card card-chart">
            <div class="card-header card-header-icon card-header-info">
              <div class="card-icon">
                <i class="material-icons">pie_chart</i>
              </div>
              <h4 class="card-title">Pie Chart</h4>
            </div>
            <div class="card-body">
              <div id="chartPreferences" class="ct-chart"></div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-md-12">
                  <h6 class="card-category">Legend</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">accessibility</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลส่วนบุคคล</p>
              <h3 class="card-title">
                <span class="text-success">{{ countDmsMetadataByBc[0] }}</span>
                / {{ countDmsMetadataByBc[0] + countDmsMetadataByBc[1] }}
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

          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">policy</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลความลับทางราชการ</p>
              <h3 class="card-title">
                <span class="text-success">{{ countDmsMetadataByBc[2] }}</span>
                / {{ countDmsMetadataByBc[2] + countDmsMetadataByBc[3] }}
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
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">gavel</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลความมั่นคง</p>
              <h3 class="card-title">
                <span class="text-success">{{ countDmsMetadataByBc[4] }}</span>
                / {{ countDmsMetadataByBc[4] + countDmsMetadataByBc[5] }}
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
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">public</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลสาธารณะ</p>
              <h3 class="card-title">
                <span class="text-success">{{ countDmsMetadataByBc[6] }}</span>
                / {{ countDmsMetadataByBc[6] + countDmsMetadataByBc[7] }}
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      firstName: process.env.API_URL + "/dms_base_categories",
      url: process.env.VUE_APP_TITLE,
    };
  },
  created() {
    this.countDmsMetadataByBcAction();
  },
  methods: {
    ...mapActions({
      countDmsMetadataByBcAction: "metadata_management/countDmsMetadataByBc",
    }),
  },
  computed: {
    ...mapGetters({
      countDmsMetadataByBc: "metadata_management/countDmsMetadataByBc",
    }),
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
