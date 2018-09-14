// @flow
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationButton } from './NavigationButton';
import QuestionListItem from './QuestionListItem';
import { loadQuestionsList } from '../redux/questions/questions';
import {
  Container,
  QuestionListSeparator,
  WelcomeMessage,
} from './StyledComponents';
import type { ReduxState } from '../classes/state';
import type { Question } from '../classes/question';

type ReduxProps = {
  questions: ?Array<Question>,
};

type ReduxActions = {
  actions: {
    loadQuestionsList: Function,
  },
};

type Props = ReduxActions & ReduxProps;

class QuestionsListScreen extends Component<Props, void> {
  componentDidMount() {
    this.props.actions.loadQuestionsList();
  }

  keyExtractor = (item: Question) => `${item.id}${item.creation_date}`;

  renderItem = ({ item: element }: { item: Question }) => (
    <QuestionListItem title={element.title} />
  );

  render() {
    if (this.props.questions === null) {
      return (
        <Container>
          <WelcomeMessage>There is no data yet</WelcomeMessage>
        </Container>
      );
    }
    return (
      <Container>
        <FlatList
          data={this.props.questions}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={QuestionListSeparator}
          renderItem={this.renderItem}
          removeClippedSubviews
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  questions: state.questions.questionsList,
});

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    loadQuestionsList,
  };
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

QuestionsListScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Questions',
  headerLeft: <NavigationButton navigation={navigation} />,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionsListScreen
);
