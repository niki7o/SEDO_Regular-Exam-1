// --- DOM Elements ---
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-btn');

// --- Quotes Data ---
const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];

// --- Functions ---
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    quoteTextElement.textContent = `"${quote.text}"`; // Add quotes around the text
    quoteAuthorElement.textContent = `- ${quote.author}`;
}

// --- Event Listeners ---
// Display a random quote when the button is clicked
if (newQuoteButton) { // Check if button exists before adding listener
    // *** Add log confirming button found ***
    console.log("Button found, adding listener."); // NEW LINE
    newQuoteButton.addEventListener('click', displayQuote);
} else {
    console.error("Button with ID 'new-quote-btn' not found.");
}

// --- Initial Load ---
// We use the static quote in HTML on initial load.
// If you wanted a random one on load, you'd uncomment the next line:
// document.addEventListener('DOMContentLoaded', displayQuote);
