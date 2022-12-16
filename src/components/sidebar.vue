<template>
  <div class="container">
    <h1>Sidebar-page</h1>
    <div class="row">
      <b-card
        v-for="item in items"
        :key="item.id"
        :title="item.name"
        img-alt="Image"
        img-top
        :img-src="`https://avatars.dicebear.com/api/male/ +${item.name}.svg`"
        class="mb-2 col-4"
      >
        <b-card-text>
          <b-button @click="openSidebar(item)">View more</b-button>
        </b-card-text>
      </b-card>
      <b-sidebar
        id="sidebar-right"
        title="Sidebar"
        right
        shadow
        v-model="visible"
      >
        <div class="px-3 py-2">
          <div v-for="sidebardata in sidebarDatas" :key="sidebardata.id">
            <p  :class="sidebardata.completed? 'text-success' : 'text-warning'">{{sidebardata.title}}</p>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sidebar-page",
  data() {
    return {
      items: [],
      visible: false,
      sidebarDatas: null,
    };
  },
  components: {},
  async created() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => (this.items = response.data));
  },
  methods: {
    async openSidebar(item) {
      this.visible = true;
      console.log("item", item.id);
      // this.sidebarData = item;
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          this.sidebarDatas = response.data.filter((element) => {
            if (element.userId === item.id) return element;
          });
        });
    },
  },
};
</script>

<style></style>
