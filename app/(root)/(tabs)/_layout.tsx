import { Stack } from "expo-router"

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Home" options={{ headerShown: false }} />
            <Stack.Screen name="Message" options={{ headerShown: false }} />
            <Stack.Screen name="Profile" options={{ headerShown: false }} />
            <Stack.Screen name="Rides" options={{ headerShown: false }} />
        </Stack>
    )
}

export default Layout