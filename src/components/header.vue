<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" class="justify-content-center" is-nav>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/"> Home </b-nav-item>
              <b-nav-item to="users"> Users </b-nav-item>
              <b-nav-item to="user"> User </b-nav-item>
              <b-nav-item to="sidebar"> Sidebar </b-nav-item>
              <b-nav-item to="logout"> Logout </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style></style>
