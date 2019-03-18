import {createAppContainer,
    createBottomTabNavigator,
    TabBarBottom} from 'react-navigation';

import DashboardScreen from './components/screens/DashboardScreen/DashboardScreen';
import CheckInScreen from './components/screens/CheckInScreen/CheckInScreen';

const AppContainer = createAppContainer(
    createBottomTabNavigator(
        {
            Dashboard: DashboardScreen,
            NewCheckIn: CheckInScreen
        },
        {
            navigationOptions: ({navigation}) => ({
                tabBarComponent: TabBarBottom,
                tabBarPosition: 'bottom',
                tabBarOptions: {
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                },
                animationEnabled: true,
                swipeEnabled: false
            })
        }
    )
);

export default AppContainer;
