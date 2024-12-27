/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { persistor, store } from './android/app/src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SignupProvider } from './SignupContext'; // import the SignupProvider

const Root = () => (
    <Provider store={store}>
      <SignupProvider>
        <PersistGate persistor={persistor}> 
          <App/>
        </PersistGate>
        </SignupProvider>
    </Provider>


)
AppRegistry.registerComponent(appName, () => Root);

