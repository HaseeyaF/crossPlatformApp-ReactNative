import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      
      {/* Slide-down animated header */}
        <Animatable.Text animation="fadeInDown" duration={1200} style={styles.header}>
          👤 User Profile
        </Animatable.Text>

      <View style={styles.container}>
        {/* Profile Picture */}
        <Animatable.Image
          animation="zoomIn"
          delay={200}
          source={require('../assets/profile.jpg')}
          style={styles.profileImage}
        />

        {/* Fade-in user details */}
        <Animatable.View animation="fadeInUp" delay={500} style={styles.infoBox}>
          <Text style={styles.label}>
            <Icon name="person" size={20} />  Name: Haseeya Farwin
          </Text>
          <Text style={styles.label}>
            <Icon name="email" size={20} />  Email: haseeyaf@gmail.com
          </Text>
        </Animatable.View>

        {/* Animated Buttons */}
        <Animatable.View animation="fadeInUp" delay={900}>
          <TouchableOpacity style={styles.editButton}>
            <Icon name="edit" size={20} color="#fff" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={20} color="#fff" />
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 150,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2196f3',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  infoBox: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  label: {
    fontSize: 18,
    marginBottom: 15,
    color: '#444',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    gap: 10,
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: '#2196f3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
