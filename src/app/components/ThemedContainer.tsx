import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface ThemedContainerProps {
  children: React.ReactNode;
}

const ThemedContainer: React.FC<ThemedContainerProps> = ({ children }) => {
  const { accentColor } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: accentColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ThemedContainer;