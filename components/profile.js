import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  // Opretter en variabel med profilens data
  const profileData = {
    name: "Nikoline",
    imageUrl: require("../imgs/nikoline.jpg"),
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={profileData.imageUrl} style={styles.image} />

      {/* Profile Name */}
      <Text style={styles.name}>{profileData.name}</Text>

      {/* Profile Text */}
      <Text>
        Mit navn er Nikoline. Jeg er 25 år gammel og søger bolig i København.
        Skriv til mig, hvis vi kunne være et match!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
