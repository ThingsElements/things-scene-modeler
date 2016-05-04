var model = {
  components: [
  {
    "type": "grf",
    "left": 100,
    "top": 30,
    "height": 100,
    "width": 100,
    src: 'resources/png.png'
  }]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model,
    layers: [{
      type: 'guide-layer'
    }, {
      type: 'selection-layer'
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

function change() {

}

function fullscreen() {
  p.fullscreen()
}
