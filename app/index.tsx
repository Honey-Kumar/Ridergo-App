import { Redirect } from 'expo-router'
import '../global.css'
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
    return <Redirect href="/(auth)/Welcome" />
}

export default HomeScreen