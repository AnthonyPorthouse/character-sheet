<template>
  <div :class="getClass">
    <header>
      {{ getFormattedStatName }}
      <small>{{ getStatName }}</small>
    </header>
    <IncDecInput
      :min="0"
      :value="getStatValue"
      @update="setStatValue"/>
    <input
      class="Stat__Modifier"
      type="text"
      :value="getFormattedStatModifier"
      readonly>
  </div>
</template>

<script>
import IncDecInput from './IncDecInput';

export default {
  components: {
    IncDecInput,
  },

  props: {
    stat: {
      type: String,
      required: true,
    },
  },

  computed: {
    getStat() {
      return this.$store.getters['stats/getStat'](this.stat);
    },

    getStatName() {
      return this.getStat.name;
    },

    getClass() {
      return `Stat Stat--${this.stat}`;
    },

    getStatValue() {
      return this.getStat.value;
    },

    getFormattedStatName() {
      return this.$store.getters['stats/getFormattedAbbreviation'](this.stat);
    },

    getFormattedStatModifier() {
      return this.$store.getters['stats/getFormattedModifier'](this.stat);
    },
  },

  methods: {
    setStatValue(value) {
      this.$store.commit('stats/setValue', {
        stat: this.stat,
        value,
      });
    },
  },
};
</script>

<style>
  .Stat {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: .5rem;

    font-size: 1.5rem;
  }

  .Stat__Modifier {
    text-align: center;
  }
</style>
