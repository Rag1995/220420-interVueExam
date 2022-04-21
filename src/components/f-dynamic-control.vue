<template>
  <div>
    <b-form-group class="mb-4">
      <template #label>
        <h5 class="mb-0">輸入類型</h5>
      </template>

      <b-form-radio-group v-model="selected" :options="options">
      </b-form-radio-group>
    </b-form-group>

    <b-form-group>
      <template #label>
        <h4>請輸入你最愛的動森島民</h4>
      </template>

      <!-- <component
        :is="selected"
        :value="value"
        @input="$emit('input', $event)"
      /> -->
      <template v-for="(item, index) in options">
        <component
          v-if="item.value === selected"
          :key="index"
          :is="item.value"
          :value="value"
          @input="$emit('input', $event)"
        />
      </template>
    </b-form-group>

    <b-collapse :visible="value.length > 0">
      <h2>你最愛的島民是『{{ value }}』！</h2>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      dafault: "",
    },
  },
  data() {
    return {
      selected: "f-input",
      options: [
        { text: "text-input", value: "f-input" },
        { text: "select", value: "f-select" },
        { text: "radio", value: "f-radio" },
      ],
    };
  },
  methods: {
    test(value) {
      console.log(value);
    },
  },
  components: {
    "f-input": () => import("./f-input.vue"),
    "f-select": () => import("./f-select.vue"),
    "f-radio": () => import("./f-radio.vue"),
  },
};
</script>
