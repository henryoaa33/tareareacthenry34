import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const events = [
  { id: '1', name: 'Concierto de Rock', details: 'Un increíble concierto de rock en el parque.' },
  { id: '2', name: 'Feria de Arte', details: 'Exposición de arte local en el centro de la ciudad.' },
];

const EventListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { event: item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EventListScreen;
