import React from 'react';
import SafeWebView from '../components/SafeWebView';

export default function Expo() {
  return (
    <SafeWebView
      url="https://expo.dev"
      dominioPermitido="expo.dev"
      javascript={true}
    />
  );
}