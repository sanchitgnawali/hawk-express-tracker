import { useEffect } from "react";
import { auth } from "../../firebase";
import MapComponent from "../components/MapComponent";

export default HawkExpressTracker = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.replace("Login");
      }
    });

    return unsubscribe;
  }, []);

  return <MapComponent />;
};
