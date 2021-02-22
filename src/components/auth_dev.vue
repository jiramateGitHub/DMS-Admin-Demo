<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-8 ml-auto mr-auto">
          <div class="card card-login card-hidden">
            <div class="card-body">
              {{ this.jwtToken }}
              <h3 class="text-center">Login</h3>
              <span class="bmd-form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">account_box</i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username..."
                    v-model="username"
                  />
                </div>
              </span>
              <span class="bmd-form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">no_encryption</i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password..."
                    v-model="password"
                  />
                </div>
              </span>
            </div>
            <div class="card-footer justify-content-center">
              <button
                class="btn btn-primary"
                rel="tooltip"
                data-placement="top"
                @click="login()"
              >
                login
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
export default {
  name: "AuthDev",
  components: {},
  data() {
    return {
      username: "aos.supakit",
      password: "aos.supakit",
    };
  },
  methods: {
    ...mapActions({
      authDevAction: "auth_dev/auth",
    }),
    async login() {
      let payload = {
        username: this.username,
        password: this.password,
      };
      await this.authDevAction(payload);
      console.log("localStorage.jwtToken : " + localStorage.jwtToken)
      console.log("localStorage.UsID : " + localStorage.UsID)
      await this.$router.replace({ path: "/dashboard" });
    },
  },
  computed: {
    ...mapGetters({
      jwtToken: "auth_dev/getToken",
    }),
  },
};
</script>
