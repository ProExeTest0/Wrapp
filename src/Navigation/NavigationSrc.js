import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Oops from '../screens/Ooops';
import Explore from '../screens/Explore';
import Onboard from '../components/OnBording';
import Signup from '../auth/Signup';
import Email from '../auth/Sign_email';
import EmailSignup from '../auth/Sign_email';
import Progressline from '../components/ProgressLine';
import Maininfo from '../auth/Maininfo';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="emailsign"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="oops" component={Oops} />
        <Stack.Screen name="explore" component={Explore} />
        <Stack.Screen name="onboard" component={Onboard} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="email" component={Email} />
        <Stack.Screen name="emailsign" component={EmailSignup} />
        <Stack.Screen name="progress" component={Progressline} />
        <Stack.Screen name="maininfo" component={Maininfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
