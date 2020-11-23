import React from 'react';
import {View, Text, StyleSheet, Linking, Animated,Image,PanResponder,FlatList,Dimensions,ScrollView} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <View style={styles.card}>
            <View style={{elevation:1,borderColor:'#CBCBCB',borderWidth:1}}> 
                <View style={{padding:30}} >
                <Image style={{width:'100%',height:270,resizeMode:'stretch'}} source={{uri:this.props.image}} />
                <Text style={{fontSize:textScale(20),color:'grey',marginTop:moderateScaleVertical(8),fontWeight:'bold',margin:moderateScaleVertical(10)}}>{this.props.product_name}</Text>
                <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(2),margin:moderateScaleVertical(10)}}>{this.props.product_value}</Text>
                <Text style={{color:'#484747',margin:moderateScaleVertical(10)}}>{this.props.product_description}</Text>
                <Text></Text>
                </View>
            </View>
        </View>
      )
    }
  }
  
  class NoMoreCards extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <View style={styles.noMoreCards} >
          <Text>No more cards</Text>
        </View>
      )
    }
  }
  
  const cards = [
    {image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',product_name:'Product Name',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',product_name:'rgerggrgrrwe',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://programminginsider.com/wp-content/uploads/2020/08/gift-7.jpg',product_name:'efwmfkmwe',product_value:'iyyiiyiyie',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
 
  ]
  
  const cards2 = [
    {image: 'https://www.apa.org/images/holiday-gifts-title-image_tcm7-226231.jpg',product_name:'Product Name',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://parsgiftgallery.com/wp-content/uploads/2019/08/022-1.jpg',product_name:'rgerggrgrrwe',product_value:'ffegfg',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
    {image:'https://i.ytimg.com/vi/4gFiy5_liSA/maxresdefault.jpg',product_name:'efwmfkmwe',product_value:'Product ARV Value',product_description:'Product description RVW value edeed  deeded eded dede eddeed ededede de deededde deeded edeedde ededdddddddddddddddddddddddd ededededde de eded ed ed ed eded e ed deffe e fe f'},
 
  ]
  
  export default class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: cards,
        outOfCards: false
      }
    }
  
    handleYup (card) {
      console.log("Selected")
    }
  
    handleNope (card) {
      console.log("Reject")
    }
  
    cardRemoved (index) {
      console.log(`The index is ${index}`);
  
      let CARD_REFRESH_LIMIT = 3
  
      if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
        console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
  
        if (!this.state.outOfCards) {
          console.log(`Adding ${cards2.length} more cards`)
  
          this.setState({
            cards: this.state.cards.concat(cards2),
            outOfCards: true
          })
        }
  
      }
  
    }
  
    render() {
      return (
          <View style={{flex:1}}>
              <HeaderCustom  navigation={this.props.navigation} menu noti="Mannafy"/>
            <SwipeCards 
                cards={this.state.cards}
                loop={false}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                showYup={true}
                showNope={true}
            handleYup={this.handleYup}
                handleNope={this.handleNope}
                cardRemoved={this.cardRemoved.bind(this)}
           /> 
            </View>
 
      )
    }
  }
  
  const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      padding:20,
    },
    thumbnail: {
      width: 300,
      height: 300,
    },
    text: {
      fontSize: textScale(20),
      paddingBottom: 10
    },
    noMoreCards: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })