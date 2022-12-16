import home from "./components/home.vue";
import login from "./components/login.vue";
import users from "./components/users.vue";
import user from "./components/user.vue";
import sidebar from "./components/sidebar.vue";
import logout from "./components/logout.vue";

const Routestobeprotected = ["home", "users", "user", "sidebar", "logout"];
const isLogin = () => {
  return localStorage.getItem("user");
};
const routes = [
  { path: "/login", name: "login", component: login },

  { path: "/", name: "login", component: home },
  {
    path: "/users",
    name: "users",
    component: users,
    beforeEnter(to, from, next) {
      console.log(to, from);
      const isprotected = Routestobeprotected.includes(to.name);
      console.log("isprotected", isprotected);
      if (isprotected && !isLogin()) {
        next({
          path: "login",
        });
      } else next();
    },
  },
  {
    path: "/user",
    name: "user",
    component: user,
    beforeEnter(to, from, next) {
      console.log(to, from);

      const isprotected = Routestobeprotected.includes(to.name);
      console.log("isprotected", isprotected);

      if (isprotected && !isLogin()) {
        next({
          path: "login",
        });
      } else next();
    },
  },
  {
    path: "/sidebar",
    name: "sidebar",
    component: sidebar,
    beforeEnter(to, from, next) {
      console.log(to, from);
      const isprotected = Routestobeprotected.includes(to.name);
      if (isprotected && !isLogin()) {
        next({
          path: "login",
        });
      } else next();
    },
  },
  { path: "/logout", name: "logout", component: logout },
 
];

export default routes;
