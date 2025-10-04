import { Tabs } from 'expo-router';
import React from 'react';
import { COLORS } from '@/constants/COLORS';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          display : 'none'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          title: 'Like',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
