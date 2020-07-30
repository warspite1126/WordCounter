"use strict";

const textArea = document.querySelector("#textArea");
const words = document.querySelector("#words");
const characters = document.querySelector("#characters");

const textColourChanger = document.querySelector("#textColourChanger");

const fontSizeSlider = document.querySelector("#fontSizeSlider");
const fontSizer = document.querySelector("#fontSizer");

const count = () => {
  const text = textArea.value;

  const textAreaCharacters = text.replace(/\s/g, "");

  const textAreaWords = text
    .split(/\s+/)
    .filter((e) => e.match(/^[a-zA-Z\d]+$/));

  console.log(textAreaWords);

  words.value = textAreaWords.length;
  characters.value = textAreaCharacters.length;
};

const changeTextColour = (e) => {
  textArea.style.color = e.target.value;
};

const changefontSizer = (e) => {
  textArea.style.fontSize = `${e.target.value}px`;
  fontSizeSlider.value = e.target.value;
  fontSizer.value = e.target.value;
};

textArea.oninput = count;

textColourChanger.addEventListener("input", changeTextColour);

fontSizeSlider.addEventListener("input", changefontSizer);
fontSizer.addEventListener("input", changefontSizer);
