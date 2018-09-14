// @flow

import type { Questions } from '../redux/questions/questions';
import type { UserSession } from '../redux/userSession/userSession';

export type ReduxState = {
  navigation: any,
  questions: Questions,
  userSession: UserSession,
};
