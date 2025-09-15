Click to open App- https://htmlpreview.github.io/?https://github.com/amalverse/Currency-Converter/blob/main/index.html
# Currency Converter App

A simple and interactive web application to convert currencies in real-time using live exchange rates. Built with HTML, CSS, and JavaScript.

## Features

- Convert between multiple currencies instantly
- Live exchange rates fetched from [ExchangeRate-API](https://www.exchangerate-api.com/)
- User-friendly interface with country flags for each currency
- Responsive design for desktop and mobile
- Error handling for invalid input and API issues

## Demo

<img width="1920" height="868" alt="screencapture-htmlpreview-github-io-2025-09-15-13_27_26" src="https://github.com/user-attachments/assets/5880d2c6-811f-4965-8575-e49fbcb657ac" />

## How to Use

1. **Enter Amount:**
   - Input the amount you want to convert in the text box.
2. **Select Currencies:**
   - Choose the source (From) and target (To) currencies from the dropdown menus. Flags update automatically.
3. **Get Exchange Rate:**
   - Click the **Get Exchange Rate** button to see the converted amount and the current rate.

## Project Structure

```
index.html      # Main HTML file
style.css       # App styling
script.js       # Main JavaScript logic
codes.js        # Currency and country code mapping
Readme.MD       # Project documentation
```

## How It Works

- The app loads a list of currencies and their country flags.
- When you select currencies and enter an amount, it fetches the latest rates from the ExchangeRate-API.
- The result is displayed instantly below the form.

## Setup & Run Locally

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. No server or build step required.

## Dependencies

- [Font Awesome](https://fontawesome.com/) for icons (CDN)
- [ExchangeRate-API](https://www.exchangerate-api.com/) for live rates

## Customization

- To add or remove currencies, edit the `countryList` object in `codes.js`.
- To change the default currencies, update the selected options in `script.js`.

## License

This project is open source and free to use for educational and personal projects.
