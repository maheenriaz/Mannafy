import React from 'react';
import {View, Text, StyleSheet,FlatList, Linking,TouchableOpacity,Button,Image,AsyncStorage} from 'react-native';
import HeaderCustom from '../../components/HeaderCustom'
import {textScale,moderateScaleVertical}  from '../Responsive/index'
import {Icon} from '../../config'
import firestore from '@react-native-firebase/firestore'

class Notification extends React.Component {
  state={
    notifications:''
  }
  componentDidMount(){
    AsyncStorage.getItem('list').then((user) => {
      user = JSON.parse(user)
      this.setState({uid:user.uid})
    });
    firestore().collection("notifications")
    .onSnapshot((querySnapshot) =>{
      var alldata=[]
        querySnapshot.forEach((doc)=> {
         alldata.push(doc.data().accepted)
         this.setState({notifications:alldata})
      })
    })
  }
  render() {
    const {notifications}=this.state
      const product=[
        {image:'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',company_name:'Company Name',product_name:'Product Name',confirm_entry:'Confirm Entry   '},
        {image:'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',company_name:'Company Name',product_name:'Product Name',confirm_entry:'Confirm Entry   '},
        {image:'https://programminginsider.com/wp-content/uploads/2020/08/gift-7.jpg',company_name:'Company Name',product_name:'Product Name',winner:'Winner Announcement   '},
      ]
    return (
      <View style={styles.main}>
          <HeaderCustom onPressBack={()=>this.props.navigation.goBack()} title="Notifications" navigation={this.props.navigation}/>
        <FlatList 
              data={notifications}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              keyExtractor={(item)=>item.giveawayID}   
              renderItem={({item,index})=>{
                return(
                    <View style={{marginTop:moderateScaleVertical(10)}}>
                      {console.log({item},'ooooooooooooooo')}
                     <View style={{borderWidth:0.4,borderColor:'#C9C9C9'}}></View>
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate("ConfirmEntry",{item})}>
                          <View style={{padding:10,flexDirection:'row'}}>
                          <Image style={{width:'20%',height:70,resizeMode:'stretch'}} source={{uri:item[index].giveawayImage}} />
                              <View style={{marginLeft:moderateScaleVertical(9)}}>
                                  <Text style={{fontSize:textScale(20)}}>{item[index].giveawayName}</Text>
                                  <Text style={{fontSize:textScale(16),color:'grey'}}>{item.item.arv}</Text>
                               </View>
                         </View>
                    <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                         <Text style={{fontSize:textScale(19),color:'grey'}}>{item.confirm_entry}</Text>
                        <Icon family="MaterialIcons" name="arrow-forward-ios" style={{marginLeft:moderateScaleVertical(-10),marginTop:moderateScaleVertical(3)}}  size={17} color="black"  />
                   </View>
                    </TouchableOpacity>
                
                   
                   
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
