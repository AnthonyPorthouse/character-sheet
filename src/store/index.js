import Vue from 'vue';
import Vuex from 'vuex';
import race from './modules/race';
import stats from './modules/stats';
import skills from './modules/skills';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    race,
    stats,
    skills,
  },
  strict: debug,
});
