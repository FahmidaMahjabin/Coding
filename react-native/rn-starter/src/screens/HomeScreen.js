import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';
const HomeScreen = () => {
  console.log("device connected")
  const numbers = [1, 2, 5, 8, 12, 30]
  return (
            <View style={[styles.text]}
            >
                <View
                  >  
                    <Text>
                      Hello World2!
                    </Text>   
                </View>
                <View 
                  >  
                    <Text>
                      hey there
                    </Text>   
                </View> 
               {numbers.map(number => <Text>{number}</Text>)}

            </View>)
};



export default HomeScreen;
