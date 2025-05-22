import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1024&q=80' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Fade-in Animation */}
        <Animatable.Text animation="fadeInDown" duration={1500} style={styles.welcome}>
          👋 Welcome to the App!
        </Animatable.Text>

        {/* Slide In Button */}
        <Animatable.View animation="bounceInUp" delay={500} duration={1500}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <Icon name="account-circle" size={24} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Go to Profile</Text>
            <Icon name="arrow-forward-ios" size={18} color="#fff" style={styles.iconRight} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00bfa5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  iconRight: {
    marginLeft: 5,
  },
});
