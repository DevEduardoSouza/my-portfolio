export const data = {
  name: "Eduardo de Souza",
  profession: "desenvolvedor full stack",
  residence: "Brasil",
  state: "Bahia",
  age: "22",
  languages: [
    "javascript",
    "react",
    "typescript",
    "html5",
    "css3",
    "nodejs",
    "java",
    "c",
    "spring",
    "mongodb",
    "mysql",
    "postgresql",
    "express",
  ],
  secondaryStack: ["Bootstrap", "GIT e GITHUB", "Responsividade"],
  projects: [
    {
      title: "Landing Page do Apple Watch",
      description: "Este repositório contém um projeto de uma landing page para um Apple Watch fictício, desenvolvido para fins educativos. Utilizando HTML, CSS e JavaScript, ",
      languages: ["html5", "css3", "javascript"],
      category: "front-end",
      imgs: [
        "https://raw.githubusercontent.com/DevEduardoSouza/apple-watch-landing-page/main/img/img_projeto.png",
        "portfolio-img2.jpg",
        "portfolio-img3.jpg",
      ],
      links: {
          deploy: "https://landing-page-apple-watch.netlify.app/",
          github: "https://github.com/DevEduardoSouza/apple-watch-landing-page",
        },
    },
    {
      title: "Rachi",
      description:
        "O site de venda de planos é um projeto de estudo que tem como objetivo familiarizar-se com as tecnologias HTML, CSS e JS",
      languages: ["html5", "css3", "javascript"],
      category: "front-end",
      imgs: [
        "https://github.com/DevEduardoSouza/rachi/raw/main/image/imgs-projeto/screencapture-rachi-projeto-netlify-app-2023-12-desktop.png",
        "task-manager-img2.jpg",
        "task-manager-img3.jpg",
      ],
      links: [
        {
          deploy: "https://deveduardosouza.github.io/rachi/",
          github: "https://github.com/DevEduardoSouza/rachi",
        },
      ],
    },
  ],
  statistics: [
    { name: "Projetos Concluídos", value: 29, icon: "bi bi-trophy" },
    { name: "Projetos em andamento", value: 11, icon: "bi bi-arrow-clockwise" },
    { name: "Tecnologias Aprendidas", value: 10, icon: "bi bi-book" },
    { name: "Freelances feitos", value: 2, icon: "bi bi-check2-circle" },
  ],
};
