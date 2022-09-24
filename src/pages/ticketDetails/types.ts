import { StandardProps } from "../../types/common";
import { ISendTicketProps } from "../sendTicket/types";

export interface ITicketsListProps extends Omit<StandardProps, "children"> {
  list: ISendTicketProps[];
}
