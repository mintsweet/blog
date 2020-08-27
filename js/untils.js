var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );

function getId (id) {
  return document.getElementById(id);
}

function stripAndCollapse(value) {
  var tokens = value.match(rnothtmlwhite) || [];
  return tokens.join(' ');
}

function getClass(elem) {
  return elem.getAttribute && elem.getAttribute('class') || '';
}

function addClass (elem, value) {
  var classes, clazz, finalValue, i = 0;

  if (value && typeof value === 'string') {
    classes = value.match(rnothtmlwhite) || [];

    curValue = getClass(elem);
    cur = elem.nodeType === 1 && (' ' + stripAndCollapse(curValue) + ' ');

    if (cur) {
      while((clazz = classes[ i++ ])) {
        if (cur.indexOf(' ' + clazz + ' ') < 0) {
          cur += clazz + ' ';
        }
      }

      finalValue = stripAndCollapse(cur);
      if (curValue !== finalValue) {
        elem.setAttribute('class', finalValue);
      }
    }
  }
}

function removeClass (elem, value) {
  var classes, finalValue;

  if (value && typeof value === 'string') {
    classes = value.match(rnothtmlwhite) || [];

    curValue = getClass(elem);
    cur = elem.nodeType === 1 && (' ' + stripAndCollapse(curValue) + ' ');

    if (cur) {
      j = 0;
      while((clazz = classes[ j++ ])) {
        while (cur.indexOf(' ' + clazz + ' ') > -1) {
          cur = cur.replace(' ' + clazz + ' ', ' ');
        }
      }

      finalValue = stripAndCollapse(cur);
      if (curValue !== finalValue) {
        elem.setAttribute('class', finalValue);
      }
    }
  }
}

function hasClass (elem, value) {
  var className, i = 0;

  className = ' ' + value + ' ';

  if (elem.nodeType === 1 && (' ' + stripAndCollapse(getClass(elem)) + ' ').indexOf(className) > -1) {
    return true;
  }

  return false;
}