/* eslint-disable no-shadow */
import races from '../data/races';

function initState() {
  const state = {
    races,
    selectedRace: undefined,
    customModifiers: [],
  };

  return state;
}

const state = initState();

const getters = {
  getRaces(state) {
    return state.races;
  },

  getSelectedRace(state) {
    return state.races[state.selectedRace];
  },

  getCustomModifiers(state) {
    return state.customModifiers;
  },

  getSelectableModifiers(state, getters) {
    const race = getters.getSelectedRace;

    if (!race) {
      return [];
    }

    return race.statModifiers.filter(el => Array.isArray(el.stat));
  },

  hasSelectableModifiers(state, getters) {
    return getters.getSelectableModifiers.length > 0;
  },
};

const mutations = {
  setSelectedRace(state, value) {
    state.selectedRace = value;
    state.customModifiers = [];
  },

  setCustomModifier(state, { key, modifier, stat }) {
    state.customModifiers.splice(key, 1, {
      stat,
      modifier,
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
