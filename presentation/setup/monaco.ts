import dark from 'theme-vitesse/themes/vitesse-dark.json';
import { defineMonacoSetup } from '@slidev/types';
import light from 'theme-vitesse/themes/vitesse-light.json';

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any);
  monaco.editor.defineTheme('vitesse-dark', dark as any);
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.React,
  });

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  };
});
