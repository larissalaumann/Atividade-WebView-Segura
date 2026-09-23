import React from 'react';
import SafeWebView from '../components/SafeWebView';

export default function IFPR() {
  return (
    <SafeWebView
      url="https://www.ifpr.edu.br"
      dominioPermitido="www.ifpr.edu.br"
        // Ativado para permitir o funcionamento dos
        // recursos dinâmicos do site.
      javascript={true}
    />
  );
}