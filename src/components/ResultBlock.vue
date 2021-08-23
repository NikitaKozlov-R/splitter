<template>
  <div class="result-block">
    <div class="result-block-text">
      <h2>{{ text }}</h2>
      <p>/ person</p>
    </div>
    <p class="result-int">${{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: [Number, String]
    }
  }
}
</script>

<style>
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

@media screen AND (max-width: 900px) {
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
