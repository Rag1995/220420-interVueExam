<template>
  <b-form-input
    type="text"
    :value="value"
    @change="$emit('input', $event)"
  ></b-form-input>
</template>

<script>
export default {
  model: {
    prop: "value",
    emit: "input",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
