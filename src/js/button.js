const START_VALUE = 0,
      BTN_CLASS_NAME = `btn-count`;

function onIncValueBtnClick() {
  let value = +this.textContent;

  this.textContent = ++value;
};

class ButtonCounter {

  constructor() {
    this.elem = document.createElement(`button`);
    this.elem.classList.add(BTN_CLASS_NAME);
    this.elem.textContent = START_VALUE;
    this.elem.addEventListener(`click`, onIncValueBtnClick);
  }
  
  render(selector) {
    document.querySelector(selector).append(this.elem);
  }

}

export {ButtonCounter};