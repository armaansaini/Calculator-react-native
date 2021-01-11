import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

//------------------------------------------------------
//	Functional Component to add a number to the numpad
//------------------------------------------------------
export default function PadNumber({number, addNumber}){
	return (
		<View style={styles.numberContainer}>
			<TouchableHighlight
				style={styles.numberBox}			
				onPress={()=>addNumber(number)}
				underlayColor='#ddd'
			>
				<Text style={styles.number}>{number}</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	numberContainer: {
		flex:1,
		height:80,
    	borderWidth:0.3,
    	borderColor:'#ddd',
    	alignItems:'center',
    	justifyContent:'center',
 	},

 	numberBox:{
 		alignItems:'center',
 		borderRadius:100,
 		width:'70%',
 		height:'80%',
    	justifyContent:'center',
 	},

 	number: {
 		padding:10,
 		fontSize:35, 
 		fontFamily:'roboto-light',
 		color:'#1389ff',
 	}
})