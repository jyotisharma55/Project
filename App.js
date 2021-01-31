import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const data = [{
  "data": "How to get Started with classcast.",
  "module": 1,
  "lock": false
}, {
  "data": "The benefits of joining Classcast.",
  "module": 2,
  "lock": false
}, {
  "data": "How working with a startup changes the course of your carrer.",
  "module": 3,
  "lock": false
}, {
  "data": "Questions one should ask before joining a startup.",
  "module": 4,
  "lock": true
}]

export class App extends Component {
  state = {
    textShown: false,
    lengthMore: false
  };

  onTextLayout = e => {
    this.setState({ lengthMore: e.nativeEvent.lines.length > 4 }); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  };
  toggleNumberOfLines = () => { //To toggle the show text or hide it
    this.setState({ textShown: !this.state.textShown });
  }

  renderItem = ({ item, index }) => {
    console.log("item", item)
    return (
      <View style={{ flex: 1 }}>

        <View style={[styles.renderItemView, { backgroundColor: (item.lock) ? '#fb7d69' : '#9bb5ff' }]}>
          <FontAwesome5
            name="play"
            size={20}
            color={'fff'}

          />
          <Text style={{ marginLeft: 10 }}>
            {item.data}
          </Text>
        </View>
        <View style={{ position: 'absolute', left: "8%" }}>
          <View style={[styles.renderItemOverlay, { borderColor: (item.lock) ? '#fb7d69' : '#9bb5ff' }]}>
            <Text>Module {item.module}</Text>
            {(item.lock) ? <FontAwesome5
              name="lock"
              size={10}
              color={'#fb7d69'}
              style={{ marginLeft: 5 }}
            /> : null}
          </View>
        </View>
      </View>
    )
  }
  render() {

    return (
      <View style={styles.containerStyle}>

        <Icons
          name="leftcircleo"
          size={30}
          color={'#000'}
        />

        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <Image source={require('./assets/vision-statement-blog-11041.jpg')} style={styles.imageStyle} ></Image>
          <View style={{ width: '50%', marginLeft: 15 }}>
            <Text style={{ fontSize: 20 }}>How to clear FRA without coaching - vision IAS</Text>
            <View style={styles.viewStyle}>
              <FontAwesome5
                name="play-circle"
                size={25}
                color={'red'}

              />
              <Text style={{ marginLeft: 5 }}>10 videos</Text>
            </View>

          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Introduction :-</Text>
          <Text onTextLayout={this.onTextLayout} numberOfLines={this.state.textShown ? undefined : 3} style={{ color: 'grey', marginTop: 5 }}>
            What is the mission of human life? The mission of human life is to end the miseries of material existence and attain a blissful life. We are constantly searching after happiness, but we often fail in our pursuit. We may get a glimpse of happiness, but it does not last forever. We do not want miseries, but we cannot avoid them. Scriptures inform us that we are spiritual beings, part and parcel of the Supreme Lord Sri Krishna, and by nature we are full of happiness – ānandamayo ‘bhyāsāt (vedānta-sūtra). Then, why do we suffer? How do we rediscover the lost happiness and lead a blissful life?
          </Text>
          {
            this.state.lengthMore ? <Text
              onPress={this.toggleNumberOfLines}
              style={{ marginTop: 5, color: 'red' }}>{this.state.textShown ? 'Read less...' : 'Read more...'}</Text>
              : null
          }
        </View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          bounces={false}
          style={{ marginTop: '5%' }}
          keyExtractor={(item, index) => 'key1' + index}

        />

      </View>
    )
  }
}

styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: '5%'
  },
  imageStyle:
  {
    height: 180,
    width: 180,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  viewStyle:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  renderItemView: {
    paddingRight: 15,
    paddingTop: 30,
    paddingLeft: 15,
    paddingBottom: 15,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row'
  },
  renderItemOverlay: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  }
}


export default App

