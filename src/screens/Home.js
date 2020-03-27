import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import {GlobalHeader, Icons} from '../components';
import Ripple from 'react-native-material-ripple';
import {bindActionCreators} from 'redux';
import {inpAction} from '../redux/actions/userActions';
import {connect} from 'react-redux';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }
  componentDidMount() {
    console.log('props', this.props);
  }
  //   FetchFunc() {
  //     fetch(`https://api.github.com/users/${this.state.inputVal}`)
  //       .then(response => response.text()) // Convert to text instead of res.json()
  //       .then(text => {
  //         if (Platform.OS === 'android') {
  //           text = text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, ''); // If android , I've removed unwanted chars.
  //         }
  //         return text;
  //       })
  //       .then(response => JSON.parse(response))
  //       .then(res => this.setFunc(res)); // Parse the text.
  //     //   .catch(err => console.log('Err', err));
  //   }
  //   setFunc(e) {
  //     console.log(e);
  //     this.setState({
  //       name: e.name,
  //       username: e.login,
  //       followers: e.followers,
  //       following: e.following,
  //       inputVal: null,
  //       image: e.avatar_url,
  //     });
  //   }

  render() {
    // console.log('props', this.props);
    return (
      <View style={styles.container}>
        <GlobalHeader
          headingText="Stay Home"
          RightMenu={true}
          LeftMenu={true}
        />
        <ScrollView>
          <View style={styles.subCont}>
            <Text style={styles.head}>
              Search Github Profile Via{'\n'} Username
            </Text>
            <View style={styles.inpCont}>
              <View style={styles.searchCont}>
                <Icons.AntDesign name="search1" size={22} color={'#999'} />
              </View>
              <TextInput
                onChangeText={e => {
                  e == undefined
                    ? Alert.alert('Undefind', 'Please Enter Username')
                    : this.setState({value: e});
                }}
                defaultValue={this.state.value}
                style={{width: '70%', padding: 0}}
                placeholder="Enter Username"
              />
            </View>
            <Ripple
              onPress={() => this.props.Change(this.state.value)}
              style={styles.btnCont}>
              <Text style={{color: 'green', fontSize: 17}}>Search</Text>
            </Ripple>
          </View>
          <View
            style={{
              height: 400,
              width: '75%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: '70%'}}
              source={
                this.props.image
                  ? {uri: this.props.image}
                  : require('../../assets/profile.png')
              }
            />
            {['name', 'username', 'followers', 'following'].map((v, i) => {
              return (
                <Text key={i + 'categories'}>
                  {`${v} : ${
                    i == 0
                      ? this.props.name
                      : i == 1
                      ? this.props.username
                      : i == 2
                      ? this.props.followers
                      : this.props.following
                  }`}
                </Text>
              );
            })}
          </View>
          <Text>{this.props.users}</Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputVal: state.inputVal,
    name: state.name,
    username: state.username,
    followers: state.followers,
    following: state.following,
    image: state.image,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Change: e => dispatch(inpAction(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  subCont: {width: '95%', alignSelf: 'center', marginTop: 10},
  head: {
    color: 'green',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  btnCont: {
    width: 90,
    alignSelf: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchCont: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inpCont: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    height: 45,
  },
});
