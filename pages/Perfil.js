import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../components/Card";

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Enzo Turcovic</Text>
        <Image source={require("../assets/profile.png")} style={styles.image} />
        <View style={styles.cardsContainer}>
            <Card ImgSrc={{uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png" }} />
            <Card ImgSrc={{uri: "https://cdn-icons-png.flaticon.com/512/732/732212.png" }} />
            <Card ImgSrc={{uri: "https://cdn-icons-png.flaticon.com/512/732/732190.png" }} />
            <Card ImgSrc={{uri: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" }} />
            <Card ImgSrc={{uri: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" }} />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 20,
    margin: 20,
  },
  image: {
    width: 300,
    height: 200, 
    borderRadius: 10, 
    marginTop: 20, 
  },
  cardsContainer: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    gap: 40,
  },

});