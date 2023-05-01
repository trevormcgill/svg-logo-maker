// Base class for shapes
class Shape {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  setColor(color) {
    this.color = color;
  }

  renderText() {
    return `<text x="50%" y="50%" font-size="48" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />${this.renderText()}`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />${this.renderText()}`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="30" y="20" width="240" height="160" fill="${this.color}" />${this.renderText()}`;
  }
}

module.exports = { Circle, Triangle, Square };
