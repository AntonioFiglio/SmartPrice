import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ThemedContainer from '../../components/ThemedContainer';

const LoginScreen: React.FC = () => {
  return (
    <ThemedContainer>
      <Text>Login Screen</Text>
      <Input placeholder="Email" onChangeText={() => {}} />
      <Input placeholder="Password" onChangeText={() => {}} secureTextEntry />
      <Button title="Login" onPress={() => {}} />
    </ThemedContainer>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default LoginScreen;