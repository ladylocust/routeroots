import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ComplianceScreen() {
  const [hoursDriven, setHoursDriven] = useState(6);   // mock hours
  const [hoursLimit, setHoursLimit] = useState(11);    // FMCSA daily limit
  const [breakTimer, setBreakTimer] = useState(3);     // hours until next break (mock)

  // Mock countdown effect for break timer
  useEffect(() => {
    const interval = setInterval(() => {
      setBreakTimer(prev => (prev > 0 ? prev - 0.1 : 0));
    }, 1000 * 60); // every minute
    return () => clearInterval(interval);
  }, []);

  const hoursRemaining = hoursLimit - hoursDriven;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compliance Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Hours Driven:</Text>
        <Text style={styles.value}>{hoursDriven} hrs</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Hours Remaining:</Text>
        <Text
          style={[
            styles.value,
            { color: hoursRemaining <= 2 ? 'red' : 'green' }
          ]}
        >
          {hoursRemaining} hrs
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Next Break In:</Text>
        <Text
          style={[
            styles.value,
            { color: breakTimer <= 0.5 ? 'red' : 'orange' }
          ]}
        >
          {breakTimer.toFixed(1)} hrs
        </Text>
      </View>

      <Text style={styles.footer}>⚠️ This is a mock logbook for demo only</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
  },
  footer: {
    marginTop: 30,
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
  },
});
