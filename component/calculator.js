import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

export default function Calculator() {
  const [operand1, setOperand1] = useState(null);
  // console.log(operand1);
  const [operand2, setOperand2] = useState(null);
  // console.log(operand2);

  const [result, setResult] = useState(0);

  const add = () => {
    const sum = operand1 + "+" + operand2;
    setResult(eval(sum));
    // console.log(result);
  };
  const subtract = () => {
    const minus = operand1 + "-" + operand2;
    setResult(eval(minus));
    // console.log(result);
  };
  const times = () => {
    const star = operand1 + "*" + operand2;
    setResult(eval(star));
    // console.log(result);
  };
  const divide = () => {
    const share = operand1 + "/" + operand2;
    setResult(eval(share));
    // console.log(result);
  };

  const percent = () => {
    const percint = operand1 + "*" + (operand2 + "/" + 100);
    setResult(eval(percint));
    // console.log(result);
  };

  const clear = () => {
    setResult(0);
    setOperand1(0);
    setOperand2(0);
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.header}>CALCULATOR</Text>
      </View> */}

      <View style={styles.display}>
        <View>
          <Text style={styles.title}>Input 1</Text>
          <TextInput
            onChangeText={(Text) => setOperand1(Text)}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.title}>Input 2</Text>
          <TextInput
            onChangeText={(Text) => setOperand2(Text)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.equation}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                add();
              }}
              style={styles.equat}
            >
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                subtract();
              }}
              style={styles.equat}
            >
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                times();
              }}
              style={styles.equat}
            >
              *
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                divide();
              }}
              style={styles.equat}
            >
              /
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                percent();
              }}
              style={styles.equat}
            >
              %
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.result}>
          <Text
            onPress={() => {
              clear();
            }}
            style={styles.equat}
          >
            Clear
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.title}>Result</Text>
        <Text style={styles.output}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#50BAFE",
    // marginBottom: 10,
  },
  header: {
    fontSize: 30,
    paddingBottom: 20,
  },
  display: {
    paddingBottom: 20,
  },

  title: {
    alignItems: "flex-start",
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingStart: 20,
    width: 300,
    paddingVertical: 10,
    marginBottom: 10,
  },

  button: {
    display: "flex",
    backgroundColor: "#FFF8D5",
    width: 70,
    height: 70,
    marginHorizontal: 20,
    // marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  equation: {
    display: "flex",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  bottom: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  equat: {
    color: "#1e1e1e",
    fontSize: 30,
    // fontWeight: 100,
  },

  result: {
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 10,
    // marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  output: {
    backgroundColor: "#fff",
    borderRadius: 5,
    // paddingHorizontal: 130,
    paddingVertical: 20,
    marginBottom: 10,
    width: 300,
    paddingStart: 20,
  },
});
