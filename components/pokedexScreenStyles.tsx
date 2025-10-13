import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  topSectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  topSection: {
    borderWidth: 3,
    borderColor: '#DC2626',
    borderRadius: 15,
    paddingBottom: 20,
    overflow: 'visible',
    zIndex: 1,
  },
  topSectionImage: {
    borderRadius: 15,
    opacity: 0.25, // slightly transparent image 
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 17,
    color: '#000000',
    opacity: 0.7,
  },
})