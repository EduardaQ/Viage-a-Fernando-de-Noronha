import { SafeAreaView, Text, StylueSheet } from 'react-native'

import { Title } from './components/Title'
import { Subtitle } from './components/Subtitle'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <SafeAreaView>
      <Title/>
      <Subtitle/>
      <Button/>
      <Footer/>
    </SafeAreaView>
  )
}