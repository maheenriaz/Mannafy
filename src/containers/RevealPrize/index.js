import React from 'react';
import {View, Text, StyleSheet,FlatList, Linking,TouchableOpacity,Button,Image,TextInput} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import Icon from 'react-native-vector-icons/MaterialIcons';

class RevealPrize extends React.Component {
  render() {
    return (
      <View style={styles.main}>
          <HeaderCustom onPressBack={()=>this.props.navigation.goBack()} noti="Reveal Price"/>
       <View style={{elevation:1,borderColor:'#D5D5D5',marginTop:moderateScaleVertical(40)}}> 
                <View style={{padding:30}}>
                  <Text style={{fontSize:textScale(20),color:'grey',marginTop:moderateScaleVertical(8),fontWeight:'bold',margin:moderateScaleVertical(10)}}>Congratulations!</Text>
                  <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(2),margin:moderateScaleVertical(10)}}>You've won the grand prize! Enter you name and email address below and the sponsor will reach out to you directly within the next week.</Text>
                  <TextInput style={{width:324,height:40,borderWidth:1,margin:moderateScaleVertical(10),borderColor:'#D3D3D3',borderRadius:10,padding:10}} placeholder="Name"></TextInput>
                  <TextInput style={{width:324,height:40,borderWidth:1,margin:moderateScaleVertical(10),borderColor:'#D3D3D3',borderRadius:10,padding:10}} placeholder="Email Address"></TextInput>
            </View>
       </View>
         
       <View style={{elevation:1,borderColor:'#D5D5D5',marginTop:moderateScaleVertical(40)}}> 
                <View style={{padding:30}} >
                  <Text style={{fontSize:textScale(20),color:'grey',marginTop:moderateScaleVertical(8),fontWeight:'bold',margin:moderateScaleVertical(10)}}>You won a coupon code!</Text>
                  <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(2),margin:moderateScaleVertical(10)}}>Although you you did'nt win the grand price, you have won access to a coupon code worth 20% of your next order if used by 12/31/2020. Jump on over to our website now to see how you could spent this coupon.</Text>
                  <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(8),margin:moderateScaleVertical(10)}}>PrizeSite.com</Text>
          
           </View>
       </View>
      </View>
    );
  }
}

export default RevealPrize;

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
