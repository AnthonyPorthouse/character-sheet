import { STAT_STR, STAT_DEX, STAT_INT, STAT_WIS, STAT_CHA } from '../modules/stats';

export const SKILL_ACROBATICS = 'acrobatics';
export const SKILL_APPRAISE = 'appraise';
export const SKILL_BLUFF = 'bluff';
export const SKILL_CLIMB = 'climb';
export const SKILL_CRAFT = 'craft';
export const SKILL_DIPLOMACY = 'diplomacy';
export const SKILL_DISABLE_DEVICE = 'disableDevice';
export const SKILL_DISGUISE = 'disguise';
export const SKILL_ESCAPE_ARTIST = 'escapeArtist';
export const SKILL_FLY = 'fly';
export const SKILL_HANDLE_ANIMAL = 'handleAnimal';
export const SKILL_HEAL = 'heal';
export const SKILL_INTIMIDATE = 'intimidate';
export const SKILL_KNOWLEDGE_ARCANA = 'knowledgeArcana';
export const SKILL_KNOWLEDGE_DUNGEONEERING = 'knowledgeDungeoneering';
export const SKILL_KNOWLEDGE_ENGINEERING = 'knowledgeEngineering';
export const SKILL_KNOWLEDGE_GEOGRAPHY = 'knowledgeGeography';
export const SKILL_KNOWLEDGE_HISTORY = 'knowledgeHistory';
export const SKILL_KNOWLEDGE_LOCAL = 'knowledgeLocal';
export const SKILL_KNOWLEDGE_NATURE = 'knowledgeNature';
export const SKILL_KNOWLEDGE_NOBILITY = 'knowledgeNobility';
export const SKILL_KNOWLEDGE_PLANES = 'knowledgePlanes';
export const SKILL_KNOWLEDGE_RELIGION = 'knowledgeReligion';
export const SKILL_LINGUISTICS = 'linguistics';
export const SKILL_PERCEPTION = 'perception';
export const SKILL_PERFORM = 'perform';
export const SKILL_PROFESSION = 'profession';
export const SKILL_RIDE = 'ride';
export const SKILL_SENSE_MOTIVE = 'senseMotive';
export const SKILL_SLEIGHT_OF_HAND = 'sleightOfHand';
export const SKILL_SPELLCRAFT = 'spellcraft';
export const SKILL_STEALTH = 'stealth';
export const SKILL_SURVIVAL = 'survival';
export const SKILL_SWIM = 'swim';
export const SKILL_USE_MAGIC_DEVICE = 'useMagicDevice';

export default {
  [SKILL_ACROBATICS]: {
    name: 'Acrobatics',
    stat: STAT_DEX,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_APPRAISE]: {
    name: 'Appraise',
    stat: STAT_INT,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_BLUFF]: {
    name: 'Bluff',
    stat: STAT_CHA,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_CLIMB]: {
    name: 'Climb',
    stat: STAT_STR,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_CRAFT]: {
    name: 'Craft',
    stat: STAT_INT,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_DIPLOMACY]: {
    name: 'Diplomacy',
    stat: STAT_CHA,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_DISABLE_DEVICE]: {
    name: 'Disable Device',
    stat: STAT_DEX,
    useUntrained: false,
    armorCheckPenalty: true,
  },
  [SKILL_DISGUISE]: {
    name: 'Disguise',
    stat: STAT_CHA,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_ESCAPE_ARTIST]: {
    name: 'Escape Artist',
    stat: STAT_DEX,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_FLY]: {
    name: 'Fly',
    stat: STAT_DEX,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_HANDLE_ANIMAL]: {
    name: 'Handle Animal',
    stat: STAT_CHA,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_HEAL]: {
    name: 'Heal',
    stat: STAT_WIS,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_INTIMIDATE]: {
    name: 'Intimidate',
    stat: STAT_CHA,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_ARCANA]: {
    name: 'Knowledge (arcana)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_DUNGEONEERING]: {
    name: 'Knowledge (dungeoneering)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_ENGINEERING]: {
    name: 'Knowledge (engineering)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_GEOGRAPHY]: {
    name: 'Knowledge (geography)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_HISTORY]: {
    name: 'Knowledge (history)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_LOCAL]: {
    name: 'Knowledge (local)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_NATURE]: {
    name: 'Knowledge (nature)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_NOBILITY]: {
    name: 'Knowledge (nobility)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_PLANES]: {
    name: 'Knowledge (planes)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_KNOWLEDGE_RELIGION]: {
    name: 'Knowledge (religion)',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_LINGUISTICS]: {
    name: 'Linguistics',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_PERCEPTION]: {
    name: 'Perception',
    stat: STAT_WIS,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_PERFORM]: {
    name: 'Perform',
    stat: STAT_CHA,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_PROFESSION]: {
    name: 'Profession',
    stat: STAT_WIS,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_RIDE]: {
    name: 'Ride',
    stat: STAT_DEX,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_SENSE_MOTIVE]: {
    name: 'Sense Motive',
    stat: STAT_WIS,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_SLEIGHT_OF_HAND]: {
    name: 'Sleight of Hand',
    stat: STAT_DEX,
    useUntrained: false,
    armorCheckPenalty: true,
  },
  [SKILL_SPELLCRAFT]: {
    name: 'Spellcraft',
    stat: STAT_INT,
    useUntrained: false,
    armorCheckPenalty: false,
  },
  [SKILL_STEALTH]: {
    name: 'Stealth',
    stat: STAT_DEX,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_SURVIVAL]: {
    name: 'Survival',
    stat: STAT_WIS,
    useUntrained: true,
    armorCheckPenalty: false,
  },
  [SKILL_SWIM]: {
    name: 'Swim',
    stat: STAT_STR,
    useUntrained: true,
    armorCheckPenalty: true,
  },
  [SKILL_USE_MAGIC_DEVICE]: {
    name: 'Use Magic Device',
    stat: STAT_CHA,
    useUntrained: false,
    armorCheckPenalty: false,
  },
};
