import react from 'expo-status-bar';
import {Text, View, Button } from 'react-native';

export default function Mateusgari() {
  return (
    <View style={styles.container}>
      <Text>Mateus Alexandre gari</Text>
      <Text>1° prova de DDM Lado B</Text>
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
