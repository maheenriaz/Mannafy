import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScaleVertical, textScale} from '../containers/Responsive/index';
class HeaderCustom extends React.Component {
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
 render(){
   return (
    <View style={{height:50,backgroundColor:'white',width:'100%'}}>
      <View style={{marginTop:moderateScaleVertical(17),flexDirection:'row',position:'absolute'}}>
      <Menu
          ref={this.setMenuRef} 
          button={ <Icon name="menu" style={{marginLeft:moderateScaleVertical(4)}} onPress={this.showMenu} size={22} color="black"  />}
          >
          <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
        </Menu>
        <Text style={{fontSize:textScale(20),marginLeft:moderateScaleVertical(150)}}>Mannafy</Text>
       </View>
   </View>
    )
  }
}
   
export default HeaderCustom;

