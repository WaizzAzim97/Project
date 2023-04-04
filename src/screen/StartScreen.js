import React, {useLayoutEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

function StartScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleButtonPress = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={{backgroundColor: '#d4d4d8', flex: 1}}>
      {/* First Section */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          paddingTop: 10,
          paddingBottom: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 64,
            height: 64,
            backgroundColor: 'black',
            borderRadius: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#00BCC9', fontSize: 30, fontWeight: '600'}}>
            Go
          </Text>
        </View>
        <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
          <Text style={{color: '#3C6072', fontSize: 30, fontWeight: '600'}}>
            Travel
          </Text>
        </View>
      </View>

      {/* Second Section */}
      <View style={{paddingHorizontal: 20, marginBottom: 10}}>
        <Text
          style={{
            color: '#3C6072',
            fontSize: 42,
            fontWeight: '400',
            marginBottom: 15,
          }}>
          Enjoy the trip with
        </Text>
        <Text
          style={{
            color: '#00BCC9',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 15,
          }}>
          Good Moments
        </Text>
        <Text style={{color: '#3C6072', fontSize: 16, lineHeight: 24}}>
          Fugiat et ea enim exercitation laboris nulla cillum tempor esse.
        </Text>
      </View>

      {/* Circle Section */}
      <View
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#00BCC9',
          borderRadius: 200,
          position: 'absolute',
          bottom: 130,
          right: -160,
        }}></View>
      <View
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#3C6072',
          borderRadius: 200,
          position: 'absolute',
          bottom: -130,
          left: -150,
        }}></View>

      {/* Image Section */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Image
          source={HeroImage}
          style={{ width: '100%', height: '100%', marginTop: 100, resizeMode: 'cover' }}
        /> */}
      </View>

      {/* Button Section */}
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            style={({pressed}) => [
              {
                width: 80,
                height: 80,
                backgroundColor: pressed ? '#00A7CC' : 'black',
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 2,
              },
            ]}
            onPress={handleButtonPress}>
            <Text style={{color: 'white', fontSize: 16}}>Let's Go</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default StartScreen;
