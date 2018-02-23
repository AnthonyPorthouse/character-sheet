/* eslint-disable no-shadow */
import stats from '../data/stats';
import applyRacialStatModifiers from '../rules/applyRacialStatModifier';

function initState() {
  const state = {};

  Object.entries(stats).forEach(([key, value]) => {
    state[key] = {
      id: value.id,
      name: value.name,
      value: value.value,
    };
  });

  return state;
}

const state = initState();

const getters = {
  getAllStats(state) {
    return Object.keys(state);
  },

  getStat(state) {
    return stat => state[stat];
  },

  getName(state, getters) {
    return stat => getters.getStat(stat).name;
  },

  getValue(state, getters) {
    return stat => getters.getModifiedValue(stat);
  },

  getAppliedValueModifier(state, getters, rootState, rootGetters) {
    const rules = [
      applyRacialStatModifiers,
    ];

    return (statName) => {
      const stat = getters.getStat(statName);

      return rules.reduce((currentValue, rule) => {
        const ruleValue = rule(stat.id, rootState, rootGetters);
        return currentValue + ruleValue;
      }, 0);
    };
  },

  getModifiedValue(state, getters) {
    return (statName) => {
      const stat = getters.getStat(statName);
      return stat.value + getters.getAppliedValueModifier(statName);
    };
  },

  getModifier(state, getters) {
    return stat => Math.floor(getters.getValue(stat) / 2) - 5;
  },

  getFormattedModifier(state, getters) {
    return (stat) => {
      const modifier = getters.getModifier(stat);
      const sign = modifier >= 0 ? '+' : '-';

      return `${sign}${Math.abs(modifier)}`;
    };
  },

  getFormattedAbbreviation(state, getters) {
    return stat => getters.getStat(stat).id.toUpperCase();
  },
};

const mutations = {
  setValue(state, payload) {
    const value = payload.value;
    const modifier = payload.modifier;

    const newBaseValue = value - modifier;

    state[payload.stat].value = (newBaseValue >= 0) ? newBaseValue : 0;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
