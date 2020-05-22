import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
  Text,
} from "react-native";
import MapView from "react-native-maps";
import * as Permisions from "expo-permissions";
import * as Location from "expo-location";
import SearchBar from "../commons/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import * as courseAction from "../../store/actions/course";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const { courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const result = await Permisions.askAsync(Permisions.LOCATION);
        if (!result.granted) {
          Alert.alert("Not Granted", [{ txt: "Okay" }]);
        } else {
          const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
          });
          setLocation(location);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleChangeText = (value) => {
    // setLocation(value);
    dispatch(
      courseAction.getCourses({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    );
    //filter course by course type
  };
  return (
    <View style={styles.root}>
      {location ? (
        <MapView
          style={{
            height: Dimensions.get("screen").height,
            width: Dimensions.get("window").width,
          }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <View style={styles.inputBar}>
            <SearchBar
              LeftIcon="ios-search"
              placeholder="Busca una clase"
              onChangeText={handleChangeText}
            />
            {courses.map((curso) => {
              return (
                <Text style={{ color: "black", fontSize: 30 }}>
                  {curso.DataClase.CategoriaClase.Nombre} -
                  {curso.DataProfesor.Nombre}
                </Text>
              );
            })}
          </View>
        </MapView>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputBar: {
    paddingTop: 50,
  },
});

export default HomeScreen;
