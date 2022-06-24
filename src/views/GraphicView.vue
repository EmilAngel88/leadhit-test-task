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
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
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
