const messages = [
  "Hello from TypeScript!",
  "The current timestamp is:",
  new Date().toISOString(),
  "Random number of the day:",
  Math.floor(Math.random() * 100)
];

console.log("=".repeat(40));
messages.forEach(msg => console.log(msg));
console.log("=".repeat(40));

// Display a random emoji
const emojis = ["🚀", "⭐", "🎯", "💡", "🔥"];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
console.log(`\nToday's emoji: ${randomEmoji}`);