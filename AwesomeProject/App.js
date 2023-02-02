import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  function addGoalHandler() {
    if (!enteredText) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredText,
        id: Math.random().toString(),
      },
    ]);
    setEnteredText("");
  }

  function goalInputHanlder(enteredText) {
    setEnteredText(enteredText);
  }

  function removeGoalHandler(goalId) {
    const filteredGoals = courseGoals.filter((goal) => goal.id !== goalId);
    setCourseGoals(filteredGoals);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onChangeGoal={goalInputHanlder}
        onAddGoal={addGoalHandler}
        enteredText={enteredText}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData?.item.text}
              onDelete={removeGoalHandler.bind(this, itemData?.item.id)}
            />
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
