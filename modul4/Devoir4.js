// Sample array of names
const names = ['John', 'Alice', 'Bob', 'Jane'];

// Function to determine the greeting based on the first letter of the name
function greet(name) {
  // Convert the first letter to lowercase for case-insensitive comparison
  const firstLetter = name.charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    // If the name starts with 'j', print "Goodbye JSomeName."
    console.log(`Goodbye ${name}`);
  } else {
    // If the name starts with any other letter, print "Hello SomeName."
    console.log(`Hello ${name}`);
  }
}

// Loop over the array of names and call the greet function for each name
for (const name of names) {
  greet(name);
}