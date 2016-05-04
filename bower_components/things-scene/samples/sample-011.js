var model = {
  components: [{
    type: 'rect',
    id: 'rect-01',

    top: 50,
    left: 100,
    width: 200,
    height: 200,
    lineDash: [2, 2],
    fillStyle: 'yellow',

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

    strokeStyle: 'black'
  }, {
    type: 'rect',
    id: 'rect-02',

    top: 50,
    left: 350,
    width: 200,
    height: 200,
    lineDash: [8, 2],
    fillStyle: 'yellow',

    effects: [{
      type: 'gradation',
      subType: 'linear',
      from: {
        x: -50,
        y: -50
      },
      to: {
        x: 50,
        y: -50
      },
      colors : [{
        color: 'red',
        endPoint: 0
      }, {
        color: 'green',
        endPoint: 0.5
      }, {
        color: 'blue',
        endPoint: 1
      }]
    }],

    strokeStyle: 'blue',

  }, {
    type: 'rect',
    id: 'rect-03',

    top: 50,
    left: 600,
    width: 200,
    height: 200,
    fillStyle: 'blue',

    effects: [{
      type: 'gradation',
      subType: 'linear',
      from: {
        x: -50,
        y: -50
      },
      to: {
        x: 50,
        y: 50
      },
      colors : [{
        color: 'red',
        endPoint: 0
      }, {
        color: 'green',
        endPoint: 0.5
      }, {
        color: 'blue',
        endPoint: 1
      }]
    }],

    strokeStyle: '#00FF00',

  }, {
    type: 'rect',
    id: 'rect-04',

    top: 50,
    left: 850,
    width: 200,
    height: 200,
    fillStyle: 'green',
    strokeStyle: '#00FF00',

    text: 'test: auto wrap text, hello world',
    fontSize: 20,
    textType: 'W',

    effects: [{
      type: 'gradation',
      subType: 'radial',
      from: {
        x: 0,
        y: 0,
        r: 10
      },
      to: {
        x: 0,
        y: 0,
        r: 100
      },
      colors : [{
        color: 'red',
        endPoint: 0
      }, {
        color: 'green',
        endPoint: 0.5
      }, {
        color: 'blue',
        endPoint: 1
      }]
    }],
  }, {
    type: 'text',
    top: 300,
    left: 100,
    width: 200,
    height: 50,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: 'Hello World',

    effects: [{
      type: 'shadow',

      color: 'black',
      blur: 7,
      offsetX: 5,
      offsetY: 5
    }]
  }, {
    type: 'rect',
    id: 'rect-05',

    top: 300,
    left: 350,
    width: 200,
    height: 200,
    fillStyle: 'green',

    strokeStyle: '#00FF00',
    effects: [{
      type: 'shadow',
      color: 'yellow',
      blur: 80,
      offsetX: 0,
      offsetY: 0
    }, {
      type: 'gradation',
      subType: 'radial',
      from: {
        x: 0,
        y: 0,
        r: 10
      },
      to: {
        x: 0,
        y: 0,
        r: 100
      },
      colors : [{
        color: 'red',
        endPoint: 0
      }, {
        color: 'green',
        endPoint: 0.5
      }, {
        color: 'blue',
        endPoint: 1
      }]
    }]
  }, {
    type: 'rect',
    id: 'rect-06',

    top: 300,
    left: 600,
    width: 200,
    height: 200,
    fillStyle: 'green',

    strokeStyle: '#00FF00',
    effects: [{
      type: 'shadow',
      color: 'black',
      blur: 20,
      offsetX: 10,
      offsetY: 10,
      alpha: 0.9
    }]
  }, {
    type: 'rect',
    id: 'rect-07',

    top: 300,
    left: 800,
    width: 200,
    height: 200,
    rotation: Math.PI / 180 * 80,
    fillStyle: 'lightblue',

    strokeStyle: 'lightblue',
    effects: [{
      type: 'shadow',
      color: 'black',
      blur: 20,
      offsetX: 10,
      offsetY: 10,
      alpha: 0.9
    }]
  },{
    type: 'polygon',
    path: [{x: 400, y: 200}, {x: 450, y: 500}, {x: 350, y: 400}, {x: 700, y: 300}, {x: 600, y: 250}],
    rotation: 0,
    strokeStyle: '#FF0000', fillStyle: 'yellow'
  },  {
    type: 'triangle',
    fillStyle: 'yellow',
    text: 'test',
    x1: 1100, y1: 450, x2: 1200, y2: 300, x3: 1300, y3: 500, rotation: 0
  }],

  // links: [{
  //   // type: 'straight',
  //   type: 'right_angle_straight',
  //   from: 'rect-01',
  //   to: 'rect-05',
  //   subType: 'v',
  //   lineWidth: '8'
  // }, {
  //   // type: 'straight',
  //   type: 'right_angle_straight',
  //   from: 'rect-03',
  //   to: 'rect-05',
  //   subType: 'h',
  //   lineCap: 'round',
  //   lineJoin: 'round',
  //   lineWidth: '10'
  // }, {
  //   // type: 'straight',
  //   type: 'right_angle_straight',
  //   from: 'rect-04',
  //   to: 'rect-06',
  //   anchor: { x: 800, y: 450 },
  //   lineDash: [5, 8],
  //   lineCap: 'round',
  //   lineJoin: 'round',
  //   lineWidth: '5'
  // }, {
  //   type: 'curve',
  //   from: 'rect-04',
  //   to: 'rect-06',
  //   cX: 500,
  //   cY: 300,
  //   lineWidth: 5
  // }, {
  //   type: 'arrow_straight',
  //   from: 'rect-04',
  //   to: 'rect-07',
  //   lineWidth: 3
  // }]
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

function undo() {
  p.undo()
}

function redo() {
  p.redo()
}

function change() {
  p.target_element.addEventListener('click', function(e) {
    var component = p.find_by_point(e.offsetX, e.offsetY)
    component.set({
      width: 120
    });
  });
}

function fullscreen() {
  p.fullscreen()
}
