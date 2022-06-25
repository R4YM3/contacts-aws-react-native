import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SCREEN_NAME_CONTACT } from './Contact';

export const SCREEN_NAME_CONTACTS = 'Contacts';
type IProps = NativeStackScreenProps<RootStackParamList, SCREEN_NAME_CONTACTS>;

export function ContactsScreen({ navigation }: IProps) {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
      <Button title="Go to contact" onPress={() => navigation.navigate(SCREEN_NAME_CONTACT)} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
