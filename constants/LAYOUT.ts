import { Dimensions } from 'react-native';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');

export const MODAL = {
  HEIGHT: 313,
  BOTTOM_OFFSET: 26, // NavBar height + gap (increased by 20px to lower the modal)
  ANIMATION_OFFSET: 15, // Additional offset for animation start position
  get HIDDEN_POSITION() {
    return this.HEIGHT + this.BOTTOM_OFFSET - this.ANIMATION_OFFSET;
  },
  get VISIBLE_POSITION() {
    return 0;
  },
  ANIMATION_DURATION: 500,
};

export const SCREEN = {
  WINDOW_HEIGHT,
};
