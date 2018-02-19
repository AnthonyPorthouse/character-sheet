<template>
  <div id="app">
    <StatBlock/>
    <Skills/>
  </div>
</template>

<script>
import StatBlock from './components/StatBlock';
import Skills from './components/Skills';

export default {
  name: 'App',
  components: {
    StatBlock,
    Skills,
  },
};
</script>

<style>
@import "normalize.css/normalize.css";
</style>
