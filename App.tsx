import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, SCREEN_NAME_LOGIN } from './routes/Login';
import { ContactsScreen, SCREEN_NAME_CONTACTS } from './routes/Contacts';
import { ContactScreen, IContactParams, SCREEN_NAME_CONTACT } from './routes/Contact';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useIsLoggedIn } from './hooks/useLoggedIn';

export interface RootStackParamList extends IContactParams {
  [SCREEN_NAME_LOGIN]: undefined;
  [SCREEN_NAME_CONTACTS]: undefined;
};

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn ? ContactsStack() : OnboardingStack()}
    </QueryClientProvider>
  )

  function OnboardingStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN_NAME_LOGIN}>
          <Stack.Screen name={SCREEN_NAME_LOGIN} component={LoginScreen} initialParams={{ setIsLoggedIn }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  function ContactsStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN_NAME_CONTACTS}>
          <Stack.Screen name={SCREEN_NAME_CONTACTS} component={ContactsScreen} />
          <Stack.Screen name={SCREEN_NAME_CONTACT} component={ContactScreen} options={{
            title: '',
            headerShadowVisible: false, // applied here
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

