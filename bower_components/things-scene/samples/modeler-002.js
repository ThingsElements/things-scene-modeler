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
    height: 100
  }, {
    type: 'rect',
    id: 'second',
    name: '두번째 사각형',
    left: 150,
    top: 300,
    rotation: 0,
    width: 100,
    height: 100,
  }, {
    type: 'ellipse',
    name: 'select layer 테스트용 원',
    cx: 450,
    cy: 300,
    rotation: 10,
    rx: 100,
    ry: 120
  }, {
    type: 'line',
    name: 'select layer 테스트용 라인',
    x1: 100,
    y1: 100,
    x2: 300,
    y2: 300
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
  // mutateBounds를 설명하는 예제.
  p.findAll('rect').map(comp => {
    comp.mutateBounds(function(bounds) {
      bounds.width += 100
    })
  })

  // center를 옮기는 예제.
  // p.findAll('rect').map(comp => {
  //   var center = comp.center
  //   comp.center = { x: center.x + 50, y: center.y + 50 }
  // })
}

function fullscreen() {
  p.fullscreen()
}
