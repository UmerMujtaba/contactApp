import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState}from 'react';
import styles from './styles';
const AddContactScreen = ({addContact,navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const {container, text1, nameHead,btn,btnText,inputName,inputNum} = styles;

  const handleAddContact = () => {
    if (name && phone) {
      addContact(name, phone);
      setName('');
      setPhone('');
    
    }
  };

  return (
      <View style={container}> 
        <Text style={text1}>Add Contacts </Text>
        <View>
          <Text style={nameHead}>Enter your name:</Text>
          <TextInput
            style={inputName}
            onChangeText={setName}
            value={name}
            
          />
        </View>

        <View>
          <Text style={nameHead}>Enter your phone No:</Text>
          <TextInput
            style={inputNum}
            onChangeText={setPhone}
            value={phone}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={btn} onPress={handleAddContact}>

        <Text style={btnText}>Add to Contact</Text> 
        
        </TouchableOpacity>
      </View>

  );
};
export default AddContactScreen;
