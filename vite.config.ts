import { defineConfig } from 'vite'

export default defineConfig({
  envPrefix: ['REACT_'],
  plugins: [
    {
      name: 'node-polyfills',
      apply: 'build',
      transform(code, id) {
        if (/\.ts$/.test(id)) {
          return `
            import '@babel/preset-env/node';
            ${code}
          `;
        }
      },
    },
  ],
})
