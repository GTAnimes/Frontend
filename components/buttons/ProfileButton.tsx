import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome5, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

interface ProfileButtonProps {
  iconName: string;
  iconComponent: React.ElementType;
  iconSize: number;
  title: string;
  onPress: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ iconName, iconComponent: Icon, iconSize, title, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={iconSize} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#2D882D', // Green background
    borderRadius: 10,
    overflow: 'hidden',
    margin: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    backgroundColor: 'white',
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileButton;
