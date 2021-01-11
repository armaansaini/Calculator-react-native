//---------------------------------
//  Libraries and default installs
//---------------------------------
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
import ThemeContext, {themes} from '../components/ThemeContext';

//------------------------------------------------------
//	Importing functional components for the Home screen
//------------------------------------------------------
import Expression from '../components/Expression';
import Result from '../components/Result';
import PadNumbers from '../components/PadNumbers';
import PadOperators from '../components/PadOperators';
import NumPad from '../components/NumPad';
import Header from '../components/Header';


//-----------------------------------------
//	React Home Screen Functional Component
//-----------------------------------------
export default function Home({ history }){
  const [expression, setExpression] = useState();
  const [result, setResult] = useState();
  const [theme, setTheme] = useState(themes.light);

  const thisTheme = useContext(ThemeContext);

  // List of numbers and operators to comparison and inclusion logic
  const operatorsList = ['+','-','*','/',];
  const numbersList = ['1','2','3','4','5','6','7','8','9','0','00'];

  // Updates history whenever an expression is evaluated
  useEffect(() => {
  	if(result==null)
  		return
  	else
    	updateHistory();
  }, [result]);

  // Toggles themes between light and dark
  const toggleTheme = () => {
    setTheme(
      theme===themes.dark ? themes.light : themes.dark
    );
  }

  // Evaluates if the expression is valid for evaluation
  // checks if the expression ends with number and not operator
  const isExpressionValid = () => {
    if(expression===undefined){
      return false;
    }
    else if (operatorsList.includes(expression.charAt(expression.length-1))){
      return false;
    }
    else{
      return true;
    }
  }
  
  //
  // Updates history
  //
  // Get history from AsyncStorage, if doesn't exist create history = Array
  // temp is a temporary object to store current expression and result
  // which is then pushed into the history
  // and stored in AsyncStorage with setItem

  const updateHistory = async() => {
    var history = eval(await AsyncStorage.getItem("history")); 
    var temp = {
    	expression:expression,
    	result:result,
    };

    if(history==null){
    	var history = new Array();
    	history.push(temp);
      	await AsyncStorage.setItem('history', JSON.stringify(history));      
    }
    else{
    	history.push(temp);
      	await AsyncStorage.setItem('history', JSON.stringify(history));      
    }
  }

  // Appends a number to the expression
  //
  //	---Still working to multiple decimals logic---
  //
  const addNumber = (number) => {
  	//Add number or 0. if the expression is undefined
    if (expression===undefined){
      if(number=='.'){
        setExpression('0.')
      }
      else{
        setExpression(number);
      }
    }


    else{
      if(expression=='.'){
  		//Doesn't add point if point is already at the end
      	if(expression.charAt(expression.length-1)=='.'){
        	return
        }
        //Doesn't add point if there is already a point in the number
        //we loop backward and extract the current number
        for(var i = expression.length-1; i>=0; i--){
        	if(operatorsList.includes(expression.charAt(i))){
        		break
        	}
        	if(expression.charAt(i)=='.'){
        		return
        	}
        }
      }
      else{
        setExpression(expression+number);
      }
    }
  }

  //
  // Adds operator to the expression
  //
  const addOperator = (operator) => {
  	//
  	// Clears out the expression and result
    if(operator==='AC'){
      setExpression();
      setResult();
    }
    //
    // Check validity and evaluate the expression
    else if(operator=='='){
      if (isExpressionValid()){
        setResult(eval(expression));
      }
      else{
        return
      }
    }
    //
    // Removes last character from the expression if the expression is not null
    else if(operator==='C'){
      if(expression==null){
      	return
      }
      else{
      	setExpression(expression.slice(0, -1));
      }
    }
    //
    //	Adds operator to the expression
    //	If the last character is also operator then replaces it
    //	Doesn't let ** to stack
    //
    else if((operator=='+' || operator=='-' || operator=='*' || operator=='/' || operator=='**') && expression!=undefined){
      if (!(operatorsList.includes((expression.charAt(expression.length-1))))){
        setExpression(expression+operator);
      }
      else{
      	if(expression.charAt(expression.length-1)=='*' && operator=='**'){
      		return
      	}
        setExpression(expression.slice(0, -1) + operator);
      }
    }
  }


	return (
    	<ThemeContext.Provider value={theme}>
	      <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
	        <StatusBar
	          backgroundColor='#ff8243'
	          barStyle='light-content'
	          title='Calculator'
	          />
	        <View style={{flex:1, flexDirection:'column'}}>     
	            <Header history={history} toggleTheme={toggleTheme}/>
	            <Expression expression={expression} />
	            <Result result={result} />
	        </View>

	        <NumPad 
	          PadNumbers={PadNumbers} 
	          PadOperators={PadOperators}
	          addNumber={addNumber}
	          addOperator={addOperator}
	          />
	      </View>
    	</ThemeContext.Provider>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});