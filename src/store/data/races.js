import { STAT_STR, STAT_DEX, STAT_CON, STAT_INT, STAT_WIS, STAT_CHA } from './stats';
import { SIZE_SMALL, SIZE_MEDIUM } from './sizes';

export const RACE_DWARF = 'dwarf';
export const RACE_ELF = 'elf';
export const RACE_GNOME = 'gnome';
export const RACE_HALF_ELF = 'half-elf';
export const RACE_HALF_ORC = 'half-orc';
export const RACE_HALFLING = 'halfling';
export const RACE_HUMAN = 'human';

export default {
  [RACE_DWARF]: {
    id: RACE_DWARF,
    name: 'Dwarf',
    statModifiers: [
      {
        stat: STAT_CON,
        modifier: 2,
      },
      {
        stat: STAT_WIS,
        modifier: 2,
      },
      {
        stat: STAT_CHA,
        modifier: -2,
      },
    ],
    size: SIZE_MEDIUM,
    speed: 20,
  },
  [RACE_ELF]: {
    id: RACE_ELF,
    name: 'Elf',
    statModifiers: [
      {
        stat: STAT_DEX,
        modifier: 2,
      },
      {
        stat: STAT_INT,
        modifier: 2,
      },
      {
        stat: STAT_CON,
        modifier: -2,
      },
    ],
    size: SIZE_MEDIUM,
    speed: 30,
  },
  [RACE_GNOME]: {
    id: RACE_GNOME,
    name: 'Gnome',
    statModifiers: [
      {
        stat: STAT_CON,
        modifier: 2,
      },
      {
        stat: STAT_CHA,
        modifier: 2,
      },
      {
        stat: STAT_STR,
        modifier: -2,
      },
    ],
    size: SIZE_SMALL,
    speed: 20,
  },
  [RACE_HALF_ELF]: {
    id: RACE_HALF_ELF,
    name: 'Half-elf',
    statModifiers: [
      {
        stat: [STAT_STR, STAT_DEX, STAT_CON, STAT_INT, STAT_WIS, STAT_CHA],
        modifier: 2,
      },
    ],
    size: SIZE_MEDIUM,
    speed: 30,
  },
  [RACE_HALF_ORC]: {
    id: RACE_HALF_ORC,
    name: 'Half-orc',
    statModifiers: [
      {
        stat: [STAT_STR, STAT_DEX, STAT_CON, STAT_INT, STAT_WIS, STAT_CHA],
        modifier: 2,
      },
    ],
    size: SIZE_MEDIUM,
    speed: 30,
  },
  [RACE_HALFLING]: {
    id: RACE_HALFLING,
    name: 'Halfling',
    statModifiers: [
      {
        stat: STAT_DEX,
        modifier: 2,
      },
      {
        stat: STAT_CHA,
        modifier: 2,
      },
      {
        stat: STAT_STR,
        modifier: -2,
      },
    ],
    size: SIZE_SMALL,
    speed: 20,
  },
  [RACE_HUMAN]: {
    id: RACE_HUMAN,
    name: 'Human',
    statModifiers: [
      {
        stat: [STAT_STR, STAT_DEX, STAT_CON, STAT_INT, STAT_WIS, STAT_CHA],
        modifier: 2,
      },
    ],
    size: SIZE_SMALL,
    speed: 20,
  },
};
