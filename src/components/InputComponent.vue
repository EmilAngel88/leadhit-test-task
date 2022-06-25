<template>
  <label>
    <p class="input__label">
      id сайта. <span>Введено: {{ idLength }}/24</span>
      <transition name="error" appear>
        <span class="input__error" v-if="error">
          id сайта должен содержать 24 символа
        </span>
      </transition>
    </p>
    <input
      class="input__field"
      :class="{ 'input__field-error': error }"
      type="text"
      placeholder="Введите id сайта"
      @input="input($event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      idLength: 0,
    };
  },
  methods: {
    input(e) {
      this.$emit("input", e);
      this.idLength = e.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &__label {
    line-height: 1.25;
    color: #49485e;
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 4px;
    width: fit-content;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__field {
    width: 100%;
    margin-bottom: 16px;
    padding: 10px 16px;
    border-radius: 4px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    transition: outline 0.3s ease;

    &-error {
      outline: 1px solid #ff8484;
    }
  }

  &__error {
    position: absolute;
    left: 0;
    top: 56px;
    width: 200px;
    z-index: 2;
    color: #ff8484;
    font-weight: 400;
    font-size: 8px;
    line-height: 1.25;
  }
}

.error-enter-active,
.error-leave-active {
  transition: all 0.3s;
}
.error-enter,
.error-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>