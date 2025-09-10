import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ParkingScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.8283,
          longitude: -98.5795,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        <Marker
          coordinate={{ latitude: 41.8781, longitude: -87.6298 }}
          title="Truck Stop Example"
          description="Parking, showers, food"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
