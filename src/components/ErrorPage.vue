<template>
  <div class="error-page">
    <h4>Error-{{ error }}</h4>
    <button id="reloadBtn" @click="reload">Reload Page</button>
  </div>
</template>
<script>
export default {
  name: "ErrorPage",
  props: ["error"],
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.error-page {
  color: rgb(221, 25, 25);
}
#reloadBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 5px;
}
</style>
