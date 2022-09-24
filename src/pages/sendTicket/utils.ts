import { ISendTicketProps } from "./types";

export function aggregateTickets(ticketData: ISendTicketProps) {
  let stored = localStorage.getItem("storedTickets");
  let storedTickets = (stored && JSON.parse(stored)) || [];
  localStorage.setItem("storedTickets", JSON.stringify([...storedTickets, ticketData]));
}
