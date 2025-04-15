import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const boxSize = width / 3 - 17;

const categoriesStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 10,
    color: '#333',
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  boxContainer: {
    width: boxSize,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderColor: '#195d55',
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  box: {
    width: boxSize,
    alignItems: 'bottom',
    backgroundColor: '#dff6f4',
    borderColor: '#195d55',
    borderRadius: 12,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  customButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#195d55',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 5,
    alignItems: 'left',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
  gradientContainer: {
    justifyContent: 'start',
    width: '100%',
  },
  searchContainer: {
    padding: width * 0.05,
    marginTop: height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    width: '100%',
  },
  searchContainer2: {
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  searchIcon: {
    marginRight: 5,
    color: '#333333',
    fontSize: 20,
  },
  cameraIcon: {
    marginLeft: 5,
    color: '#333333',
  },
  input: {
    flex: 1,
    height: height * 0.04,
    fontSize: 18,
    color: '#4a4a4a',
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  buttonGroup: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#195d55',
    borderRadius: 10,
},

groupCustomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
},

buttonText: {
    fontSize: 16,
    color: '#333',
},

});

export default categoriesStyles;
