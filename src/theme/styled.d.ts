import 'styled-components';
import lightTheme from './light.theme';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType {}
}
