const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    const { shapeType, shapeColor, text, textColor } = await this.promptUser();
    const shape = this.createShape(shapeType, text, textColor);
    shape.setColor(shapeColor);

    const svg = new SVG();
    svg.setContent(shape.render());

    await writeFile("logo.svg", svg.toString());
    console.log("Generated logo.svg");
  }

  async promptUser() {
    const questions = [
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo text:",
        validate: input => input.length <= 3 || "Text should be no more than 3 characters.",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal number):",
      },
      {
        type: "list",
        name: "shapeType",
        message: "Choose a shape:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexadecimal number):",
      },
    ];

    return inquirer.prompt(questions);
  }

  createShape(type, text, textColor) {
    switch (type) {
      case "circle":
        return new Circle(text, textColor);
      case "triangle":
        return new Triangle(text, textColor);
      case "square":
        return new Square(text, textColor);
      default:
        throw new Error("Invalid shape type");
    }
  }
}

module.exports = CLI;
