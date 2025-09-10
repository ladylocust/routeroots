import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ParkingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗺️ Map not supported on web yet</Text>
      <Text style={styles.subtitle}>
        Run this app on iOS or Android to see the live map.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: 'gray', marginTop: 5 },
});
