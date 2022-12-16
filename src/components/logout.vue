<template>
  <h1>Logout-page</h1>
</template>

<script>
export default {
  name: "logout-page",
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("user", "");
    this.$router.push("/login");
  },
  methods: {},
};
</script>

<style></style>
