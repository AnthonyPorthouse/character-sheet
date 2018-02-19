/* eslint-disable no-shadow */
import skills from '../data/skills';

const state = {};

Object.entries(skills).forEach(([key, value]) => {
  const skill = value;
  skill.points = 0;
  state[key] = skill;
});

const getters = {
  getAllSkills(state) {
    return Object.keys(state);
  },

  getSkill(state) {
    return key => state[key];
  },

  getSkillTotal(state, getters, rootState, rootGetters) {
    return (key) => {
      const skill = getters.getSkill(key);
      let total = skill.points;
      total += rootGetters['stats/getModifier'](skill.stat);
      if (skill.classSkill) {
        total += 3;
      }

      return total;
    };
  },
};

const mutations = {
  setClassSkill(state, { skill, value }) {
    state[skill].classSkill = value;
  },
  setPoints(state, { skill, value }) {
    state[skill].points = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
