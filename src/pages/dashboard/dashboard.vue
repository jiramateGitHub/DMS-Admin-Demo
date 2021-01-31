<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">equalizer</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลทั้งหมด</p>
              <h3 class="card-title">
                <span class="text-success">100</span> / 100
              </h3>
            </div>
            <div class="card-footer text-right">
              <button @click="getUser()">get User from API</button> <br />
              {{ user }}
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
                <div class="col-md-12">
                  <i class="fa fa-circle text-info"></i> Apple
                  <i class="fa fa-circle text-warning"></i> Samsung
                  <i class="fa fa-circle text-danger"></i> Windows Phone
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">equalizer</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลส่วนบุคคล</p>
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
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">equalizer</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลสาธารณะ</p>
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
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">equalizer</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลความลับทางราชการ</p>
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
          <div class="card card-stats">
            <div class="card-header card-header-rose card-header-icon">
              <div class="card-icon">
                <i class="material-icons">equalizer</i>
              </div>
              <p class="card-category">จำนวนชุดข้อมูลความมั่นคง</p>
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      firstName: process.env.API_URL + "/dms_base_categories",
      url: process.env.VUE_APP_TITLE,
    };
  },
  methods: {
    ...mapActions({
      getUser: "metadata_management/getUser",
    }),
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
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
