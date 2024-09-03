import {View, Text, FlatList} from 'react-native';

import styles from './styles';
import React from 'react';

const ShowContactScreen = ({contacts}) => {
  const {text1, container, contactItem, contactName, contactNum, noContact} =
    styles;

  return (
    <View style={container}>
      <Text style={text1}> Contact List</Text>
      {contacts.length === 0 ? (
        <Text style={noContact}>No contacts added yet.</Text>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={contactItem}>
              <Text style={contactName}>{item.name}</Text>
              <Text style={contactNum}>{item.phone}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
export default ShowContactScreen;
