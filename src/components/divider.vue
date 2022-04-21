<template>
  <hr :class="`border-top border-${theme}-dark`" />
</template>

<style lang="scss" scoped>
hr {
  margin-left: 0;
  margin-right: 0;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
