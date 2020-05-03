import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import {emailValidator, passwordValidator} from '../core/utils';
import {Colors} from '../styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo_blue.png')}
        style={styles.image}
      />

      <Text style={styles.title}>S'identifier</Text>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <View style={styles.eyeContainer}>
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Image
          source={require('../assets/images/eye.png')}
          style={styles.eyeIcon}
        />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.underlineLabel}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={_onLoginPressed}
        style={styles.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={styles.imageIconStyles}
          source={require('../assets/images/rectangle-button.png')}
        />
        <Text style={styles.textStyles}>s'identifier</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
        style={styles.loginBtnContainer}
        activeOpacity={0.5}>
        <Image
          style={styles.loginImageStyles}
          source={require('../assets/images/fb-login.png')}
        />
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eyeContainer: {
    width: '100%',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontFamily: 'Open Sans',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
  },
  formInput: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 160,
    height: 130,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  underlineLabel: {
    color: theme.colors.secondary,
    textDecorationLine: 'underline',
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  imageIconStyles: {
    width: 340,
    height: 80,
  },
  textStyles: {
    position: 'absolute',
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    paddingBottom: 20,
  },
  eyeIcon: {
    position: 'absolute',
    width: 19,
    height: 11,
    right: 20,
    top: 38,
  },
  loginBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImageStyles: {
    width: 350,
    height: 80,
  },
});

export default memo(LoginScreen);
