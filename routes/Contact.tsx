import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export const SCREEN_NAME_CONTACT = 'Contact';
type IProps = NativeStackScreenProps<RootStackParamList, SCREEN_NAME_CONTACT>;

export function ContactScreen({ navigation }: IProps) {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
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
