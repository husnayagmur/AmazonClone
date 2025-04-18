import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const dynamicFontSize = (size) => width > 400 ? size : size * 0.9;

const cartStyles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: height * 0.02,
  },
  emptyCartBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.03,
    marginTop: height * 0.02,
  },
  emptyCartImage: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: width * 0.04,
    maxWidth: width * 0.6,
  },
  emptyCartTitle: {
    fontSize: dynamicFontSize(18),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  CartTitle: {
    fontSize: dynamicFontSize(22),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  emptyCartSubtitle: {
    fontSize: dynamicFontSize(16),
    color: '#777',
  },
  recommendationContainer: {
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.04,
    backgroundColor: '#ededed',
  },
  recommendationContainerAddToCart: {
    backgroundColor: 'white',
  },
  recommendation: {
    paddingHorizontal: width * 0.03,
    backgroundColor: 'white',
  },
  recommendationAddToCart: {
    padding: width * 0.05,
    backgroundColor: 'white',
  },
  recommendationTitle: {
    fontSize: dynamicFontSize(18),
    fontWeight: '600',
    color: '#0f4557',
    marginBottom: 10,
    maxWidth: '90%',
    lineHeight: 22,
  },
  bottomButtonWrapper: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.02,
    backgroundColor: '#fff',
  },
  continueButton: {
    backgroundColor: '#ebbe1e',
    paddingVertical: height * 0.018,
    borderRadius: 30,
    marginTop: height * 0.01,
  },
  thinText: {
    color: 'black',
    fontSize: dynamicFontSize(18),
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainerColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  productBox: {
    backgroundColor: 'white',
    width: width * 0.5,
    height: width * 1,
    alignItems: 'flex-start',
    paddingHorizontal: width * 0.03,
    paddingTop: height * 0.015,
  },
  productBoxCart: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.03,
    marginBottom: height * 0.015,
    borderRadius: 10,
  },
  productImageCart: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
    marginRight: width * 0.03,
  },
  productImage: {
    width: '100%',
    height: height * 0.25,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: dynamicFontSize(14),
    color: '#333',
    marginTop: height * 0.01,
    textAlign: 'center',
    maxWidth: '80%',
    lineHeight: 18,
  },
  addToCard: {
    backgroundColor: '#ebbe1e',
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.04,
    borderRadius: 30,
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  productPrice: {
    fontSize: dynamicFontSize(18),
    color: '#964a31',
    marginTop: height * 0.007,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: height * 0.005,
    justifyContent: 'flex-start',
  },
  starImage: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  gradientContainer: {
    justifyContent: 'flex-start',
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
    fontSize: dynamicFontSize(18),
    color: '#4a4a4a',
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  height: {
    height: height * 0.07,
  },
  cartDescription: {
    fontSize: dynamicFontSize(16),
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.015,
    width: width*0.5,
    gap: width * 0.01,
  },
  actionButtons: {
    borderWidth: 1,
    borderColor: '#393c3d',
    borderRadius: 50,
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.005,
  },
});

export default cartStyles;
