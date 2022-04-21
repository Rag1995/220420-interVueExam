<template>
  <b-form-group class="py-3">
    <template #label>
      <h4>網站主題</h4>
    </template>
    <template v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="theme"
        :aria-describedby="ariaDescribedby"
        buttons
      >
        <b-form-radio
          v-for="({ text, value }, index) in themeList"
          :key="index"
          :button-variant="value"
          :value="value"
        >
          {{ text }}
        </b-form-radio>
      </b-form-radio-group>
    </template>
  </b-form-group>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["themeList"]),
    theme: {
      get() {
        return this.$store.state.theme;
      },
      set(newValue) {
        this.$store.commit("themeSelect", newValue);
      },
    },
  },
};
</script>
