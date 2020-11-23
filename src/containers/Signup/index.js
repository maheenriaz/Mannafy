import React from 'react';
import {View, Text, StyleSheet, Linking,TouchableOpacity,TextInput,Button,Alert} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

class Signup extends React.Component {
  state={
    email:'',
    password:'',
    name:'',
    phone:'',
    re_enter_pass:''
  }
  
  userSignup(email,password){
    auth().createUserWithEmailAndPassword(email, password)
    .then(async(user)=>{
       let details = {}
        details.email = email
        details.uid = user.user.uid
        details.name = this.state.name
         details.phone = this.state.phone
        console.log(user.user.uid,"heeeeeeeeeeeeeeeeeeeeeeee")
          firestore().collection("users").doc(user.user.uid)
          .set({
           details
          })                                                                  
          .then((data)=>{
            console.log(data)
            Alert.alert('Your Account has been created!!')
              this.props.navigation.navigate("Login")
          })
          .catch((err)=>{
            console.log(err.message)
          })
    } ) 
     .catch((err)=>{
        Alert.alert(err.message)
    })
}
  render() {
    return (
      <View style={styles.main}>
          <View style={{marginTop:moderateScaleVertical(80),alignSelf:'center'}}>
              <Text style={{fontSize:textScale(27),color:'blue',fontWeight:'bold'}}>M A N N A F Y</Text>
          </View>
            <View style={{alignSelf:'center'}}>
                <View style={{flexDirection:'column'}}>
                <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Email"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',elevation:2,marginTop:20}}
                  underlineColorAndroid="transparent"
                  value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
                />
                  </View>
                  <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Name"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',elevation:2,marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.name} onChangeText={(text)=> this.setState({name:text})}
                />
                  <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Phone Numer"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',elevation:2,marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.phone} onChangeText={(text)=> this.setState({phone:text})}
                />
                  <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Password"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',elevation:2,marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.password} onChangeText={(text)=> this.setState({password:text})}
                />
                  <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Re-enter Password"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',elevation:2,marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.re_enter_pass} onChangeText={(text)=> this.setState({re_enter_pass:text})}
                />
            </View>  

           <View style={{marginTop:moderateScaleVertical(30),width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity onPress={()=> this.userSignup(this.state.email,this.state.password)}>
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'blue',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey"}}>Signup</Text>
                            </View>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> this.props.navigation.navigate("Login")}>
                   <Text style={{alignSelf:'center',fontSize:textScale(17),marginTop:moderateScaleVertical(3),color:'#5B5B5B',paddingLeft:moderateScaleVertical(17)}}>Already have an Account ?</Text>
                   <Text  style={{alignSelf:'center',fontSize:textScale(17),marginTop:moderateScaleVertical(3),color:'#5B5B5B'}}> Login</Text>
                 </TouchableOpacity>
          </View>
      </View>
    );
  }
}

export default Signup;

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
