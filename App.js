
import { SafeAreaView , View , Text , StyleSheet, Image, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { NativeRouter , Routes, Route } from "react-router-native";

import Home from "./views/Home";
import Login from "./views/Login";

function App() {
	return (
		<SafeAreaView style={{flex:1, marginTop:20}}>
      <ScrollView>
			<NativeRouter>
			<Routes>
				<Route path="/" exact element={<Home/>} />
				<Route path="/login" element={<Login/>} />
			</Routes>
			</NativeRouter>
      </ScrollView>
      <View style={{
        backgroundColor:"white",
        position:"absolute",
        bottom:20,
        left:20,
        right:20,
        elevation:0,
        borderRadius:15,
        borderColor:"black",
        borderWidth:1,
        height:90,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:'center',
        }}>
        <View style={{alignItems:'center', justifyContent:'center', top:10 , padding:12}}>
        <TouchableOpacity onPress={() => navigate("/")}>
        <Image
        source ={require( './assets/icons/house-logo.png')}
        resizeMode="contain" 
        style={{
          width:50,
          height:50,
        }} />
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', top:10 , padding:12}}>
        <TouchableOpacity onPress={() => navigate("/")}>
        <Image
        source ={require( './assets/icons/button-post.png')}
        resizeMode="contain" 
        style={{
          width:50,
          height:50,
        }} />
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', top:10 , padding:12}}>
        <TouchableOpacity onPress={() => navigate("/")}>
        <Image
        source ={require( './assets/icons/user.png')}
        resizeMode="contain" 
        style={{
          width:50,
          height:50,
        }} />
        </TouchableOpacity>
        </View>
        </View>
		</SafeAreaView>
    
	);
}

export default App;

const styles = StyleSheet.create({

})