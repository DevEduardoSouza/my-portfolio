import { card } from "./components/card/card.js";
import { html } from "./util/util.js";

const btnTogglePersonDetails = html.get(".btn-toggle");
const personDetails = html.get(".person-details");

btnTogglePersonDetails.addEventListener("click", () => {
  html.handleToggle(personDetails);
});

// fillProfile
const data = {
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
};

function fillProfile(data) {
  const name = (html.get(".name").innerHTML = data.name);
  const profession = (html.get(".profession").innerHTML = data.profession);
  const residence = (html.get(".residence .value").innerHTML = data.residence);
  const state = (html.get(".state .value").innerHTML = data.state);
  const age = (html.get(".age .value").innerHTML = data.age);

  
  // languages
  const languagesList = html.get(".list-languages");
  data.languages.forEach((language) => {
    languagesList.innerHTML += `<i title="${language}" class="devicon-${language}-plain colored"></i>`;
  });


  // secondaryStack
  const stacksList = html.get(".list-stacks ul");
  data.secondaryStack.forEach((stack) => {
    stacksList.innerHTML += `
    <li class="stack">
        <i class="bi bi-patch-check-fill"></i>
        <span>${stack}</span>
    </li>`;
  });
}
fillProfile(data);
