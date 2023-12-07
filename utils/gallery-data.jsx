export async function getData() {
  const result = await fetch('http://localhost:3000/searchapi');

  if (!result.ok) {
    throw new Error(`Failed to fetch: ${result.status} ${result.statusText}`);
  }
  return result.json();
}

export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return {data: a};
};

export async function getPrintingData() {
  const result = await fetch('/searchapiTagged', {
    next: {revalidate: 86400},
  });
  if (!result.ok) {
    throw new Error(`Failed to fetch: ${result.status} ${result.statusText}`);
  }
  return result.json();
}
