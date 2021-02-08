<template>
  <div>
    <div class="col-md-12">
      <div class="card ">
        <div class="card-header card-header-info card-header-icon">
          <div class="card-icon">
            <i class="material-icons">settings</i>
          </div>
          <h4 class="card-title">
            จัดการข้อมูลพื้นฐานในระบบ
          </h4>
        </div>
        <div class="card-body ">
          <div class="row">
            <div class="col-md-3">
              <ul
                class="nav nav-pills nav-pills-primary flex-column"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                    style="text-align: left;"
                  >
                    หมวดหมู่ข้อมูล
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                    style="text-align: left;"
                  >
                    กลุ่มข้อมูล
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                    style="text-align: left;"
                  >
                    หน่วยงานภายใน
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                    style="text-align: left;"
                  >
                    ภาษาที่ใช้
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link5"
                    role="tablist"
                    style="text-align: left;"
                  >
                    รูปแบบข้อมูล
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link6"
                    role="tablist"
                    style="text-align: left;"
                  >
                    ความถี่ในการเผยแพร่ข้อมูล
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link7"
                    role="tablist"
                    style="text-align: left;"
                  >
                    ขอบเขตที่เผยแพร่ข้อมูล
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link8"
                    role="tablist"
                    style="text-align: left;"
                  >
                    สิทธิ์ในการใช้ข้อมูล
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#link9"
                    role="tablist"
                    style="text-align: left;"
                  >
                    ระดับชั้นความลับ
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div class="tab-content">
                <div class="tab-pane active" id="link1">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(1, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มหมวดหมู่ข้อมูล
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_categories.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_categories"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.bc_name }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(1, true, value.bc_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(1, value.bc_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link2">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(2, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มกลุ่มข้อมูล
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_datagroups.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_datagroups"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.grp_name }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(2, true, value.grp_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(2, value.grp_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link3">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(3, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มหน่วยงานภายใน
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_institution.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_institution"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.ins_name }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(3, true, value.ins_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(3, value.ins_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link4">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(4, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มภาษา
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_languages.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_languages"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.lg_text }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(4, true, value.lg_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(4, value.lg_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link5">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(5, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มรูปแบบข้อมูล
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_formats.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_formats"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.ft_text }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(5, true, value.ft_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(5, value.ft_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link6">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(6, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มความถี่ในการเผยแพร่ข้อมูล
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_durations.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_durations"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.dt_text }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(6, true, value.dt_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(6, value.dt_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link7">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(7, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มขอบเขตที่เผยแพร่ข้อมูล
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_scopes.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_scopes"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.sc_text }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(7, true, value.sc_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(7, value.sc_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link8">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(8, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มสิทธิ์ในการใช้ข้อมูล
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="
                            fetchBaseConfig.dms_base_permissions.length == 0
                          "
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_permissions"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.pers_text }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(8, true, value.pers_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(8, value.pers_id)"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="link9">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary"
                        rel="tooltip"
                        data-placement="top"
                        data-original-title="คลิกเพื่อเพิ่มข้อมูล"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="changeTypeBase(9, false)"
                      >
                        <span class="btn-label"
                          ><i class="material-icons">add</i></span
                        >
                        เพิ่มระดับชั้นความลับ
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table
                      class="table table-striped table-hover table-color-header table-border"
                    >
                      <thead>
                        <tr>
                          <th width="10%">#</th>
                          <th>รายละเอียด</th>
                          <th width="20%">ดำเนินการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-if="fetchBaseConfig.dms_base_classified.length == 0"
                          class="text-center"
                        >
                          <td colspan="7">
                            ไม่พบรายการในตาราง
                          </td>
                        </tr>
                        <tr
                          v-for="(value,
                          index) in fetchBaseConfig.dms_base_classified"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td>{{ value.cf_text }}</td>
                          <td class="text-center">
                            <!-- <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-warning"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อแก้ไขข้อมูล"
                              @click="changeTypeBase(9, true, value.cf_id)"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                            &nbsp; -->
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-fab btn-danger"
                              data-placement="top"
                              title=""
                              data-original-title="คลิกเพื่อลบข้อมูล"
                              v-on:click="openDelete(9, value.cf_id)"
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
    </div>

    <!-- Classic Modal -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-left" style="margin: 5px">
              เพิ่ม{{ modalTitle[typeBase] }}
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
          <div class="modal-body">
            <div class="row section-form">
              <div class="col-sm-12">
                <label class="form__label"
                  >ชุด{{ modalTitle[typeBase] }} <code>*</code>
                  <span
                    v-if="submitted && !$v.form.inputValue.required"
                    class="text-danger"
                  >
                    This field is required.</span
                  >
                </label>
              </div>
              <div class="col-sm-12">
                <input
                  type="text"
                  placeholder=""
                  :class="{ 'input-required': $v.form.inputValue.$error }"
                  v-model="form.inputValue"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-sm-12 text-right">
              <button
                @click="formValidation()"
                class="btn btn-success"
                data-dismiss="modal"
                aria-hidden="true"
                title="คลิกเพื่อบันทึกข้อมูล"
              >
                <span>บันทึก</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: "BaseConfig",
  components: {},
  data() {
    return {
      submitted: null,
      typeBase: 0,
      typeFormEdit: false,
      form: {
        id: "",
        inputValue: "",
      },
      modalTitle: [
        "NAN",
        "หมวดหมู่ข้อมูล",
        "กลุ่มข้อมูล",
        "หน่วยงานภายใน",
        "ภาษาที่ใช้",
        "รูปแบบข้อมูล",
        "ความถี่ในการเผยแพร่ข้อมูล",
        "ขอบเขตที่เผยแพร่ข้อมูล",
        "สิทธิ์ในการใช้ข้อมูล",
        "ระดับชั้นความลับ",
      ],
    };
  },
  validations: {
    form: {
      inputValue: {
        required,
        minLength: maxLength(255),
      },
    },
  },
  created() {
    this.fetchBaseConfigAction();
  },
  computed: {
    ...mapGetters({
      fetchBaseConfig: "base_config/fetchBaseConfig",
      baseSaveStatus: "base_config/baseSaveStatus",
    }),
  },
  methods: {
    ...mapActions({
      fetchBaseConfigAction: "base_config/fetchBaseConfig",
      saveAction: "base_config/saveBase",
      updateAction: "base_config/updateBase",
      deleteAction: "base_config/deleteBase",
    }),
    changeTypeBase(type, bool, base_id = null) {
      this.typeBase = type;
      this.typeFormEdit = bool;
      this.form.id = base_id;
    },
    formValidation() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.formSave();
    },
    async formSave() {
      let payload = {
        form: this.form,
        base_type: this.typeBase,
      };

      if (this.typeFormEdit) {
        // await this.updateAction(payload);
      } else {
        await this.saveAction(payload);
      }

      if (this.baseSaveStatus.code == 0) {
        this.$swal.fire({
          title: "บันทึกสำเร็จ",
          icon: "success",
          confirmButtonText: "ตกลง",
        });
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
      this.form.inputValue = ""
      await this.fetchBaseConfigAction();
    },
    async openDelete(base_type, base_id) {
      let payload = {
        base_type: base_type,
        base_id: base_id,
      };
      this.$swal
        .fire({
          title: "คุณต้องการลบใช่หรือไม่",
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
            await this.deleteAction(payload);
            await this.fetchBaseConfigAction();
            this.$swal.fire("ลบสำเร็จ!", "", "success");
          }
        });
    },
  },
};
</script>
