<template>
  <b-navbar
    id="nav"
    tag="nav"
    toggleable="lg"
    :variant="theme"
    :class="`shadow-sm border-top border-bottom border-${theme}-dark`"
  >
    <b-navbar-brand :to="{ name: 'Home' }" class="font-weight-bold">
      InterVueExam
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="flex-grow-1">
        <b-nav-item :to="{ name: 'Home' }">
          <fa-icon :icon="['fas', 'house-chimney']" />
          Home
        </b-nav-item>
        <b-nav-item :to="{ name: 'About' }">
          <fa-icon :icon="['fas', 'file-pen']" />
          About
        </b-nav-item>
        <b-nav-item
          href="https://github.com/Rag1995/220420-interVueTest"
          target="_blank"
          class="ml-lg-auto"
        >
          <fa-icon :icon="['fab', 'github']" fixed-width size="lg" />
          Github
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["theme"]),
    navItemClass() {
      return {
        [`bg-${this.theme}-dark`]: this.theme,
      };
    },
  },
};
</script>
