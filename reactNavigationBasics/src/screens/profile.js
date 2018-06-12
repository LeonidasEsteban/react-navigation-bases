import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import Name from '../profile/components/name';

class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home')
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('name')} ${navigation.getParam('age', 27)}`
    }
  }
  setParams = () => {
    this.props.navigation.setParams({
      name: 'Cesar'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Ir a la home"
          onPress={this.handlePress}
        />
        <Button
          title="Cambiar Nombre"
          onPress={this.setParams}
        />
        <Name />
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

export default Profile
