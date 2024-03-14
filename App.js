import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mateus</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Colne do projeto aula 14-03-2024 3B1 lado B</Text>
      <Text></Text>
      <StatusBar style="auto" />
      <Button title='salvar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
