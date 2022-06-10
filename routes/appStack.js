import { createStackNavigator } from 'react-native-stack';
import { createAppContainer } from 'reac-navigation';
import CountDown from '../components/CountDown';




const components = {
    CountDown: {
        component: CountDown
    },
    Home: {
        component: Home
    }
}

const AppStack = createStackNavigator(components);
export default createAppContainer(AppStack);