import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Toback } from "../../../assets/svg";
import { Container } from "../../component/container";
import { Card } from "./card";

export function Details({ route, navigation }) {
  const { title } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v3/search/anime?q=${title}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res.results);
      })
      .catch((err) => err)
      .finally(() => setLoading(false));
  };

  console.log({ data });

  const _renderItem = ({ item }) => {
    const { title, episodes, image_url, url } = item;
    return (
      <Card
        title={title}
        episodes={episodes}
        imageSource={image_url}
        onPress={() => navigation.navigate("website", { url })}
      />
    );
  };

  return (
    <>
      {loading ? (
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="skyblue" />
        </View>
      ) : (
        <Container>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              backgroundColor: "skyblue",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("search")}
          >
            <Toback />
          </TouchableOpacity>

          <FlatList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </Container>
      )}
    </>
  );
}
