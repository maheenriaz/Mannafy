//Navigations here
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//Screens
import {Product,Login,Signup,Responsive,Notification,ConfirmEntry,WinnerAnouncement,RevealPrize,ForgetPass} from './containers';

const LoginStack = createStackNavigator(
  {
    Login: {screen: Login,
      navigationOptions: {
        headerShown: false
      },
    },
    ForgetPass: {screen: ForgetPass,
      navigationOptions: {
        headerShown: false
      },
    },
  })
  const SignupStack = createStackNavigator(
    {
      Signup: {screen: Signup,
        navigationOptions: {
          headerShown: false
        },
      },
    })
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
     Product: {screen: Product,
      navigationOptions: {
        headerShown: false
      },
    },
  },
  {
    initialRouteName:"Product"
  }
);


const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Signup: SignupStack,
       App: MainStack,
    },
  ),
);

export default RootStack;
