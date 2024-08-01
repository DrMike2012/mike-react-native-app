import * as React from 'react';
import {
  Button,
  Text
} from 'react-native';
import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Run For Your Life - The Game'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Good Luck.  Work Hard.'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text> {route.params.name}</Text>;
};

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Start Game"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Game Started'})
      }
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
