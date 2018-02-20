<template>
  <div id="app">
    <Race/>
    <StatBlock/>
    <Skills/>
  </div>
</template>

<script>
import Race from './components/Race';
import StatBlock from './components/StatBlock';
import Skills from './components/Skills';

export default {
  name: 'App',
  components: {
    Race,
    StatBlock,
    Skills,
  },
};
</script>

<style>
@import "normalize.css/normalize.css";
</style>
