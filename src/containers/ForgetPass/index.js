import React from 'react';
import {View, Text, StyleSheet, Linking,TouchableOpacity,TextInput,Button,Alert,AsyncStorage, ActivityIndicator} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

class ForgetPass extends React.Component {
  state={
    email:'',
    password:'',
    loader:false
   }
ForgetPassword(email){
 auth().sendPasswordResetEmail(email).then(()=> {
    this.setState({loader:true})
   Alert.alert(`Email sent at ${email}`)
    this.setState({loader:false})
    this.props.navigation.navigate("Login")
  })
  .catch((error)=> {
    console.log(error.message);
    this.setState({loader:false})
  });
}
  render() {
    const {loader} = this.state
    return (
      <View style={styles.main}>
        {loader ? <View style={{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:'rgba(0,0,0,0.5)'}}>
          <ActivityIndicator size="large" color="white" />
            </View>:null}
          <View style={{marginTop:moderateScaleVertical(140),alignSelf:'center'}}>
              <Text style={{fontSize:textScale(27),color:'blue',fontWeight:'bold'}}>Enter Your Email</Text>
          </View>
            <View style={{alignSelf:'center',marginTop:moderateScaleVertical(38)}}>
                <View style={{flexDirection:'row'}}>
                <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Email"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:280,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white',elevation:2}}
                  underlineColorAndroid="transparent"
                  value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
                />
                </View>
               
           </View>  

           <View style={{marginTop:moderateScaleVertical(30),width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity  onPress={()=>this.ForgetPassword(this.state.email)} >
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'blue',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:17,color:"grey"}}>Send</Text>
                            </View>
               </TouchableOpacity>
          </View>
      </View>
    );
  }
}

export default ForgetPass;

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
