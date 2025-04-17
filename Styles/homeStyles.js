import { Dimensions,StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
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
  deliveryContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 14,
    color: '#4a4a4a',
    textAlign: 'left',
    paddingVertical: 5,
    marginRight: 10,
  },
  locationIcon: {
    marginRight: 10,
    color: '#4a4a4a',
    fontSize: 18,
  },
  downArrowIcon: {
    color: '#4a4a4a',
    fontSize: 18,
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',

    borderWidth: 1,
    borderColor: '#105150',
  },
  icon: {
    fontSize: 28,
    color: '#333',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13
  },
  activeTopBar: {
    position: 'absolute',
    top: 0,
    width: '150%',
    height: 4,
    backgroundColor: '#105150',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  circleImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    borderWidth: 1,
    borderColor: '#d6d6d6',
  },
  imageLabel: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    width: width*0.25,
  },
  wrapper: {
    padding: 15,
    backgroundColor: '#0752da',
  },
  privilegesTitle: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  privilegeItem: {
    alignItems: 'center',
    width: width * 0.2,
  },
  privilegeLabel: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  plusSign: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal:2
  },
  primeText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10
  },
  joinButton: {
    backgroundColor: '#f0a633',
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 8,
    fontSize: 12,
    marginBottom: 20
  },
  rectangleWrapperContainer: {
    marginBottom: 20,
  },

  rectangleWrapper: {
    flexDirection: 'row',
  },

  rectangleCard: {
    width: width * 0.4,
    height: height * 0.22,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginRight: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  rectangleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  rectangleText: {
    position: 'absolute',
    bottom: 1,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    padding: 5,
    borderRadius: 4,
  },
  whiteBoldText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10

  },
  titleCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemCategory: {
    width: '47%',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  imageCategory: {
    width: '100%',
    height: height * 0.20,
  },
  captionCategory: {
    marginTop: 6,
    fontSize: 14,
    color: '#444',
    textAlign: 'left',
  },
  linkText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'left',
    textDecorationLine: 'underline',
  },  
  fashionContainer: {
    margin: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    marginRight: 10,
    backgroundColor: '#4d79e0',
    alignItems: 'center',
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
  },
  discountContainer: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    borderRadius: 4,
  },
  discountText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  descriptionContainer: {
    backgroundColor: '#f0f0f0',
    marginTop: 5,
    width: '100%',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 4,
  },
  height:{
    height: height*0.08
  }

});

export default homeStyles;
