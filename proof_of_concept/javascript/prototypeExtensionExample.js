Array.prototype.first = function() {
  return this[0];
}

Array.prototype.rest = function() {
  return this.slice[1];
}

function our-third(list) {
  return list.rest()[1];
}

