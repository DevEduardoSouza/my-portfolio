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
function fillProjects(projects) {
  const containerProjects = html.get(".projects-content");
  containerProjects.innerHTML = "";

  projects.forEach((project) => {
    const newCard = card(project);

    containerProjects.appendChild(newCard);
  });
}
fillProjects(data.projects);

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

// filterProjects
function filterProjects(data) {
  const filters = html.getAll(".filter");

  filters.forEach((filter) => {
    filter.addEventListener("change", (e) => {
      const value = e.target.value;
      const valueClass = e.target.parentNode.getAttribute("class");
      const development = html.get("#development");
      const technologies = html.get("#technologies");
      let projectsFilter;

      // Lógica para limitar a busca a um só select
      if (valueClass.includes("technologies")) {
        projectsFilter = filterProjectsByProperty(
          data.projects,
          value,
          "languages"
        );
        development.value = "init";
      } else {
        projectsFilter = filterProjectsByProperty(
          data.projects,
          value,
          "category"
        );
        technologies.value = "init";
      }


      if (value === "init") {
        fillProjects(data.projects);
        return;
      }


      function filterProjectsByProperty(projects, value, property) {
        return projects.filter(function (project) {
          const propertyValue = project[property];
          return propertyValue.includes(value.toLocaleLowerCase());
        });
      }
      fillProjects(projectsFilter);

      
      if (projectsFilter.length === 0) {
        const projectsContent = html.get(".projects-content");

        const message = {
          text: `Ainda não estou envolvido em projetos que utilizem ${value}`,
          icon: `<i class="bi bi-chat-square"></i>`,
        };

        projectsContent.appendChild(html.message(message));
        return;
      }
    });
  });
}
filterProjects(data);
