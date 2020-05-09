<template>
  <div>
    <svg
      class="svg-text"
      width="1rem"
      height="20rem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="drop-stroke-shadow">
          <fegaussianblur in="SourceAlpha" stddeviation="10"></fegaussianblur>
        </filter>
        <symbol id="stroke">
          <text
            x="50%"
            y="37%"
            fill="none"
            stroke-width=".035em"
            stroke-linecap="round"
            stroke-linejoin="round"
            paint-order="stroke fill"
            text-anchor="middle"
          >
            Happy Birthday
          </text>
          <text
            x="50%"
            y="80%"
            fill="none"
            stroke-width=".035em"
            stroke-linecap="round"
            stroke-linejoin="round"
            paint-order="stroke fill"
            text-anchor="middle"
          >
            my baby
          </text>
        </symbol>
        <symbol id="fill">
          <text x="50%" y="30%" text-anchor="middle">Happy Birthday</text>
          <text x="50%" y="73%" text-anchor="middle">my baby</text>
        </symbol>
      </defs>
      <g class="svg-text__shaded__stroke" stroke="#00cccc">
        <use
          y="5%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#stroke"
          opacity="0.5"
          filter="url(#drop-stroke-shadow)"
        ></use>
        <use
          y="3%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#stroke"
        ></use>
        <use
          y="2%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#stroke"
        ></use>
        <use
          y="1%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#stroke"
        ></use>
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#stroke"
          stroke="cyan"
        ></use>
      </g>
      <g fill="#e6e6e6">
        <use
          class="svg-text__shaded"
          y="7%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="6.5%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="6%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="5.5%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="5%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="4.5%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="4%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
        ></use>
        <use
          y="3.5%"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#fill"
          fill="white"
        ></use>
      </g>
    </svg>
  </div>
</template>
