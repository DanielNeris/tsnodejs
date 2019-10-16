const posts = [
  {
    id: 1,
    title: "GoBarber",
    description: `Aplicação de agendamento de serviços com cabelereiros, suporta login e cadastro de usuários, envio de notificações por e-mail,
    seleção de datas e dias, assim como página de perfil, envio de formulários e mais.
    É construída com o padração MVC, contém toda a parte de CRUD de usuário e Agendamentos.  

    `,
    techs: "express - redux - styled-components - react-navigation",
    image: "https://i.ibb.co/D8g6DW1/GoBarber.jpg",
    code: "https://github.com/juliomerisio/GoBarber-FullStack",
    look: "https://www.juliomerisio.com"
  },
  {
    id: 2,
    title: "Rocketshoes",
    description: `Aplicação que simula um e-commerce, tem por objetivo fixar os conceitos de redux com redux saga, onde possibilita
    o compartilhamento de estado entre components. Utiliiza React Router Dom para tratativa das rotas e Styled Components na estilização`,
    techs: "styled-components - redux - react router dom",
    image: "https://i.ibb.co/R3mTszr/rocketshoes.jpg",
    code: "https://github.com/juliomerisio/Rocketshoes-Redux",
    look: "https://www.juliomerisio.com"
  },
  {
    id: 4,
    title: "AirCnC",
    description: `Aplicação desenvolvida durante a nona semana OmniStack ministrada pela RocketSeat, tem por objetivo evidenciar
     o potencial da Stack Node, React e React Native. Com ela é possível cadastrar locais disponíveis para locação, bem como solicitar
     a alocação do mesmo. Tudo em tempo real graças ao socket.io.
    `,
    techs: "express - socket.io - react-navigation",
    image: "https://i.ibb.co/F61DLZr/aircnc.jpg",
    code: "https://github.com/juliomerisio/AirCnC-FullStack",
    look: "https://www.juliomerisio.com"
  },
  {
    id: 3,
    title: "Rocketfy",
    description: `Projeto baseado no pipefy, utilizado para fins de estudo a cerca da funcionalidade de Drag and Drop`,
    techs: "react-dnd - react - styled-components",
    image: "https://i.ibb.co/ZKbjJRh/rocketfy.jpg",
    code: "https://github.com/juliomerisio/Rocketfy-DragDrop",
    look: "https://rocketfy.netlify.com/"
  }
];

export default posts;
