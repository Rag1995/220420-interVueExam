<template>
  <b-container class="about">
    <b-table
      striped
      hover
      small
      :fields="fields"
      :items="itemsWithIndex"
      :thead-class="`bg-${theme}`"
      :table-variant="`${theme}`"
    >
      <template #cell(complete)="{ value }">
        <fa-icon
          v-if="value"
          :icon="['fas', 'circle-check']"
          size="lg"
          class="text-success"
        />
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "About",
  },
  data() {
    return {
      fields: [
        {
          key: "index",
          label: "#",
          sortable: true,
        },
        {
          key: "complete",
          label: "進度",
          sortable: true,
          thClass: "text-nowrap",
        },
        {
          key: "description",
          label: "敘述",
          sortable: false,
          class: "text-left text-pre-line",
        },
      ],
      items: [
        { complete: true, description: `用Vue Cli或Nuxt 完成以下功能` },
        { complete: true, description: `以scss撰寫內容樣式` },
        { complete: true, description: `應用component功能` },
        { complete: true, description: `應用computed功能` },
        {
          complete: true,
          description: `製作輸入類型 text, radio, select、同一component切換prop來改變對應的輸入類型，並可套用v-model`,
        },
        { complete: true, description: `可切換頁面` },
        { complete: true, description: `設定頁面title, description` },
        {
          complete: true,
          description: `設定Global參數、讓頁面的顏色、主題會隨著更換`,
        },
        {
          complete: true,
          description: `串接一組列表資料api\n[https://mocki.io/fake-json-api](https://mocki.io/fake-json-api)`,
        },
        {
          complete: false,
          description: `程式架構做到最大的沿用性、維護性，並於Readme說明你的想法`,
        },
        {
          complete: false,
          description: `使用Firebase Hosting，提供連結給我們進行瀏覽`,
        },
        {
          complete: true,
          description: `提供Github程式碼`,
        },
      ],
    };
  },
  computed: {
    ...mapState(["theme"]),
    itemsWithIndex() {
      return this.items.map((el, index) => ({ ...el, index: index + 1 }));
    },
  },
};
</script>
