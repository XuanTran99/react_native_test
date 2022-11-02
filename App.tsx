import React from 'react';
import AppWrapper from './src/app';
import store, {persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import 'moment/locale/vi';
import codePush from 'react-native-code-push';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
}

// export default codePush(App);
export default App;
