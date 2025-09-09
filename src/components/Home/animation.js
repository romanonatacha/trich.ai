import { TweenLite, Circ } from "gsap";

export function initializeAnimation() {
  var width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target = { x: 0, y: 0 }, // Initialize target to prevent undefined errors
    animateHeader = true;

  // Main
  initHeader();
  initAnimation();
  addListeners();

  function initHeader() {
    // Ensure DOM elements exist
    largeHeader = document.getElementById("large-header");
    canvas = document.getElementById("demo-canvas");

    if (!largeHeader || !canvas) {
      console.error(
        "Required DOM elements not found: large-header or demo-canvas"
      );
      return;
    }

    updateDimensions();

    largeHeader.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // create points
    points = [];
    for (var x = 0; x < width; x = x + width / 20) {
      for (var y = 0; y < height; y = y + height / 20) {
        var px = x + (Math.random() * width) / 20;
        var py = y + (Math.random() * height) / 20;
        var p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for (var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if (!(p1 === p2)) {
          var placed = false;
          for (var m = 0; m < 5; m++) {
            if (!placed) {
              if (closest[m] === undefined) {
                closest[m] = p2;
                placed = true;
              }
            }
          }

          for (var n = 0; n < 5; n++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[n])) {
                closest[n] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (var k in points) {
      var c = new Circle(
        points[k],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[k].circle = c;
    }
  }

  function updateDimensions() {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  // Event handling
  function addListeners() {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    if (!target) {
      target = { x: 0, y: 0 }; // Fallback to ensure target is defined
    }

    var posx = 0,
      posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    updateDimensions();
    if (largeHeader && canvas) {
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    }
  }

  // animation
  function initAnimation() {
    animate();
    for (var l in points) {
      shiftPoint(points[l]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (var o in points) {
        // detect points in range
        if (points[o] && Math.abs(getDistance(target, points[o])) < 4000) {
          points[o].active = 0.3;
          points[o].circle.active = 0.6;
        } else if (
          points[o] &&
          Math.abs(getDistance(target, points[o])) < 20000
        ) {
          points[o].active = 0.1;
          points[o].circle.active = 0.3;
        } else if (
          points[o] &&
          Math.abs(getDistance(target, points[o])) < 40000
        ) {
          points[o].active = 0.02;
          points[o].circle.active = 0.1;
        } else if (points[o]) {
          points[o].active = 0;
          points[o].circle.active = 0;
        }

        if (points[o]) {
          drawLines(points[o]);
          points[o].circle.draw();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(p);
      },
    });
  }

  // Canvas manipulation
  function drawLines(p) {
    if (!p.active) return;
    for (var q in p.closest) {
      if (p.closest[q]) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[q].x, p.closest[q].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx.stroke();
      }
    }
  }

  function Circle(pos, rad, color) {
    var _this = this;

    // constructor
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function () {
      if (!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
      ctx.fill();
    };
  }

  // Util
  function getDistance(p1, p2) {
    if (!p1 || !p2) return Infinity;
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
}
