import React from 'react';
import {View,
		Text,
		StyleSheet} from 'react-native';

//-----------------------------------------------------------------------------------
//  React Functional Component for display the result of the mathematical expression on the screen
//-----------------------------------------------------------------------------------
export default function Result({result}){
	return (
		<View>
			<Text 
          style={styles.result}
          numberOfLines={1}
          adjustsFontSizeToFit
      >
        {result}
      </Text>
    </View>
	)
}

const styles = StyleSheet.create({
  result: {
    marginTop:40,
    alignSelf:'flex-end',
    fontSize:50,
    fontFamily:'roboto-light',
  },
})