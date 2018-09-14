// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationButton } from './NavigationButton';
import { logout } from '../redux/userSession/userSession';
import { CenteredContainer, LogoutButton } from './StyledComponents';

type ReduxActions = {
  actions: {
    logout: Function,
  },
};

type Props = ReduxActions;

const LogoutScreen = (props: Props) => (
  <CenteredContainer>
    <LogoutButton onPress={props.actions.logout} title={`Logout`} />
  </CenteredContainer>
);

LogoutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Logout',
  headerLeft: <NavigationButton navigation={navigation} />,
});

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    logout,
  };
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LogoutScreen);
