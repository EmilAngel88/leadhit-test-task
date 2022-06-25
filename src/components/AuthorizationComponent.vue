<template>
  <div>
    <div class="authorization">
      <h1 class="authorization__heading">LeadHit</h1>
    </div>
    <div class="authorization__form">
      <form @submit.prevent="enter">
        <InputComponent v-model="id" :error="error" />
        <ButtonComponent
          @enter="enter"
          :isButtonDisable="isButtonDisable"
          :error.sync="error"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      // id: "5f8475902b0be670555f1bb3",
      id: "",
      error: false,
    };
  },
  methods: {
    ...mapActions(["logIn"]),
    enter() {
      this.logIn(this.id);
    },
  },
  computed: {
    isButtonDisable() {
      return this.id.length === 24 ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-form {
  line-height: 1.25;
  color: #49485e;
}
.authorization {
  width: 333px;

  &__heading {
    @extend .text-form;

    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__form {
    padding: 24px;
    border-radius: 4px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
  }
}
</style>