import { createRouter, createWebHistory } from "vue-router";
import MessageView from "../views/MessageView.vue";
import MineView from "@/views/MineView";
import ContactsView from "@/views/ContactsView";
const routes = [
  {
    path: "/",
    name: "message",
    component: MessageView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/mine",
    name: "mine",
    component: MineView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
