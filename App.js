//--------------------------------------------
//  Libraries and default installs
//--------------------------------------------
import React, {useState, useContext, useEffect} from 'react';
import {StatusBar,
  StyleSheet,
  Text, 
  View, 
  ScrollView, 
  Button, 
  TouchableOpacity, 
  AsyncStorage,
  Dimensions} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

//-------------------------------------------------------------
//  Importing various screens for the app - from screens folder
//-------------------------------------------------------------
import Home from './screens/Home';
import History from './screens/History';

//--------------------------------
//  Importing Fonts for the App
//--------------------------------
const getFonts = () =>  Font.loadAsync({
    'roboto-light':require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'roboto-bold':require('./assets/fonts/RobotoCondensed-Bold.ttf')
  });



export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  //Render App on Font load
  if(fontsLoaded){
    return (
      <NativeRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/history' component={History} />
          </Switch>
      </NativeRouter>
      );
  } 
  //Loading fonts to the app
  else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}