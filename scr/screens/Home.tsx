import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useMemo, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  // Declaración de variables y métodos para modificar su valor inicial
  const [visibleModal, setVisibleModal] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [departmentSelected, setDepartmentSelected] = useState("");
  const [selectedIdRadioButton, setSelectedIdRadioButton] = useState("");

  const gender = useMemo(
    () => [
      {
        id: "1",
        label: "Femenino",
        value: "Femenino",
      },
      {
        id: "2",
        label: "Masculino",
        value: "Masculino",
      },
    ],
    []
  );

  // Método para mostrar u ocultar el modal
  const showModal = () => {
    setVisibleModal(!visibleModal);
    console.log(visibleModal);
  };

  // Hook de react que se ejecuta cuando se carga el componente
  useEffect(() => {
    fetchDepartments();
  }, []);

  // Método para obtener los departamentos de la API
  const fetchDepartments = async () => {
    try {
      const response = await fetch(
        "https://www.datos.gov.co/resource/xdk5-pm3f.json"
      );
      const data = await response.json();
      const departments = data.map(
        (item_department) => item_department.departamento
      );
      const uniqueDepartments = [...new Set(departments)];
      console.log(uniqueDepartments);
      setDepartments(uniqueDepartments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <View style={styles.circleButtonContainer}>
        <Pressable
          onPress={showModal}
          style={styles.circleButton}
        >
          <MaterialIcons
            name="add"
            size={24}
            color="black"
          />
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.modalTitle}>Registro</Text>
            <Pressable
              onPress={showModal}
              style={styles.closeModal}
            >
              <MaterialIcons
                name="close"
                size={18}
                color="black"
              />
            </Pressable>
          </View>
          <View style={styles.content}>
            <RadioGroup
              radioButtons={gender}
              selectedId={selectedIdRadioButton}
              onPress={(radioButtons) =>
                setSelectedIdRadioButton(radioButtons[0])
              }
            />
            <Text>Departamento:</Text>
            <Picker
              selectedValue={departmentSelected}
              onValueChange={(itemValue) => setDepartmentSelected(itemValue)}
            >
              {departments.map((department, item_department) => (
                <Picker.Item
                  key={item_department}
                  label={department}
                  value={department}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 80,
    height: 80,
    borderRadius: 42,
    marginHorizontal: 60,
    borderColor: "#ffd33d",
    padding: 3,
  },
  circleButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 42,
    flex: 1,
  },

  modalContent: {
    width: "100%",
    height: 500,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeModal: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },

  titleContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: 20,
  },
});
