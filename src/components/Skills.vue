<template>
  <div class="Skills">
    <header>
      <h1>Skills</h1>
    </header>

    <div class="Skills__Headings">
      <span>&nbsp;</span>
      <h2>Skill Name</h2>
      <h2 class="Skills__Headings--centered">Total Bonus</h2>
      <h2 class="Skills__Headings--centered">Ability Mod.</h2>
      <h2 class="Skills__Headings--centered">Ranks</h2>
    </div>

    <Skill
      v-for="skill in getSkills"
      :key="skill"
      :skill="skill"/>
  </div>
</template>

<script>
import Skill from './Skill';

export default {
  components: {
    Skill,
  },

  computed: {
    getSkills() {
      return this.$store.getters['skills/getAllSkills'];
    },
  },
};
</script>

<style>
.Skills {
  display: grid;
  grid-gap: .2rem;

  border: 1px solid black;
}

.Skills__Headings {
  display: grid;
  grid-gap: .2rem;
  grid-template-columns: 1em 5fr 1fr 1fr 1fr;
}

.Skills__Headings h2 {
  font-size: 1rem;
  padding: 0;
  margin: 0;
}

.Skills__Headings--centered {
  text-align: center;
}
</style>
