"use strict";

import { characteristics } from "../description-characteristics.js";
import "./evaluated.js";


class table extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.semimajorAxis = "semimajorAxis";
    this.perihelion = "perihelion";
    this.aphelion = "aphelion";
    this.eccentricity = "eccentricity";
    this.inclination = "inclination";
    this.density = "density";
    this.gravity = "gravity";
    this.meanRadius = "meanRadius";
    this.equaRadius = "equaRadius";
    this.polarRadius = "polarRadius";
    this.flattening = "flattening";
    this.escape = "escape";
    this.sideralOrbit = "sideralOrbit";
    this.sideralRotation = "sideralRotation";
    this.avgTemp = "avgTemp";
    this.axialTilt = "axialTilt";
  }

  static get observedAttributes() {
    return [
      "semimajoraxis",
      "perihelion",
      "aphelion",
      "eccentricity",
      "inclination",
      "density",
      "gravity",
      "meanradius",
      "equaradius",
      "polarradius",
      "flattening",
      "escape",
      "sideralorbit",
      "sideralrotation",
      "avgtemp",
      "axialtilt",
    ];
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue;
  }

  connectedCallback() {
    this.shadow.appendChild(this.component());
    this.shadow.appendChild(this.styles());
  }

  styles() {
    const css = document.createElement("style");
    css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        a{
            text-decoration: none;
            color: inherit;
        }

        .content-planet-information {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 85px 100px;
            color: var(--primary-color);
        }

        .content-title-information {
            height: 70px;
            width: 80vw;
            border-bottom: 2px solid var(--primary-color);
            display: flex;
            justify-content: space-between;
        }
        
        .title-information {
            font-family: 'Anton', sans-serif;
            font-size: 1.7rem;
            text-transform: uppercase;
            padding-right: 60px;
        }
        `;

    return css;
  }

  component() {
    const contentAll = document.createElement("div");
    contentAll.classList.add("content-planet-information");

    const contentTitle = document.createElement("div");
    contentTitle.classList.add("content-title-information");

    const titleInformation = document.createElement("span");
    titleInformation.classList.add("title-information");
    titleInformation.textContent = "Characteristics";

    const titleInformation2 = document.createElement("span");
    titleInformation2.classList.add("title-information");
    titleInformation2.textContent = "Result";

    contentTitle.append(titleInformation, titleInformation2);
    contentAll.append(contentTitle);

    const semimajorAxis = document.createElement('evaluated-teste')
    semimajorAxis.setAttribute('parameter', characteristics[0].name)
    semimajorAxis.setAttribute('description', characteristics[0].description)
    semimajorAxis.setAttribute('result', this.semimajoraxis)

    const perihelion = document.createElement('evaluated-teste')
    perihelion.setAttribute('result', this.perihelion)
    perihelion.setAttribute('parameter', characteristics[1].name)
    perihelion.setAttribute('description', characteristics[1].description)

    const aphelion = document.createElement('evaluated-teste')
    aphelion.setAttribute('result', this.aphelion)
    aphelion.setAttribute('parameter', characteristics[2].name)
    aphelion.setAttribute('description', characteristics[2].description)

    const eccentricity = document.createElement('evaluated-teste')
    eccentricity.setAttribute('result', this.eccentricity)
    eccentricity.setAttribute('parameter', characteristics[3].name)
    eccentricity.setAttribute('description', characteristics[3].description)

    const inclination = document.createElement('evaluated-teste')
    inclination.setAttribute('result', this.inclination)
    inclination.setAttribute('parameter', characteristics[4].name)
    inclination.setAttribute('description', characteristics[4].description)

    const density = document.createElement('evaluated-teste')
    density.setAttribute('result', this.density)
    density.setAttribute('parameter', characteristics[5].name)
    density.setAttribute('description', characteristics[5].description)

    const gravity = document.createElement('evaluated-teste')
    gravity.setAttribute('result', this.gravity)
    gravity.setAttribute('parameter', characteristics[6].name)
    gravity.setAttribute('description', characteristics[6].description)

    const meanRadius = document.createElement('evaluated-teste')
    meanRadius.setAttribute('result', this.meanradius)
    meanRadius.setAttribute('parameter', characteristics[7].name)
    meanRadius.setAttribute('description', characteristics[7].description)

    const equaRadius = document.createElement('evaluated-teste')
    equaRadius.setAttribute('result', this.equaradius)
    equaRadius.setAttribute('parameter', characteristics[8].name)
    equaRadius.setAttribute('description', characteristics[8].description)

    const polarRadius = document.createElement('evaluated-teste')
    polarRadius.setAttribute('result', this.polarradius)
    polarRadius.setAttribute('parameter', characteristics[9].name)
    polarRadius.setAttribute('description', characteristics[9].description)

    const flattening = document.createElement('evaluated-teste')
    flattening.setAttribute('result', this.flattening)
    flattening.setAttribute('parameter', characteristics[10].name)
    flattening.setAttribute('description', characteristics[10].description)

    const escape = document.createElement('evaluated-teste')
    escape.setAttribute('result', this.escape)
    escape.setAttribute('parameter', characteristics[11].name)
    escape.setAttribute('description', characteristics[11].description)

    const sideralOrbit = document.createElement('evaluated-teste')
    sideralOrbit.setAttribute('result', this.sideralorbit)
    sideralOrbit.setAttribute('parameter', characteristics[12].name)
    sideralOrbit.setAttribute('description', characteristics[12].description)

    const sideralRotation = document.createElement('evaluated-teste')
    sideralRotation.setAttribute('result', this.sideralrotation)
    sideralRotation.setAttribute('parameter', characteristics[13].name)
    sideralRotation.setAttribute('description', characteristics[13].description)

    const avgTemp = document.createElement('evaluated-teste')
    avgTemp.setAttribute('result', this.avgtemp)
    avgTemp.setAttribute('parameter', characteristics[14].name)
    avgTemp.setAttribute('description', characteristics[14].description)

    const axialTilt = document.createElement('evaluated-teste')
    axialTilt.setAttribute('result', this.axialtilt)
    axialTilt.setAttribute('parameter', characteristics[15].name)
    axialTilt.setAttribute('description', characteristics[15].description)

    contentAll.append
      (
        semimajorAxis,
        perihelion,
        aphelion,
        eccentricity,
        inclination,
        density,
        gravity,
        meanRadius,
        equaRadius,
        polarRadius,
        flattening,
        escape,
        sideralOrbit,
        sideralRotation,
        avgTemp,
        axialTilt
      );

    return contentAll;
  }
}

customElements.define("table-infos", table);
