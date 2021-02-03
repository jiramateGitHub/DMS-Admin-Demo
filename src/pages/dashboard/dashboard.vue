<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">table_chart</i>
              </div>
              <h3 class="card-title">จำนวนชุดข้อมูลทั้งหมด</h3>
              <h3 class="card-title">
                <span class="text-success">{{
                  countDmsMetadataByBc[0] +
                    countDmsMetadataByBc[2] +
                    countDmsMetadataByBc[4] +
                    countDmsMetadataByBc[6]
                }}</span>
                /
                {{
                  countDmsMetadataByBc[0] +
                    countDmsMetadataByBc[1] +
                    (countDmsMetadataByBc[2] + countDmsMetadataByBc[3]) +
                    (countDmsMetadataByBc[4] + countDmsMetadataByBc[5]) +
                    (countDmsMetadataByBc[6] + countDmsMetadataByBc[7])
                }}
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
              <h4 class="card-title">
                กราฟรายงานจำนวนชุดข้อมูลจำแนกตามหมวดหมู่ข้อมูล
              </h4>
            </div>
            <div class="card-body">
              <div class="container">
                <pie-chart :chart-data="dataPoints" />
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
              <h4 class="card-title">จำนวนชุดข้อมูลส่วนบุคคล</h4>
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
              <h4 class="card-title">จำนวนชุดข้อมูลความลับทางราชการ</h4>
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
              <h4 class="card-title">จำนวนชุดข้อมูลความมั่นคง</h4>
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
              <h4 class="card-title">จำนวนชุดข้อมูลสาธารณะ</h4>
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
import PieChart from "./pie_chart";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    PieChart,
  },
  data() {
    return {
      dataPoints: null,
    };
  },
  created() {
    this.countDmsMetadataByBcAction();
  },
  mounted() {
    setInterval(() => {
      this.fillData();
    }, 500);
  },
  methods: {
    ...mapActions({
      countDmsMetadataByBcAction: "metadata_management/countDmsMetadataByBc",
    }),
    fillData() {
      let value = [];
      value[0] = this.countDmsMetadataByBc[0] + this.countDmsMetadataByBc[1];
      value[1] = this.countDmsMetadataByBc[2] + this.countDmsMetadataByBc[3];
      value[2] = this.countDmsMetadataByBc[4] + this.countDmsMetadataByBc[5];
      value[3] = this.countDmsMetadataByBc[6] + this.countDmsMetadataByBc[7];
      this.dataPoints = {
        labels: [
          "ข้อมูลส่วนบุคคล",
          "ข้อมูลความลับทางราชการ",
          "ข้อมูลความมั่นคง",
          "ข้อมูลสาธารณะ",
        ],
        datasets: [
          {
            backgroundColor: ["#4535AA", "#D6D1F5", "#ED639E", "#B05CBA"],
            data: [value[0], value[1], value[2], value[3]],
          },
        ],
      };
    },
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
