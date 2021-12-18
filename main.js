"use strict"



const CALC_NUM = document.querySelectorAll(".calc__num");
const DISPLAY = document.querySelector(".calc__display");
const ACTIONS_RADIO = document.querySelectorAll("input[name=calc__actions-radio]");
const RESET_BTN = document.querySelector(".calc__reset-btn")
const EQUAL_BTN = document.querySelector(".calc__equal-btn");
const BACKSPACE = document.querySelector(".calc__backspace");
const MULTIPLY_BTN = document.querySelector(".calc__multiply-radio");
const DIVISION_BTN = document.querySelector(".calc__division-radio");
const PERCENTAGE_BTN = document.querySelector(".calc__percentage-radio");


let count = 0;
let actions_stat = null;


for (let i=0; i<CALC_NUM.length; ++i) {
  CALC_NUM[i].onclick = () => {
    if (DISPLAY.innerText == "0" && CALC_NUM[i].innerText != ".") {
      DISPLAY.innerText = CALC_NUM[i].innerText;
    } else if (DISPLAY.innerText.indexOf('.') < 0 || CALC_NUM[i].innerText != ".") {
      DISPLAY.innerText += CALC_NUM[i].innerText;
    }
    
    for (let ar=0; ar<ACTIONS_RADIO.length; ++ar) {
      ACTIONS_RADIO[ar].checked = false;
    }
  }
}


for (let i=0; i<ACTIONS_RADIO.length; ++i) {
  ACTIONS_RADIO[i].onclick = () => {
    if (DISPLAY.innerText == 0) {
      ACTIONS_RADIO[i].checked = false;
    } else {
      if (actions_stat == null) {
        count = Number(DISPLAY.innerText);
        DISPLAY.innerHTML = 0;
        actions_stat = i;
      } else if (actions_stat == 0) {
        count = count / 100 * Number(DISPLAY.innerText);
        DISPLAY.innerHTML = 0;
        actions_stat = i;
      } else if (actions_stat == 1) {
        count /= Number(DISPLAY.innerText);
        DISPLAY.innerHTML = 0;
        actions_stat = i;
      } else if (actions_stat == 2) {
        count *= Number(DISPLAY.innerText);
        DISPLAY.innerHTML = 0;
        actions_stat = i;
      } else if (actions_stat == 3) {
        count -= Number(DISPLAY.innerText);
        DISPLAY.innerHTML = 0;
        actions_stat = i;
      } else if (actions_stat == 4) {
        count += Number(DISPLAY.innerText);
        DISPLAY.innerHTML = 0;
        actions_stat = i;
      }
    }
  }
};


RESET_BTN.onclick = () => {
  count = 0;
  actions_stat = null;
  DISPLAY.innerHTML = 0;
  
  for (let i=0; i<ACTIONS_RADIO.length; ++i) {
    ACTIONS_RADIO[i].checked = false;
  }
};


EQUAL_BTN.onclick = () => {
  if (actions_stat === 0) {
    count = count / 100 * Number(DISPLAY.innerText);
    DISPLAY.innerHTML = count;
    count = 0;
  } else if (actions_stat === 1) {
    count /= Number(DISPLAY.innerText);
    DISPLAY.innerHTML = count;
    count = 0;
  } else if (actions_stat === 2) {
    count *= Number(DISPLAY.innerText);
    DISPLAY.innerHTML = count;
    count = 0;
  } else if (actions_stat === 3) {
    count -= Number(DISPLAY.innerText);
    DISPLAY.innerHTML = count;
    count = 0;
  } else if (actions_stat === 4) {
    count += Number(DISPLAY.innerText);
    DISPLAY.innerHTML = count;
    count = 0;
  }
  
  actions_stat = null;
  
  for (let i=0; i<ACTIONS_RADIO.length; ++i) {
    ACTIONS_RADIO[i].checked = false;
  }
};


BACKSPACE.onclick = () => {
  if (DISPLAY.innerText.length == 1) {
    DISPLAY.innerHTML = 0;
  } else if (DISPLAY.innerText.length === 2 && DISPLAY.innerHTML[0] == "-") {
    DISPLAY.innerHTML = 0;
  } else {
    DISPLAY.innerHTML = DISPLAY.innerText.substr(0, DISPLAY.innerHTML.length - 1);
  }
};