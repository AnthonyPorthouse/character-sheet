export default {
  apply(currentStat, state, getters) {
    const race = getters['race/getSelectedRace'];

    if (!race) {
      return 0;
    }

    const statModifiers = race.statModifiers;

    return statModifiers.reduce((total, modifier) => {
      if (Array.isArray(modifier.stat)) {
        // TODO: implement selecting stat from given list
      }

      if (modifier.stat === currentStat) {
        return total + modifier.value;
      }

      return 0;
    }, 0);
  },
};
