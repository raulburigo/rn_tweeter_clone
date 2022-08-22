// if you use expo remove this line
import {AppRegistry} from 'react-native';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
// import {loadStories} from 'react-native-storybook-loader';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../src/components/Avatar/Avatar.stories');
  require('../src/components/Button/Button.stories');
  require('../src/components/Icon/Icon.stories');
  require('../src/components/Tweet/Tweet.stories');
  require('../src/components/TweetReason/TweetReason.stories');
  require('../src/components/TweetInfo/TweetInfo.stories');
  require('../src/components/TweetBody/TweetBody.stories');
  require('../src/components/TweetContent/TweetContent.stories');
  require('../src/components/TweetActionsGroup/TweetActionsGroup.stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
