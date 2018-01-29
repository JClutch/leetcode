// Design a method to find the frequency of occurrences
// of any given word in a book. What if we were running
// this algorithm multiple times.

// Use an IIFE to create a private area scope that will store memory,
// and then return a function

let wordFrequencies = (function () {
  let memory = {};
  return function (book, search) {
    if (memory[search]) {
      // console.log('accessing memory')
      return memory[search];
    }
    let current = '';
    let count = 0;
    for (var i = 0; i < book.length; i++) {
      let char = book[i];
      if (char === ' ' || char === undefined) {
        if (search.toLowerCase() === current.toLowerCase()) {
          count++;
        }
        current = '';
      } else {
        current += char;
      }
    }
    // console.log('add memory');
    memory[search] = count;
    return count;
  };
})()

const emancipation = "That on the 1st day of January, A.D. 1863, all persons held as slaves within any State or designated part of a State the people whereof shall then be in rebellion against the United States shall be then, thenceforward, and forever free; and the executive government of the United States, including the military and naval authority thereof, will recognize and maintain the freedom of such persons and will do no act or acts to repress such persons, or any of them, in any efforts they may make for their actual freedom. That the executive will on the 1st day of January aforesaid, by proclamation, designate the States and parts of States, if any, in which the people thereof, respectively, shall then be in rebellion against the United States; and the fact that any State or the people thereof shall on that day be in good faith represented in the Congress of the United States by members chosen thereto at elections wherein a majority of the qualified voters of such States shall have participated shall, in the absence of strong countervailing testimony, be deemed conclusive evidence that such State and the people thereof are not then in rebellion against the United States. Now, therefore, I, Abraham Lincoln, President of the United States, by virtue of the power in me vested as Commander-In-Chief of the Army and Navy of the United States in time of actual armed rebellion against the authority and government of the United States, and as a fit and necessary war measure for supressing said rebellion, do, on this 1st day of January, A.D. 1863, and in accordance with my purpose so to do, publicly proclaimed for the full period of one hundred days from the first day above mentioned, order and designate as the States and parts of States wherein the people thereof, respectively, are this day in rebellion against the United States the following, to wit: Arkansas, Texas, Louisiana (except the parishes of St. Bernard, Palquemines, Jefferson, St. John, St. Charles, St. James, Ascension, Assumption, Terrebone, Lafourche, St. Mary, St. Martin, and Orleans, including the city of New Orleans), Mississippi, Alabama, Florida, Georgia, South Carolina, North Carolina, and Virginia (except the forty-eight counties designated as West Virginia, and also the counties of Berkeley, Accomac, Morthhampton, Elizabeth City, York, Princess Anne, and Norfolk, including the cities of Norfolk and Portsmouth), and which excepted parts are for the present left precisely as if this proclamation were not issued. And by virtue of the power and for the purpose aforesaid, I do order and declare that all persons held as slaves within said designated States and parts of States are, and henceforward shall be, free; and that the Executive Government of the United States, including the military and naval authorities thereof, will recognize and maintain the freedom of said persons. And I hereby enjoin upon the people so declared to be free to abstain from all violence, unless in necessary self-defence; and I recommend to them that, in all case when allowed, they labor faithfully for reasonable wages. And I further declare and make known that such persons of suitable condition will be received into the armed service of the United States to garrison forts, positions, stations, and other places, and to man vessels of all sorts in said service. And upon this act, sincerely believed to be an act of justice, warranted by the Constitution upon military necessity, I invoke the considerate judgment of mankind and the gracious favor of Almighty God."

console.log(wordFrequencies(emancipation, 'slaves')) // => 2
console.log(wordFrequencies(emancipation, 'will')) // => 5
console.log(wordFrequencies(emancipation, 'slaves')) // => 2
console.log(wordFrequencies(emancipation, 'will')) // => 5
console.log(wordFrequencies(emancipation, 'virtue')) // => 2
console.log(wordFrequencies(emancipation, 'virtue')) // => 2
