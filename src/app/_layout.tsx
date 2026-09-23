import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Início',
        }}
      />

      <Drawer.Screen
        name="ifpr"
        options={{
          title: 'IFPR',
        }}
      />

      <Drawer.Screen
        name="reactnative"
        options={{
          title: 'React Native',
        }}
      />

      <Drawer.Screen
        name="expo"
        options={{
          title: 'Expo',
        }}
      />
    </Drawer>
  );
}