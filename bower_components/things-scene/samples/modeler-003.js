var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    width: 100,
    height: 100,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: `
이 예제에서는 셀렉션레이어를 설명합니다.
사각형 위에서 마우스를 클릭해보세요.
    `

  }, {
    type: 'rect',
    id: 'first',
    name: '첫번째 사각형',
    left: 150,
    top: 150,
    rotation: 10,
    width: 100,
    height: 100,
    strokeStyle: '#000000',
    lineWidth: 1
  }, {
    type: 'rect',
    id: 'second',
    name: '두번째 사각형',
    left: 150,
    top: 300,
    rotation: 0,
    width: 100,
    height: 100,
    strokeStyle: '#000000',
    lineWidth: 1
  }, {
    type: 'ellipse',
    name: 'select layer 테스트용 원',
    cx: 450,
    cy: 300,
    rotation: 10,
    rx: 100,
    ry: 120,
    strokeStyle: '#000000',
    lineWidth: 1
  }, {
    type: 'triangle',
    x1: 300, y1: 500, x2: 200, y2: 700, x3: 400, y3: 500, rotation: 2,
    strokeStyle: '#000000',
    lineWidth: 1
  }, {
    type: 'polygon',
    path: [{x:100, y:200}, {x:150, y:500}, {x:350, y:400}, {x:700, y:300}, {x:600, y:250}], rotation: 0,
    strokeStyle: '#000000',
    lineWidth: 1
  }, {
    type: 'line',
    name: 'select layer 테스트용 라인',
    x1: 100,
    y1: 100,
    x2: 300,
    y2: 300,
    lineWidth: 1,
    strokeStyle: '#000000'
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

  p.root.set({
    scale: {x:1.5, y:1.5},
    translate: {x: 150, y:150},
    rotation: 0.2
  })

  p.select('rect')
  p.selected[0].set({
    scale: {x: 3, y: 3},
    rotation: 0.2
  })
}

function dispose() {
  p.dispose();
}

function change() {
  // mutateBounds를 설명하는 예제.
  p.findAll('rect').map(function(comp) {
    comp.mutateBounds(function(bounds) {
      bounds.width += 100
    })
  })
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
