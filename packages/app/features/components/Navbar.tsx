import { StyleSheet } from 'react-native'
import { Link } from 'solito/link'
import { View } from 'dripsy'
import Logo from '../../assets/images/logo-greener.png'
import LogoutIcon from '../../assets/icons/log-out-icon.png'
import CustomImg from './CustomImg'

export default function Navbar(props: { isLoggedIn?: boolean }) {
  const { isLoggedIn } = props

  return (
    <View
      style={{
        backgroundColor: '#17142a',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        padding: 10,
      }}
    >
      <View>
        <Link viewProps={{ style: styles.image }} href="/">
          <CustomImg
            src={Logo}
            alt={'Greener Logo'}
          />
        </Link>
      </View>

      {isLoggedIn ? (
        <View
          style={{
            height: '100%',
            width: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Link viewProps={{ style: styles.icon }} href="/login">
            <CustomImg
              src={LogoutIcon}
              style={{ height: 26, width: 26 }}
              alt="Logout icon"
            />
          </Link>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 140,
    display: 'flex',
    alignItems: 'flex-start',
    padding: 0,
  },
  icon: {
    height: '100%',
    width: 'auto',
    paddingTop: 6,
    alignItems: 'center',
    display: 'flex',
  },
})
