import React from 'react';
import {View, Text, StyleSheet, Linking, Animated,Image,PanResponder,FlatList,Dimensions,ScrollView} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_LIMIT = SCREEN_WIDTH/2;
class Product extends React.Component {

  state={
    index:0
  }                                                  
  render() {
  const  product=[
    {image:'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',product_name:'Product Name',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',product_name:'rgerggrgrrwe',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://programminginsider.com/wp-content/uploads/2020/08/gift-7.jpg',product_name:'efwmfkmwe',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
  ]
    return (
      <View style={styles.main}>
        <HeaderCustom menu/>
        <View style={{padding:20}}>

        {(this.state.index >= product.length) ?
        <View style={{borderColor:'grey',marginTop:moderateScaleVertical(40)}} >
        <Text style={{color:'#484747',alignSelf:'center'}}>No more cards</Text>
        </View>
        :<FlatList 
         bounces={false}
              data={product}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              keyExtractor={(item)=>item.product_name}   
              renderItem={({item,index})=>{
              
                if(index < this.state.index){
                  return null
                }
                  return <MyView item={item}/>
              }}
              />}
     
          </View>
         
      </View>
    );
  }
}
 
export default Product;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:'white',
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

class MyView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      index:0
    }
    const position = new Animated.ValueXY(0,0);
  
    this.panResponder= PanResponder.create({
      onStartShouldSetPanResponder:()=> true,
      onPanResponderMove:(x,gesture)=>{
        position.setValue({x:gesture.dx,y:gesture.dy})
      },
      onPanResponderRelease:(e,gesture)=>{
        if(gesture.dx > SWIPE_LIMIT ){
          this.swiped('right')
        }
        else if(gesture.dx < -SWIPE_LIMIT){
          this.swiped('left')
        }
        else{
          this.resetPosition()
        }
      },                                                             
   })
   this.position=position
  }
  swiped(direction){
    const x=direction === 'right'? SCREEN_WIDTH*3 : -SCREEN_WIDTH*3
      Animated.timing(this.position,{
        toValue:{x:x,y:0}
      }).start(()=>{
        this.position.setValue({x:0,y:0})
        this.setState({index:this.state.index+1})
      })
  }
  resetPosition(){
    Animated.spring(this.position,{
      toValue:{x:0,y:0},
      stiffness:200
    }).start()
  }
   mycardstyle(){
     const rotate= this.position.x.interpolate({
       inputRange:[-SCREEN_WIDTH*2,0,SCREEN_WIDTH*2],
       outputRange:['-120deg','0deg','-120deg']
     })
     return {
       ...this.position.getLayout(),
       transform:[{rotate:rotate}]
      }
   }    
  render(){
    const {item} = this.props
    return <View style={{elevation:1,borderColor:'#E4E4E4',borderWidth:1}}> 
    <Animated.View style={{padding:30}} {...this.panResponder.panHandlers} style={this.mycardstyle()}>
    <Image style={{width:'100%',height:270,resizeMode:'stretch'}} source={{uri:item.image}} />
      <Text style={{fontSize:textScale(20),color:'grey',marginTop:moderateScaleVertical(8),fontWeight:'bold',margin:moderateScaleVertical(10)}}>{item.product_name}</Text>
      <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(2),margin:moderateScaleVertical(10)}}>{item.product_value}</Text>
      <Text style={{color:'#484747',margin:moderateScaleVertical(10)}}>{item.product_description}</Text>
    <Text></Text>
    </Animated.View>
    </View>
  }
}