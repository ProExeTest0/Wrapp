import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Oops from '../screens/Ooops';
import Explore from '../screens/Explore';
import Onboard from '../components/OnBording';
import Signup from '../auth/Signup';
import Email from '../auth/Sign_email';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="oops" component={Oops} />
        <Stack.Screen name="explore" component={Explore} />
        <Stack.Screen name="onboard" component={Onboard} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="email" component={Email} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
