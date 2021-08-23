<template>
  <div class="tip-selector">
    <p>{{ labelText }}</p>
    <div class="tip-selector-grid">
      <div v-for="tip in tips" :key="tip" class="tip-selector-grid-card">
        <input :id="tip" v-model="model" type="radio" name="tip" :value="tip" />
        <label :for="tip">{{ tip }}%</label>
      </div>
      <div class="tip-selector-grid-card">
        <input
          v-model="model"
          type="number"
          placeholder="Custom"
          :class="{ active: isFocused }"
          @keypress="handleKeypress"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: [Number, String]
    },
    maxInputLength: {
      required: false,
      type: Number,
      default: 7
    },
    labelText: {
      required: false,
      type: String,
      default: 'Select Tip %'
    },
    tips: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    isFocused: false
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

      this.model = ''
    },

    handleBlur() {
      this.isFocused = false
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
.tip-selector p {
  font-size: 1rem;
  color: var(--color-primary);
}
.tip-selector .tip-selector-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 12px;
  grid-template-areas:
    '. . .'
    '. . .';
}
.tip-selector .tip-selector-grid .tip-selector-grid-card {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='radio'] {
  display: none;
}
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='number'] {
  width: 95%;
  height: 97%;
  border: none;
  outline-style: none;
  border-radius: 4px;
  background-color: var(--color-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--color-primary);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='number'].active {
  -webkit-box-shadow: 0px 0px 0px 2px var(--color-active);
  -moz-box-shadow: 0px 0px 0px 2px var(--color-active);
  box-shadow: 0px 0px 0px 2px var(--color-active);
}
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='number']::-webkit-input-placeholder {
  color: var(--color-primary);
}
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='number']::-webkit-outer-spin-button,
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='number']::-webkit-inner-spin-button {
  display: none;
}
.tip-selector .tip-selector-grid .tip-selector-grid-card label {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}
.tip-selector .tip-selector-grid .tip-selector-grid-card input[type='radio']:checked + label {
  background: var(--color-active);
  color: var(--color-primary);
}

@media screen AND (max-width: 900px) {
  .tip-selector {
    margin-bottom: 24px;
  }
  .tip-selector p {
    font-weight: bold;
  }
  .tip-selector .tip-selector-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-template-areas:
      '. .'
      '. .'
      '. .';
  }
  .tip-selector .tip-selector-grid .tip-selector-grid-card {
    width: 100%;
    height: 100%;
  }
}
</style>
