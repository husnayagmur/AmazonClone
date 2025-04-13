import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window'); 
const userStyles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 50,
      },
      headerContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', 
          paddingHorizontal: 16,
          paddingVertical: 12,
          width: '100%',
      },
      userSection: {
          flexDirection: 'row',
          alignItems: 'center',
          flexShrink: 1,
      },
      greetingText: {
          fontSize: width > 375 ? 16 : 14, 
          color: '#4a4a4a',
          fontWeight: '500',
          marginLeft: 8,
      },
      dropdownIcon: {
          marginLeft: 4,
      },
      rightIcons: {
          flexDirection: 'row',
          marginLeft: 'auto',
          alignItems: 'center', 
      },
      iconWrapper: {
          marginLeft: 12,
      },
      flagContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 12,
      },
      flagIcon: {
          width: width > 375 ? 38 : 30, 
          height: width > 375 ? 28 : 20,
          marginRight: 4,
      },
      descriptionText: {
          fontSize: width > 375 ? 14 : 12, 
          color: '#333',
      },
      buttonsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          paddingHorizontal: 18,
          marginTop: 20,
      },
      button: {
          backgroundColor: 'white',
          paddingVertical: 12,
          marginBottom: 10,
          borderRadius: 50,
          alignItems: 'center',
          borderWidth: 1, 
          borderColor: '#4a4a4a', 
          width: '49%', 
      },
      textIncreaseBold: {
          fontSize: width > 375 ? 22 : 20, 
          color: '#4a4a4a',
          fontWeight: 'bold',
      },
      textIncrease: {
          fontSize: width > 375 ? 18 : 16, 
          color: '#545454',
      },
      buttonRectangle: {
          paddingHorizontal: 5,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#858585',
          width: '85%',
          alignSelf: 'center',
          marginTop: 10
      },
      orderContainer: {
          padding: 10
      },
      jointgainContainer: {
          paddingVertical: 5,
          backgroundColor: '#ededed',
          marginTop: 10
      },
      jointAgain: {
          backgroundColor: 'white',
          padding: 10
      },
  
      headerRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
      },
      textIncreaseBold: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#333',
      },
      linkText: {
          fontSize: 16,
          color: '#0f4557',
      },
      scrollContainer: {
          flexDirection: 'row',
          gap: 10,
      },
      buttonSequential: {
          paddingHorizontal: 5,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#858585',
          paddingVertical:10,
          paddingHorizontal:15,
          alignSelf: 'center', 
          marginTop: 10
      }
  });
  

export default userStyles;
