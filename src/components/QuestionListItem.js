// @flow
import React from 'react';
import {
  QuestionListItemContainer,
  QuestionListItemTitle,
} from './StyledComponents';

type Props = {
  title: string,
};

export default (props: Props) => (
  <QuestionListItemContainer>
    <QuestionListItemTitle>{props.title}</QuestionListItemTitle>
  </QuestionListItemContainer>
);
