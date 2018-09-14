// @flow

import type { Question } from '../../classes/question';

const PREFIX = 'DEMO/QUESTIONS';
export const GET_QUESTIONS = `${PREFIX}/GET_QUESTIONS`;
export const GET_QUESTIONS_SUCCESS = `${PREFIX}/GET_QUESTIONS_SUCCESS`;
export const GET_QUESTIONS_FAIL = `${PREFIX}/GET_QUESTIONS_FAIL`;

export type Questions = {
  loadingQuestionsList: boolean,
  questionsList: ?Array<Question>,
  error: any,
};

const initialState = {
  loadingQuestionsList: false,
  questionsList: null,
  error: null,
};

export default function questions(state: Questions = initialState, action: any) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        loadingQuestionsList: true,
        error: null,
      };
    case GET_QUESTIONS_FAIL:
      return {
        ...state,
        loadingQuestionsList: false,
        error: 'Error while fetching questions',
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loadingMainCatalog: false,
        questionsList: action.payload.data.items,
        error: null,
      };
    default:
      return state;
  }
}

export function loadQuestionsList() {
  return {
    type: GET_QUESTIONS,
    payload: {
      request: {
        url: `search?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&intitle=react%20native&filter=default`,
      },
    },
  };
}
