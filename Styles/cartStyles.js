import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cartStyles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  emptyCartBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 20,
  },
  emptyCartImage: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: 16,
    maxWidth: width * 0.6,
  },
  emptyCartTitle: {
    fontSize: width > 375 ? 18 : 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  CartTitle: {
    fontSize: width > 375 ? 22 : 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  emptyCartSubtitle: {
    fontSize: width > 375 ? 16 : 14,
    color: '#777',
  },
  recommendationContainer: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#ededed',
  },
  recommendation: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f4557',
    marginBottom: 10,
    maxWidth: '90%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: 22,
  },
  bottomButtonWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  continueButton: {
    backgroundColor: '#ebbe1e',
    paddingVertical: 14,
    borderRadius: 30,
  },
  thinText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productBox: {
    backgroundColor: 'white',
    width: width * 0.6,
    height: width * 0.9,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
    maxWidth: '80%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: 18,
  },
  addToCard: {
    backgroundColor: '#ebbe1e',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20
  },
  productPrice: {
    fontSize: 18,
    color: '#964a31',
    marginTop: 5,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  starImage: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  gradientContainer: {
    justifyContent: 'start',
    width: '100%',
  },
  searchContainer: {
    padding: 40,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: '100%',
  },
  searchContainer2: {
    marginTop: 20,
    paddingHorizontal: 20,
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
    height: 40,
    fontSize: 18,
    color: '#4a4a4a',
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
});

export default cartStyles;
