<template>
  <div>
    <h3 class="mb-3">串接 Api 資料：魔物獵人</h3>
    <b-table
      striped
      hover
      small
      :fields="fields"
      :items="items"
      :thead-class="`bg-${theme}`"
      :table-variant="`${theme}`"
    >
      <template #cell(egg)="{ value }">
        <div class="img-wrap">
          <b-img-lazy :src="`${url}/public/egg/${value}`" />
        </div>
      </template>
      <template #cell(icon)="{ value }">
        <div class="img-wrap">
          <b-img-lazy :src="`${url}/public/icon/${value}`" />
        </div>
      </template>
    </b-table>
    <div class="small text-pre-line d-flex flex-wrap justify-content-center">
      <span>Api Url： </span>
      <a :href="apiUrl">{{ apiUrl }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-wrap {
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>

<script>
import { mapState } from "vuex";
import dataApi from "../assets/js/dataApi";

export default {
  data() {
    return {
      fields: [
        {
          key: "No",
          label: "#",
          sortable: true,
          tdClass: "align-middle",
          thStyle: {
            width: "4rem",
          },
        },
        {
          key: "icon",
          label: "圖示",
          sortable: false,
          thClass: "text-center",
          thStyle: {
            width: "4rem",
          },
        },
        {
          key: "egg",
          label: "蛋",
          sortable: false,
          thClass: "text-center",
          thStyle: {
            width: "4rem",
          },
        },
        {
          key: "name_tw",
          label: "魔物",
          sortable: true,
          tdClass: "align-middle",
        },
        {
          key: "name_en",
          label: "英文",
          sortable: true,
          tdClass: "align-middle",
        },
      ],
      items: [],
      ready: false,
      url: "https://mhs2-api.herokuapp.com",
      apiUrl: "https://mocki.io/v1/db7edff9-be98-4b03-8737-ee2ef2411109",
    };
  },
  computed: {
    ...mapState(["theme"]),
  },
  mounted() {
    this.getData();
  },
  methods: {
    fetchDataApi() {
      return new Promise((resolve, reject) => {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(this.apiUrl, requestOptions)
          .then((response) => response.json())
          .then((result) => resolve(result))
          .catch((error) => reject(error));
      });
    },
    async getData() {
      this.ready = false;
      await this.fetchDataApi()
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        });
      this.ready = true;
    },
    getDataWithAxios() {
      dataApi
        .findAll()
        .then(({ data }) => {
          console.log(data);
        })
        .catch(() => {});
    },
  },
};
</script>
