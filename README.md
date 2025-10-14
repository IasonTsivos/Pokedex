# 📱 Pokédex App

> A modern, sleek React Native Pokédex app built with Expo, featuring a clean white interface with striking red accents that brings the world of Pokémon to your fingertips.

## 🌟 Vision & Purpose

The **Pokédex App** is designed to be the ultimate companion for Pokémon enthusiasts, offering an intuitive and visually stunning way to explore and discover Pokémon. Our vision centers around three core principles:

### ✨ **Simplicity First**
- **Clean Interface**: White backgrounds with black text ensure maximum readability
- **Minimalist Design**: Every element serves a purpose, reducing visual clutter
- **Intuitive Navigation**: Users can instantly understand how to interact with the app

### **Focused Discovery** 
- **Type-Based Exploration**: Filter Pokémon by specific types (Fire, Water, Grass, Electric, Dragon, Psychic, Ghost, Dark, Steel, and Fairy)
- **Smart Search**: Quickly find Pokémon by name with real-time search functionality
- **Curated Experience**: Focus on 10 carefully selected Pokémon types for a refined experience

### **Visual Excellence**
- **Consistent Theme**: Red borders and accents create a cohesive visual identity
- **Type-Coded Colors**: Each Pokémon type has its distinctive color for instant recognition
- **High-Quality Assets**: Official Pokémon artwork and custom SVG type icons

### App Screenshots
*A glimpse into the Pokédex experience*

<table>
  <tr>
    <td align="center">
      <b>Welcome Screen</b><br>
      <img src="/assets/screenshots/welcome.png" alt="Welcome Screen" width="350"/>
    </td>
    <td align="center">
      <b>Main Pokédex Interface</b><br>
      <img src="/assets/screenshots/pokedex_.png" alt="Pokédex Interface" width="350"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Type Filtering</b><br>
      <img src="/assets/screenshots/type_search.png" alt="Type Filter Dropdown" width="350"/>
    </td>
    <td align="center">
      <b>Type & Name Filtering</b><br>
      <img src="/assets/screenshots/type_name_search.png" alt="Pokémon Grid" width="350"/>
    </td>
  </tr>
</table>


## 🚀 Features

### Core Functionality
- ** Welcome Screen**: Engaging intro with beautiful background imagery
- ** Pokédex Browser**: Grid-based layout for easy Pokémon browsing
- ** Type Filtering**: Filter by 10 supported Pokémon types with visual type indicators
- ** Real-time Search**: Instant search results as you type
- ** Pokémon Details**: View stats, types, and official artwork
- ** Smart Loading**: Efficient pagination for large datasets
- ** Error Handling**: Graceful error states with retry functionality

### Design Features
- ** Consistent Theming**: White backgrounds, black text, red accents
- ** Type Color Coding**: Each Pokémon type has its signature color
- ** Responsive Design**: Optimized for various screen sizes


## 🛠️ Technical Stack

### Framework & Platform
- ** React Native**: Cross-platform mobile development
- ** Expo**: Streamlined development and deployment
- ** Expo Router**: File-based navigation system

### Data & API
- ** PokéAPI**: Official Pokémon data source
- ** REST API Integration**: Efficient data fetching and caching
- ** Pagination**: Smart data loading for optimal performance

### UI/UX Libraries
- ** Safe Area Context**: Proper handling of device safe areas
- ** Custom Components**: Reusable, themed UI components


### Assets & Icons
- ** Custom SVG Icons**: Type icons stored in `/assets/types/`
- ** Official Artwork**: High-quality Pokémon sprites and images

## 📱 Supported Pokémon Types

The app focuses on 10 carefully selected Pokémon types, each with distinct visual theming:

| Type | Color | Description |
|------|--------|-----------|
| 🔥 Fire | `#FF6D6D` | Fire-type Pokémon |
| 💧 Water | `#6DB7FF` | Water-type Pokémon |
| 🌿 Grass | `#78C850` | Grass-type Pokémon |
| ⚡ Electric | `#FFD86F` | Electric-type Pokémon |
| 🐲 Dragon | `#7038F8` | Dragon-type Pokémon |
| 🔮 Psychic | `#F85888` | Psychic-type Pokémon |
| 👻 Ghost | `#705898` | Ghost-type Pokémon |
| 🌑 Dark | `#705848` | Dark-type Pokémon |
| ⚙️ Steel | `#B8B8D0` | Steel-type Pokémon |
| 🧚 Fairy | `#EE99AC` | Fairy-type Pokémon |

## 🎯 User Experience Goals

### Primary Goals
1. **Instant Recognition**: Users should immediately understand they're using a Pokédex
2. **Effortless Discovery**: Finding Pokémon should be intuitive and fast
3. **Visual Delight**: Every interaction should feel polished and engaging
4. **Information Clarity**: Pokémon data should be presented clearly and accessibly

### Design Philosophy
- **Less is More**: Embrace white space and minimal design
- **Function Follows Form**: Beautiful design that enhances usability
- **Consistent Interactions**: Predictable behavior across all screens
- **Accessible by Default**: High contrast and readable typography

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd PokedexApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or use an emulator/simulator

## 📄 License

This project is created for educational purposes and utilizes the PokéAPI for Pokémon data.

---

*Built with ❤️ for Pokémon trainers everywhere*

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
