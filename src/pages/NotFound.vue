<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        This page could not be found. Check out all our
        <router-link to="/coaches">coaches.</router-link>
      </p>
    </base-card>
  </section>
</template>

<style scoped>
a {
  color: #3e94d1;
  text-decoration: none;
}
a:active,
a:hover {
  text-decoration: underline;
}
</style>
