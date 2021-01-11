import React from 'react';
import { View } from 'react-native';

//---------------------------------------------------------------------------
//  React Functional Component to draw the numpad of the calculator
//  Functional Components - PadOperators, PadNumbers are arranged row by row - Four components in each row
//--------------------------------------------------------------------------- 

export default function Numpad({PadNumbers, PadOperators, addNumber, addOperator}){
  return (
      <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
        <View style={{flexGrow:2}}>
          <View style={{flexDirection: 'row'}}>  
              <PadOperators operator='C' addOperator={addOperator}/>
              <PadOperators operator='AC' addOperator={addOperator}/>
              <PadOperators operator='**' addOperator={addOperator}/>
              <PadOperators operator='+' addOperator={addOperator}/>
          </View>
          <View style={{flexDirection:'row'}}>
            <PadNumbers number='1' addNumber={addNumber}/>
            <PadNumbers number='2' addNumber={addNumber}/>
            <PadNumbers number='3' addNumber={addNumber}/>
            <PadOperators operator='-' addOperator={addOperator}/>
          </View>
          <View style={{flexDirection: 'row'}}>  
              <PadNumbers number='4' addNumber={addNumber}/>
              <PadNumbers number='5' addNumber={addNumber}/>
              <PadNumbers number='6' addNumber={addNumber}/>
              <PadOperators operator='*' addOperator={addOperator}/>
          </View>
          <View style={{flexDirection: 'row'}}>  
              <PadNumbers number='7' addNumber={addNumber}/>
              <PadNumbers number='8' addNumber={addNumber}/>
              <PadNumbers number='9' addNumber={addNumber}/>
              <PadOperators operator='/' addOperator={addOperator}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <PadNumbers number='.' addNumber={addNumber}/>
            <PadNumbers number='0' addNumber={addNumber}/>
            <PadNumbers number='00' addNumber={addNumber}/>
            <PadOperators operator='=' addOperator={addOperator}/>
          </View>
        </View>
      </View>
  )
}