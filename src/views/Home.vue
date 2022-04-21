<template>
  <b-container class="home">
    <theme-radio-group />
    <divider class="my-4" />

    <f-dynamic-control v-model="input" />
    <divider class="my-4" />

    <fake-data-table />
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      input: "",
    };
  },
  components: {
    divider: () => import("../components/divider.vue"),
    "theme-radio-group": () => import("../components/theme-radio-group.vue"),
    "f-dynamic-control": () => import("../components/f-dynamic-control.vue"),
    "fake-data-table": () => import("../components/fake-data-table.vue"),
  },
};
</script>
