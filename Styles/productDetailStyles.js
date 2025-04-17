import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  imageWrapper: {
    width: width * 0.95,
    height: width * 0.9,
    alignSelf: 'center',
    marginVertical: 16,
    position: 'relative',
    backgroundColor: '#ededed'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'contain',
  },
  shareIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    alignItems: 'left',
    marginVertical: 5
  },
  descriptionContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%'
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    width: width * 0.2,
    height: width * 0.08
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
  descriptionContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
  textContainer: {
    justifyContent: 'center',
    width: width * 0.8,
  },
  offerText: {
    fontSize: 16,
    color: '#333',
  },
  conditionText: {
    color: '#33538a',
    textDecorationLine: 'underline',
  },

  height: {
    height: height * 0.07,
  },
  selectButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  selectButtonText: {
    fontSize: 16,
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: width*0.5,
    borderRadius: 12,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 20,
    color: '#999',
  },
  numberGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  numberButton: {
    backgroundColor: 'white',
    width: width*0.5,
    padding: 15,
    borderWidth:0.5,
    borderColor:'#ccc',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    color: 'black',
  },
  buttonProduct:{
    backgroundColor: '#ebbe1e',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    borderRadius: 30,
    marginTop: height * 0.01,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default styles;
