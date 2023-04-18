import { SafeAreaView } from "react-native";
import AppRoute from "./src/routes/AppRoute";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppRoute />
    </SafeAreaView>
  );
}


