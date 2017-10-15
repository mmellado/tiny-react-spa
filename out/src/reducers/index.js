import { combineReducers } from 'redux';

// Import your reducers here
import navigation from './navigation';

const reducer = combineReducers({
  // Add your reducers to the list
  navigation,
});

export default reducer;
