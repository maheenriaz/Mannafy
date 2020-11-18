import React from 'react';
import {View, Text, StyleSheet,FlatList, Linking,TouchableOpacity,Button,Image} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import Icon from 'react-native-vector-icons/MaterialIcons';

class ConfirmEntry extends React.Component {
  render() {
   const item=this.props.navigation.state.params.item
   console.log(item)
   const  product=[
    {image:'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',product_name:'Product Name',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',product_name:'rgerggrgrrwe',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://programminginsider.com/wp-content/uploads/2020/08/gift-7.jpg',product_name:'efwmfkmwe',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    ]
    return (
      <View style={styles.main}>
          <HeaderCustom />
        <Text style={{fontSize:20,padding:10,alignSelf:'center'}}>Confirm your entry below for a chance to win.</Text>
        <View style={{elevation:1,borderColor:'#E4E4E4',borderWidth:1}}> 
                <View style={{padding:30}} >
                  {console.log(item.product_description,"hehhhhhhhhhhhhhhhhhhhh")}
                <Image style={{width:'100%',height:270,resizeMode:'stretch'}} source={{uri:item.image}} />
                  <Text style={{fontSize:20,color:'grey',marginTop:8,fontWeight:'bold',margin:10}}>{item.product_name}</Text>
                  <Text style={{fontSize:14,color:'grey',marginTop:2,margin:10}}>{item.product_value}</Text>
                  <Text style={{color:'#484747',margin:10}}>{item.product_description}</Text>
               
               <TouchableOpacity>
                <View style={{height:40,width:300,borderWidth:1,borderColor:'#209E0A',borderRadius:7,alignSelf:'center',backgroundColor:'#209E0A'}}>
                  <Text style={{alignSelf:'center',marginTop:7,color:'white',fontSize:18}}>Confirm Entry</Text>
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
