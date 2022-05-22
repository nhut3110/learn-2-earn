import React from 'react';
import Navigation from '../navigation/home.navigation';
import useColorScheme from '../hooks/useColorScheme';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  return (
    <Navigation colorScheme={colorScheme} />
  );
}
