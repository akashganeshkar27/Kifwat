import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import {emailValidator, passwordValidator} from '../core/utils';
import {Colors} from '../styles';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo_blue.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Mot de passe oublié</Text>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={styles.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={styles.imageIconStyles}
          source={require('../assets/images/Rectangle_blue.png')}
        />
        <Text style={styles.textStyles}>Demander un mot de passe</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 50,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontFamily: 'Open Sans',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 40,
  },
  image: {
    width: 160,
    height: 130,
    alignSelf: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default memo(ForgotPasswordScreen);
