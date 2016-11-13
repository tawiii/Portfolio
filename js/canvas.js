var canvas = document.getElementById("canvas"),
context = canvas.getContext("2d"),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

var Line = {
  x: 0,
  y: 0,
  length: 100,
  angle: 0,
  parent: null,

  create: function(x, y, length, angle) {
    var obj = Object.create(this);
    obj.init(x, y, length, angle);
    return obj;
  },

  init: function(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
  },

  getEndX: function() {
    var angle = this.angle;
    return this.x + Math.cos(angle) * this.length;
  },

  getEndY: function() {
    var angle = this.angle;
    return this.y + Math.sin(angle) * this.length;
  },

  render: function(context) {
    context.strokeStyle = "#99FFFF";
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.getEndX(), this.getEndY());
    context.stroke();
  }
};



var line = Line.create(width / 2, height / 2, (height/ 2 - 10), 0);
var angle = 0;
context.lineWidth = 0.25;


update();

function update() {
  context.beginPath();
  context.moveTo(line.getEndX(), line.getEndY());

  line.angle = Math.sin(angle) / Math.random();
  angle += 0.025;

  context.lineTo(line.getEndX(), line.getEndY());
  context.stroke();

  requestAnimationFrame(update);
}