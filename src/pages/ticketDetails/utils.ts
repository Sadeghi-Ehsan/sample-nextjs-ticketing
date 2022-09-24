export function getTickets() {
  let tickets: string | null = localStorage.getItem("storedTickets");
  const data = tickets ? JSON.parse(tickets) : [];
  return data;
}
