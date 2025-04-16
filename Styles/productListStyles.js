import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const GAP = 10;
const NUM_COLUMNS = 3;
const TOTAL_GAP = GAP * (NUM_COLUMNS - 1);
const IMAGE_SIZE = (width - 24 - TOTAL_GAP) / NUM_COLUMNS;

const CARD_WIDTH = width * 0.8;
const IMAGE_WIDTH = CARD_WIDTH * 0.4;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  section: {
    marginBottom: 24,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  showMore: {
    color: '#007BFF',
    fontSize: 14,
    marginTop: 12,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageCardRound: {
    width: IMAGE_SIZE,
    alignItems: 'center',
    marginBottom: GAP + 10,
  },
  imageCardSquare: {
    width: IMAGE_SIZE,
    alignItems: 'flex-start',
    marginBottom: GAP + 10,
    marginRight: GAP,
  },
  imageCardFilterSquare: {
    width: IMAGE_SIZE,
    alignItems: 'flex-start',
    marginBottom: GAP + 10,
    marginRight: GAP,
  },
  imageRound: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'cover',
    borderRadius: 80,
    backgroundColor: '#ebebeb',
  },
  imageSquare: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: '#ebebeb',
  },
  imageLabel: {
    marginTop: 6,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
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
  imageFilterGrid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageSquareFilter: {
    resizeMode: 'cover',
    backgroundColor: '#ebebeb',
    flexDirection: 'row',
    margin: 5
  },
  imageLabelContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: width*0.5,
    height: height*0.2,
    padding:5,
    borderWidth:0.3,
    borderColor:'#ccc'
  },
  imageFilterSquare: {
    width: width*0.4,
    height: height*0.2,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: '#ebebeb',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: height * 0.005,
    justifyContent: 'flex-start',
  },
  height:{
    height: height*0.07
  }

});

export default styles;
