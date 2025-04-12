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
    paddingVertical:13
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
    fontSize:28
  },
  circleImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    marginTop:10
  },
  imageLabel: {
    marginTop: 5,
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
    width: 80,
  },  
  
});

export default homeStyles;
