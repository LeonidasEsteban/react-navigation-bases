import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class Home extends Component {
  handlePress = () => {
    // console.log(this.props.navigation)
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Ir al login"
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

export default Home
