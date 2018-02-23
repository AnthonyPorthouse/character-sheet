<template>
  <div class="Race">
    <select @change="setSelectedRace">
      <option
        selected
        disabled>
        Select Race
      </option>
      <option
        v-for="race in races"
        :key="race.id"
        :value="race.id">
        {{ race.name }}
      </option>
    </select>

    <div
      class="Race__Modifiers"
      v-if="hasSelectableModifiers">
      <select
        v-for="(modifier, i) in getSelectableModifiers"
        @change="updateSelectedModifier($event, i, modifier)"
        :key="i">
        <option
          selected
          disabled>
          Select Stat
        </option>
        <option
          v-for="stat in modifier.stat"
          :key="stat"
          :value="stat">
          {{ stat }}
        </option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    races() {
      return this.$store.getters['race/getRaces'];
    },

    getSelectedRace() {
      return this.$store.getters['race/getSelectedRace'];
    },

    hasSelectableModifiers() {
      return this.$store.getters['race/hasSelectableModifiers'];
    },

    getSelectableModifiers() {
      return this.$store.getters['race/getSelectableModifiers'];
    },
  },

  methods: {
    setSelectedRace(e) {
      this.$store.commit('race/setSelectedRace', e.target.value);
    },

    updateSelectedModifier(event, key, modifier) {
      this.$store.commit('race/setCustomModifier', {
        key,
        modifier: modifier.modifier,
        stat: event.target.value,
      });
    },
  },
};
</script>
