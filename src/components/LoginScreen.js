/* eslint-disable global-require */
// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startSession } from '../redux/userSession/userSession';
import type { ReduxState } from '../classes/state';
import {
  ErrorText,
  PasswordIcon,
  WelcomeMessage,
  LoginButtonText,
  LoginTouchable,
  PasswordTextInput,
  NameIcon,
  NameTextInput,
  TextInputContainer,
  LoginContainer,
} from './StyledComponents';

type ReduxProps = {
  error: ?string,
};

type ReduxActions = {
  actions: {
    startSession: (string, string) => void,
  },
};

type Props = ReduxProps & ReduxActions;

type State = {
  name: string,
  password: string,
};

class LoginScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '1',
      password: '2',
    };
  }

  state: State;

  onPressLogin = () =>
    this.props.actions.startSession(this.state.name, this.state.password);

  renderErrorMessage = () =>
    this.props.error ? <ErrorText>{this.props.error}</ErrorText> : null;

  renderNameInput = () => {
    const userIcon = require('../resources/icons/userIcon.png');

    return (
      <TextInputContainer>
        <NameIcon source={userIcon} />
        <NameTextInput
          onChangeText={name => {
            this.setState({
              ...this.state,
              name,
            });
          }}
          value={this.state.name}
        />
      </TextInputContainer>
    );
  };

  renderPasswordInput = () => {
    const passwordIcon = require('../resources/icons/passwordIcon.png');
    return (
      <TextInputContainer>
        <PasswordIcon source={passwordIcon} />
        <PasswordTextInput
          secureTextEntry
          onChangeText={password => {
            this.setState({
              ...this.state,
              password,
            });
          }}
          value={this.state.password}
        />
      </TextInputContainer>
    );
  };

  render() {
    const LoginButton = () => (
      <LoginTouchable onPress={this.onPressLogin}>
        <LoginButtonText>Log In</LoginButtonText>
      </LoginTouchable>
    );

    return (
      <LoginContainer>
        <WelcomeMessage>Welcome</WelcomeMessage>
        {this.renderNameInput()}
        {this.renderPasswordInput()}
        {this.renderErrorMessage()}
        <LoginButton />
      </LoginContainer>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  error: state.userSession.error,
});

function mapDispatchToProps(dispatch) {
  const actionCreators = { startSession };
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
