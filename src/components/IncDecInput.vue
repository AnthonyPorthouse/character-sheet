<template>
  <div class="IncDecInput">
    <button @click.prevent="decrement">-</button>
    <input
      type="number"
      :min="getMin"
      :max="getMax"
      @input="change"
      :value="value">
    <button @click.prevent="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: undefined,
    },
  },

  computed: {
    getMin() {
      return this.min;
    },
    getMax() {
      return this.max;
    },
  },

  methods: {
    increment() {
      this.setValue(this.value + 1);
    },

    decrement() {
      this.setValue(this.value - 1);
    },

    change(e) {
      this.setValue(Number(e.target.value));
    },

    setValue(val) {
      let value = val;

      if (this.min !== undefined && value < this.min) {
        value = this.min;
      }

      if (this.max !== undefined && value > this.max) {
        value = this.max;
      }

      this.$emit('update', value);
    },
  },
};
</script>

<style>
.IncDecInput {
  display: inline-grid;
  grid-template-columns: 1.4em 1fr 1.4em;
}

.IncDecInput input {
  overflow: hidden;
  text-align: center;
}
</style>
