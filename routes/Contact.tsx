import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

  console.log("DATA", data)

  return (
    <View style={styles.container}>
      <Text>Contact</Text>

      <Tab.Navigator initialRouteName={SCREEN_NAME_CONTACT_DETAILS}>
        <Tab.Screen name={SCREEN_NAME_CONTACT_DETAILS} component={ContactDetails} />
        <Tab.Screen name={SCREEN_NAME_CONTACT_CHAT} component={ContactChat} />
      </Tab.Navigator>
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
