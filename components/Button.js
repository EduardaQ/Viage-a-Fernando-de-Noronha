import { View, Text, StyleSheet } from 'react-native'

export function Button() {
  return (
    <View>
      <Text style={styles.titulo}>Reserve sua viagem</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  titulo: {
    padding: 20,
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#9ee3f2',
    borderColor: 'white',
    borderWidth: 30,
  },
})