import LoginScreen from "@/screens/Login"
import RegisterScreen from "@/screens/Register"
import { createStackNavigator } from "@react-navigation/stack"

export type PublicStackParamList = {
  Login: undefined
  Register: undefined
}

export const PublicRoutes = () => {
  const PublicStack = createStackNavigator<PublicStackParamList>()

  return (
    <PublicStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <PublicStack.Screen name="Login" component={LoginScreen}/>
        <PublicStack.Screen name="Register" component={RegisterScreen}/>
      </PublicStack.Navigator>
  )
}