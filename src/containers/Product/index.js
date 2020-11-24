import React from 'react';
import {View, Text, StyleSheet, Linking, Animated,Image,PanResponder,FlatList,Dimensions,ScrollView, AsyncStorage} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import SwipeCards from 'react-native-swipe-cards';
import firestore from '@react-native-firebase/firestore'

class Card extends React.Component {
  render() {
     
    return (
          <View style={styles.card} >
              <View style={{elevation:1,borderColor:'#CBCBCB',borderWidth:1}}> 
                  <View style={{padding:30}}>
                  <Image style={{width:'100%',height:270,resizeMode:'stretch'}} source={{uri:this.props.giveawayImage}} />
                  <Text style={{fontSize:textScale(20),color:'grey',marginTop:moderateScaleVertical(8),fontWeight:'bold',margin:moderateScaleVertical(10)}}>{this.props.giveawayName}</Text>
                  <Text style={{fontSize:textScale(14),color:'grey',marginTop:moderateScaleVertical(2),margin:moderateScaleVertical(10)}}>${this.props.arv}</Text>
                  <Text style={{color:'#484747',margin:moderateScaleVertical(10)}}>{this.props.giveawayDescription}</Text>
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
  
 
export default class Product extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        cards: [],
        outOfCards: false,
        uid:null
      }
  }
  
 handleYup = (card) => {
      console.log('accepted')
      const {uid} = this.state
      firestore().collection('notifications').doc(uid).set({
        accepted:firestore.FieldValue.arrayUnion(card)
      }
      ,{merge:true})
      firestore().collection('giveaway').doc(card.docId).update({
        seenBy: firestore.FieldValue.arrayUnion(uid)
      })
      

    }
    
    handleNope =  (card) => {
      console.log("Reject")
      const {uid} = this.state
      firestore().collection('notifications').doc(uid).set({
        rejected:firestore.FieldValue.arrayUnion(card)
      }
      ,{merge:true})
      firestore().collection('giveaway').doc(card.docId).update({
        seenBy: firestore.FieldValue.arrayUnion(uid)
      })
   }
   
   componentDidMount(){
     AsyncStorage.getItem('list').then((user) => {
       user = JSON.parse(user)
       this.setState({uid:user.uid})
   });
   firestore().collection("giveaway").get()
       .then((querySnapshot)=> {
         var alldata=[]
           querySnapshot.forEach((doc)=> {
             if(doc.data().seenBy.indexOf(this.state.uid) === -1)
              {const card = doc.data()
              card.docId = doc.id
              alldata.push(card) }
            });
            console.log(alldata)
            this.setState({cards:alldata})
            
         })
   }
  
  render() {
  
   
 return (
      <View style={{flex:1,backgroundColor:'white'}}>
          <HeaderCustom  navigation={this.props.navigation} menu noti="Mannafy"/>
          <SwipeCards 
                  cards={this.state.cards}
                  loop={false}
                  renderCard={(cardData) => <Card {...cardData} />}
                  renderNoMoreCards={() => <NoMoreCards />}
                  yupText="Accepted"
                  nopeText="Rejected"
                  // showYup={true}
                  // showNope={true}
                  onClickHandler = {()=>null}
              handleYup={this.handleYup}
                  handleNope={this.handleNope}
                  
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