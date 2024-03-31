import React, {useState} from 'react';
import {Button, Text, Image, ImageBackground, StyleSheet, StatusBar, View, SafeAreaView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import Comp from '../src/Comp';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='grey'/>    

      <View style = {styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}>
            <Icon name = 'menu' size = {35} color = 'black'></Icon>
          </TouchableOpacity>        
          <Image source = {require('../Components/img/SS_Logo.png')} style = {styles.logo}></Image>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}>
              <Icon name = 'notifications-none' size = {35} color = 'black'></Icon>
            </TouchableOpacity>         
      </View>
      
      <View style = {styles.body}>
        {/* 뭐가 문제인지 모르겠음. 이미지가 View를 넘어가는중?  */}
        <ImageBackground source = {require('../Components/img/SS_Bgrnd.png')} style = {styles.image}></ImageBackground>
      </View>
      
      <View style = {styles.foot}>
        {/* TC
        <Text style = {styles.textStyle}> Happy Hacking </Text> */}

        <View style = {styles.member}>

          {/* {member}님, 안녕하세요 > 바코드 */}
          <View style = {styles.memberbox}>
            <TouchableOpacity
                style={styles.button2}
                onPress={this.onPress}>
              <Text style = {styles.memberNM}> 그린나래</Text>
              <Text style = {styles.memberTxt}> 님, 안녕하세요 </Text>
              <Icon name = 'keyboard-arrow-right' size = {20} color = 'black'></Icon>
            </TouchableOpacity>

            <TouchableOpacity
              style   = {styles.button3}
              onPress = {this.onPress}>
              <Ionicons name = 'barcode-outline' size = {30} color = 'black'></Ionicons>
            </TouchableOpacity>
          </View>

            {/* 포인트 | 기프트카드 | 해피쿠폰 */}
          <View style = {styles.menubox}> 
            <View>
              <TouchableOpacity 
                style = {styles.button4} onPress = {this.onPress}>
                
                <Ionicons name = 'server-outline' size = {30} color = '#d53e00'></Ionicons>
                <Text style = {styles.memberTxt}> 포인트 </Text>
              </TouchableOpacity>
            </View>         
            
            <View>
              <TouchableOpacity 
                style = {styles.button4} onPress = {this.onPress}>
               
                <Ionicons name = 'card-outline' size = {30} color = '#d53e00'></Ionicons>
                <Text style = {styles.memberTxt}>기프트카드</Text>
              </TouchableOpacity>
            </View>

            <View>            
              <TouchableOpacity 
                style = {styles.button4} onPress = {this.onPress}>
                {/* wallet-outline. receipt-outline */}
                <Ionicons name = 'wallet-outline' size = {30} color = '#d53e00'></Ionicons>
                <Text style = {styles.memberTxt}>해피쿠폰</Text>    
              </TouchableOpacity>
            </View>                       
          </View>

          {/* 스탬프 | 매장 | 빵쇼핑 */}
          <View style = {styles.menubox}> 
            <View>
              <TouchableOpacity 
                style = {styles.button4} onPress = {this.onPress}>
                
                <Ionicons name = 'star-half-outline' size = {30} color = '#d53e00'></Ionicons>
                <Text style = {styles.memberTxt}> 스탬프 </Text>
              </TouchableOpacity>
            </View>         
            
            <View>
              <TouchableOpacity 
                style = {styles.button4} onPress = {this.onPress}>
                
                <Ionicons name = 'home-outline' size = {30} color = '#d53e00'></Ionicons>
                <Text style = {styles.memberTxt}>매장</Text>
              </TouchableOpacity>
            </View>

            <View>            
              <TouchableOpacity 
                style = {styles.button4} onPress = {() => navigation.navigate('Shop')}>
                
                <Ionicons name = 'basket-outline' size = {30} color = '#d53e00'></Ionicons>
                <Text style = {styles.memberTxt}>빵쇼핑</Text>    
              </TouchableOpacity>
            </View>                       
          </View>

        </View>

        <View style = {styles.notice}>
            <TouchableOpacity
              style={styles.button2}
              onPress={this.onPress}>
              <Ionicons name = 'megaphone-outline' size = {25} color = 'black'></Ionicons>
              <Text style = {styles.noticeTxt}>[중요] 성심당 멤버십 App 안내!! </Text>
              <Icon name = 'keyboard-arrow-right' size = {28} color = 'black'></Icon>
            </TouchableOpacity>     
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
    textAlign: 'center'
  },
  logo: {
    width: 100, height: 40
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f2f0e6',
    padding: 5, paddingTop: 10,
    justifyContent: 'space-between'
  },
  body: {
    flex: 7
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
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  button3: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 125
  },
  button4: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },  
  memberbox: {
    borderRadius: 10,
    // flex: 3,
    padding: 5,
    flexDirection: 'row'
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

export default Home;
