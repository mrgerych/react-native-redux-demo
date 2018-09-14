// @flow
import {
  createStackNavigator,
  NavigationActions,
  StackActions,
  createDrawerNavigator,
  DrawerActions,
} from 'react-navigation';
import HomeScreen from '../../components/HomeScreen';
import LoginScreen from '../../components/LoginScreen';
import Menu from '../../components/Menu';
import LogoutScreen from '../../components/LogoutScreen';
import QuestionsListScreen from '../../components/QuestionsListScreen';

export const MAIN_SCREEN = 'MAIN_SCREEN';
export const HOME_SCREEN = 'HOME_SCREEN';
export const LOGIN_SCREEN = 'LOGIN_SCREEN';
export const LOGOUT_SCREEN = 'LOGOUT_SCREEN';
export const QUESTION_SCREEN = 'QUESTION_SCREEN';

const HomeScreenStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
});

const LogoutScreenStack = createStackNavigator({
  LogoutScreen: {
    screen: LogoutScreen,
  },
});

const QuestionsListScreenStack = createStackNavigator({
  QuestionsListScreen: {
    screen: QuestionsListScreen,
  },
});

const DrawerStack = createDrawerNavigator(
  {
    [HOME_SCREEN]: {
      screen: HomeScreenStack,
    },
    [LOGOUT_SCREEN]: {
      screen: LogoutScreenStack,
    },
    [QUESTION_SCREEN]: {
      screen: QuestionsListScreenStack,
    },
  },
  {
    contentComponent: Menu,
    drawerWidth: 250,
  }
);
export const AppNavigator = createStackNavigator(
  {
    [LOGIN_SCREEN]: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },

    [MAIN_SCREEN]: {
      screen: DrawerStack,
      navigationOptions: {
        header: null,
      },
    },
  },
  { initialRouteName: LOGIN_SCREEN }
);

export function navigateToMain() {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: MAIN_SCREEN })],
  });
}

export function toggleSideMenu() {
  return DrawerActions.toggleDrawer();
}

export function navigateToHome() {
  return NavigationActions.navigate({
    routeName: HOME_SCREEN,
  });
}

export function navigateToQuestions() {
  return NavigationActions.navigate({
    routeName: QUESTION_SCREEN,
  });
}

export function navigateToLogout() {
  return NavigationActions.navigate({
    routeName: LOGOUT_SCREEN,
  });
}

export function navigateToLogin() {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: LOGIN_SCREEN })],
    key: null,
  });
}
