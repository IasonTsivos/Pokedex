import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topSection: {
    flex: 0.2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  titleSection: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  welcomeTitle: {
    fontSize: 52,
    fontWeight: "900",
    textAlign: "center",
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    letterSpacing: 1.5,
    lineHeight: 60,
    maxWidth: width * 0.9,
  },
  bottomSection: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  startButton: {
    backgroundColor: "#DC2626",
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    minWidth: width * 0.65,
    maxWidth: width * 0.85,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.8,
  },
});
