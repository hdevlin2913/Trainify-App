import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import SignIn from '../../screens/auth/SignIn';
import SignUp from '../../screens/auth/SignUp';
import Splash from '../../screens/splash/Splash';

const Stack = createStackNavigator();

const AuthStack = () => {
   const [splash, setSplash] = useState(true);

   const checkSplashDone = async () => {
      const splashDone = (await AsyncStorage.getItem('splash-done')) || null;
      if (splashDone) setSplash(false);
   };

   useEffect(() => {
      checkSplashDone();
   }, []);

   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         {splash && <Stack.Screen name="Splash" component={Splash} />}
         <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
   );
};

export default AuthStack;
