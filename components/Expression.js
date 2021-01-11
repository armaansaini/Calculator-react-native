import React, { useContext } from 'react';
import {ScrollView,
		Text,
		StyleSheet,
		View} from 'react-native';
import ThemeContext from './ThemeContext';

//-----------------------------------------------------------------------------------
//  React Functional Component for display the mathematical expression on the screen
//  ScrollView is used for auto scroll of expression
//-----------------------------------------------------------------------------------
export default function Expression({expression}){
	const theme = useContext(ThemeContext);
	return (
		<View style={theme}>
			<ScrollView 
            	  ref={ref=>this.scrollView = ref}
              	onContentSizeChange={(contentWidth, contentHeight)=>{        
                	this.scrollView.scrollToEnd({animated: true});
              	}}
              	horizontal={true}
              	showsHorizontalScrollIndicator={false}
          	>
            	<Text style={styles.expression}>{expression}</Text>
          	</ScrollView>
        </View>
	)
}

const styles = StyleSheet.create({
  expression: {
    fontSize:40,
    color:'#ccc',
    alignSelf:'flex-end',
    fontFamily:'roboto-light',
  }
})