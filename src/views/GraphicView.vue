<template>
  <div class="graphic">
    <h1>Аналитика по визитам</h1>
    <GraphicComponent />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GraphicComponent from "@/components/GraphicComponent.vue";
export default {
  name: "GraphicView",
  components: {
    GraphicComponent,
  },
  computed: {
    ...mapGetters({
      getData: "getData",
    }),
  },
  created() {
    if (!this.getData) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.graphic {
  max-width: 1440px;
  width: 100%;
}
</style>
