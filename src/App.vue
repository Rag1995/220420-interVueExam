<template>
  <div id="app" :class="appClass" class="pb-5 pb-md-0">
    <app-navbar />

    <main>
      <router-view />
    </main>

    <div class="special px-3 py-2">
      <div class="ruby" />
      <div class="wolft" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - InterVueExam",
    htmlAttrs: {
      lang: "zh-TW",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "description", content: "A Vue App just for Interview Exam." },
    ],
  },
  computed: {
    ...mapState(["theme"]),
    appClass() {
      return {
        [`bg-${this.theme}-light`]: this.theme,
      };
    },
  },
  components: {
    "app-navbar": () => import("./components/app-navbar.vue"),
  },
};
</script>
