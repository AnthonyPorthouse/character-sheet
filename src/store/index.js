import Vue from 'vue';
import Vuex from 'vuex';
import stats from './modules/stats';
import skills from './modules/skills';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    stats,
    skills,
  },
  strict: debug,
});
