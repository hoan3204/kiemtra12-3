import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import MainTabs from "./MainTabs"; // Import file chứa điều hướng

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <MainTabs />
    </SafeAreaView>
  );
}
