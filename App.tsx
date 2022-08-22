import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import darkTheme from './src/theme/dark.theme';
import lightTheme from './src/theme/light.theme';
import StorybookUIRoot from './storybook';
import Feed from './src/screens/Feed';

const App = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {/* <StorybookUIRoot /> */}
      <Feed />
    </ThemeProvider>
  );
};

export default App;
