<template>
  <div class="home">
    <AuthorizationComponent />
  </div>
</template>

<script>
import AuthorizationComponent from "@/components/AuthorizationComponent.vue";
export default {
  name: "HomeView",
  components: {
    AuthorizationComponent,
  },
};
</script>

<style lang="scss">
</style>
