<template>
  <div>
    <button
      @click="enter"
      :class="{
        btn__disabled: isButtonDisable,
        btn__pressing: isButtonDown && !isButtonDisable,
      }"
      @mousedown="isButtonDown = !isButtonDown"
      @mouseup="isButtonDown = !isButtonDown"
      class="btn"
      type="submit"
    >
      Войти
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isButtonDisable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isButtonDown: false,
      error: false,
    };
  },
  methods: {
    enter() {
      if (this.isButtonDisable && !this.error) {
        this.error = !this.error;
        this.$emit("update:error", this.error);
        setTimeout(() => {
          this.error = !this.error;
          this.$emit("update:error", this.error);
        }, 2000);
      }
      if (!this.isButtonDisable) {
        this.$emit("enter");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 0;
  background-color: rgba(123, 174, 115, 1);
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  &__disabled {
    background-color: #eee;
    color: #b4b4b4;

    &:hover {
      transform: scale(1);
    }
  }

  &__pressing {
    background-color: rgba(89, 130, 83, 1);
  }
}
</style>