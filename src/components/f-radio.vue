<template>
  <b-form-radio-group
    :checked="value"
    @input="$emit('input', $event)"
    class="my-2"
  >
    <b-form-radio v-for="(item, index) in options" :key="index" :value="item">
      {{ item }}
    </b-form-radio>

    <b-form-radio v-if="!dulpicate" :value="value">
      其他：{{ value }}
    </b-form-radio>
  </b-form-radio-group>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      options: ["起司", "小啾", "阿德", "莫尼卡", "阿波羅", "阿哲"],
    };
  },
  computed: {
    dulpicate() {
      return (
        this.options.some((el) => el === this.value) || this.value.length === 0
      );
    },
  },
};
</script>
