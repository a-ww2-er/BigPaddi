import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import axios from "axios";

import Ionicons from "@expo/vector-icons/Ionicons";

function format(price) {
  const nigerianCurrencyFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return nigerianCurrencyFormat.format(price);
}
const { height, width } = Dimensions.get("window");
const collections = [
  "All",
  "New Arrivals",
  "Best Sellers",
  "Summer Collection",
  "Winter Sale",
  "Athleisure Wear",
  "Formal Attire",
  "Casual Comfort",
  "Accessories",
  "Workout Gear",
  "Vintage Classics",
  "Travel Essentials",
  "Kids Collection",
];
const CarouselBody = () => {
  const images = [
    require("../../../assets/homepage/img1.jpg"),
    require("../../../assets/homepage/img2.jpg"),
    require("../../../assets/homepage/img3.jpg"),
    require("../../../assets/homepage/img4.jpg"),
    require("../../../assets/homepage/img5.jpg"),
  ];

  return (
    <View>
      <Carousel
        loop
        width={width}
        style={{ height: 251 }}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={2800}
        renderItem={({ item }) => {
          // console.log(item.uri);
          return (
            <View>
              <Image
                source={item}
                style={{ width: "100%", height: "100%", objectFit: "contain" }} // objectFit is not a valid style property in React Native
              />
            </View>
          );
        }}
      />
    </View>
  );
};
const Header = () => {
  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight + 7, marginBottom: 20 }}
    >
      <View
        style={{
          paddingHorizontal: HomeTheme.spacing.small,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <Image
            source={require("../../../assets/logos/Designer3.png")}
            style={{ width: 26, height: 26 }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: -0.3,
            }}
          >
            BigPaddi
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12, marginRight: 9 }}>
          <Pressable
            onPress={() => console.log("navigate to cart")}
            style={{ position: "relative" }}
          >
            <Text
              style={{
                backgroundColor: "red",
                width: 10,
                height: 10,
                top: -0,
                zIndex: 10,
                borderRadius: 50,
                right: -3,
                fontSize: 12,
                position: "absolute",
                lineHeight: 12,
                padding: 3,
                color: "white",
              }}
            ></Text>
            <Ionicons name="cart-outline" size={24} color="black" />
          </Pressable>
          <Pressable
            onPress={() => console.log("open side drawer (thats our menu)")}
          >
            <Ionicons name="menu" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const allCategories = [
  {
    image: require("../../../assets/categoryImages/cloths.png"),
    name: "Cloths",
  },
  {
    image: require("../../../assets/categoryImages/bags.png"),
    name: "bags",
  },
  {
    image: require("../../../assets/categoryImages/furniture.png"),
    name: "furniture",
  },
  {
    image: require("../../../assets/categoryImages/shoe.png"),
    name: "shoe",
  },
  {
    image: require("../../../assets/categoryImages/electronics.png"),
    name: "electronics",
  },
  {
    image: require("../../../assets/categoryImages/cloths.png"),
    name: "Cloths",
  },
];

const Categories = () => {
  return (
    <View>
      <FlatList
        data={allCategories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable>
            <View style={{ marginRight: 10, alignItems: "center", gap: 4 }}>
              <Image source={item.image} style={{ borderRadius: 50 }} />
              <Text style={{ fontSize: 12.5, textTransform: "capitalize" }}>
                {item.name}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const Collections = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View>
      <FlatList
        data={collections}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => setSelected(index)}>
            <View
              style={
                index == selected
                  ? {
                      backgroundColor: HomeTheme.colors.primary,
                      marginRight: 10,
                      borderRadius: 6,
                      padding: 7,
                      paddingHorizontal: 14,
                      marginLeft: index == 0 ? 5 : 0,
                      borderWidth: 1,
                    }
                  : {
                      marginLeft: index == 0 ? 5 : 0,
                      marginRight: 10,
                      borderRadius: 6,
                      borderColor: "black",
                      padding: 7,
                      borderWidth: 1,
                    }
              }
            >
              <Text
                style={
                  index == selected
                    ? { color: "white", fontSize: 12.5 }
                    : { fontSize: 12.5 }
                }
              >
                {item}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const CategoryCard = (item) => {
  return (
    <View>
      {/* <Image source={} /> */}
      <Text>{item.title}</Text>
      <Text></Text>
    </View>
  );
};

const FeaturedCollection = (products, loading) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 8,
        borderRadius: 30,
        paddingVertical: 20,
        minHeight: 400,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 4,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 17, fontWeight: 500 }}>
            Digital Electronics
          </Text>
          <Text style={{ fontSize: 10 }}>
            Take a look from a variety of brands and companies
          </Text>
        </View>
        <Pressable onPress={() => console.log("clicked seemore")}>
          <Text style={{ fontSize: 10, color: HomeTheme.colors.primary }}>
            SEE MORE
          </Text>
        </Pressable>
      </View>
      <View>
        {/* <FlatList
            data={products}
            renderItem={CategoryCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} 
            // contentContainerStyle={styles.container}\
            

        /> */}
        <View style={styles.container}>
          {loading === true ? (
            <Text> Loading...</Text>
          ) : products && products.products.length > 0 ? (
            products.products.map((item, index) => (
              <View key={index}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 120, height: 120, borderRadius: 10 }}
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ maxWidth: 150 }}
                >
                  {item.title}
                </Text>
                <Text>{format(item.price)}</Text>
              </View>
            ))
          ) : (
            <Text>Please Refresh</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const Index = () => {
  const [images, setImages] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      console.log("requesting");
      if (res.ok) {
        const data = await res.json();
        console.log("data", data);
        setProducts(data);
      } else {
        console.error("Error fetching products. Status:", res.status);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <SafeAreaView style={{ backgroundColor: HomeTheme.colors.background }}>
      <View style={{ paddingBottom: 4 }}>
        <Header />
        <Collections />
      </View>
      <ScrollView>
        <View id="manual slider" style={{ height: 241, position: "relative" }}>
          <CarouselBody />
        </View>
        <View
          style={{
            padding: HomeTheme.spacing.small,
            gap: 12,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Discover</Text>
          <Categories />
        </View>
        <View style={{ marginBottom: 200 }}>
          <FeaturedCollection products={products} loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    justifyContent: "space-between",
    padding: 16,
  },
  item: {
    width: "48%",
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#f6f6f6",
  },
});

const HomeTheme = {
  colors: {
    primary: "#473A5E",
    secondary: "#2ecc71",
    text: "#333",
    background: "#f6f6f6",
  },

  font: {
    fontSize: {
      small: 14,
      regular: 16,
      large: 20,
    },
    brand: "Pacifico_400Regular",
    text100: "Montserrat_100Thin",
    text200: "Montserrat_200ExtraLight",
    text300: "Montserrat_300Light",
    text400: "Montserrat_400Regular",
    text500: "Montserrat_500Medium",
    text600: "Montserrat_600SemiBold",
    text700: "Montserrat_700Bold",
    text800: "Montserrat_800ExtraBold",
    text900: "Montserrat_900Black",
  },

  spacing: {
    small: 8,
    regular: 16,
    large: 24,
  },
};
