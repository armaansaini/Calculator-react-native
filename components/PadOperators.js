import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

//------------------------------------------------------
//	Functional Component to add a number to the numpad
//------------------------------------------------------
export default function PadOperator({operator, addOperator}){
	return (
		<View style={styles.operatorContainer}>
			<TouchableHighlight
				style={styles.operatorBox}
				onPress={()=>addOperator(operator)}
				underlayColor='#ddd'
			>
				<Text style={styles.operator}>{operator}</Text>
			</TouchableHighlight>
		</View>
		)
}

const styles = StyleSheet.create({
	operatorContainer:{
		flex:1,
		height:80,
    	borderWidth:0.3,
    	borderColor:'#ddd',
    	alignItems:'center',
    	justifyContent:'center',
	},

	operatorBox: {
 		alignItems:'center',
 		borderRadius:100,
 		width:'70%',
 		height:'80%',
    	justifyContent:'center',
 	},

 	operator: {
 		fontSize:30, 
 		fontFamily:'roboto-light',
 		color:'#ff6a13',
 	}

})