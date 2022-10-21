import {  StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      
    },
    center:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: "red",
      justifyContent:"space-between",
      alignItems: "center",
      
    },
    child:{
      backgroundColor: "green",
      padding: 20

    }
  });

export default styles;