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
  </div>
</template>

<script>
export default {
  computed: {
    races() {
      return this.$store.getters['race/getRaces'];
    },
  },

  methods: {
    setSelectedRace(e) {
      this.$store.commit('race/setSelectedRace', e.target.value);
    },
  },
};
</script>
