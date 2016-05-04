require('../things-scene')
var Canvas = require('canvas')

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

var target = {};

var p = null;

(function create() {
  global.Canvas =  Canvas
  global.screen = {
    width: 1440,
    height: 960
  }

  p = scene.create({
    target: target,
    model: model
  });

  console.log(p.model)
  console.log('--------------------------------')
  p.variable('a', 'hatio lab');
  console.log(p.model)
  console.log(p.toDataURL());

})()

function dispose() {
  p1.dispose();
}

function fullscreen() {
  p.fullscreen()
}
