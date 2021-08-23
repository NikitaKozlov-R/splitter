<template>
  <div class="user-input">
    <div class="user-input-labels">
      <label :for="labelText">{{ labelText }}</label>
      <label :for="labelText" class="empty-label" :class="{ empty: isEmpty }">Can't be zero</label>
    </div>
    <div class="user-input-svg">
      <input
        :id="labelText"
        v-model="model"
        type="number"
        placeholder="0"
        min="0"
        :class="{ empty: isEmpty, active: isFocused }"
        @focus="handleFocus"
        @blur="handleBlur"
        @keypress="handleKeypress"
      />
      <UserInputIcon />
    </div>
  </div>
</template>

<script>
import UserInputIcon from '@/components/UserInputIcon.vue'

export default {
  components: {
    UserInputIcon
  },

  props: {
    value: {
      required: true,
      type: [Number, String]
    },
    labelText: {
      required: true,
      type: String
    },
    maxInputLength: {
      required: false,
      type: Number,
      default: 7
    }
  },

  data: () => ({
    isFocused: false,
    isEmpty: false
  }),

  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)

        this.$emit('change', value)
      }
    }
  },

  methods: {
    handleFocus() {
      this.isFocused = true
    },

    handleBlur() {
      this.isFocused = false

      if (this.model.length > 0) {
        this.isEmpty = false
      } else {
        this.isEmpty = true
      }
    },

    handleKeypress(event) {
      // "-" | "," | "e"
      if ([101, 44, 46].includes(event.charCode)) {
        event.preventDefault()
        return
      }

      if (this.model.length > this.maxInputLength - 1) {
        event.preventDefault()
        return
      }

      if (this.model.startsWith('0')) {
        // ^ - начало строки, 0+ - сколько угодно нулей до первого другого знака
        this.model = this.model.replace(/^0+/, '')
      }

      this.$emit('keypress', event)
    }
  }
}
</script>

<style>
.user-input {
  width: 100%;
  height: 62px;
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
}
.user-input label {
  font-size: 1rem;
  color: var(--color-primary);
  margin-bottom: 10px;
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.user-input-labels {
  display: flex;
  justify-content: space-between;
}
.user-input label.empty-label {
  font-size: 1rem;
  color: var(--color-error);
  margin-bottom: 10px;
  display: none;
}
.user-input label.empty-label.empty {
  display: block;
}
.user-input .user-input-svg {
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
}
.user-input .user-input-svg svg {
  position: absolute;
  margin-left: 20px;
}
.user-input .user-input-svg input {
  width: 100%;
  height: 100%;
  text-align: right;
  background-color: var(--color-secondary);
  border: none;
  outline-style: none;
  border-radius: 4px;
  font-size: 1.4rem;
  color: var(--color-primary);
  font-weight: bold;
  padding-right: 20px;
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.user-input .user-input-svg input.empty {
  -webkit-box-shadow: 0px 0px 0px 2px rgba(221, 85, 47, 1);
  -moz-box-shadow: 0px 0px 0px 2px rgba(221, 85, 47, 1);
  box-shadow: 0px 0px 0px 2px rgba(221, 85, 47, 1);
}
.user-input .user-input-svg input.active {
  -webkit-box-shadow: 0px 0px 0px 2px var(--color-active);
  -moz-box-shadow: 0px 0px 0px 2px var(--color-active);
  box-shadow: 0px 0px 0px 2px var(--color-active);
}
.user-input .user-input-svg input::-webkit-input-placeholder {
  color: #9ebbbd;
}
.user-input .user-input-svg input::-webkit-outer-spin-button,
.user-input .user-input-svg input::-webkit-inner-spin-button {
  display: none;
}

@media screen AND (max-width: 900px) {
  .wrap-calc-left-col .user-input {
    margin: 0;
    margin-bottom: 16px;
    height: auto;
  }
  .wrap-calc-left-col .user-input label {
    font-weight: bold;
  }
  .wrap-calc-left-col .user-input .user-input-svg {
    padding: 3px;
  }
  .wrap-calc-left-col .user-input .user-input-svg input {
    width: calc(100% - 30px);
  }
}
</style>
