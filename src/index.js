//Navigations here
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//Screens
import {Product,Login,Signup,Responsive,Notification,ConfirmEntry,WinnerAnouncement,RevealPrize} from './containers';

const MainStack = createStackNavigator(
  {
   
    Notification: {screen: Notification,
      navigationOptions: {
        headerShown: false
      },
    },
    ConfirmEntry: {screen: ConfirmEntry,
      navigationOptions: {
        headerShown: false
      },
    },
    WinnerAnouncement: {screen: WinnerAnouncement,
      navigationOptions: {
        headerShown: false
      },
    },
    RevealPrize: {screen: RevealPrize,
      navigationOptions: {
        headerShown: false
      },
    },
    Login: {screen: Login,
      navigationOptions: {
        headerShown: false
      },
    },
    Signup: {screen: Signup,
      navigationOptions: {
        headerShown: false
      },
    },
     Product: {screen: Product,
      navigationOptions: {
        headerShown: false
      },
    },
   
  },
  {
    initialRouteName:"Login"
  }
);

const Container = createAppContainer(MainStack);


export default Container;
