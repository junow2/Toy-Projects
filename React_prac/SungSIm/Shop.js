import React, {useState} from 'react';
import {Button, Text, Image, StyleSheet, StatusBar, View, SafeAreaView, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';


const Shop = ({ navigation }) => {
  
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='grey'/>    

      <View style = {styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Icon name = 'arrow-back' size = {35} color = 'black'></Icon>
          </TouchableOpacity>        
          <Image source = {require('../Components/img/SS_Logo.png')} style = {styles.logo}></Image>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}>
              <Icon name = 'menu' size = {35} color = 'black'></Icon>
            </TouchableOpacity>         
      </View>
      
      <View style = {styles.body}>
        <View style = {styles.memberbox}>
          <Ionicons name = 'person-circle' size = {35} color = '#87694a'></Ionicons>
          <Text style = {styles.memberNM}>그린나래 </Text>
          <Text style = {styles.memberTxt}>님을 위한 성심이의 빵 추천!</Text>
        </View>
      

        <View style = {styles.rec_breadbox}>
          
          <View style = {styles.introd_bread}>
            <ImageBackground source = {require('../Components/img/echo.png')} style = {styles.rec_bread}>
              <TouchableOpacity
                onPress = {this.onPress}>
                
                <AntDesign name = 'pluscircle' style = {styles.button3} size = {28} color = '#87694a'></AntDesign>
              </TouchableOpacity>
            </ImageBackground>
            <Text style = {styles.textIntrod}>보문산 메아리</Text>
            <Text style = {styles.textIntroP}>6,000원</Text>
          </View>
            
          <View style = {styles.introd_bread}>
            <ImageBackground source = {require('../Components/img/three_brothers.png')} style = {styles.rec_bread}>
              <TouchableOpacity
                onPress = {this.onPress}>
                
                <AntDesign name = 'pluscircle' style = {styles.button3} size = {28} color = '#87694a'></AntDesign>
              </TouchableOpacity>
            </ImageBackground>
            <Text style = {styles.textIntrod}>초코튀소삼형제</Text>
            <Text style = {styles.textIntroP}>11,000원</Text>
          </View>

          <View style = {styles.introd_bread}>
            <ImageBackground source = {require('../Components/img/tempura_soboro.png')} style = {styles.rec_bread}>
              <TouchableOpacity
                onPress = {this.onPress}>
                
                <AntDesign name = 'pluscircle' style = {styles.button3} size = {28} color = '#87694a'></AntDesign>
              </TouchableOpacity>
            </ImageBackground>
            <Text style = {styles.textIntrod}>튀김소보로</Text>
            <Text style = {styles.textIntroP}>1,600원</Text>
          </View>

        </View>

        <View style = {styles.sortbox}>
          <TextInput style = {styles.textInput} onChangeText = {text => setText('')}>
            {/* 문제점 TextInput 안에 돋보기 넣으니 지우기로 지워짐; */}
            <Ionicons 
              name = "search-outline" size = {11} color = 'black' 
              style = {{ marginLeft: 1 }}>
            </Ionicons>
          </TextInput>
          <TouchableOpacity
            style = {styles.button2}
            onPress = {this.onPress}>
             <Text style = {styles.textStyle}>단과자빵</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button2}
            onPress = {this.onPress}>
            <Text style = {styles.textStyle}>식빵</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button2}
            onPress = {this.onPress}>
            <Text style = {styles.textStyle}>도넛</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button2}
            onPress = {this.onPress}>
            <Text style = {styles.textStyle}>페스츄리</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button2}
            onPress = {this.onPress}>
            <Text style = {styles.textStyle}>건강빵</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button2}
            onPress = {this.onPress}>
            <Ionicons name = 'options-outline' size = {30} color = '#3c3c3b' ></Ionicons>
          </TouchableOpacity>          
        </View>
      

        <View style = {styles.breadbox}>

        </View>
      </View>
            
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  textStyle: {
    fontSize: 10,
    textAlign: 'center',
    color: 'black'
  },
  textInput: {
    width: 70, height: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  },
  textIntrod: {
    fontSize: 12,
    color: 'black',
    margintop: 3, marginLeft: 10
  },
  textIntroP: {
    fontSize: 11,
    color: 'black', 
    marginLeft: 10, marginTop: -2
  },
  logo: {
    width: 100, height: 40
  },
  rec_bread: {
    overflow: 'hidden',
    borderRadius: 20, 
    width: 100, height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  header: {
    
    flexDirection: 'row',
    backgroundColor: '#f2f0e6',
    justifyContent: 'space-between', 
    padding: 5, paddingTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth    
  },
  body: {
    flex: 7,
    backgroundColor: '#f2f0e6',
  },
  foot: {
    flex: 5,
    backgroundColor: '#f2f0e6'
  },
  image: {
    flex: 1,
    width: null, height: null,
    resizeMode: 'contain'
  },
  member: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    margin : 15,
    flex: 3,
    padding: 5,
    flexDirection: 'column',
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth   
  },
  notice: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginLeft: 15, marginRight: 15, marginBottom: 15,
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth        
  },
  memberNM: {
    color: 'black',
    fontSize: 18,
    fontWeight: "bold"
  },
  memberTxt: {
    color: 'black',
    fontSize: 15
  },
  noticeTxt: {
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
    marginRight: 120
  },
  button: {
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#f2f0e6',
    padding: 5
  },
  button2: {
    width: 45, height: 30,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bab0a3'
  },
  button3: {
    margin: 10, 
    marginTop: 62,
    alignSelf: 'flex-end'
  },
  button4: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },  
  memberbox: {
    paddingTop: 10, paddingLeft: 15,
    width: '100%', height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rec_breadbox: {
    width: '100%', height: 120,
    paddingLeft: 15, paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  introd_bread: {
    alignContent: 'flex-start'
  },
  sortbox: {
    width: '100%',  height: 50,
    flexDirection: 'row',
    marginTop: 5,
    paddingTop: 10, paddingLeft: 5, paddingRight: 5,
    justifyContent: 'space-between'
  },
  breadbox: {

  },
  menubox: {
    backgroundColor: "#ffffff",
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin:12
    // borderBottomColor: "#bbb",
    // borderBottomWidth: StyleSheet.hairlineWidth    
  }
})

export default Shop; 