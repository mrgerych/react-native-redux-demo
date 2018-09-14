// @flow
import { DrawerActions } from 'react-navigation';
import React from 'react';
import styled from 'styled-components';

const NavigationTouchable = styled.TouchableHighlight``;

const NavigationButtonIcon = styled.Image`
  height: 40;
  width: 40;
`;

type Props = {
  navigation: any,
};

export const NavigationButton = (props: Props) => (
  <NavigationTouchable
    onPress={() => {
      props.navigation.dispatch(DrawerActions.toggleDrawer());
    }}
  >
    <NavigationButtonIcon source={require('../resources/icons/menuIcon.png')} />
  </NavigationTouchable>
);
