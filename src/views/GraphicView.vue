<template>
  <div class="graphic">
    <div class="graphic__heading">
      <h1>Аналитика по визитам</h1>
      <span class="graphic__logout" @click="logOut">Выйти</span>
    </div>
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
  methods: {
    logOut() {
      this.$store.commit("logOut");
    },
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

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__logout {
    cursor: pointer;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #3f3f3f;
      transform: scale(0);
      transition: all 0.2s;
    }

    &:hover {
      &:before {
        transform: scale(1);
      }
    }
  }
}
</style>
