import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, SCREEN_NAME_HOME } from './routes/Home';
import { ContactsScreen, SCREEN_NAME_CONTACTS } from './routes/Contacts';
import { ContactScreen, IContactParams, SCREEN_NAME_CONTACT } from './routes/Contact';
import { QueryClient, QueryClientProvider } from 'react-query';

export interface RootStackParamList extends IContactParams {
  [SCREEN_NAME_HOME]: undefined;
  [SCREEN_NAME_CONTACTS]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator initialRouteName={SCREEN_NAME_HOME}>
          <Screen name={SCREEN_NAME_HOME} component={HomeScreen} />
          <Screen name={SCREEN_NAME_CONTACTS} component={ContactsScreen} />
          <Screen name={SCREEN_NAME_CONTACT} component={ContactScreen} options={{
            title: '',
            headerShadowVisible: false, // applied here
          }} />
        </Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
