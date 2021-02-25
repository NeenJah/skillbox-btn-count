const START_VALUE = 0,
      BTN_CLASS_NAME = `btn-count`;

/*const btnCount = document.createElement(`button`);

btnCount.classList.add(`btn-count`);
btnCount.textContent = 0;*/

function onIncValueBtnClick() {
  let value = +this.textContent;

  this.textContent = ++value;
};

/*btnCount.addEventListener(`click`, onIncValueBtnClick);

export {btnCount};*/

/*export default*/ class ButtonCounter {

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

const btn = new ButtonCounter();
btn.render(`header`);