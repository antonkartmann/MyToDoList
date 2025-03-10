# Calculator Web App

## Description
This project is a simple calculator web application built using HTML, CSS, and JavaScript. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Technologies Used
- **HTML**: Provides the structure of the webpage.
- **CSS**: Styles the application.
- **JavaScript**: Implements the calculator's logic.

## Project Structure
```bash
├── index.html      # The main webpage
├── styles.css      # Styling for the application
├── index.js        # Calculator logic
├── .gitignore      # Files to be ignored in version control
├── misc.xml        # Project metadata
├── modules.xml     # Module configuration
├── calculator.iml  # IntelliJ IDEA project file
```

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Open `index.html` in a web browser.
3. Click the buttons to perform calculations.

## Features
- `C` clears the display.
- `←` removes the last entered character.
- `=` calculates the result.
- Supports basic arithmetic operations and decimal numbers.

## How It Works
- Each button has an event listener that updates the display.
- `eval()` is used to evaluate the mathematical expressions (not the safest method, but fine for this small project).
- If an error occurs, the display shows "Error!".

## Future Plans
- Add more advanced mathematical functions (e.g., square roots, exponentiation).
- Improve error handling.
- Enhance the UI to be more mobile-friendly.

## Author
Created by Anton KArtmann




