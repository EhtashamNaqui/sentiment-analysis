# Sentiment Analysis Application

A simple Node.js application that takes a user's text input and performs sentiment analysis using the sentiment package. The application categorizes the input as positive, negative, or neutral and provides a confidence score for the predicted sentiment.

## Features

- Simple web page with an input form for users to submit text
- Display sentiment analysis results (sentiment category and confidence score) on the page after the analysis is complete
- RESTful API using Express.js to handle user input and perform sentiment analysis
- Use of the sentiment package for sentiment analysis
- Code deployed and working on vercel (https://sentiment-analysis-beta.vercel.app/)

## Project Structure

```
project-folder/
├── api/
│   └── sentiment.js
├── public/
│   └── index.html
├── node_modules/
├── package.json
└── vercel.json
```

## Prerequisites

- Node.js installed

## Installation

1. Clone the repository:

```bash
git clone https://github.com/EhtashamNaqui/sentiment-analysis.git
```

2. Change directory to the project folder:

```bash
cd sentiment-analysis
```

3. Install the dependencies:

```bash
npm install
```

## Usage

### Local Development

To run the application locally, you'll need to have the Vercel CLI installed:

```bash
npm install -g vercel
```

Start the development server:

```bash
vercel dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Vercel webpage

To test the deployed application on Vercel, visit:

https://sentiment-analysis-beta.vercel.app/

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
