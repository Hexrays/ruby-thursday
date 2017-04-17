'use strict'

var App = App || {};

App.helpers = {};

//helper function
App.helpers.$$ = function(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

App.helpers.convertToSnake = function (str) {
  let strArr = str.split(''),
      isLastUppercase = false;
  for (let ltr in strArr) {
    if (!isLastUppercase && strArr[ltr] === strArr[ltr].toUpperCase() && typeof(strArr[ltr]) !== 'number') {
      strArr[ltr] = '-' + strArr[ltr].toLowerCase();
      isLastUppercase = true;
    } else if (strArr[ltr] === strArr[ltr].toUpperCase() && typeof(strArr[ltr]) !== 'number') {
      strArr[ltr] = strArr[ltr].toLowerCase();
      isLastUppercase = true;
    } else {
      isLastUppercase = false;
    }
  }
  return strArr.join('');
}

App.helpers.addNewClass = function (el, newClass) {
  if (el.classList){
    el.classList.add(newClass);
  } else {
    el.className += ' ' + newClass;
  }
}

App.helpers.removeClass = function (el, className) {
  if (el.classList){
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

App.helpers.hasClass = function(el, className) {
  if (el.classList){
    return el.classList.contains(className);
  }
  else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

App.helpers.toggleClass = function(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

App.helpers.findAncestor = function(el, cls) {
    while ((el = el.parentElement) && !hasClass(el, cls));
    return el;
}

App.helpers.removeFromArray = function(arr, elm) {
  let index = arr.indexOf(elm);
  if (index > -1) {
    arr.splice(index,1);
  }
}

App.helpers.checkObjectInArray = function(obj, array) {
  let element;
  for (element in array) {
    if (array.hasOwnProperty(element) && array[element] === obj) {
      return true;
    }
  }
  return false;
}

App.helpers.append = function(parent, el) {
  parent.appendChild(el);
}

App.helpers.after = function(el, html) {
  el.insertAdjacentHTML('afterend', htmlString);
}

App.helpers.before = function(el, html) {
  el.insertAdjacentHTML('beforebegin', htmlString);
}

App.helpers.round = function(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

App.helpers.createRandomRGB = function(alpha=1) {
  return `rgba(${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${alpha})`;
}

App.helpers.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

App.helpers.isNodeList = function(nodes) {
  var stringRepr = Object.prototype.toString.call(nodes);

  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
    (typeof nodes.length === 'number') &&
    (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}

App.helpers.guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

App.helpers.createRandomRGB = function(alpha=1) {
  return `rgba(${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${alpha})`;
}

App.helpers.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}