var model = {
  width: 400,
  height: 400,
  lineWidth: 2,
  strokeStyle: 'black',
  fillStyle: 'yellow',
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
    height: 100,
    strokeStyle: 'black',
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
    strokeStyle: 'black',
    lineWidth: 1
  }, {
    type: 'ellipse',
    name: 'select layer 테스트용 원',
    cx: 450,
    cy: 300,
    rotation: 10,
    rx: 100,
    ry: 120,
    strokeStyle: 'black',
    lineWidth: 1
  }, {
    type: 'line',
    name: 'select layer 테스트용 라인',
    x1: 100,
    y1: 100,
    x2: 300,
    y2: 300,
    lineWidth: 10
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
        target: 'ellipse',
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
      }, {
        target: 'text',
        property: 'text',
        rule: 'value'
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
      target: 'ellipse',
      property: 'rotation',
      rule: 'value'
      }]
    }
  }
};

var p0, p1, client, subscription

function create() {
  p0 = scene.create({
    target: 'scene0',
    model: model,
    layers: [],
    handlers: []
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

function start() {

  /* implementation for stomp */

  var socket = new SockJS("http://www.printhing.xyz/elidom/stomp");
  client = Stomp.over(socket);

  var login = '';
  var passcode = '';
  destination = '/elidom/stomp/topic/data';

  // this allows to display debug logs directly on the web page
  client.debug = function(str) {
    console.log(str)
  };

  // the client is notified when it is connected to the server.
  // client.connect(login, passcode, function(frame) {
  client.connect({}, function(frame) {
    console.log('connected')

    client.subscribe(destination, function(message) {
      var body = JSON.parse(message.body)

      for(var key in body) {
        p0.variable(key, body[key])
        p1.variable(key, body[key])
      }
    });

    var x = 0
    var testKey1 = 0
    var testKey2 = 0
    var testKey3 = 0

    var interval = setInterval(function() {
      try {
        client.send(destination, {}, JSON.stringify({
          b: x,
          x: x++,
          y: 400 * Math.random(),
          z: Math.PI * Math.random(),
          test: 'XYZ',
          '100': '12345',
          testKey1: testKey1++,
          testKey2: String(testKey2++ % 3),
          testKey3: parseInt(70 * Math.random())
        }))
      } catch(e) {
        clearInterval(interval)
      }
    }, 100)

  });
}

function stop() {

  /* implementation for stomp */
  client.disconnect(function() {
    console.log('disconnected')
  });
}

function fullscreen() {
  p0.fullscreen()
}
