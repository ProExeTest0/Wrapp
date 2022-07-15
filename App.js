//import liraries
import React, {useEffect} from 'react';
import Navigation from './src/Navigation/NavigationSrc';
import SplashScreen from 'react-native-splash-screen';

const APP = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigation />;
};
export default APP;
