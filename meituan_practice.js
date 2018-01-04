/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      
      <View>
          <View style={[styles.height160,styles.row]}>

          <View style={[styles.height160,styles.part_1_left]}>
              <Text style={[styles.font14,styles.green,styles.marLeft10,styles.marTop30]}>我们约会吧</Text>
              <Text style={[styles.font12,styles.marLeft10,styles.marTop10]}>恋爱家人好朋友</Text>
              <Image style={[styles.yue,styles.marTop10]} source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}>
              </Image>
          </View>


          <View style={[styles.height160,styles.part_1_right]}>
              <View style={[styles.row,{paddingTop:30,paddingBottom:10}]}>
                  <View style={[{flex:1}]}>
                      <Text style={[{marginLeft:30},styles.orange]}>超低价值</Text>
                      <Text style={[{marginLeft:30,paddingTop:5},styles.font12]}>十元惠生活</Text>
                  </View>
                  <View style={[styles.row,{flex:1,marginTop:-13}]}>
                      <Image style={[styles.hanbao]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}>
                      </Image>
                  </View>
              </View>
              <View style={[{borderTopWidth:1,borderColor:'#DDD8CE',flexDirection:'row'}]}>
                  <View style={[{flex:1,borderRightWidth:1,borderColor:'#DDD8CE'}]}>
                      <Text style={{marginTop:10,fontSize:14,fontWeight:'bold',marginLeft:10,color:'#E667AF'}}>聚餐宴请</Text>
                      <Text style={{marginTop:5,fontSize:12,marginLeft:10}}>朋友家人常聚聚</Text>
                      <Image style={{height:30,width:30,alignSelf:'center',marginTop:3}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}>
                      </Image>
                  </View>
                  <View style={[{flex:1}]}>
                      <Text style={{marginTop:10,fontSize:14,fontWeight:'bold',marginLeft:10,color:'#F49639'}}>门店抢购</Text>
                      <Text style={{marginTop:5,fontSize:12,marginLeft:10}}>还有</Text>
                      <Text style={{marginTop:5,fontSize:12,marginLeft:10}}>12:06:12分</Text>
                  </View>
              </View>
          </View>
      </View>

      <View style={[{height:30,borderColor:'#EDEAE5',borderBottomWidth:1}]}>
      </View>

      <View style={[{height:80,borderColor:'#EDEAE5',borderBottomWidth:1,flexDirection:'row'}]}>
          <View style={{flex:1}}>
              <Text style={{fontSize:17,color:'#F28A69',fontWeight:'bold',marginLeft:10,marginTop:10}}>一元吃大餐</Text>
              <Text style={{fontSize:12,marginLeft:10,marginTop:5}}>新用户专享</Text>
          </View>
          <View style={{flex:1}}>
              <Image style={{height:50,width:128,marginTop:20}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}>
              </Image>
          </View>
      </View>
      <View style={{height:160,flexDirection:'row'}}>
          <View style={{flex:1,borderRightWidth:0.5,borderColor:'#DCD8CF',flexDirection:'column'}}>
              <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:2}}>
                      <Text style={{fontSize:17,fontWeight:'bold',color:'#F28A69',marginLeft:10,marginTop:20}}>撸串节狂欢</Text>
                      <Text style={{fontSize:12,marginLeft:10,marginTop:5}}>烧烤6.6元起</Text>
                  </View>
                  <View style={{flex:1}}>
                      <Image style={{width:60,height:55,marginLeft:-15,marginTop:20}} source={{uri: 'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}>
                      </Image>
                  </View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:2}}>
                      <Text style={{fontSize:17,fontWeight:'bold',color:'#F28A69',marginLeft:10,marginTop:20}}>0元餐来袭</Text>
                      <Text style={{fontSize:12,marginLeft:10,marginTop:5}}>免费吃喝玩乐购</Text>
                  </View>
                  <View style={{flex:1}}>
                      <Image style={{width:60,height:55,marginLeft:-15,marginTop:20}} source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}>
                      </Image>
                  </View>
              </View>
          </View>
          <View style={{flex:1,borderLeftWidth:0.5,borderColor:'#DCD8CF',flexDirection:'column'}}>
              <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:2}}>
                      <Text style={{fontSize:17,fontWeight:'bold',color:'#F28A69',marginLeft:10,marginTop:20}}>毕业狂欢</Text>
                      <Text style={{fontSize:12,marginLeft:10,marginTop:5}}>选好酒店才安心</Text>
                  </View>
                  <View style={{flex:1}}>
                      <Image style={{width:60,height:55,marginLeft:-15,marginTop:20}} source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}>
                      </Image>
                  </View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:2}}>
                      <Text style={{fontSize:17,fontWeight:'bold',color:'#F28A69',marginLeft:10,marginTop:20}}>热门团购</Text>
                      <Text style={{fontSize:12,marginLeft:10,marginTop:5}}>大家都在买什么</Text>
                  </View>
                  <View style={{flex:1}}>
                      <Image style={{width:60,height:55,marginLeft:-15,marginTop:20}} source={{uri: 'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}>
                      </Image>
                  </View>
              </View>
          </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red',
  },
  tips: {
    fontSize: 12,
    textAlign: 'center',
    top:-123,
    alignSelf:'flex-start',
    margin: 10,
    color:'red',
    backgroundColor:'transparent'
  },
  image: {
    width: 200,
    height: 200,
  },
  sub1:{
    flex: 2,
    alignContent:'center',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FC1F',
  },
  sub2:{
    flex: 1,

    backgroundColor: '#10FC1F',
  },
  sub3:{
    flex: 1,
    backgroundColor: '#A0FC1F',
  },
  row:{
    flexDirection:'row',
  },
  font14:{
    fontSize:14,
  },
  font12:{
    fontSize:12,
  },
  height160:{
    height:160,
  },
  part_1_left:{

    flex:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:'#EDEBE6'
  },

  part_1_right:{

    flex:2,
    borderBottomWidth:1,
    borderColor:'#EDEBE6',
  },
  marLeft10:{
    marginLeft:10,
  },
  marTop30:{
    marginTop:30,
  },
  marTop10:{
    marginTop:10,
  },
  green:{
    color:'#55A44b',
    fontWeight:'600',
  },
  orange:{
    color:'#FF3F0D',
    fontWeight:'600',
  },
  yue:{
    height:80,
  },
  rect:{
    borderWidth:1,
    borderColor:'red',
  },
  hanbao:{
    height:55,
    width:55,
  },
});
