/* eslint-disable no-shadow */
import races from '../data/races';

function initState() {
  const state = {
    races,
    selectedRace: undefined,
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
};

const mutations = {
  setSelectedRace(state, value) {
    state.selectedRace = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
