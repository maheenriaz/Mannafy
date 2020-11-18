import React from 'react';
import {View, Text, StyleSheet, Linking,TouchableOpacity,TextInput,Button} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.main}>
          <View style={{marginTop:moderateScaleVertical(140),alignSelf:'center'}}>
              <Text style={{fontSize:textScale(27),color:'blue',fontWeight:'bold',fontFamily:"Ariel"}}>M A A N A F Y</Text>
          </View>
            <View style={{alignSelf:'center'}}>
                <View style={{flexDirection:'row'}}>
                <TextInput icon="login" mode="contained" placeholder="Enter Email" style={{paddingLeft:17,fontSize:textScale(17),marginTop:moderateScaleVertical(38),width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:2}}/>
                </View>
               <TextInput placeholder="Enter Password" style={{paddingLeft:17,fontSize:textScale(17),marginTop:moderateScaleVertical(26),width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:2}}/>
           </View>  

           <View style={{marginTop:moderateScaleVertical(30),width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate("Product")}>
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'blue',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:17,color:"grey"}}>Login</Text>
                            </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate("Signup")}>
                   <Text style={{alignSelf:'center',fontSize:textScale(17),fontWeight:'bold',marginTop:moderateScaleVertical(3),color:'grey'}}>Create an Account ?</Text>
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
