import { VTextField } from "vuetify/components/VTextField";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VBtn: {
        style: "text-transform: none",
      },
      VTextField: {
        variant: "outlined",
        density: "compact",
      },
      VSelect: {
        variant: "outlined",
        density: "compact",
      },
    },
  });
  app.vueApp.use(vuetify);
});
