<template>
  <div class="wrapper">
    <div class="main-title">
      <h1>
        <p>SPLI</p>
        <p>TTER</p>
      </h1>
    </div>

    <div class="wpar-calc">
      <div class="wrap-calc-left-col">
        <UserInput
          v-model="billSelect"
          label-text="Bill"
          :max-input-length="7"
          @change="autoTipSelect"
          @keypress="handleEnableReset"
        />
        <TipSelect
          v-model="tipSelect"
          :max-input-length="3"
          :tips="[5, 10, 15, 25, 50]"
          @keypress="handleEnableReset"
        />
        <UserInput
          v-model="peopleSelect"
          label-text="Number of People"
          :max-input-length="3"
          @change="autoTipSelect"
          @keypress="handleEnableReset"
        />
      </div>
      <div class="wrap-calc-right-col">
        <div class="result">
          <ResultBlock text="Text Amount" :value="resultAmountFunc" />
          <ResultBlock text="Total" :value="resultTotalFunc" />
        </div>
        <button :class="{ disabled: isResetBtnDisabled }" @click="resetAll">
          RESET
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserInput from '@/components/UserInput.vue'
import TipSelect from '@/components/TipSelect.vue'
import ResultBlock from '@/components/ResultBlock.vue'

export default {
  name: 'App',

  components: {
    UserInput,
    TipSelect,
    ResultBlock
  },

  data() {
    return {
      billSelect: '',
      tipSelect: '',
      peopleSelect: '',

      isResetBtnDisabled: true
    }
  },

  computed: {
    resultTotalFunc() {
      if (!this.billSelect || !this.peopleSelect) {
        return '0.00'
      }

      const percent = (this.billSelect / 100) * this.tipSelect
      return ((Number(this.billSelect) + Number(percent)) / Number(this.peopleSelect)).toFixed(2)
    },
    resultAmountFunc() {
      if (!this.billSelect || !this.peopleSelect) {
        return '0.00'
      }

      const percent = (this.billSelect / 100) * this.tipSelect
      return (Number(percent) / Number(this.peopleSelect)).toFixed(2)
    }
  },

  methods: {
    handleEnableReset() {
      this.isResetBtnDisabled = false
    },

    autoTipSelect() {
      if (this.billSelect.length >= 1 && this.peopleSelect.length >= 1 && this.tipSelect === '') {
        this.tipSelect = '5'
      }

      if (this.billSelect === '' && this.peopleSelect === '') {
        this.tipSelect = ''
      }
    },

    resetAll() {
      this.billSelect = ''
      this.tipSelect = ''
      this.peopleSelect = ''

      this.isResetBtnDisabled = true
    }
  }
}
</script>

<style>
/* Общие стили */

* {
  font-family: 'Space Mono', monospace;
  user-select: none;
}
:root {
  --background-color: #c5e4e7;
  --color-primary: #00474b;
  --color-secondary: #f4f8fb;
  --color-active: #25c5ad;
  --color-error: #dd552f;
  --border-radius-primary: 24px;
}
.wrapper {
  background-color: var(--background-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.main-title {
  position: absolute;
  top: 9vh;
}
.main-title h1 p {
  line-height: 10px;
  font-size: 1.2rem;
  color: #436668;
  letter-spacing: 8px;
}
.wpar-calc {
  width: 930px;
  height: 480px;
  background-color: white;
  border-radius: var(--border-radius-primary);
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

/* Стили для левого блока */

.wrap-calc-left-col {
  height: 100%;
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Стили для правого блока */

.wrap-calc-right-col {
  height: 100%;
  width: calc(50% - 20px);
  background-color: var(--color-primary);
  border-radius: 16px;
  box-sizing: border-box;
  padding: 50px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrap-calc-right-col button {
  height: 50px;
  border-radius: 6px;
  background-color: var(--color-active);
  color: var(--color-primary);
  font-size: 1.5rem;
  border: none;
  outline-style: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.wrap-calc-right-col button.disabled {
  background-color: #0d686d;
  cursor: default;
}

/* Стили для мобильной вёрстки */

@media screen AND (max-width: 900px) {
  .main-title {
    top: 1vh;
  }
  .main-title h1 p {
    line-height: normal;
    font-size: 1.2rem;
    color: #436668;
    margin: 0;
    letter-spacing: 8px;
  }
  .wrapper {
    justify-content: flex-end;
  }
  .wpar-calc {
    width: 100%;
    height: 90%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    flex-direction: column;
    padding: 24px;
  }
  .wrap-calc-left-col {
    width: 100%;
    height: 64%;
    margin-bottom: 2%;
    justify-content: space-evenly;
  }
  .wrap-calc-right-col {
    width: 100%;
    height: 34%;
    padding: 24px 16px 16px 16px;
  }
}
</style>
