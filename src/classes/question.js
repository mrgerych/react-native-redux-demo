// @flow

import type { StackOverFlowUser } from './stackofUser';

export type Question = {
  id: string,
  answer_count: number,
  bounty_amount: number,
  bounty_closes_date: number,
  creation_date: number,
  is_answered: boolean,
  last_activity_date: number,
  last_edit_date: number,
  link: string,
  owner: StackOverFlowUser,
  question_id: number,
  score: number,
  tags: Array<string>,
  title: string,
  view_count: number,
  accepted_answer_id: ?number,
};
