import { StyleSheet, Text, View, Button } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Button title="X" onPress={props.onDelete} />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    padding: 8,
    borderRaidus: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
