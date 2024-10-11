
# Meu Boilerplate React Native

## Iniciando um Projeto

Para iniciar um projeto utilizando este boilerplate, siga os passos abaixo:

1. **Clone o repositório:**
   Use o comando abaixo para clonar o repositório do boilerplate:
   ```bash
   git clone https://github.com/AllyssonCidade/boilerplate-expo-app.git MeuProjeto
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd MeuProjeto
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```
   
4. **Crie seu primeiro Componente**
    ```bash
   npm run generate
   ```
5. **Substitua o nome do Componente na rota e faça a importação**
   vá até navigation > index.tsx.
    neste arquivo substitua onde está escrito MeuComponente pelo nome do seu primeiro componente(será ele renderizado inicialmente)
   em seguida faça a importação dele no topo da pagina onde estão as importações
   desta forma: 

   import NomeDoSeuComponent from '../components/NomeDoSeuComponent'
   
   Descreva qual o nome para ele que já será criada uma estrutura base para seu componente.

7. **Adicione seu componente a interfaces(este local voce deverá colocar as rotas de tabs do seu app e deve criar um novo para as stacks quando for usar):**
  Vá ate Navigation > interfaces
   e adicione o nome do seu componente na PropStackRouter da mesma forma que estão os exemplos no arquivo

8. **Substitua o nome do componente no index do navigation:**
   
          if (route.name === 'MeuComponente') {   
            iconName = 'circle' 
          } else if (route.name === 'Settings') {
            iconName = 'settings'
          } else {
            iconName = 'circle'
          }

9. **Inicie o Metro Bundler:**
   ```bash
   npx expo start
   ```

6. **Realize testes**
   ```bash
      npm run test
   ```
   é possível adicionar filtros e adicionais ao seu teste, verifique na documentação das biblitecas:
      https://jestjs.io/
      https://callstack.github.io/react-native-testing-library/


******** Observações *********
Desta forma estão sendo renderizados os componentes no lugar das screens, você deverá criar novas screens e adicionar os componentes a ela e em seguida adicionar essas screens no local onde etão sendo renderizados os componentes atuais no navigation: index e interfaces.

Você também deve se atentar a condição de estilização das tabs pois estão sendo adicionadas imagens vindas do Feater e é possível alteralas e adicionar tudo personalizado.
Veja:

   <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',    // cor da tab que está selecionada
        tabBarInactiveTintColor: 'gray',   // cor da tab inativa
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap   //tipagem do icone

          if (route.name === 'MeuComponente') {   // verifica se o nome da tab é MeuComponente ( troque pela sua screen)
            iconName = 'circle'   // caso tenha uma tab com aquele nome, deve ser mostrado um circulo que é um icone vindo do Feather
          } else if (route.name === 'Settings') {   // verifica se o nome da tab é Settings ( troque pela sua screen)
            iconName = 'settings'   // igual o caso do circulo só que deve ser mostrado uma engrenagem
          } else {
            iconName = 'circle'   // caso não seja nehuma das opções anteriores será mostrado um circulo.
          }

          return <Feather name={iconName} size={size} color={color} />   //É renderizado sua tab com o nome, tamanho e cor escolhidos
        },
        tabBarLabelStyle: {   //a seguir ficarão as estilizações da tab
          fontSize: 14,   //tamanho da fonte
          marginBottom: 5   //uma pequena margem para baixo
         //Adicione mais a sua preferência, assim como no CSS
        }
      })}
    >

## Estrutura de Pastas

Aqui está a estrutura de pastas do boilerplate:

```
app/
  └── (tabs)
       ├── __tests__
       |          └──  index.tsx
       └── index.tsx
assets
   └── (imagens estáticas, fontes, etc.)
coverage
   └── (arquivos de apoio para cobertura dos testes)
generators
   ├── templates
         └── Component.tsx.hbs
               ├── styles.ts.hbs
               └── test.tsx.hbs
   └── plopfile.js
src/
  ├── api
  ├── components
  ├── contexts
  ├── navigation
  |      ├── index.tsx
  |      └── interfaces.tsx
  ├── screens
  ├── styles
  ├── types
  └── utils
.eslintignore
.eslintrc.json
.gitignore
.prettierignore
.prettierrc.json
README.md
app.json
babel.config.js
eslint.config.mjs
package-lock.json
package.json
plopfile.js
teste-utils.js
tsconfig.json
```


### É isso. Você pode deve se atentar inicialmente a estrutura de rotas que será usada na sua aplicaçãp. Este boilerplate foi iniciado utilizando uma estrutura de tabs por questões de gosto pessoal (acho bem bonito e clean um app com tabs bem estruturadas).


## Contribuição

Sinta-se à vontade para contribuir com melhorias ou adições ao boilerplate. 

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
https://www.linkedin.com/in/allysson-cidade/
