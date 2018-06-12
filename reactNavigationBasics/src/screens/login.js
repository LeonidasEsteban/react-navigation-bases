import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class Login extends Component {
  handlePress = () => {
    console.log(this.props.navigation);
    this.props.navigation.navigate('About')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title="Ir al about"
          onPress={this.handlePress}

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Login
