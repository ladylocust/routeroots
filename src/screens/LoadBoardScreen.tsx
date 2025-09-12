import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockLoads = [
  {
    id: '1',
    pickup: 'Chicago, IL',
    dropoff: 'Dallas, TX',
    weight: '40,000 lbs',
    rate: '$2,500',
  },
  {
    id: '2',
    pickup: 'Atlanta, GA',
    dropoff: 'Miami, FL',
    weight: '30,000 lbs',
    rate: '$1,800',
  },
  {
    id: '3',
    pickup: 'Denver, CO',
    dropoff: 'Phoenix, AZ',
    weight: '20,000 lbs',
    rate: '$2,200',
  },
];

export default function LoadBoardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Available Loads</Text>
      <FlatList
        data={mockLoads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.route}>
              {item.pickup} ➝ {item.dropoff}
            </Text>
            <Text style={styles.details}>
              {item.weight} | {item.rate}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  route: { fontSize: 18, fontWeight: '600' },
  details: { fontSize: 14, color: 'gray', marginTop: 4 },
});
