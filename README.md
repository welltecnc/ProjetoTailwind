# site para acessar a documentação do tailwind

https://tailwindcss.com/

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


# Colocar o cdn no index.html
  <!--script com a conexão com o servidor tailwind-->
    <script src="https://cdn.tailwindcss.com"></script>

# Provedor de hospedagem de projetos React

https://www.netlify.com

# para fazer o deploy é preciso subur o projeto para o github e conectar o netlify com seu github e importar o repositório

