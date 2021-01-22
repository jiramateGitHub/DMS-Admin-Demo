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
            <div class="card-footer text-right"></div>
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
            <div class="card-footer text-right"></div>
          </div>
        </div>
      </div>
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
              <div class="material-datatables">
                <div
                  id="datatables_wrapper"
                  class="dataTables_wrapper dt-bootstrap4"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div class="dataTables_length" id="datatables_length">
                        <label
                          >Show
                          <select
                            name="datatables_length"
                            aria-controls="datatables"
                            class="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="-1">All</option>
                          </select>
                          entries</label
                        >
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div id="datatables_filter" class="dataTables_filter">
                        <label
                          ><span class="bmd-form-group bmd-form-group-sm"
                            ><input
                              type="search"
                              class="form-control form-control-sm"
                              placeholder="Search records"
                              aria-controls="datatables" /></span
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        id="datatables"
                        class="table table-striped table-color-header table-hover table-border dataTable dtr-inline"
                        cellspacing="0"
                        width="100%"
                        style="width: 100%"
                        role="grid"
                        aria-describedby="datatables_info"
                      >
                        <thead class="text-primary">
                          <tr role="row">
                            <th
                              class="sorting_asc"
                              tabindex="0"
                              aria-controls="datatables"
                              rowspan="1"
                              colspan="1"
                              style="width: 149px"
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                            >
                              รหัสชุดข้อมูล
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="datatables"
                              rowspan="1"
                              colspan="1"
                              style="width: 231px"
                              aria-label="Position: activate to sort column ascending"
                            >
                              ชุดข้อมูล
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="datatables"
                              rowspan="1"
                              colspan="1"
                              style="width: 115px"
                              aria-label="Office: activate to sort column ascending"
                            >
                              เจ้าของชุดข้อมูล
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="datatables"
                              rowspan="1"
                              colspan="1"
                              style="width: 37px"
                              aria-label="Age: activate to sort column ascending"
                            >
                              หมวดหมู่ข้อมูล
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="datatables"
                              rowspan="1"
                              colspan="1"
                              style="width: 89px"
                              aria-label="Date: activate to sort column ascending"
                            >
                              วันที่ปรับปรุง
                            </th>
                            <th
                              class="disabled-sorting sorting"
                              tabindex="0"
                              aria-controls="datatables"
                              rowspan="1"
                              colspan="1"
                              style="width: 119px"
                              aria-label="Actions: activate to sort column ascending"
                            >
                              ดำเนินการ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" class="odd">
                            <td tabindex="0" class="sorting_1">Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td class="text-center">33</td>
                            <td class="text-center">2008/11/28</td>
                            <td class="td-actions text-center">
                              <button
                                type="button"
                                rel="tooltip"
                                class="btn btn-primary"
                                data-placement="top"
                                title=""
                                data-original-title="คลิกเพื่อค้นหาข้อมูล"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <i class="material-icons">search</i>
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                rel="tooltip"
                                class="btn btn-warning"
                                data-placement="top"
                                title=""
                                data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              >
                                <i class="material-icons">edit</i>
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                rel="tooltip"
                                class="btn btn-danger"
                                data-placement="top"
                                title=""
                                data-original-title="คลิกเพื่อลบข้อมูล"
                              >
                                <i class="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr role="row" class="even">
                            <td class="sorting_1" tabindex="0">
                              Angelica Ramos
                            </td>
                            <td>Chief Executive Officer (CEO)</td>
                            <td>London</td>
                            <td class="text-center">47</td>
                            <td class="text-center">2009/10/09</td>
                            <td class="td-actions text-center">
                              <button
                                type="button"
                                rel="tooltip"
                                class="btn btn-primary"
                                data-placement="top"
                                title=""
                                data-original-title="คลิกเพื่อค้นหาข้อมูล"
                              >
                                <i class="material-icons">search</i>
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                rel="tooltip"
                                class="btn btn-warning"
                                data-placement="top"
                                title=""
                                data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              >
                                <i class="material-icons">edit</i>
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                rel="tooltip"
                                class="btn btn-danger"
                                data-placement="top"
                                title=""
                                data-original-title="คลิกเพื่อลบข้อมูล"
                              >
                                <i class="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div
                        class="dataTables_info"
                        id="datatables_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 40 entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div
                        class="dataTables_paginate paging_full_numbers"
                        id="datatables_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item first disabled"
                            id="datatables_first"
                          >
                            <a
                              href="#"
                              aria-controls="datatables"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                              >First</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item previous disabled"
                            id="datatables_previous"
                          >
                            <a
                              href="#"
                              aria-controls="datatables"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >Prev</a
                            >
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="datatables"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                              >1</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next"
                            id="datatables_next"
                          >
                            <a
                              href="#"
                              aria-controls="datatables"
                              data-dt-idx="6"
                              tabindex="0"
                              class="page-link"
                              >Next</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item last"
                            id="datatables_last"
                          >
                            <a
                              href="#"
                              aria-controls="datatables"
                              data-dt-idx="7"
                              tabindex="0"
                              class="page-link"
                              >Last</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <MetadataInfo />
    </div>
  </div>
</template>

<script>
import MetadataInfo from "./metadata_info.vue";

export default {
  name: "Metadata",

  props: {},
  components: {
    MetadataInfo,
  },
  methods: {
    addMetadata() {
      this.$router.push({ path: "/metadata/business_form" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
