<template>
  <b-form-select :value="value" @input="$emit('input', $event)">
    <b-form-select-option value=""> 至少選一位島民吧 </b-form-select-option>

    <b-form-select-option
      v-for="(item, index) in options"
      :key="index"
      :value="item"
    >
      {{ item }}
    </b-form-select-option>

    <b-form-select-option v-if="!dulpicate" :value="value">
      其他：{{ value }}
    </b-form-select-option>
  </b-form-select>
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
      options: ["阿燕", "娣雅", "小楓", "朱祿", "李可", "喳喳"],
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
