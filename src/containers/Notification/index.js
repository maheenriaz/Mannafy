import React from 'react';
import {View, Text, StyleSheet,FlatList, Linking,TouchableOpacity,Button,Image} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import {Icon} from '../../config'

class Notification extends React.Component {
  render() {
      const product=[
        {image:'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',company_name:'Company Name',product_name:'Product Name',confirm_entry:'Confirm Entry   '},
        {image:'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',company_name:'Company Name',product_name:'Product Name',confirm_entry:'Confirm Entry   '},
        {image:'https://programminginsider.com/wp-content/uploads/2020/08/gift-7.jpg',company_name:'Company Name',product_name:'Product Name',winner:'Winner Announcement   '},
      ]
    return (
      <View style={styles.main}>
          <HeaderCustom menu noti="Notifications" navigation={this.props.navigation}/>
        <FlatList 
              data={product}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              keyExtractor={(item)=>item.product_name}   
              renderItem={({item,index})=>{
                return(
                    <View style={{marginTop:moderateScaleVertical(10)}}>
                    <View style={{borderWidth:0.4,borderColor:'#C9C9C9'}}></View>

                   {item.confirm_entry == "Confirm Entry   " ?
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("ConfirmEntry",{item})}>
                    <View style={{padding:10,flexDirection:'row'}}>
                          <Image style={{width:'20%',height:70,resizeMode:'stretch'}} source={{uri:item.image}} />
                            <View style={{marginLeft:moderateScaleVertical(9)}}>
                              <Text style={{fontSize:textScale(20)}}>{item.company_name}</Text>
                              <Text style={{fontSize:textScale(16),color:'grey'}}>{item.product_name}</Text>
                             </View>
                    </View>
                    <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                         <Text style={{fontSize:textScale(19),color:'grey'}}>{item.confirm_entry}</Text>
                        <Icon family="MaterialIcons" name="arrow-forward-ios" style={{marginLeft:moderateScaleVertical(-10),marginTop:moderateScaleVertical(3)}}  size={17} color="black"  />
                   </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("WinnerAnouncement",{item})}>
                    <View style={{padding:10,flexDirection:'row'}}>
                          <Image style={{width:'20%',height:70,resizeMode:'stretch'}} source={{uri:item.image}} />
                            <View style={{marginLeft:moderateScaleVertical(9)}}>
                              <Text style={{fontSize:textScale(20)}}>{item.company_name}</Text>
                              <Text style={{fontSize:textScale(16),color:'grey'}}>{item.product_name}</Text>
                             </View>
                    </View>
                    <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                         <Text style={{fontSize:textScale(19),color:'grey'}}>{item.winner}</Text>
                        <Icon family="MaterialIcons" name="arrow-forward-ios" style={{marginLeft:moderateScaleVertical(-10),marginTop:moderateScaleVertical(3)}}  size={17} color="black"  />
                   </View>
                    </TouchableOpacity>
                    }
                   
                    </View>
                );
       
              }}
              />
            <View style={{borderWidth:1,borderColor:'#DBDBDB'}}></View>
      </View>
    );
  }
}

export default Notification;

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
