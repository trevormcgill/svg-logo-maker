# SVG Logo Maker

## Description
In this challenge, I built a Node.js command-line application to generate a logo based on user input and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and then generates an SVG file based on the inputs. I utilized the Inquirer package to handle user input and created classes for different shape types (Circle, Triangle, and Square) that extend a base Shape class. Each shape class has a render() method responsible for returning a string for the corresponding SVG element with the given shape color.

The CLI class manages user input, creates an instance of the selected shape with the provided text and text color, sets the shape color, and then creates an instance of the SVG class to generate the logo. Tests were written for each shape class and the SVG class to ensure proper rendering of SVG elements, text inclusion, and error handling for text exceeding the allowed length. The final result is a functional command-line application that generates a logo based on user input and saves it as an SVG file.

<br>

## Preview Video
<br>

[Link to preview video!](https://watch.screencastify.com/v/eNSukJrUtrxGAgDECpHc)

<br>

