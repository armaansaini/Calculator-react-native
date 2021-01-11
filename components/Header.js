import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {ThemeContext, themes} from './ThemeContext';

//-------------------------------------------------------------------
//	Functional Component to add Header on the HomePage
// 	Header provides buttons to open history screen and switch theme
//-------------------------------------------------------------------
export default function Header({history, toggleTheme}){
	return(
		<View style={styles.container}>
			<Text style={styles.text}>Calculator</Text>
			<TouchableHighlight
				onPress={()=>{history.push("/history")}}
				underlayColor='#fff'
			>
				<Icon 
					name='history'
					size={30}
					color='#fff'
					style={{padding:10}}
				/>

			</TouchableHighlight>
				<TouchableHighlight
					onPress={()=>{toggleTheme()}}
					underlayColor='#fff'
				>
					<Icon 
						name='light-bulb'
						size={30}
						color='#fff'
						style={{padding:10}}
					/>
				</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		textAlign:'center',
		backgroundColor:'#ff8243',
		width:Dimensions.get('window').width,
		flexDirection:'row',
		top:0,
	},

	text:{
		padding:10,
		flex:1,	
		alignSelf:'center',
		fontSize:25,
		color:'#fff',
	}
});