var model = {
  // translate: {
  //   x: 100,
  //   y: -100
  // },
  // scale: {
  //   x: 2,
  //   y: 2
  // },
  // rotation: 0.5,
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    width: 500,
    height: 50,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: '이 예제에서는 컴포넌의 기본 속성을 설명합니다.'
  }, {
    type: 'line',
    x1 : 100, y1: 100, x2: 200, y2: 200, rotation: 0
  },
  {
    type: 'line',
    x1 : 100, y1: 100, x2: 200, y2: 200, rotation: 0.5
  },
  {
    type: 'line',
    x1 : 100, y1: 100, x2: 200, y2: 200, rotation: 1
  },
  {
    type: 'line',
    x1 : 100, y1: 100, x2: 200, y2: 200, rotation: 1.5
  },
  {
    type: 'line',
    x1 : 100, y1: 100, x2: 200, y2: 200, rotation: 2
  },
  {
    type: 'line',
    x1 : 100, y1: 100, x2: 200, y2: 200, rotation: 2.5
  },
  {
    type: 'ellipse',
    cx : 1000, cy: 200, rx: 100, ry: 50, rotation: 0
  },
  {
    type: 'ellipse',
    cx : 300, cy: 200, rx: 100, ry: 50, rotation: 0.5
  },
  {
    type: 'ellipse',
    cx : 300, cy: 200, rx: 100, ry: 50, rotation: 1.0
  },
  {
    type: 'ellipse',
    cx : 300, cy: 200, rx: 100, ry: 50, rotation: 1.5
  },
  {
    type: 'ellipse',
    cx : 300, cy: 200, rx: 100, ry: 50, rotation: 2.0
  },
  {
    type: 'rect',
    left: 550, top: 540, rotation: 0, width: 200, height: 60
  },
  {
    type: 'rect',
    left: 550, top: 540, rotation: 0.5, width: 200, height: 60
  },
  {
    type: 'rect',
    left: 550, top: 540, rotation: 1, width: 200, height: 60
  },
  {
    type: 'rect',
    left: 550, top: 540, rotation: 1.5, width: 200, height: 60
  },
  {
    type: 'rect',
    left: 550, top: 540, rotation: 2, width: 200, height: 60
  },
  {
    type: 'rect',
    left: 550, top: 540, rotation: 2.5, width: 200, height: 60
  },
  {
    type: 'triangle',
    x1: 900, y1: 500, x2: 800, y2: 400, x3: 1000, y3: 500, rotation: 0
  },
  {
    type: 'triangle',
    x1: 300, y1: 500, x2: 200, y2: 700, x3: 400, y3: 500, rotation: .5
  },
  {
    type: 'triangle',
    x1: 300, y1: 500, x2: 200, y2: 700, x3: 400, y3: 500, rotation: 1
  },
  {
    type: 'triangle',
    x1: 300, y1: 500, x2: 200, y2: 700, x3: 400, y3: 500, rotation: 1.5
  },
  {
    type: 'triangle',
    x1: 300, y1: 500, x2: 200, y2: 700, x3: 400, y3: 500, rotation: 2
  },
  {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 0,
    strokeStyle: '#FF0000', fillStyle: ''
  },
  {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 0.5,
    strokeStyle: '#FF00FF', fillStyle: ''
  },
  {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 1,
    strokeStyle: '#0000FF', fillStyle: ''
  },
  {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 1.5,
    strokeStyle: '#FFFF00', fillStyle: ''
  },
  {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 2,
    strokeStyle: '#00FF00', fillStyle: ''
  },
  {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 2.5,
    strokeStyle: '#00FFFF', fillStyle: ''
  },
  {
    type: 'polyline',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}], rotation: 0
  },
  {
    type: 'polyline',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}], rotation: 0.5
  },
  {
    type: 'polyline',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}], rotation: 1
  },
  {
    type: 'polyline',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}], rotation: 1.5
  },
  {
    type: 'polyline',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}], rotation: 2
  },
  {
    type: 'polyline',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}], rotation: 2.5
  },
  {
    type: 'cloud',
    x: 600, y: 150, rotation: 0
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

function undo() {
  p.undo()
}

function redo() {
  p.redo()
}

function fullscreen() {
  p.fullscreen()
}
