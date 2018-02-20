/* eslint-disable no-shadow */
import stats from '../data/stats';

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
    return stat => getters.getStat(stat).value;
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
    state[payload.stat].value = (value >= 0) ? value : 0;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
