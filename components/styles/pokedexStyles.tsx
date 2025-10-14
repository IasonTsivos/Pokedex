import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },  container: {
    flex: 1,
  },

  /** TOP SECTION */
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
    opacity: 0.25,
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

  controlsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 5,
    gap: 12,
    alignItems: 'flex-start',
  },

  dropdownContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 2000,
  },
  dropdownButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: '#DC2626',
  },
  dropdownContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dropdownText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#DC2626',
    maxHeight: 200,
    marginTop: 4,
    zIndex: 2001,
    elevation: 10,
  },
  typeScrollList: {
    maxHeight: 200,
  },
  typeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 8,
    gap: 10,
  },
  typeOptionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  searchContainer: {
    flex: 1,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    paddingRight: 40,
    fontSize: 14,
    borderWidth: 2,
    borderColor: '#DC2626',
    color: '#000000',
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    marginTop: -9,
  },
  clearSearchButton: {
    position: 'absolute',
    right: 12,
    top: '50%',
    marginTop: -9,
  },
  mainContent: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 18,
    color: '#DC2626',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 24,
  },
  retryButton: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyGif: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 18,
    color: '#000000',
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 24,
  },
  pokemonList: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  pokemonRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    gap: 12,
  },
  countContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  countText: {
    fontSize: 14,
    color: '#000000',
    opacity: 0.7,
    fontWeight: '500',
  },
  loadMoreContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loadMoreButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#DC2626',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadMoreButtonDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#999999',
    opacity: 0.6,
  },
  loadMoreButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});
