<template>
  <div class="StatBlock">
    <div class="StatBlock StatBlock__Header">
      <h1>Stat</h1>
      <h1>Score</h1>
      <h1>Modifier</h1>
    </div>
    <Stat
      v-for="stat in stats"
      :key="stat"
      :stat="stat"/>
  </div>
</template>

<script>
import Stat from './Stat';

export default {
  components: {
    Stat,
  },

  computed: {
    stats() {
      return this.$store.getters['stats/getAllStats'];
    },
  },
};
</script>

<style>
.StatBlock {
  display: grid;
  grid-row-gap: .5rem;

  font-size: 1.4rem;
}

.StatBlock__Header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;
}
</style>
