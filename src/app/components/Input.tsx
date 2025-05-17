import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, onChangeText, secureTextEntry = false }) => {
  const { accentColor } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { borderColor: accentColor }]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888" // You can adjust placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333', // You can adjust text color
  },
});

export default Input;