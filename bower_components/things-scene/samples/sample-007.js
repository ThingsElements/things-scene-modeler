var model = {
  components: [
    {
      type: 'rect',

      top: 100,
      left: 100,
      width: 200,
      height: 200,
      round: 40,

      effects: [{
        type: 'gradation',
        subType: 'linear',
        from: {
          x: -50,
          y: -50
        },
        to: {
          x: -50,
          y: 50
        },
        colors : [{
          color: 'red',
          endPoint: 0
        }, {
          color: 'blue',
          endPoint: 1
        }]
      }],

      strokeStyle: '#00FF00',

    }, {
      type: 'rect',

      top: 400,
      left: 400,
      width: 200,
      height: 200,
      round: 50,
      lineDash: [2, 2],
      strokeStyle: '#00FF00',
    }]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model,
    layers: [{
      type: 'selection-layer'
    }, {
      type: 'guide-layer'
    }, {
      type: 'modeling-layer'
    }, {
      type: 'shift-layer'
    }],
    handlers: [
      'text-editor',
      'move-handler'
    ]
  });
}

function dispose() {
  p.dispose();
}

function change() {
  p.target_element.addEventListener('click', function(e) {
    var component = p.find_by_point(e.offsetX, e.offsetY)

    // var oldStyle = component.get('strokeStyle')
    // setTimeout(function() {
    //   component.set({strokeStyle: oldStyle})
    // }, 1000)
    // component.set({strokeStyle: '#0000FF'})

    // component.vibrate({ angle: 0.1, clockTime: 1000 / 100 });
    // component.set({fillStyle: '#0000ff'});
    // component.set({top: component.get('top') + 50, left: component.get('left') + 50})
    // component.shadow({distance: 10});
    // alert(component)
    // if(component.get('model') == 'rect')

    component.turn({speed: 0.05});
    // component.spring({second: 0.05});
    // vibrationL(component);
  });
}

// function effect() {
//   component.effect({
//     type: 'vibration',
//     angle: 45,
//     startColor: 'blue',
//     endColor: 'red'
//   });
// }

function fullscreen() {
  p.fullscreen()
}
