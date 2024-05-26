import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

const GalleryScreen = ({ route }) => {
  const { eventId } = route.params;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const album = await MediaLibrary.getAlbumAsync(eventId);
      if (album) {
        const assets = await MediaLibrary.getAssetsAsync({ album: album.id });
        setPhotos(assets.assets);
      }
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={{ uri: item.uri }} style={{ width: 100, height: 100 }} />}
      />
    </View>
  );
};

export default GalleryScreen;
