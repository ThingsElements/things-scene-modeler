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
이 예제에서는 차트를 설명합니다.(#{width} * #{height})
    `

  }, {
    type: 'progress-circle',
    name: '테스트용 프로그레스',
    cx: 450,
    cy: 300,
    rx: 150,
    ry: 150,
    fontSize: 80,
    strokeStyle: '#552555',
    fontColor: '#FF0000',
    lineWidth: 30,
    value: 75,
    alpha: 0.8,
    text: "#{value}%"
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
