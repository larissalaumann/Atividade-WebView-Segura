import React from 'react';
import { View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SafeWebView({
  url,
  dominioPermitido,
  javascript = false,
}) {
  const verificarURL = (request) => {
    const urlDestino = request.url;

    try {
      const destino = new URL(urlDestino);

      const permitido =
        destino.protocol === 'https:' &&
        (
          destino.hostname === dominioPermitido ||
          destino.hostname.endsWith('.' + dominioPermitido)
        );

      if (permitido) {
        return true;
      }

      Linking.openURL(urlDestino);

      return false;

    } catch {
      return false;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}

        originWhitelist={[`https://${dominioPermitido}`]}

        javaScriptEnabled={javascript}

        onShouldStartLoadWithRequest={verificarURL}

        style={{ flex: 1 }}
      />
    </View>
  );
}