<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  to: {
    type: String,
    required: false,
    default: '/',
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font: inherit;
  background-color: #3E94D1;
  border: 1px solid #3E94D1;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: transparent;
  border-color: #0A64A4;
  color: #0A64A4;
  transform: translateY(8px);
  transition: all 0.5s;
}

.flat {
  background-color: transparent;
  color: #0A64A4;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #0A64A4;
  color: #0A64A4;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #3E94D1;
  border-color: #3E94D1;
  color: white;
}
</style>
