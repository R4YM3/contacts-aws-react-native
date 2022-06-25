import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SCREEN_NAME_CONTACTS } from './Contacts';

export const SCREEN_NAME_HOME = 'Home';

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(SCREEN_NAME_CONTACTS)}
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
