import * as React from 'react';
import { View, Text } from 'react-native';
export const SCREEN_NAME_CONTACT_DETAILS = 'ContactDetails';

export function ContactDetails() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details</Text>
    </View>
  );
}
