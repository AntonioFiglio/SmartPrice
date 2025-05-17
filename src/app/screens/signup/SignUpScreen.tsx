import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemedContainer from '../../components/ThemedContainer';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUpScreen: React.FC = () => {
  return (
    <ThemedContainer>
      <Text style={styles.title}>Sign Up</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Button title="Sign Up" onPress={() => {}} />
    </ThemedContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SignUpScreen;