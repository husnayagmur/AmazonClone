import { StyleSheet } from 'react-native';

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
  activeIcon: {
    color: '#105150',
    fontSize: 28
  },
  circleImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#d6d6d6',
  },
  imageLabel: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    width: 95,
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
  privilegesContainer: {
    flexDirection: 'row',
  },
  privilegeItem: {
    alignItems: 'center',
    width: 90,
  },
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    marginBottom: 10,
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
    marginTop: 20
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
    width: 150,
    height: 190,
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
  containerCategory: {
    padding: 15,
    backgroundColor: '#fff',
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
    alignItems: 'flex-start', // Resim ve yazıyı ortalamak için
  },
  imageCategory: {
    width: '100%',
    height: 180,
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
    width: 150,
    height: 150,
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
  descriptionText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  descriptionContainer: {
    backgroundColor: 'white',
    marginTop: 5,
    width: '100%',
  },
  
  descriptionText: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 4,
  },

});

export default homeStyles;
