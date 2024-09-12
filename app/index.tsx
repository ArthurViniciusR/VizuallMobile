import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../constants/Styles";
import { Link } from "expo-router"; // ou navigation se estiver usando react-navigation
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [blocos, setBlocos] = useState([]);

  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Igor-Gabriel-D/VIZUALL/78856b5b85fe96cafc6024495859386337d19ffc/db/salas.json');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados das salas');
        }
        const data = await response.json();
        setBlocos(data);
      } catch (error) {
        console.error('Erro ao buscar os dados das salas:', error);
      }
    };

    fetchSalas();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>VIZUALL</Text>
      </View>

      {blocos.map((bloco) => (
        <View key={bloco._id} style={styles.blocoContainer}>
          <View style={styles.blocoHeader}>
            <Text style={styles.blocoTitle}>{bloco.nome_bloco}</Text>
          </View>

          {bloco.bloco.salas.map((sala) => (
            <TouchableOpacity
              key={sala.sala_id}
              style={styles.sala}
              onPress={() => {
                // Navega para a tela da sala passando os parâmetros bloco_id e sala_id
                navigation.navigate('sala', { bloco: bloco._id, sala: sala.sala_id });
              }}
            >
              <Text style={styles.salaText}>{sala.nome_sala}</Text>
              <View style={styles.seta}>
                <Text style={styles.setaText}>{'>'}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};
