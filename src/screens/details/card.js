import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as colors from "../../common/colors";

export const Card = ({ title, imageSource, episodes, onPress, url }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentbox}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: imageSource,
          }}
          resizeMode="cover"
        />
        <View style={styles.titlebox}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text>{`episodes: ${episodes}`}</Text>
        </View>
      </View>
      <Text>{url}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    width: 240,
  },
  titlebox: {
    marginLeft: 20,
  },

  contentbox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    borderWidth: 1,
    width: "95%",
    height: 120,
    backgroundColor: colors.wheat,
    borderWidth: 1,
    borderColor: "skyblue",
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    overflow: "hidden",
  },
});
