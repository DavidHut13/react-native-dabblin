import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const handleInputChange = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
    setEnteredGoal('');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Course Goals" onChangeText={handleInputChange} value={enteredGoal}/>
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(goal => {
          return (
            <View key={goal} style={styles.goal}>
              <Text>{goal}</Text>
            </View>
          )})
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: { 
    width: 200, 
    borderBottomColor: 'black', 
    borderBottomWidth: 1 
  },
  goal: {
    padding:5,
    borderColor:'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical:3,
  }
});
