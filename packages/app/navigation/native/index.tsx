import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { CoinDetailScreen } from '../../features/coin/detail-screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { LoginScreen } from '../../features/login/screen'
import { SignUpScreen } from '../../features/signup/screen'


const Stack = createNativeStackNavigator<{
  home: undefined
  'coin-detail': {
    code: string
  }
  'user-detail': {
    id: string
  }
  login: undefined
  signup: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name="coin-detail"
        component={CoinDetailScreen}
        options={{
          title: 'Coin',
        }}
      />

      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{
          title: 'Sign up',
        }}
      />
    </Stack.Navigator>
  )
}
