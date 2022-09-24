import { StandardProps } from "../../types/common";

export enum status {
  pending = "pending",
  answerd = "answerd",
  closed = "closed"
}

export interface ISendTicketProps extends Omit<StandardProps, "children"> {
  /** this is a unique id for each message */
  uid?: number;

  /** this is the moment which message is created */
  received: string;

  /** this is title of the message */
  title: string;

  /**this is the body of the message */
  message: string;

  /** this is a handler for submitting the form */
  onClick: () => void;

  /** status of the message */
  status: status;

  /** latest Update of ticket */
  lastUpdate: string;
}
