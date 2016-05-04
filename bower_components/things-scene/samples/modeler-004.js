var model = {
  translate: {
    x: -50000000,
    y: -50000000
  },
  scale: {
    x: 0.5,
    y: 0.5
  },
  components: [{
    type: 'text',
    top: 100000030,
    left: 100000030,
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
    left: 100000150,
    top: 100000150,
    rotation: 10,
    width: 100,
    height: 100,
    strokeStyle: '#000000',
    lineWidth: 5
  }, {
    type: 'rect',
    id: 'second',
    name: '두번째 사각형',
    left: 100000150,
    top: 100000300,
    rotation: 0,
    width: 100,
    height: 100,
    strokeStyle: '#000000',
    lineWidth: 5
  }, {
    type: 'ellipse',
    name: 'select layer 테스트용 원',
    cx: 100000450,
    cy: 100000300,
    rotation: 10,
    rx: 100,
    ry: 120,
    strokeStyle: '#000000',
    lineWidth: 5
  }, {
    type: 'line',
    name: 'select layer 테스트용 라인',
    x1: 100000100,
    y1: 100000100,
    x2: 100000300,
    y2: 100000300,
    lineWidth: 5,
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

  // p.root().set({
  //   scale: {x:1.5, y:1.5},
  //   translate: {x: 150, y:150},
  //   rotation: 0.2
  // })

  // p.select('rect')
  // p.selected()[0].set({
  //   scale: {x: 3, y: 3},
  //   rotation: 0.2
  // })
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
