import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SCREEN_NAME_CONTACTS } from './Contacts';

export const SCREEN_NAME_LOGIN = 'Login';

export function LoginScreen({ navigation, route }) {
  const { setIsLoggedIn } = route.params;
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() => {
          setIsLoggedIn(true)
          navigation.navigate(SCREEN_NAME_CONTACTS)}
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
