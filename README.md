# Instalando os pacotes do tailwind

npm install -D tailwindcss postcss autoprefixer

# criando os arquivos de configuração do tailwind

npx tailwindcss init -p

# colocando as configuranções de content no tailwind.config

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  # colocando as dependencias de estilização do tailwind no index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# extensão para utilizar as classe do tailwind

Tailwind CSS IntelliSense
