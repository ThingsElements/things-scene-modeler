var model = {
  components: [
    {
      type: 'rect',
      id: 'rect-01',

      top: 100,
      left: 100,
      width: 200,
      height: 200,

      strokeStyle: '#00FF00',
      // fillStyle: ''

    }, {
      type: 'rect',
      id: 'rect-02',

      top: 400,
      left: 500,
      width: 200,
      height: 200,
      alpah: 0.5,

      strokeStyle: '#00FF00',
      // fillStyle: ''

    }
  ],
  links: [{
    type: 'link',
    from: 'rect-01',
    to: 'rect-02',
    lineWidth: '10'
  }]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model
  });
}

function dispose() {
  p.dispose();
}

function change() {
}

function fullscreen() {
  p.fullscreen()
}
