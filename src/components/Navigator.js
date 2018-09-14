import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import connect from 'react-redux/es/connect/connect';
import { AppNavigator } from '../redux/navigation/navigation';

const Navigator = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.navigation,
});

export default connect(mapStateToProps)(Navigator);
