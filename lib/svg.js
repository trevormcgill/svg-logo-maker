class SVG {
  constructor(width, height) {
    this.width = width || 300;
    this.height = height || 200;
  }

  setContent(content) {
    this.content = content;
  }

  toString() {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}">
  ${this.content}
</svg>`;
  }
}

module.exports = SVG;

