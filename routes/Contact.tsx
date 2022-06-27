import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContactDetails, SCREEN_NAME_CONTACT_DETAILS } from './ContactDetails';
import { ContactChat, SCREEN_NAME_CONTACT_CHAT } from './ContactChat';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useContact } from '../hooks/useContact';

export const SCREEN_NAME_CONTACT = 'Contact';
export interface IContactParams {
  [SCREEN_NAME_CONTACT]: {
    userId: number
  }
}
type IProps = NativeStackScreenProps<RootStackParamList, SCREEN_NAME_CONTACT>;

const Tab = createMaterialTopTabNavigator();

export function ContactScreen({ route }: IProps) {
  const { userId } = route.params;
  const { data, status } = useContact(userId);

  if (status === 'error') {
    return <Text>Error fetching data</Text>
  }

  if (status === 'loading') {
    return <Text>Fetching data...</Text>
  }

  if (status === 'success' && data) {
    return (
      <View style={styles.container}>

        <Image
          style={styles.avatar}
          source={{ uri: 'https://busjebloemen.com/wp-content/uploads/2021/05/testimonial-avatar-male-1-ux-builder.jpg' }}
        />

        <Text style={styles.name}>{data.name}</Text>

        <Tab.Navigator initialRouteName={SCREEN_NAME_CONTACT_DETAILS}>
          <Tab.Screen name={SCREEN_NAME_CONTACT_DETAILS} component={ContactDetails} />
          <Tab.Screen name={SCREEN_NAME_CONTACT_CHAT} component={ContactChat} />
        </Tab.Navigator>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      Something went wrong
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
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 128,
    marginTop: 0,
    marginBottom: 24
  },
  name: {
    fontSize: 24
  }
});
