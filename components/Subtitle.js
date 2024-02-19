import { View, Text, StyleSheet } from 'react-native'

export function Subtitle() {
  return (
    <View>
      <Text style={styles.subtitulo}>Explore as Maravilhosas praias</Text>
      <Text style={styles.texto}>Visite as praias de Fernado de Noronha e mergulha nas águas azul Turquesa.</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  subtitulo: {
    padding: 20,
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f97728',
  },

  texto: {
    marginBottom: 15,
  },
})