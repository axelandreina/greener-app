import { Text, View, H1, Row } from 'dripsy'
import { TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { MotiLink } from 'solito/moti'
import CustomImg from '../components/CustomImg'
import Button from '../components/Button'
import React from 'react'
import { MotiPressable } from 'moti/interactions'
import Navbar from '../components/Navbar'

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailAddress: '',
      password: '',
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <View sx={{ backgroundColor: '#17142a', height: '100%' }}>
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
        <H1 sx={{ fontWeight: '800', color: 'white' }}>Welcome back!</H1>
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
                placeholder="Email"
              />
            )}
            name="emailAddress"
          />
          {/* {errors.emailAddress && <Text>This is required.</Text>} */}

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
                placeholder="Password"
              />
            )}
            name="password"
          />
          {/* {errors.password && <Text>This is required.</Text>} */}

          <MotiPressable
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                opacity: hovered || pressed ? 0.5 : 1,
              }
            }}
          >
            <Button
              title="Login"
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            />
          </MotiPressable>
        </View>
        <Row>
          <Text sx={{ color: 'white', paddingTop: '2', fontSize: 16 }}>
            Don&apos;t have an account?
          </Text>
          <MotiLink
            href="/signup"
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
              }}
            >
              Sign up!
            </Text>
          </MotiLink>
        </Row>
      </View>
    </View>
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
  button: {
    fontSize: 16,
    marginTop: 60,
  },
})
