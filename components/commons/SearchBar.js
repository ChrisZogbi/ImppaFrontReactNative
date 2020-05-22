import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({
  LoadingActivity,
  LeftIcon,
  style,
  isLoading,
  ...props
}) => {
  return (
    <View style={{ ...styles.input, ...style }}>
      {LeftIcon && (
        <Ionicons name={LeftIcon} size={20} style={{ paddingLeft: 20 }} />
      )}
      <TextInput
        {...props}
        style={{ flex: 1, paddingLeft: 20 }}
        underlineColorAndroid="transparent"
      />
      {LoadingActivity && isLoading && (
        <ActivityIndicator
          style={{ paddingRight: 20 }}
          size="small"
          color="orange"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default SearchBar;
