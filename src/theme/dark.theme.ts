import {DefaultTheme} from 'styled-components/native';
import colors from './colors';

const theme: DefaultTheme = {
  COMMOM: {
    ACCENT: colors.ACCENT,
    ACCENT_SECONDARY: colors.ACCENT_SECONDARY,
    ACCENT_TERTIARY: colors.ACCENT_TERTIARY,
    BACKGROUND: colors.GRAYS_1100,
    GRAYS_100: colors.GRAYS_100,
    GRAYS_200: colors.GRAYS_200,
    GRAYS_300: colors.GRAYS_300,
    GRAYS_400: colors.GRAYS_400,
    GRAYS_500: colors.GRAYS_500,
    GRAYS_600: colors.GRAYS_600,
    GRAYS_700: colors.GRAYS_700,
    GRAYS_800: colors.GRAYS_800,
    GRAYS_900: colors.GRAYS_900,
    GRAYS_1000: colors.GRAYS_1000,
    GRAYS_1100: colors.GRAYS_1100,
    GRAYS_1200: colors.GRAYS_1200,
  },
  BUTTON: {
    PRIMARY_BACKGROUND: colors.ACCENT,
    PRIMARY_TEXT: colors.GRAYS_100,
    SECONDARY_BACKGROUND: colors.GRAYS_100,
    SECONDARY_TEXT: colors.GRAYS_1200,
    OUTLINE_BORDER: colors.GRAYS_700,
  },
  TWEET: {
    PRIMARY: colors.GRAYS_200,
    SECONDARY: colors.GRAYS_600,
    BORDER: colors.GRAYS_900,
    VERIFIED_BADGE: colors.GRAYS_200,
    THREAD_LINE: colors.GRAYS_800,
  },
};

export default theme;
