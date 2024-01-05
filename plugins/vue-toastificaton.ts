import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: "top-right",
    closeOnClick: false,
    pauseOnFocusLoss: false,
    transition: "Vue-Toastification__fade",
  });
});
