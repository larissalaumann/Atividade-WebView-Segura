import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        WebView Segura
      </Text>

      <Text style={styles.text}>
        Escolha uma página no menu lateral.
      </Text>

      <Text style={styles.text}>
        As páginas possuem controle de domínio,
        navegação externa e JavaScript.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});