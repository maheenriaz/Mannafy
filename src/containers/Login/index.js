import React from 'react';
import {View, Text, StyleSheet, Linking,TouchableOpacity,TextInput,Button,Alert,AsyncStorage,ActivityIndicator} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

class Login extends React.Component {
  state={
    email:'',
    password:'',
    loader:false
   }

  userLogin(email,password){
    console.log(this.state)
  auth().signInWithEmailAndPassword(email, password)
    .then(async(user)=>{
      this.setState({loader:true})
     console.log("user", JSON.stringify(user.user.uid) )
      const userinfo=JSON.stringify(user.user)
        await AsyncStorage.setItem('list',userinfo)
        this.setState({loader:false})
      this.props.navigation.navigate("Product", userinfo)     
    }) 
    .catch((err)=>{
        Alert.alert(err.message)
        this.setState({loader:false})
    })
}

componentDidMount(){
  AsyncStorage.getItem('list').then((email) => {
    if(email || email != null){
      console.log(email)
         this.props.navigation.navigate("Product")
     }
    else{
      this.props.navigation.navigate("Login")
    }
});
}
  render() {
    const {loader} = this.state
    return (
      <View style={styles.main}>
         {loader ? <View style={{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:'rgba(0,0,0,0.5)'}}>
          <ActivityIndicator size="large" color="black"  />
          </View>:null 
         }
          <View style={{marginTop:moderateScaleVertical(140),alignSelf:'center'}}>
              <Text style={{fontSize:textScale(27),color:'blue',fontWeight:'bold'}}>M A A N A F Y</Text>
          </View>
            <View style={{alignSelf:'center',marginTop:moderateScaleVertical(38)}}>
                <View style={{flexDirection:'row'}}>
                <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Email"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white'}}
                  underlineColorAndroid="transparent"
                  value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
                />
                </View>
                <View style={{flexDirection:'row',marginTop:moderateScaleVertical(26)}}>
               <TextInput
                underlineColorAndroid="transparent"
                placeholder="Enter Password"
                placeholderTextColor="grey"
               style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white'}}
               secureTextEntry={true}
               value={this.state.password} onChangeText={(text)=> this.setState({password:text})}
              />
                </View>
           </View>  

           <View style={{marginTop:moderateScaleVertical(30),width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity  onPress={()=>this.userLogin(this.state.email,this.state.password)} >
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'blue',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:17,color:"grey"}}>Login</Text>
                            </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate("Signup")}>
                   <Text style={{alignSelf:'center',fontSize:textScale(17),fontWeight:'bold',marginTop:moderateScaleVertical(3),color:'grey'}}>Create an Account ? or</Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate("ForgetPass",this.state.email)}>
                   <Text style={{alignSelf:'center',fontSize:textScale(14),fontWeight:'bold',marginTop:moderateScaleVertical(3),color:'grey'}}>Forget Password</Text>
                 </TouchableOpacity>
          </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:"white",
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
