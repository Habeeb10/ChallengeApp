import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { Container } from "../../component/container";

export function Website({ route }) {
  const { url } = route.params;

  return (
    <>
      <Container>
        <WebView source={{ uri: url }} />
      </Container>
    </>
  );
}
