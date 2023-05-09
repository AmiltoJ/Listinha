import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor:'#f07',
    },
    toolbox: {
      flexDirection: "row",
      marginBottom: 5,
    },
    title: {
      flex: 1,
      fontSize: 16,
      color: "#f39c12",
    },
    toolboxButton: {
      backgroundColor: "#f39c12",
      borderRadius: 50,
      width: 22,
      height: 22,
      justifyContent: "center",
      alignItems: "center",
    },
    itemsContainer: {
    border: 'solid',
    padding: 5,
    borderLeftColor: '#fff',
    borderTopColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: "#3498db",
    borderBottomWidth: 1
    },
    itemText: {
      fontSize: 16,
    },
    buttons: {
        marginLeft: '80%',
        flexDirection: 'row',
        marginTop: -20
    },
    
  });