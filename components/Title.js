import { View, Text, StyleSheet } from 'react-native'

export function Title() {
  return (
    <View>
      <Text style={styles.titulo}>Bem vindo a Fernado de Noronha</Text>
      <Text style={styles.texto}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  titulo: {
    padding: 20,
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#0f7f1b',
  },

  texto: {
    marginBottom: 25,
  },
})