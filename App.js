
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './src/pages/Page1';
import Page2 from './src/pages/Page2';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="page1" component={Page1} />
        <Stack.Screen name="page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>



  );
}


