# Posto Certo

Somos o **Grupo 78 da Restic36**, desenvolvendo uma solução para o **Desafio 9: Participação Cidadã e Transparência**. Nosso objetivo é criar o *Posto Certo*: uma plataforma de **Gestão Participativa e Controle Social no SUS**.

## Objetivo

O projeto visa:
- Aumentar a participação cidadã.
- Melhorar a transparência no setor de saúde pública municipal.
- Facilitar o acesso a informações atualizadas sobre unidades de saúde.
- Permitir o envio de dúvidas e relatos para promover melhorias nos serviços de saúde.

---

## 🛠 Instalação

### 1. Clone o repositório:
```bash
git clone https://github.com/AllyssonCidade/posto_certo/


###2. Instale as dependências e inicie o projeto:
```bash
cd posto_certo
npm install
npx expo start

Nota: Utilize o aplicativo Expo Go para escanear o QR Code que será exibido (compatível com a SDK 51).


⚙️ Configurando o .env
Para utilizar as funcionalidades completas de mapa:

Crie um arquivo chamado .env na raiz do projeto.

Adicione sua chave de API do Google Maps:
```bash
API_KEY_FAKE=YOUR_GOOGLE_API_KEY

Nota: A chave original foi removida devido a custos financeiros


Funcionalidades Disponíveis
🏠 Home
Relatos: Compartilhe relatos pessoais de visitas ou consultas em unidades de saúde (públicas ou privadas).

Unidades de Saúde Próximas: Visualize unidades próximas e selecione uma delas para acessar informações detalhadas.

📢 Feed
Exiba relatos de outros usuários em tempo real.

Faça avaliações com estrelas para validar relatos (quanto mais estrelas, maior visibilidade para gestores públicos).

👤 Perfil
Edite suas informações pessoais.

Faça logout do aplicativo.

📝 Fazer um Relato
Preencha informações básicas para criar um relato.

Dados como a localização da unidade podem ser preenchidos manualmente nesta versão do MVP.

⚠️ Observações
Algumas funcionalidades estão desativadas nesta versão MVP e aparecem como estáticas.

O login automático é habilitado: ao inserir um e-mail e senha na tela de login, um usuário é gerado automaticamente para facilitar o acesso.

🛠 Tecnologias Utilizadas
React Native

Expo

Firebase

Styled Components

👥 Equipe
Allysson Cidade

Letícia Mayni

Caio Cavalcante

Thales Henrique

Henrique

Thassio

Douglas Caique

Esther Pereira

Sabrina Raiol

Emily Andrade

