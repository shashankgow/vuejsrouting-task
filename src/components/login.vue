<template>
  <div class="container">
    <div class="col-4 mx-auto">
      <h1>login page</h1>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password" label-for="input-1">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter a password"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.form);
      localStorage.setItem("user", JSON.stringify(this.form));
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
