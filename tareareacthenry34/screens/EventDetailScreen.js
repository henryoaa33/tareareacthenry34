import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const EventDetailScreen = () => {
  const route = useRoute();
  const { event } = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Text>{event.name}</Text>
      <Text>{event.details}</Text>
      <Button title="Tomar Foto" onPress={() => navigation.navigate('Camera', { eventId: event.id })} />
    </View>
  );
};

export default EventDetailScreen;
