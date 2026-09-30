import { NavigationContainer } from "@react-navigation/native"
import { PublicRoutes } from "./PublicRoutes"
import { useCallback, useState } from "react";
import { useAuthContext } from "@/context/auth.context";
import { PrivateRoutes } from "./PrivateRoutes";


const NavigationRoutes = () => {
  const { token, user } = useAuthContext();

  const Routes = useCallback(() => {
    if(!user || !token){
      return <PublicRoutes />
    } else {
      return <PrivateRoutes />
    }
  }, [user, token])

  return (
    <NavigationContainer>
      
      <Routes />
    </NavigationContainer>
  )
}

export default NavigationRoutes