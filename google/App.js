import React from 'react';
import { View, StyleSheet, Image, TextInput} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [text, onChangeText] = React.useState('Search or type URL');
  return (

    
    <View style={styles.container}>

      <View style={styles.toppings}>
        <Image source={require('./assets/istockphoto-1175387759-170667a-removebg-preview.png')} style={styles.camera}  />
        <Image source={require('./assets/png-transparent-three-dots-developer-set-icon-thumbnail-removebg-preview.png')} style={styles.camera}  />
      </View>

      <Image source={require('./assets/GoogleLogoSept12015.png')} style={{alignSelf: 'center'}} />
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 70,
    borderWidth: 1,
    padding: 10,
  },
  camera: {
    width: 30,
    height: 30,
  },
  toppings: {
    top:0,
    alignSelf: 'flex-end',
    marginBottom: 100,
    flexDirection: 'row',
    margin: 20,
  },
});
