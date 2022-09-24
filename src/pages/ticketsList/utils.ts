export async function getTickets() {
  await timeout(1200);
  let tickets: string | null = localStorage.getItem("storedTickets");
  const data = tickets ? JSON.parse(tickets) : [];
  return data;
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
