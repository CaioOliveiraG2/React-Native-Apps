import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  tela:{
    width: 300,
    padding: 25,
  }, 
  title:{
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center'
  }, 
  textInput:{
    fontSize: 16,
    padding: 2,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  picker:{
    marginBottom: 15,
    
  },
  textPicker:{
    padding: 4,
    paddingLeft: 10,
    borderRadius: 5,
  },
  result:{
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20 
  }
});

export {styles};