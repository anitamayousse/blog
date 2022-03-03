
import {React , useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView, TextInput, Alert , TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Home() {
const [data , setData] = useState ({
  username: 0,
  password:'',
  check_textInput: false,
  isValidUser: true,
})


  const handleInput = (val) => {
    if(val.trim().length != 0){
      setData(
        {
          ... data,
          username: val,
          check_textInput: true,
          isValidUser: true
        }
      )
    } else {
      setData (
        {
          ... data,
          username: val,
          check_textInput: false,
          isValidUser: false
        }
      )
    }
  };
  
  const handleValidUser = (val) => {
    if (val >= 1 && val<= 10) {
      setData(
        {
          ... data,
          isValidUser: true
        }
      )
    } else {
      setData(
        {
          ... data,
          isValidUser: false
        });
    }
  }



const loginHandle = () => {
if ( data.username >= 1 && data.username <= 10){
    Alert.alert('Username is valid.');
}  else {
    Alert.alert('Wrong Input!', 'Username cannot be empty and must be a number between 1 and 10');

}

}
  return (
    <SafeAreaView>
      
    <View style={styles.container}>
      <Text style={styles.title}
      >Login Form</Text>
      <View>
      <TextInput style={styles.input}
      placeholder="Username"
      onChangeText={(val) => handleInput(val)}
      onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}/>
            </View>
            <View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be a number between 1 and 10</Text>
            </Animatable.View>
            }
            </View>
      <TouchableOpacity 
       onPress={() => {loginHandle()}}
       style={styles.btn}
       > 
        <Text style={styles.btnText}>
      Login 
      </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:40,
    padding:80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:20.
  },
  input:{
    borderWidth: 1,
    width: 200,
    padding: 8,
    margin:8,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
  validMsg: {
    color: 'green',
    fontSize: 14,
  },
  btn:{
    backgroundColor: "black",
    width: 80,
    padding: 8,
    margin:8,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  btnText:{
    color:'white',
    textAlign:'center',
  }
});