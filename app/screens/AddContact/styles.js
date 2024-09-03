import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
  },
  inputName: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 20,
  },
  inputNum: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 20,
  },
  nameHead: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'start',
    marginLeft: 15,
    color: 'black',
  },
  btn: {
    backgroundColor: '#176B87',
    alignItems: 'center',
    padding:10,
    borderRadius:30,
    alignSelf:'center',
    marginTop:50,
    width:'auto',
    borderColor: 'black',
    borderWidth: 2,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
