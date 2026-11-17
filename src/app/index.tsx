
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MiBoton from '../components/MiBoton';

const mostrarAlerta = (titulo: string, mensaje: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function Inicio() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.avatarContenedor}>
        <Ionicons
          name="person-circle"
          size={100}
          color="#eb25c7"
        />

        <Text style={estilos.nombre}>
          Kamila Pinzon Hurtado
        </Text>

        <Text style={estilos.profesion}>
          Aprendiz de Análisis y Desarrollo de Software (ADSO)
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>
          Perfil Profesional
        </Text>

        <Text style={estilos.parrafo}>
          desarrolladora en formacion
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#ff1100"
          onPress={() =>
            Alert.alert(
              'Contacto',
              'Correo: kamilahurtado31@gmail.com'
            )
          }
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#189c49"
          onPress={() =>
            Alert.alert(
              'Contacto',
              'Teléfono: 3138808146'
            )
          }
        />

        <MiBoton
          textoBoton="Repositorio Git"
          nombreIcono="logo-github"
          colorBoton="#460053"
          onPress={() =>
            Alert.alert(
              'Repositorio Git',
              'Aquí puedes consultar mis proyectos y trabajos de programación. https://github.com/kamilahurtado31-source/hojadevidaapp.git'
            )
          }
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contenido: {
    padding: 20,
  },
  avatarContenedor: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 8,
    textAlign: 'center',
  },
  profesion: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  seccion: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  parrafo: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
