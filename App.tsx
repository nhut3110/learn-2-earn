if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import useCachedResources from './hooks/useCachedResources';

/**
 * @description Main navigation
 * In this app, there are two navigation types - screens navigation and bottom tab navigation
 * Main navigation present for screens navigation handling transitions between screens
 */
import Navigation from './navigation';

/**
 * @description
 * Redux management
 */
import { Provider as ReduxProvider } from 'react-redux';
import { makeStore } from './app-redux';

const store = makeStore(); 

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </ReduxProvider>  
    );
  }
}
