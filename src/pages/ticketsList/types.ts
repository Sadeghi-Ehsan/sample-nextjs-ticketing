import { StandardProps } from "../../../types/common";
import { ISendTicketProps } from "../sendTicket/types";

export type test = {};

export interface ITicketsListProps extends Omit<StandardProps, "children"> {
  list: ISendTicketProps[];
}
