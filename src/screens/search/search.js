import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Container } from "../../component/container";
import { Button } from "../../shared/button";
import { Input } from "../../shared/input";
import { Searchstyles as styles } from "./styles";

export function Search({ navigation }) {
  const [title, setTitle] = useState("");

  const Search = () => {
    navigation.navigate("details", title);
  };
  return (
    <>
      <Container>
        <View style={styles.searchbox}>
          <Text style={styles.search}>
            Search for the latest information about your favourite anime.
          </Text>
          <Input
            placeHolder="input your title here"
            onChange={setTitle}
            value={title}
          />
          <Button title="Search" style={styles.button} onPress={Search} />
        </View>
      </Container>
    </>
  );
}
