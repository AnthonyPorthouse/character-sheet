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

  getModifier(state, getters) {
    return stat => Math.floor(getters.getValue(stat) / 2) - 5;
  },

  getModifiedValue(state, getters, rootState, rootGetters) {
    const rules = [
      applyRacialStatModifiers,
    ];

    return (statName) => {
      const stat = getters.getStat(statName);

      // eslint-disable-next-line
      const modifier = rules.reduce((currentValue, rule) => {
        return currentValue + rule.apply(stat, rootState, rootGetters);
      }, 0);

      return stat.value + modifier;
    };
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
    state[payload.stat].value = (value >= 0) ? value : 0;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
