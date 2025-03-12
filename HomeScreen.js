import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.userName}>Nguyễn Đình Hoàn</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }} // Ảnh đại diện
          style={styles.avatar}
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightContainer}>
        {/* Nút chuyển đến ScanScreen */}
        <TouchableOpacity
          style={styles.insightBox}
          onPress={() => navigation.navigate("Scan")}
        >
          <Ionicons name="scan" size={32} color="#A855F7" />
          <Text style={styles.insightTitle}>Scan new</Text>
          <Text style={styles.insightSubTitle}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightBox}>
          <MaterialIcons name="error-outline" size={32} color="#F97316" />
          <Text style={styles.insightTitle}>Counterfeits</Text>
          <Text style={styles.insightSubTitle}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="checkmark-circle" size={32} color="#10B981" />
          <Text style={styles.insightTitle}>Success</Text>
          <Text style={styles.insightSubTitle}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="calendar" size={32} color="#3B82F6" />
          <Text style={styles.insightTitle}>Directory</Text>
          <Text style={styles.insightSubTitle}>History 26</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: "#555",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  insightContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  insightBox: {
    width: "47%",
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  insightSubTitle: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
