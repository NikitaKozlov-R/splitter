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
        <div class="user-input">
          <label for="bill">Bill</label>
          <div class="user-input-svg">
            <input id="bill" v-model="billSelect" type="number" placeholder="0" min="0" @input="isDesabled" />
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
              <path
                fill="#9EBBBD"
                d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
              />
            </svg>
          </div>
        </div>
        <div class="tip-selector">
          <p>Select Tip %</p>
          <div class="tip-selector-grid">
            <div class="tip-selector-grid-card">
              <input id="5" v-model="tipSelect" type="radio" name="tip" value="5" @click="isDesabled" />
              <label for="5">5%</label>
            </div>
            <div class="tip-selector-grid-card">
              <input id="10" v-model="tipSelect" type="radio" name="tip" value="10" @click="isDesabled" />
              <label for="10">10%</label>
            </div>
            <div class="tip-selector-grid-card">
              <input id="15" v-model="tipSelect" type="radio" name="tip" value="15" @click="isDesabled" />
              <label for="15">15%</label>
            </div>
            <div class="tip-selector-grid-card">
              <input id="25" v-model="tipSelect" type="radio" name="tip" value="25" @click="isDesabled" />
              <label for="25">25%</label>
            </div>
            <div class="tip-selector-grid-card">
              <input id="50" v-model="tipSelect" type="radio" name="tip" value="50" @click="isDesabled" />
              <label for="50">50%</label>
            </div>
            <div class="tip-selector-grid-card">
              <input v-model="tipSelect" type="number" placeholder="Custom" @focus="resetTipRadio" />
            </div>
          </div>
        </div>
        <div class="user-input">
          <label for="people">Number of People</label>
          <div class="user-input-svg">
            <input
              id="people"
              v-model="peopleSelect"
              type="number"
              placeholder="0"
              min="0"
              pattern="[0-9]"
              @input="isDesabled"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
              <path
                fill="#9EBBBD"
                d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="wrap-calc-right-col">
        <div class="result">
          <div class="result-block">
            <div class="result-block-text">
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <p class="result-int">${{ resultAmountFunc }}</p>
          </div>
          <div class="result-block">
            <div class="result-block-text">
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <p class="result-int">${{ resultTotalFunc }}</p>
          </div>
        </div>
        <button id="resetBtn" class="disabled" @click="resetAll">
          RESET
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      billSelect: '',
      tipSelect: null,
      peopleSelect: ''
    }
  },
  computed: {
    resultTotalFunc() {
      if (this.billSelect == null || this.billSelect == 0 || this.peopleSelect == null || this.peopleSelect == 0) {
        return '0.00'
      } else {
        let percent = (this.billSelect / 100) * this.tipSelect
        return ((Number(this.billSelect) + Number(percent)) / Number(this.peopleSelect)).toFixed(2)
      }
    },
    resultAmountFunc() {
      if (this.billSelect == null || this.billSelect == 0 || this.peopleSelect == null || this.peopleSelect == 0) {
        return '0.00'
      } else {
        let percent = (this.billSelect / 100) * this.tipSelect
        return (Number(percent) / Number(this.peopleSelect)).toFixed(2)
      }
    }
    // CustomTipMask() {
    //   if(this.tipSelect == 5 || 10 || 15 || 25 || 50) {
    //     return "Custom"
    //   }
    // }
  },
  methods: {
    isDesabled() {
      if (this.billSelect.length > 7 && this.billSelect != null) {
        this.billSelect = this.billSelect.slice(0, 7)
      } else if (this.peopleSelect.length > 3 && this.peopleSelect != null) {
        this.peopleSelect = this.peopleSelect.slice(0, 3)
      }
      document.querySelector('#resetBtn').classList.remove('disabled')
    },
    resetAll() {
      this.billSelect = ''
      this.tipSelect = null
      this.peopleSelect = ''
      document.querySelector('#resetBtn').classList.add('disabled')
    },
    resetTipRadio() {
      this.tipSelect = null
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
.wrap-calc-left-col .user-input {
  width: 100%;
  height: 62px;
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
}
.wrap-calc-left-col .user-input label {
  font-size: 1rem;
  color: var(--color-primary);
  margin-bottom: 10px;
}
.wrap-calc-left-col .user-input .user-input-svg {
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
}
.wrap-calc-left-col .user-input .user-input-svg svg {
  position: absolute;
  margin-left: 20px;
}
.wrap-calc-left-col .user-input .user-input-svg input {
  width: 100%;
  height: 100%;
  text-align: right;
  background-color: var(--color-secondary);
  border: none;
  outline-style: none;
  border-radius: 4px;
  font-size: 1.4rem;
  color: #9ebbbd;
  font-weight: bold;
  padding-right: 20px;
}
.wrap-calc-left-col .user-input .user-input-svg input::-webkit-input-placeholder {
  color: #9ebbbd;
}
.wrap-calc-left-col .user-input .user-input-svg input::-webkit-outer-spin-button,
.wrap-calc-left-col .user-input .user-input-svg input::-webkit-inner-spin-button {
  display: none;
}
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
  width: 130px;
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
.result-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.result-block .result-int {
  font-size: 3rem;
  color: var(--color-active);
  margin-top: -10px;
  font-weight: bold;
}
.result-block-text h2 {
  color: white;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: bold;
}
.result-block-text p {
  font-size: 0.7rem;
  color: white;
  opacity: 0.4;
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
  * {
    overflow: hidden;
  }
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
  .wrap-calc-left-col .user-input {
    margin: 0;
    margin-bottom: 16px;
  }
  .wrap-calc-left-col .user-input label {
    font-weight: bold;
  }
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
  .wrap-calc-right-col {
    width: 100%;
    height: 34%;
    padding: 24px 16px 16px 16px;
  }
  .result-block {
    margin-bottom: -10px;
  }
  .result-block .result-block-text {
    margin-top: 10px;
  }
  .result-block-text h2 {
    margin-bottom: 4px;
  }
  .result-block-text p {
    margin: 0;
  }
  .result-block .result-int {
    margin-bottom: 24px;
    font-size: 2.5rem;
    margin-top: 0;
  }
}
</style>
