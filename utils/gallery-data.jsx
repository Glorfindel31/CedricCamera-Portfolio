export async function getData() {
  const result = await fetch('/searchapi', {
    cache: 'no-cache',
  });

  if (!result.ok) {
    throw new Error(`Failed to fetch: ${result.status} ${result.statusText}`);
  }
  return result.json();
}

//shuffle function to display different images
export function shuffle(originalArray) {
  let array = [...originalArray];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export async function getPrintingData() {
  const result = await fetch('/searchapiTagged', {
    cache: 'no-cache',
  });
  if (!result.ok) {
    throw new Error(`Failed to fetch: ${result.status} ${result.statusText}`);
  }
  return result.json();
}
