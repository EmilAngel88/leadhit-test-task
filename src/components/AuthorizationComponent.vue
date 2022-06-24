<template>
  <div>
    <div class="authorization">
      <h1 class="authorization__heading">LeadHit</h1>
    </div>
    <div class="authorization__form">
      <form @submit.prevent="addItem">
        <label>
          <p
            class="authorization__form_label authorization__form_label-required"
          >
            id сайта {{ id.length }}/24
            <transition name="error" appear>
              <span class="authorization__form_error" v-if="error">
                id сайта должен содержать 24 символа
              </span>
            </transition>
          </p>
          <input
            class="authorization__form_input"
            :class="{ 'authorization__form_input-error': error }"
            v-model="id"
            type="text"
            placeholder="Введите id сайта"
          />
        </label>
        <button
          :class="{
            'authorization__form_btn-disabled': isButtonDisable,
          }"
          class="authorization__form_btn"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: "5f8475902b0be670555f1bb3",
      error: false,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    addItem() {
      if (this.id.length !== 24 && !this.error) {
        this.error = !this.error;
        setTimeout(() => {
          this.error = !this.error;
        }, 2000);
      }

      if (!this.isButtonDisable) {
        this.fetchData(this.id);
        // this.$router.push("/graphic");
      }
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

    &_label {
      @extend .text-form;

      font-weight: 400;
      font-size: 10px;
      margin-bottom: 4px;
      width: fit-content;

      &-required {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 1px;
          right: -5px;
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background-color: #ff8484;
        }
      }
    }

    &_input {
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

    &_error {
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

    &_btn {
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

      &-disabled {
        background-color: #eee;
        color: #b4b4b4;

        &:hover {
          transform: scale(1);
        }
      }
    }
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