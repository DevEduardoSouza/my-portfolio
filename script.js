import { card } from "./components/card/card.js";
import { html } from "./util/util.js";
import { data } from "./data/data.js";

const btnTogglePersonDetails = html.get(".btn-toggle");
const personDetails = html.get(".person-details");

btnTogglePersonDetails.addEventListener("click", () => {
  html.handleToggle(personDetails);
});

// fillProfile
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

// fillProjects
function fillProjects(data) {
  const containerProjects = html.get(".projects-content");

  data.projects.forEach((project) => {
    console.log(project);
    const newCard = card(project);

    containerProjects.appendChild(newCard);
  });
}
fillProjects(data);

// fillStatistics
function fillStatistics(data) {
  const containerStatistics = html.get(".person-statistics");

  data.statistics.forEach((statistic) => {
    containerStatistics.innerHTML += `
      <div>
          <i class="${statistic.icon}"></i>
          <div>
            <span class="number">${statistic.value}</span>
            <span>${statistic.name}</span>
          </div>
        </div>
    `;
  });
}
fillStatistics(data);


// Example filter

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
