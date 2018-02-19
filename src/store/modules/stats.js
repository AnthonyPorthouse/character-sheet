/* eslint-disable no-shadow */
export const STAT_STR = 'str';
export const STAT_DEX = 'dex';
export const STAT_CON = 'con';
export const STAT_INT = 'int';
export const STAT_WIS = 'wis';
export const STAT_CHA = 'cha';

const state = {
  [STAT_STR]: {
    name: 'Strength',
    value: 10,
  },
  [STAT_DEX]: {
    name: 'Dexterity',
    value: 10,
  },
  [STAT_CON]: {
    name: 'Constitution',
    value: 10,
  },
  [STAT_INT]: {
    name: 'Intelligence',
    value: 10,
  },
  [STAT_WIS]: {
    name: 'Wisdom',
    value: 10,
  },
  [STAT_CHA]: {
    name: 'Charisma',
    value: 10,
  },
};

const getters = {
  getAllStats(state) {
    return Object.keys(state);
  },

  getValue(state) {
    return stat => state[stat].value;
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

  getFormattedAbbreviation() {
    return stat => stat.toUpperCase();
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
