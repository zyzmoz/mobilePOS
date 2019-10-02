import React, { Component, Fragment } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { HideWithKeyboard } from 'react-native-hide-with-keyboard'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import ErrorMessage from '../components/ErrorMessage'
import AppLogo from '../components/AppLogo'
import { withFirebaseHOC } from '../config/Firebase'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(6, 'Password must have at least 6 characters '),
  cnpj: Yup.string()
    .label('CNPJ')
    .matches(/^\d+$/, "Please inform the CNPJ typing onlu numbers")
    .required('Please enter a registered CNPJ')
    .min(14, "CNPJ must have at least 14 characters")
    
    
})

class Login extends Component {
  state = {
    passwordVisibility: true,
    rightIcon: 'ios-eye'
  }

  goToSignup = () => this.props.navigation.navigate('Signup')

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      rightIcon: prevState.rightIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye',
      passwordVisibility: !prevState.passwordVisibility
    }))
  }

  handleOnLogin = async (values, actions) => {
    const { email, password, cnpj } = values;
    await AsyncStorage.setItem('@comandas:cnpj', cnpj);
    try {
      const response = await this.props.firebase.loginWithEmail(email, password)

      if (response.user) {
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      actions.setFieldError('general', error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  render() {
    const { passwordVisibility, rightIcon } = this.state
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={styles.container}
      >
        <ScrollView >
          <HideWithKeyboard style={styles.logoContainer}>
            <AppLogo />
          </HideWithKeyboard>
          <Formik
            initialValues={{ email: '', password: '', cnpj: '' }}
            onSubmit={(values, actions) => {
              this.handleOnLogin(values, actions)
            }}
            validationSchema={validationSchema}>
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              isValid,
              touched,
              handleBlur,
              isSubmitting
            }) => (
                <Fragment>
                  <FormInput
                    name='cnpj'
                    value={values.cnpj}
                    onChangeText={handleChange('cnpj')}
                    placeholder='Enter cnpj'
                    autoCapitalize='none'
                    iconName='ios-key'
                    iconColor='#2C384A'
                    onBlur={handleBlur('cnpj')}
                  />
                  <ErrorMessage errorValue={touched.cnpj && errors.cnpj} />
                  <FormInput
                    name='email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder='Enter email'
                    autoCapitalize='none'
                    iconName='ios-mail'
                    iconColor='#2C384A'
                    onBlur={handleBlur('email')}
                  />
                  <ErrorMessage errorValue={touched.email && errors.email} />
                  <FormInput
                    name='password'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder='Enter password'
                    secureTextEntry={passwordVisibility}
                    iconName='ios-lock'
                    iconColor='#2C384A'
                    onBlur={handleBlur('password')}
                    rightIcon={
                      <TouchableOpacity onPress={this.handlePasswordVisibility}>
                        <Ionicons name={rightIcon} size={28} color='grey' />
                      </TouchableOpacity>
                    }
                  />
                  <ErrorMessage errorValue={touched.password && errors.password} />
                  <View style={styles.buttonContainer}>
                    <FormButton
                      buttonType='outline'
                      onPress={handleSubmit}
                      title='LOGIN'
                      buttonColor='#039BE5'
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}
                    />
                  </View>
                  <ErrorMessage errorValue={errors.general} />
                </Fragment>
              )}
          </Formik>
          <Button
            title="Don't have an account? Sign Up"
            onPress={this.goToSignup}
            titleStyle={{
              color: '#F57C00'
            }}
            type='clear'
          />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: 'center'
  },
  buttonContainer: {
    marginHorizontal: 25
  }
})

export default withFirebaseHOC(Login)
