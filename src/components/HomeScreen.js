// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu } from '../redux/navigation/navigation';
import type { ReduxState } from '../classes/state';
import { NavigationButton } from './NavigationButton';
import { CenteredContainer, WelcomeMessage } from './StyledComponents';

type ReduxProps = {
  name: string,
};

type ReduxActions = {
  actions: {
    toggleSideMenu: Function,
  },
};

type Props = ReduxActions & ReduxProps;

const HomeScreen = (props: Props) => (
  <CenteredContainer>
    <WelcomeMessage>{`Welcome, ${props.name}`}</WelcomeMessage>
  </CenteredContainer>
);

const mapStateToProps = (state: ReduxState) => ({
  name: state.userSession.user.name,
});

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    toggleSideMenu,
  };
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Home',
  headerLeft: <NavigationButton navigation={navigation} />,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
