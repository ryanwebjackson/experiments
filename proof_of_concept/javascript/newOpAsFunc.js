function new(func, arguments) {
  var that = Object.create(func.prototype),
    result = func.apply(that, arguments);
  return (typeof result === 'object' && result) || that;
}