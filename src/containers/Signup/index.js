import React from 'react';
import {View, Text, StyleSheet, Linking,TouchableOpacity,TextInput,Button,Alert,ScrollView,ActivityIndicator,KeyboardAvoidingView} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

class Signup extends React.Component {
  state={
    email:'',
    password:'',
    fname:'',
    lname:'',
    phone:'',
    city:'',
    state:'',
    address1:'',
    address2:'',
    zip:'',
    re_enter_pass:'',
    loader:false
  }
  
  userSignup = () =>{
    const {fname,lname,password,phone,city,state,zip,address1,address2,email,re_enter_pass} = this.state
    if(password !== re_enter_pass) return alert("Passwords doesn't match")
    this.setState({loader:true})
    auth().createUserWithEmailAndPassword(email, password)
    .then(async(user)=>{
       let details = {
        email,
        uid : user.user.uid,
        fname ,
        lname ,
        phone ,
        city,
        state ,
        zip,
        address1,
        address2,
        password
       }

      firestore().collection("users").doc(user.user.uid)
       .set({
           details
       })                                                                  
      .then((data)=>{
         
         console.log(data)
         this.setState({loader:false})
         this.props.navigation.navigate("Login")
      })
          .catch((err)=>{
            console.log(err.message)
            this.setState({loader:false})
          })
        } ) 
        .catch((err)=>{
          this.setState({loader:false})
          Alert.alert(err.message)
    })
  }
  render() {
    const {loader} = this.state
    return (
      <View style={styles.main}>
         {loader ? <View style={{position:"absolute",zIndex:99,justifyContent:'center',top:0,bottom:0,right:0,left:0,backgroundColor:'rgba(0,0,0,0.5)'}}>
          <ActivityIndicator size="large" color="black"  />
          </View>:null 
         }
         <KeyboardAvoidingView behavior="padding">
           <ScrollView contentContainerStyle={{paddingBottom:20}}>
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
                    style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:20}}
                    underlineColorAndroid="transparent"
                    value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
                  />
                  </View>
                  <TextInput
                  
                  placeholder="Enter First Name"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.fname} onChangeText={(text)=> this.setState({fname:text})}
                />
                 <TextInput
                  
                  placeholder="Enter Last Name"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.lname} onChangeText={(text)=> this.setState({lname:text})}
                />
                  <TextInput
                  
                  placeholder="Enter Phone Numer"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  keyboardType={'numeric'}
                  value={this.state.phone} onChangeText={(text)=> this.setState({phone:text})}
                />
                 <TextInput
                  
                  placeholder="Enter Address1"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.address1} onChangeText={(text)=> this.setState({address1:text})}
                />
                   <TextInput
                  
                  placeholder="Enter Address2"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.address2} onChangeText={(text)=> this.setState({address2:text})}
                />
                   <TextInput
                  
                  placeholder="Enter City"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.city} onChangeText={(text)=> this.setState({city:text})}
                />
                   <TextInput
                  
                  placeholder="Enter State"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  value={this.state.state} onChangeText={(text)=> this.setState({state:text})}
                />
                   <TextInput
                  
                  placeholder="Enter Zip"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  keyboardType={'numeric'}
                  value={this.state.zip} onChangeText={(text)=> this.setState({zip:text})}
                />
                  <TextInput
                  
                  placeholder="Enter Password"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  value={this.state.password} onChangeText={(text)=> this.setState({password:text})}
                />
                  <TextInput
                  
                  placeholder="Re-enter Password"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',marginTop:10}}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  value={this.state.re_enter_pass} onChangeText={(text)=> this.setState({re_enter_pass:text})}
                />
            </View>  
         
           <View style={{marginTop:moderateScaleVertical(30),width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity onPress={this.userSignup}>
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'blue',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey"}}>Signup</Text>
                            </View>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> this.props.navigation.navigate("Login")}>
                   <Text style={{alignSelf:'center',fontSize:textScale(17),marginTop:moderateScaleVertical(3),color:'#5B5B5B',paddingLeft:moderateScaleVertical(17)}}>Already have an Account ?</Text>
                   <Text  style={{alignSelf:'center',fontSize:textScale(17),marginTop:moderateScaleVertical(3),color:'#5B5B5B'}}> Login</Text>
                 </TouchableOpacity>
          </View>
            </ScrollView>

         </KeyboardAvoidingView>
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
