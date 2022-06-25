import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
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
      <FlatList style={styles.contacts} data={data} renderItem={renderContact} />
      <Button title="Go to contact" onPress={() => navigation.navigate(SCREEN_NAME_CONTACT)} />
    </View>
  );

  function renderContact({ item }: { item: IContact }) {
    return (
      <TouchableOpacity key={item.id} style={styles.contact}
        onPress={() => navigation.navigate(SCREEN_NAME_CONTACT, { userId: item.id })}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contacts: {
    width: '100%'
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(216, 216, 216)'
  },
  name: {
    fontSize: 18,
    paddingTop: 25,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 54,
    margin: 10
  }
});
