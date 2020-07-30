"use strict";

const textArea = document.getElementById("textArea");
const words = document.getElementById("words");
const characters = document.getElementById("characters");

const textColourChanger = document.getElementById("textColourChanger");

const fontSizeSlider = document.getElementById("fontSizeSlider");
const fontSizer = document.getElementById("fontSizer")


const count = () => {
  const text = textArea.value;

  const textAreaCharacters = text.replace(/\s/g, "");

  const textAreaWords = text.split(/\s+/).filter((e) => e);

  words.value = textAreaWords.length;
  characters.value = textAreaCharacters.length;
};

const changeTextColour = (e) => {
  textArea.style.color = e.target.value;
}

const changefontSizer = (e) => {
  textArea.style.fontSize = `${e.target.value}px`;
  fontSizeSlider.value = e.target.value;
  fontSizer.value = e.target.value;
};

textArea.oninput = count;

textColourChanger.addEventListener("input", changeTextColour)

fontSizeSlider.addEventListener("input", changefontSizer);
fontSizer.addEventListener("input", changefontSizer);