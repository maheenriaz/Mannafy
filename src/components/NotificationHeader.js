import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScaleVertical, textScale} from '../containers/Responsive/index';
class NotificationHeader extends React.Component {
 
 render(){
   return (
    <View style={{height:50,backgroundColor:'white',width:'100%'}}>
      <View style={{marginTop:moderateScaleVertical(17),flexDirection:'row',position:'absolute',alignSelf:'center'}}>
          <Text style={{fontSize:textScale(20)}}>Mannafy</Text>
       </View>
   </View>
    )
  }
}
   
export default NotificationHeader;

