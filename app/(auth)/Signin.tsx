import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import bgImage from "../../assets/images/signup-car.png"
import CustomButton from "@/component/CustomButton"
import { FontAwesome } from '@expo/vector-icons'

const GoogleIcon = () => (
    <FontAwesome name="google" size={24} color="black" />
);
const SignIn = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    source={bgImage}
                    className="w-full h-96 backdrop-blur-md"
                />
                <View>
                    <View className="flex flex-row items-center justify-center w-full mt-10">
                        <Text className="text-black text-3xl font-bold mx-10 text-center">
                            Let's get Started
                        </Text>
                    </View>
                    <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                        Signup or Login to find out the best car for you !
                    </Text>
                    <CustomButton
                        title="Sign Up"
                        className="my-4 mx-2 p-4 text-white"
                        onPress={() => console.log("Button Pressed")}
                        textVariant="default"
                    />
                </View>
                <View className="flex flex-row items-center my-5 px-4">
                    <View className="flex-1 h-px bg-gray-300" />
                    <Text className="mx-4 text-gray-500 font-bold">or</Text>
                    <View className="flex-1 h-px bg-gray-300" />
                </View>
                <CustomButton
                    title="Log In with Google"
                    className="my-4 mx-2 p-4 border-slate-400 border"
                    onPress={() => console.log("Button Pressed")}
                    textVariant="primary"
                    bgVariant="outline"
                    IconLeft={GoogleIcon}
                />
                <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                    Don't have an account? <Text className="text-blue-400">Log in</Text>
                </Text>
            </View>
        </ScrollView>
    )
}

export default SignIn