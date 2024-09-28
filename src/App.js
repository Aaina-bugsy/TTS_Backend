import logo from './logo.svg';
import './App.css';
import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';


function App() {

  //Set up the animated value
  const backgroundColor = useRef(new Animated.Value(0)).current;

  // Use effect to run the animation when the component mounts
  useEffect(() => {
    Animated.timing(backgroundColor, {
      toValue:1,
      duration: 2000,
      useNativeDriver: false, // Important for animating style properites like background color
    }).start();
  }, []);

  // Interpolate the background color animation
  const bgColor = backgroundColor.interpolate({
    inputRange: [0,1],
    outputRange: ['#fff', '#ff0'], //white to yellow
  });

  //Render your animated text inside the App component
  return (
  <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a> */}
   
        <Animated.div style={{ backgroundColor: bgColor, padding: '10px', marginTop: '20px' }}>
          Highlighted Text
        </Animated.div>

       </header>
    </div>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},



	// foorterContainer: {
	// 	flex: 1/3,
	// 	alignItems: 'center',
	// },
	
	// optionsRow: {
	// 	alignItems: 'center',
	// 	flexDirection: 'row',
	// },
	// optionsContainer: {
	// 	position: 'absolute',
	// 	bottom: 80,
	// },
});

export default App;
