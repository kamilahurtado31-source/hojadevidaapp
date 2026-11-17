
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>
          Mis Hobbies
        </Text>

        <Text style={estilos.subtitulo}>
          Actividades que disfruto realizar en mi tiempo libre.
        </Text>
      </View>

      <TarjetaHobby
        nombre="Maquillaje"
        descripcion="Me encanta conoccer nuevas lineas de maquillaje."
        detalle="Me gusta mucho maquillarme y verme linda."
        icono="💄"
      />

      <TarjetaHobby
        nombre="Peliculas"
        descripcion="Ver peliculas en mi tiempo libre."
        detalle="me gusta ver nuevas peliculas cada dia y acompañada de palomitas."
        icono="🎬"
      />

      <TarjetaHobby
        nombre="Música"
        descripcion="escuchar musica todo el tiempo."
        detalle="La música es una de las cosas que mas me gustan por que me distrae."
        icono="🎶"
      />
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
  encabezado: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#475569',
  },
});
