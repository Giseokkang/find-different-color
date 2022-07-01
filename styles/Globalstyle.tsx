import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset}
  * {
    outline: none;
    box-sizing: inherit;
  }

  html,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  span {
    color: inherit;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    box-sizing: border-box;
    display: block;
    margin: 0;
    padding: 0;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  html {
    font-size: 16px;
    /** for IE */
    -ms-overflox-style: none;
  }

  body {
    font-family: Noto Sans, Noto Sans KR, sans-serif;
    box-sizing: border-box;
    min-width: 1440px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    vertical-align: baseline;

    &.opened-popup {
      overflow: hidden;
    }
  }

  pre {
    font: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #17a1ff;
  }

  b {
    font-weight: 700;
  }
  input,
  button,
  textarea {
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
  /** ie input x버튼 삭제 */
  input::-ms-clear {
    display: none;
  }

  input[type="checkbox"] + input {
    display: none;
  }

  button,
  select {
    cursor: pointer;
  }

  .required-mark {
    color: red;
    margin-left: 2px;
  }

  .hidden-title {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    background-color: transparent;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
`;

const reactSlickStyle = css`
  /* Slider */
  .slick-slider {
    position: relative;

    height: 100%;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    height: 100%;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    margin: 0;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    font-size: 0;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;

    li {
      position: relative;
      display: inline-block;
      margin: 0 2px;
      padding: 0;
      text-align: center;
      vertical-align: top;
      button {
        display: block;
        height: 7px;
        width: 7px;
        padding: 0;
        font-size: 0;
        border: 0;
        opacity: 0.25;
        outline: none;
        cursor: pointer;
        background-color: #003843;
        transition: all 0.5s;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .slick-active {
      button {
        opacity: 1;
      }
    }
  }
  .bt8 {
    bottom: 8px;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
    ${reactSlickStyle}
`;

export default GlobalStyle;
