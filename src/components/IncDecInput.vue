<template>
  <div class="IncDecInput">
    <button @click.prevent="decrement">-</button>
    <input
      type="number"
      :min="getMin"
      :max="getMax"
      @input="change"
      :value="currentValue">
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

  data() {
    return {
      currentValue: this.value,
    };
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
      this.setValue(this.currentValue + 1);
    },

    decrement() {
      this.setValue(this.currentValue - 1);
    },

    change(e) {
      this.setValue(Number(e.target.value));
    },

    setValue(val) {
      this.currentValue = val;

      if (this.min !== undefined && val < this.min) {
        this.currentValue = this.min;
      }

      if (this.max !== undefined && val > this.max) {
        this.currentValue = this.max;
      }

      this.$emit('update', this.currentValue);
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
