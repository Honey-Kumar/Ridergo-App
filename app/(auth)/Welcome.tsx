import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Welcome = () => {
    return (
        <SafeAreaView className="h-full flex items-center justify-between">
            <TouchableOpacity className="h-full w-full flex items-end p-5" onPress={() => {
                router.replace('/(auth)/Signin')
            }}>
                <Text className="text-bold text-black text-2xl">Skip!</Text>
            </TouchableOpacity>
            <View>
                <Image source={require('../../assets/images/onboarding1.png')} />
            </View>
        </SafeAreaView>
    )
}

export default Welcome