import { View, Text, StyleSheet } from 'react-native'

export function Footer() {
  return (
    <View>
      <Text style={styles.texto}>2024 Fernado de Noronha Turismo</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  texto: {
    textAlign: 'center',
  },
})