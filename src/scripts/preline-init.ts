import Accordion from '@preline/accordion';
import Collapse from '@preline/collapse';
import Overlay from '@preline/overlay';

// import Dropdown from '@preline/dropdown';
// import Overlay from '@preline/overlay';

interface IHTMLElementPopper extends HTMLElement {
  _popper: any;
}

document.addEventListener('DOMContentLoaded', () => {
  // document.querySelectorAll('[data-hs-dropdown]').forEach((el) => {
  //   new Dropdown(el as IHTMLElementPopper);
  // });
  const collapses = document.querySelectorAll('[data-hs-collapse]');
  if (collapses.length > 0) {
    collapses.forEach(el => {
      new Collapse(el as HTMLElement);
    });
  }

  const accordions = document.querySelectorAll('[data-hs-accordion]');
  if (accordions.length > 0) {
    accordions.forEach(el => {
      new Accordion(el as HTMLElement);
    });
  }

  const overlays = document.querySelectorAll('[data-hs-overlay]');
  if (overlays.length > 0) {
    overlays.forEach(el => {
      new Overlay(el as HTMLElement);
    });
  }
  // document.querySelectorAll('[data-hs-overlay]').forEach((el) => {
  //   new Overlay(el as HTMLElement);
  // });
});
