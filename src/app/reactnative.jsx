import React from 'react';
import SafeWebView from '../components/SafeWebView';

export default function ReactNative() {
  return (
    <SafeWebView
      url="https://reactnative.dev"
      dominioPermitido="reactnative.dev"
      // Ativado para permitir o funcionamento dos
    // recursos dinâmicos do site.
      javascript={true}
    />
  );
}