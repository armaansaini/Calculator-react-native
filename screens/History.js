//---------------------------------
//  Libraries and default installs
//---------------------------------
import React, { useState, useEffect, useContext} from 'react';
import {StyleSheet,
		StatusBar,
		View,
		Text,
		FlatList,
		TouchableOpacity,
		AsyncStorage,
		Button} from 'react-native';
import ThemeContext from '../components/ThemeContext';

//-----------------------------------
//	React Screen to display History
//-----------------------------------
export default function History({ history }){
	const [calcHistory, setCalcHistory] = useState();
	const theme = useContext(ThemeContext);

	//Retrieves history on screen load
	useEffect(() => {
		displayHistory();
	}, []);

	// Function to get history from the AsyncStorage
	// Called by useEffect on screen load
    const displayHistory = async () => {
	    var data = await AsyncStorage.getItem('history');
	    setCalcHistory(JSON.parse(data));
    }

    // clears AsyncStorage
    const clearHistory = async () => {
    	AsyncStorage.clear();
    	setCalcHistory([]);
    }

	return (
		<View style={{flex:1,flexDirection:'column'}}>	
			<StatusBar
          		backgroundColor='#ff8243'
          		barStyle='light-content'
          	/>
			<Text style={styles.title}>History</Text>
			<FlatList
				data={calcHistory}
				keyExtractor={(item)=>item.expression}
				renderItem={({ item }) => (
					<View style={styles.historyCard}>
						<Text style={styles.expression}>{item.expression}</Text>
						<Text style={styles.result}>{item.result}</Text>
					</View>
				)}
			/>
				<TouchableOpacity 
					style={styles.clearButton} 
					onPress={clearHistory}
				>
					<Text style={{fontSize:30,fontFamily:'roboto-light',color:'#fff'}}>Clear History</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.goBack}
					onPress={() => history.push("/")} 
				>
					<Text style={{fontSize:30,fontFamily:'roboto-light',color:'#fff'}}>Go Back</Text>
				</TouchableOpacity>
		</View>	
	)
}

const styles = StyleSheet.create({
	title: {
		alignSelf:'center',
		fontFamily:'roboto-light',
		fontSize:30,
	},

	historyCard:{
		marginTop:20,
		borderBottomWidth:0.5,
		paddingLeft:20,
		paddingRight:20,
	},

	expression: {
		fontSize:25,
		fontFamily:'roboto-bold',
		color:'#1389ff',
	},

	result: {
		fontSize:20,
		fontFamily:'roboto-light',
		color:'#1389ff',
	},

	clearButton: {
		alignItems:'center',
		backgroundColor:'#aaa',
		alignSelf:'stretch',
	},

	goBack: {
		alignSelf:'stretch',
		alignItems:'center',
		backgroundColor:'#aaa',
	}

});