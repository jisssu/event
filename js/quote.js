const quotes = [
    {   quote : 'Much learning does not teach understanding.',
        author : 'Heraclitus'
    },
    {
        quote : 'Only in the agony of parting do we look into the depths of love.',
        author : 'George Eliot'
    },
    {
        quote : 'A person is never happy except at the price of some ignorance.',
        author : 'Anatole France'
    },
    {
        quote : 'Mistakes are part of the dues one pays for a full life.',
        author : 'Sophia Loren'
    },
    {
        quote : "Courage is the art of being the only one who knows you're scared to death.",
        author : 'Harold Wilson'
    },
    {
        quote : "Failure is defined by our reaction to it.",
        author : 'Oprah Winfrey'
    },
    {
        quote : "Life is something that everyone should try at least once.",
        author : 'Henry J. Tillman'
    },
    {
        quote : "If it were not for injustice, men would not know justice.",
        author : 'Heraclitus'
    },
    {
        quote : "Cats are smarter than dogs. You can't get eight cats to pull a sled through snow.",
        author : 'Jeff Valdez'
    },
    {
        quote : "We all have a few failures under our belt. It's what makes us ready for the successes.",
        author : 'Randy K. Milholland'
    }
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:nth-child(2)")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;