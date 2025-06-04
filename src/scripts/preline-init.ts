import Accordion from '@preline/accordion';
import Collapse from '@preline/collapse';
import Overlay from '@preline/overlay';
import Scrollspy from '@preline/scrollspy';

function initPrelineComponents() {
  Accordion.autoInit?.();
  Collapse.autoInit?.();
  Overlay.autoInit?.();
  Scrollspy.autoInit?.();
}

document.addEventListener('astro:page-load', initPrelineComponents);
document.addEventListener('astro:after-swap', initPrelineComponents);
