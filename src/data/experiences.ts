export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Schneider Electrics",
    period: "2023 - Present",
    achievements: [
      "Resources: hexagonal architecture, TDD, Nodejs, Svelte, CQRS, AWS",
      "Languages: Python , JS",
    ],
  },
  {
    title: "Backend Developer",
    company: "Exoticca",
    period: "2020 - 2023",
    achievements: [
      "Resources: Symfony, RabbitMQ, hexagonal architecture, TDD, Nodejs, React, CQRS",
      "Languages: PHP , JS",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Oh my brand",
    period: "2019 - 2020",
    achievements: [
      "Resources: Laravel ( Aiemos ), vue.js ( vuestorefront ), ElasticSearch, Express, NodeJS, ElementIO, SASS, Bootstrap.",
      "Languages : PHP, JS",
      "Others: API REST, MYSQL, SQL, Docker, Jenkins, Jira, Git, Laravel Forge, Docker, Kubernetes, GoogleCloud, Flux",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "IQVIA",
    period: "2017 - 2019",
    achievements: [
      "Resources : Zend Framework, LAMP, Silex, Laravel, Angular, Jquery, Bootstrap, Foundation, SASS, LESS",
      "Languages : PHP, JS, .NET",
      "Others: SOAP, API REST, MYSQL, SQL, RabbitMQ,Docker,Jenkins,Jira,Git",
    ],
  },
  {
    title: "Full Stack Developer",
    company:
      "Acadèmia de Ciències Mèdiques i de la Salut de Catalunya i de Balears",
    period: "2016 - 2017",
    achievements: [
      "Resources : Laravel, Jquery, Bootstrap",
      "Languages : PHP, JS",
    ],
  },
  {
    title: "Sysadmin",
    company: "Escola Pia Granollers",
    period: "2015 - 2016",
    achievements: [
      "Firewall Sonicwall, Maintenance of computer equipment (hardware, software), GMS monitoring, Google Apps, Control of servers and services.",
    ],
  },
];
