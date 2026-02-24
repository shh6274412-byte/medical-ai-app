import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  if (screen === 'login') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Medical AI Login</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <Button title="Login" onPress={() => setScreen('dashboard')} />
        <StatusBar style="auto" />
      </View>
    );
  }

  if (screen === 'dashboard') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <Button title="Add Patient" onPress={() => setScreen('form')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Form</Text>
      <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Age" style={styles.input} value={age} onChangeText={setAge} />
      <TextInput placeholder="Diagnosis" style={styles.input} value={diagnosis} onChangeText={setDiagnosis} />
      <Button title="Save" onPress={() => alert('Patient Saved')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});
