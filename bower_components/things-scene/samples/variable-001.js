var model0 = {
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
이 예제에서는 변수를 설명합니다.
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
  }],
  variables: {
    'a': {
      name: 'Variable A',
      type: 'string',
      value: 'aaaa',
      mappings: [{
        target: 'rect',
        property: 'text',
        rule: 'value'
      }]
    },
    'b': {
      name: 'Vraiable B',
      type: 'float',
      value: 0.9,
      mappings: [{
        target: 'rect',
        property: 'text',
        rule: 'eval',
        param: 'return Math.sqrt(value)'
      }]
    },
    'x': {
      name: 'Variable X',
      type: 'int',
      value: 1,
      mappings: [{
        target: 'rect',
        property: 'text',
        rule: 'map',
        param: {
          '1': 'first',
          '2': 'second',
          '3': 'third',
          'default': 'too difficult'
        }
      }]
    },
    'y': {
      name: 'Variable Y',
      type: 'int',
      value: 101,
      mappings: [{
        target: 'rect',
        property: 'fillStyle',
        rule: 'range',
        param: {
          '0~100': '#FF0000',
          '101~200': '#00FF00',
          '201~300': '#0000FF',
          'default': '#000000'
        }
      }]
    },
    'z': {
      name: 'Variable Z',
      type: 'int',
      value: 0,
      mappings: [{
      target: 'rect',
      property: 'round',
      rule: 'value'
      }]
    }
  }
};

var model1 = {
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
이 예제에서는 변수를 설명합니다.
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
  }],
  variables: {
    'a': {
      name: 'Variable A',
      type: 'string',
      value: 'aaaa',
      mappings: [{
        target: 'rect',
        property: 'text',
        rule: 'value'
      }]
    },
    'b': {
      name: 'Vraiable B',
      tpe: 'float',
      value: 0.9,
      mappings: [{
        target: 'rect',
        property: 'text',
        rule: 'eval',
        param: 'return Math.sqrt(value)'
      }]
    },
    'x': {
      name: 'Variable X',
      type: 'int',
      value: 1,
      mappings: [{
        target: 'rect',
        property: 'text',
        rule: 'map',
        param: {
          '1': 'first',
          '2': 'second',
          '3': 'third',
          'default': 'too difficult'
        }
      }]
    },
    'y': {
      name: 'Variable Y',
      type: 'int',
      value: 101,
      mappings: [{
        target: 'rect',
        property: 'fillStyle',
        rule: 'range',
        param: {
          '0~100': '#FF0000',
          '101~200': '#00FF00',
          '201~300': '#0000FF',
          'default': '#000000'
        }
      }]
    },
    'z': {
      name: 'Variable Z',
      type: 'int',
      value: 0,
      mappings: [{
      target: 'rect',
      property: 'round',
      rule: 'value'
      }]
    }
  }
};

var p0 = null;
var p1 = null;

function create() {
  p0 = scene.create({
    target: 'scene0',
    model: model0,
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

  p1 = scene.create({
    target: 'scene1',
    model: p0.model,
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
  p0.dispose();
  p1.dispose();
}

function change() {
  // mutateBounds를 설명하는 예제.
  p0.findAll('rect').map(comp => {
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

function undo() {
  p0.commander.undo()
}

function redo() {
  p0.commander.redo()
}

function fullscreen() {
  p0.fullscreen()
}
