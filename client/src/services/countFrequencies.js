export const countFrequencies = people => {
  const emails = [];
  const freq = {};

  // First, collect all of the emails
  for (let p of people) {
    emails.push(p.email);
  }

  // Iterate through each email in the list
  // This bit runs O(n^2)
  for (let e of emails) {
    // For each email, look at each character
    // Using a hash map, count how often each character appears
    for (let i = 0; i < e.length; i++) {
      freq[e[i]] = (freq[e[i]] || 0) + 1;
    }
  }

  // Next, create an array of all of the characters, using an object to store
  // the character and count for each element
  const result = Object.keys(freq).map(char => ({ char, count: freq[char] }));

  // Finally, sort and return the array by count
  return result.sort((a, b) => b.count - a.count);
};
