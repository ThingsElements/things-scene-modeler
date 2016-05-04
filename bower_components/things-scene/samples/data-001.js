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
    strokeStyle: 'black'
  }, {
    type: 'rect',
    id: 'second',
    name: '두번째 사각형',
    left: 150,
    top: 300,
    rotation: 0,
    width: 100,
    height: 100,
    strokeStyle: 'black'
  }, {
    type: 'ellipse',
    name: 'select layer 테스트용 원',
    cx: 450,
    cy: 300,
    rotation: 10,
    rx: 100,
    ry: 120,
    strokeStyle: 'black'
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
  client = new Faye.Client('http://localhost:8888/service');

  subscription = client.subscribe('/message', function(message) {
    for(var key in message) {
      p0.variable(key, message[key])
      p1.variable(key, message[key])
    }

  }).then(function() {
    console.log('Subscription is now active!');
  }, function(error) {
    console.log('There was a problem: ' + error.message);
  })

  var x = 0, y = 0

  var interval = setInterval(function() {
    try {
      client.publish('/message', {
        b: 500 * Math.random(),
        x: Math.round(5 * Math.random()),
        y: 400 * Math.random(),
        z: Math.PI * Math.random()
      })
      .then(function() {
      }, function(error) {
        console.log('There was a problem: ' + error.message);
        clearInterval(interval)
      })
    } catch(e) {
      console.log(e);
      clearInterval(interval)
    }
  }, 100)

  /* implementation for stomp */

  // var login = '';
  // var passcode = '';
  // destination = 'channel';

  // client = Stomp.client('ws://localhost:61614');

  // // this allows to display debug logs directly on the web page
  // client.debug = function(str) {
  //   console.log(str)
  // };

  // // the client is notified when it is connected to the server.
  // client.connect(login, passcode, function(frame) {
  //   console.log('connected')

  //   client.subscribe(destination, function(message) {
  //     console.log(message.body)
  //   });

  //   var interval = setInterval(function() {
  //     try {
  //       client.send(destination, {}, text)
  //     } catch(e) {
  //       clearInterval(interval)
  //     }
  //   }, 1000)

  // });
}

function stop() {

  if(subscription)
    subscription.cancel()

  subscription = null

  /* implementation for stomp */
  // client.disconnect(function() {
  //   console.log('disconnected')
  // });
}

function fullscreen() {
  p0.fullscreen()
}
