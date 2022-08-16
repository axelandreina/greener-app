import { Text, View, H1, Row } from 'dripsy'
import { TextInput, StyleSheet, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import CustomImg from '../components/CustomImg'
import { MotiLink } from 'solito/moti'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

export function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: ''
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <ScrollView>
      <View sx={{ backgroundColor: '#17142a', flex: 1 }}>
        <Navbar />
        <View
          sx={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            p: 16,
            backgroundColor: '#17142a',
          }}
        >
          <View>
            <CustomImg
              style={{
                width: 400,
                height: 400,
              }}
              src={require('../../assets/animations/animation-robot.gif')}
            />
          </View>
          <H1 sx={{ fontWeight: '800', color: 'white' }}>Join us!</H1>
          <View style={styles.container}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={'First name'}
                />
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text sx={{ color: 'red', paddingBottom: '2' }}>
                This is required.
              </Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={'Last name'}
                />
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text sx={{ color: 'red', paddingBottom: '2' }}>
                This is required.
              </Text>
            )}
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={'Email'}
                />
              )}
              name="emailAddress"
            />
            {errors.emailAddress && (
              <Text sx={{ color: 'red', paddingBottom: '2' }}>
                This is required.
              </Text>
            )}
            <Controller
              control={control}
              rules={{
                minLength: 3,
                maxLength: 8,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={'Password'}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text sx={{ color: 'red', paddingBottom: '2' }}>
                + This is required :){' '}
              </Text>
            )}

            <Button
              title="Sign up"
              color="#53ea72"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <Row>
            <Text sx={{ color: 'white', paddingTop: '2', fontSize: 16 }}>
              Already have an account?
            </Text>
            <MotiLink
              href="/login"
              animate={({ hovered, pressed }) => {
                'worklet'

                return {
                  scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                  rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
                }
              }}
              transition={{
                type: 'timing',
                duration: 150,
              }}
            >
              <Text
                selectable={false}
                sx={{
                  fontSize: 16,
                  color: '#53ea72',
                  fontWeight: 'bold',
                  paddingTop: '2',
                  paddingLeft: '2',
                  paddingBottom: 20
                }}
              >
                Login!
              </Text>
            </MotiLink>
          </Row>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    margin: 0,
  },
  input: {
    flex: 1,
    color: 'white',
    maxHeight: 50,
    width: 300,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DAE0E8',
    paddingTop: 10,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 12,
    fontSize: 14,
  },
})
