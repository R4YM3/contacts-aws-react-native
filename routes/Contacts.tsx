import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SCREEN_NAME_CONTACT } from './Contact';
import { useContacts } from '../hooks/useContacts';
import { IContact } from '../api/contacts';

export const SCREEN_NAME_CONTACTS = 'Contacts';
type IProps = NativeStackScreenProps<RootStackParamList, SCREEN_NAME_CONTACTS>;

export function ContactsScreen({ navigation }: IProps) {
  const { status, data } = useContacts();

  if (status === 'error') {
    return <Text>Error fetching data</Text>
  }

  if (status === 'loading') {
    return <Text>Fetching data...</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderContact} />
      <Button title="Go to contact" onPress={() => navigation.navigate(SCREEN_NAME_CONTACT)} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function renderContact({ item }: { item: IContact }) {
  return (
    <View key={item.id}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
