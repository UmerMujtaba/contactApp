import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
  },
  container: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  noContact: {
    color: 'black',
    textAlign: 'center',
  },
  contactItem: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  contactName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing:1
  },
  contactNum: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
});
