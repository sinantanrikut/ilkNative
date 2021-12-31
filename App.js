import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, View, Button, TouchableOpacity, Touchable } from "react-native";

function MyCustomButton(props) {

  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count+1);

  };
  const handleDecrement = () => {
    setCount(count-1);

  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={{ uri: 'https://i4.hurimg.com/i/hurriyet/75/1110x740/5b8e6d967152d827603dd434.jpg' }} style={styles.image} />
        <Text style={styles.text}>Conter: {count}</Text>
        <Text style={styles.subtitle}>
          Clik buttons to change the counter
        </Text>

        <View style={styles.buttonContainer}>
          <MyCustomButton title="Increment +" onPress={handleIncrement} />
          <MyCustomButton title="Decrement -" style={{ marginStart: 16, backgroundColor: "pink" }} onPress={handleDecrement} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    marginTop: 4,
  },
  image: {

    height: 180,
    borderRadius: 12,
  },
  buttonContainer: {
    marginTop: 26,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
})

export default App;