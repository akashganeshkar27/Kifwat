import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import {Colors} from '../styles';

import {emailValidator, passwordValidator, nameValidator} from '../core/utils';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
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

      <Text style={styles.title}>S'sincrie</Text>
      <View style={styles.formInput}>
        <TextInput
          label="First Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={!!email.error}
          errorText={name.error}
        />

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
        <View>
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
        <TouchableOpacity
          onPress={_onSignUpPressed}
          style={styles.btnContainer}
          activeOpacity={0.5}>
          <Image
            style={styles.imageIconStyles}
            source={require('../assets/images/rectangle-button.png')}
          />
          <Text style={styles.textStyles}>s'identifier</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.label}>Have an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.link}>Sign in Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'center',
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
    width: 350,
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
});

export default memo(RegisterScreen);
