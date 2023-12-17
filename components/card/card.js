import { html } from "../../util/util.js";

export function card(props) {
  if (!props) return "Error: Sem arqumentos";
  // Card Container
  const cardContainer = html.createElementWithClasses("div", "card-container");

  // Card Category
  const cardCategory = html.createElementWithClasses("div", "card-category");
  cardCategory.textContent = props.category;

  // Card Imgs
  const cardImgs = html.createElementWithClasses("div", "card-imgs");
  const carousel = html.createElementWithClasses("div", "carousel");

  const imgCarousel = html.createElementWithClasses("img", "img-carousel");
  imgCarousel.src = props.imgs[0];
  imgCarousel.alt = props.title;

  carousel.appendChild(imgCarousel);
  cardImgs.appendChild(carousel);

  // Card Details
  const cardDetails = html.createElementWithClasses("div", "card-details");

  const cardTitle = html.createElementWithClasses("div", "card-title");
  cardTitle.innerHTML = `<h3>${props.title}</h3>`;

  const cardDescription = html.createElementWithClasses(
    "div",
    "card-description"
  );
  cardDescription.innerHTML = `<p>${props.description}</p>`;

  const stackViewMore = html.createElementWithClasses(
    "div",
    "stack-view-more"
  );

  const stackContainer = html.createElementWithClasses(
    "div",
    "stack-container"
  );
  props.stacks.forEach((element) => {
    stackContainer.innerHTML += `<i title="${element}" class="devicon-${element}-plain colored"></i>`;
  });
  stackViewMore.appendChild(stackContainer);

  const btnViewMore = html.createElementWithClasses(
    "button",
    "btn",
    "btn-view-more"
  );
  btnViewMore.textContent = "Ver mais >";
  stackViewMore.appendChild(btnViewMore);

  // appendChild elements
  [cardTitle, cardDescription, stackViewMore].forEach((elements) => {
    cardDetails.appendChild(elements);
  });

  // appendChild elements
  [cardCategory, cardImgs, cardDetails].forEach((elements) => {
    cardContainer.appendChild(elements);
  });

  return cardContainer;
}
