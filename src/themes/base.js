import { intervenerTheme } from './intervenerTheme';
import { participantTheme } from './participantTheme';

const getTheme = function(theme) {
  return themes[theme];
};

const themes = {
  participantTheme,
  intervenerTheme
};

export default getTheme;
