/**
 * Um objeto utilitário para manipulação de elementos HTML.
 * @namespace
 * @description Este objeto fornece métodos para interagir com elementos HTML de forma simplificada.
 */
export const html = {
  get(selector) {
    return document.querySelector(selector);
  },
  getAll(selector) {
    return document.querySelectorAll(selector);
  },
  create(element) {
    return document.createElement(element);
  },
  createElementWithClasses(element, ...classes) {
    if (!element) return null;

    const elementWithClasses = html.create(element);
    if (classes.length > 0) {
      elementWithClasses.classList.add(...classes);
    }

    return elementWithClasses;
  },
  handleToggle: (element) => {
    element.classList.toggle("hide");
  },
  message: ({ text, icon }) => {
    if (!text || !icon) {
      return;
    }
    const message = html.createElementWithClasses("div", "message");
    message.style.textAlign = "center";
    message.style.margin = "auto";

    const iconMsg = html.createElementWithClasses("div", "icon");
    iconMsg.style.fontSize = "2rem";
    iconMsg.innerHTML = icon;

    const textMsg = html.createElementWithClasses("div", "text");
    iconMsg.style.fontSize = "2rem";
    textMsg.innerHTML = text;

    [iconMsg, textMsg].forEach((e) => message.appendChild(e));

    return message;
  },
};
