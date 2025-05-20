import Accordion from '@preline/accordion';
import Collapse from '@preline/collapse';

// import Dropdown from '@preline/dropdown';
// import Overlay from '@preline/overlay';

interface IHTMLElementPopper extends HTMLElement {
  _popper: any;
}

document.addEventListener('DOMContentLoaded', () => {
  // document.querySelectorAll('[data-hs-dropdown]').forEach((el) => {
  //   new Dropdown(el as IHTMLElementPopper);
  // });
  document.querySelectorAll('[data-hs-collapse]').forEach(el => {
    new Collapse(el as HTMLElement);
  });

  document.querySelectorAll('[data-hs-accordion]').forEach(el => {
    new Accordion(el as HTMLElement);
  });
  // document.querySelectorAll('[data-hs-overlay]').forEach((el) => {
  //   new Overlay(el as HTMLElement);
  // });
});
