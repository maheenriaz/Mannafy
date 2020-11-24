import React from 'react';
import {View, Text, StyleSheet,FlatList, Linking,TouchableOpacity,Button,Image} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import Icon from 'react-native-vector-icons/MaterialIcons';

class ConfirmEntry extends React.Component {
  render() {
   const item=this.props.navigation.getParam('item',{})
   console.log(item)
    return (
      <View style={styles.main}>
          <HeaderCustom onPressBack={()=>this.props.navigation.goBack()}/>
        <Text style={{fontSize:textScale(20),padding:10,alignSelf:'center'}}>Confirm your entry below for a chance to win.</Text>
        <View style={{elevation:1,borderColor:'#E4E4E4',borderWidth:1}}> 
                <View style={{padding:30}} >
                <Image style={{width:'100%',height:270,resizeMode:'stretch'}} source={{uri:item.giveawayImage}} />
                  <Text style={{fontSize:textScale(20),color:'grey',marginTop:moderateScaleVertical(8),fontWeight:'bold',margin:moderateScaleVertical(10)}}>{item.giveawayName}</Text>
                  <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(2),margin:moderateScaleVertical(10)}}>{item.arv}</Text>
                  <Text style={{color:'#484747',margin:moderateScaleVertical(10)}}>{item.giveawayDescription}</Text>
               
               <TouchableOpacity>
                <View style={{height:40,width:300,borderWidth:1,borderColor:'#209E0A',borderRadius:7,alignSelf:'center',backgroundColor:'#209E0A'}}>
                  <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(7),color:'white',fontSize:textScale(18)}}>Confirm Entry</Text>
               </View>
               </TouchableOpacity>
                </View>
                </View>
         
      </View>
    );
  }
}

export default ConfirmEntry;

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
