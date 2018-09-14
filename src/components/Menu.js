// @flow
import React from 'react';
import { Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  navigateToHome,
  navigateToLogout,
  navigateToQuestions,
} from '../redux/navigation/navigation';
import { MenuContainer, MenuTitleText } from './StyledComponents';

type ReduxActions = {
  actions: {
    navigateToHome: Function,
    navigateToQuestions: Function,
    navigateToLogout: Function,
  },
};

type Props = ReduxActions;

const Menu = (props: Props) => (
  <MenuContainer>
    <MenuTitleText>Menu</MenuTitleText>
    <Button title={'Home'} onPress={props.actions.navigateToHome} />
    <Button title={'Questions'} onPress={props.actions.navigateToQuestions} />
    <Button title={'LogOut'} onPress={props.actions.navigateToLogout} />
  </MenuContainer>
);

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    navigateToHome,
    navigateToQuestions,
    navigateToLogout,
  };
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Menu);
