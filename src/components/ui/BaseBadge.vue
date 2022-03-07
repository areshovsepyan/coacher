<template>
  <span class="badge" :class="type">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #0a64a4;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
}

.frontend,
.backend,
.career {
  background-color: #6faed8;
  color: white;
}
</style>
