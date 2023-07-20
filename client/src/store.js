import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have defined your reducers in another file

const store = createStore(rootReducer);

export default store;