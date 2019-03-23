import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useAppState from '@rnhooks/app-state';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  type: {
    margin: 20,
    fontSize: 20,
  },
});

function App() {
  console.log('re rendering');
  const { status, foreground } = useAppState();
  console.log(`Current APp State${status}${foreground}`);
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`App State: ${status}`}</Text>
      <Text style={styles.type}>{`Foreground: ${foreground}`}</Text>
    </View>
  );
}

export default App;
