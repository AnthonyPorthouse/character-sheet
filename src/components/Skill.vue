<template>
  <div class="Skill">
    <input
      type="checkbox"
      value="true"
      @change="updateClassSkill"
      :checked="getClassSkill">
    <header>
      {{ getName }} ({{ getStat }})
    </header>
    <input
      class="Skill__Total"
      type="text"
      :value="getTotal"
      readonly>
    <input
      class="Skill__Modifier"
      type="text"
      :value="getModifier"
      readonly>
    <IncDecInput
      @update="setPoints"
      :min="0"
      :value="getPoints"/>

  </div>
</template>

<script>
import IncDecInput from './IncDecInput';

export default {
  components: {
    IncDecInput,
  },

  props: {
    skill: {
      type: String,
      required: true,
    },
  },

  computed: {
    getSkill() {
      return this.$store.getters['skills/getSkill'](this.skill);
    },

    getTotal() {
      return this.$store.getters['skills/getSkillTotal'](this.skill);
    },

    getName() {
      return this.getSkill.name;
    },

    getPoints() {
      return this.getSkill.points;
    },

    getClassSkill() {
      return this.getSkill.classSkill;
    },

    getStat() {
      return this.$store.getters['stats/getFormattedAbbreviation'](this.getSkill.stat);
    },

    getModifier() {
      return this.$store.getters['stats/getFormattedModifier'](this.getSkill.stat);
    },
  },

  methods: {
    setPoints(value) {
      this.$store.commit('skills/setPoints', {
        skill: this.skill,
        value,
      });
    },

    updateClassSkill(e) {
      this.$store.commit('skills/setClassSkill', {
        skill: this.skill,
        value: e.target.checked,
      });
    },
  },
};
</script>

<style>
.Skill {
  display: grid;
  grid-gap: .2rem;
  grid-template-columns: 1em 5fr 1fr 1fr 1fr;
}

.Skill__Total, .Skill__Modifier {
  text-align: center;
}
</style>
