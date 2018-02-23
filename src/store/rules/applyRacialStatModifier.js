export default function (currentStat, state, getters) {
  const race = getters['race/getSelectedRace'];
  const customModifiers = getters['race/getCustomModifiers'];

  if (!race) {
    return 0;
  }

  let total = 0;

  total += race.statModifiers.reduce((carry, modifier) => {
    if (modifier.stat === currentStat) {
      return carry + modifier.modifier;
    }

    return carry;
  }, 0);

  total += customModifiers.reduce((carry, modifier) => {
    if (modifier.stat === currentStat) {
      return carry + modifier.modifier;
    }

    return carry;
  }, 0);

  return total;
}
