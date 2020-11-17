import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Icon} from '../config';
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
    <View style={{width:'100%'}}>
      <StatusBar barStyle="dark-content" translucent/>
      <View style={{marginTop:getStatusBarHeight(),paddingVertical:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <View style={{position:'absolute',left:10}}>
      {this.props.menu ? <Menu
          ref={this.setMenuRef} 
          button={ <Icon name="menu" family="MaterialIcons" style={{marginLeft:moderateScaleVertical(10)}} onPress={this.showMenu} size={22} color="black"  />}
          >
          <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
        </Menu>:<Icon name="ios-arrow-back" family="Ionicons" onPress={this.props.onPressBack} />}
        </View>
        <Text style={{fontSize:textScale(20)}}>Mannafy</Text>
       <View/>
       </View>
   </View>
    )
  }
}
   
export default HeaderCustom;

