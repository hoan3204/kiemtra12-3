import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Ảnh toàn màn hình */}
      <Image source={require("./assets/images.jpg")} style={styles.fullImage} />

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image source={require("./assets/images.jpg")} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>Lauren’s</Text>
          <Text style={styles.productSubtitle}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", alignItems: "center", justifyContent: "center" },

  backButton: {
    width: 45,
    height: 44,
    borderRadius: 9,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 57,
    left: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },

  fullImage: {
    width: width,
    height: height,
    resizeMode: "cover",
    position: "absolute",
  },

  productInfo: {
    position: "absolute",
    bottom: 50,
    width: 292,
    height: 82,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: { width: 50, height: 50, resizeMode: "contain" },
  textContainer: { flex: 1, alignItems: "center" },
  productTitle: { fontSize: 16, color: "#666", fontWeight: "400" },
  productSubtitle: { fontSize: 16, fontWeight: "700" },

  addButton: {
    width: 36,
    height: 36,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});

export default ScanScreen;
