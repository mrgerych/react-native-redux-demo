// @flow

import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const CenteredContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const WelcomeMessage = styled.Text`
  font-size: 18;
`;

export const LoginTouchable = styled.TouchableOpacity`
  background: deepskyblue;
  border-width: 1;
  border-radius: 3;
  width: 25%;
  height: 25;
  align-items: center;
  justify-content: center;
  margin-top: 40;
`;

export const LoginButtonText = styled.Text`
  font-size: 14;
`;

export const ErrorText = styled.Text`
  font-size: 14;
  color: red;
  margin-top: 15;
`;

export const TextInputContainer = styled.View`
  margin-top: 15;
  flex-direction: row;
`;

export const NameTextInput = styled.TextInput`
  height: 25;
  border-color: gray;
  border-width: 1;
  margin-left: 15;
  width: 200;
`;

export const NameIcon = styled.Image`
  height: 25;
  width: 25;
`;

export const PasswordTextInput = styled(NameTextInput)``;
export const PasswordIcon = styled(NameIcon)``;

export const LogoutButton = styled.Button``;

export const MenuContainer = styled.View`
  flex: 1;
  margin-top: 40;
  align-items: center;
`;

export const MenuTitleText = styled.Text`
  font-size: 24;
  margin-bottom: 35;
`;

export const LoginContainer = styled.View`
  flex: 1;
  margin-top: 250;
  align-items: center;
`;

export const QuestionListItemContainer = styled.View`
  height: 45;
  padding-left: 25;
`;

export const QuestionListItemTitle = styled.Text`
  font-size: 17;
`;

export const QuestionListSeparator = styled.View`
  height: 1;
  background: gray;
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 25;
`;
