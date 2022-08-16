import { View} from 'dripsy'
import Navbar from '../components/Navbar'
import Dashboard from './dashboard/screen'

export function HomeScreen() {

  return (
    <View sx={{ backgroundColor: '#17142a', paddingBottom: 40, marginBottom: 20 }}>
      <Navbar isLoggedIn={true} />
      <Dashboard />
    </View>
  )
}
