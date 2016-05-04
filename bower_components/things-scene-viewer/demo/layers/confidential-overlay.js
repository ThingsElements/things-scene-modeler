(function() {
  var ConfidentialOverlay = function(model, context) {
    scene.Layer.call(this, model, context)
  }

  function _draw(context) {
    
    context.globalAlpha = 0.3

    context.font="50px Verdana"

    context.fillStyle = 'red'

    context.fillText(this.get('text') || 'CONFIDENTIAL', 20, 60)
  }

  function contains(x, y) {
    return false
  }

  ConfidentialOverlay.prototype = Object.create(scene.Layer.prototype  , {
    _draw: {
      value: _draw,
      enumerable: true,
      configurable: true, 
      writable: true
    }, 
    contains: {
      value: contains,
      enumerable: true,
      configurable: true, 
      writable: true
    }
  })

  ConfidentialOverlay.constructor = ConfidentialOverlay

  scene.Component.register('confidential-overlay', ConfidentialOverlay)
})();
