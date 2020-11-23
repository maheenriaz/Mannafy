import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar,AsyncStorage,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Icon} from '../config';
import {moderateScaleVertical, textScale} from '../containers/Responsive/index';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

class HeaderCustom extends React.Component {
  state={
    email:'',
    logout:true
  }
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = (value) => {
    if(value === 'true'){
      this.props.navigation.navigate("Notification")
    }
    else{
      this.userLogout()
    }
    this._menu.hide();
  };
  userLogout(){
    auth().signOut()
    .then(()=>{
       AsyncStorage.removeItem('list',()=>{
        this.setState({logout:false});
         console.log("deleted")
       });
      this.props.navigation.navigate("Login")
    })
  }
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
          <MenuItem onPress={()=> this.hideMenu('true')}>Notification</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Logout</MenuItem>
          <MenuDivider />
        </Menu>
        :<Icon name="ios-arrow-back" family="Ionicons" onPress={this.props.onPressBack} />}
        </View>
      <Text style={{fontSize:textScale(20)}}>{this.props.noti}</Text>
       <View/>
       </View>
   </View>
    )
  }
}
   
export default HeaderCustom;

