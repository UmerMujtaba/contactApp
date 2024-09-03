import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddContactScreen from './app/screens/AddContact';
import ShowContactScreen from './app/screens/ShowContact';
const Tab = createBottomTabNavigator();

interface Contact {
  name: string;
  phone: string;
}

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);



  useEffect(() => {
    const loadContacts = async () => {
      try {
        const storedContacts = await AsyncStorage.getItem('contacts');
        if (storedContacts) {
          setContacts(JSON.parse(storedContacts));
        }
      } catch (e) {
        console.error('Error retrieving contacts', e);
      }
    };

    loadContacts();
    
  }, []);


  const addContact = async (name: string, phone: string) => {
    const NewContacts =  [...contacts, {name, phone}];
    setContacts(NewContacts);
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(NewContacts));
    } catch (e) {
      console.error('Error saving contacts', e);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {position: 'absolute'},
          headerShown: false,
        }}>
        <Tab.Screen
          name="Add Contact"
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="black" />,
          }}>
          {props => <AddContactScreen {...props} addContact={addContact} />}
        </Tab.Screen>

        <Tab.Screen
          name="Show Contacts"
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="black" />,
          }}>
          {props => <ShowContactScreen {...props} contacts={contacts} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
