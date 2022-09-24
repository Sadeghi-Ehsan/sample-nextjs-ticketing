import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import support from "../../assets/icons/support.png";
import tic from "../../assets/icons/tic.png";
import wait from "../../assets/icons/wait.png";
import user from "../../assets/icons/user.png";
import { classJoin } from "../../utils/helper";
import { ISendTicketProps } from "../sendTicket/types";
import { ITicketsListProps } from "./types";
import { useForm } from "react-hook-form";
import { aggregateTickets } from "../sendTicket/utils";
import { getTickets } from "./utils";

const TicketDetails: NextPage<ITicketsListProps> = ({ list, className, style, ...restProps }) => {
  const router = useRouter();
  const [ticket, setTicket] = useState([]);
  const { data } = useQuery("tickets", getTickets);
  const params = router.asPath.split("/")[2];

  useEffect(() => {
    let filtered = data?.filter((item: ITicketsListProps) => item.id == params).reverse();
    setTicket(filtered);
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const handleRegistration = (data: any) => {
    let lastUpdate = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
    let status = "answered";
    let ticketData = { id: ticket[0]?.id, received: ticket[0]?.received, lastUpdate, ...data, status };
    aggregateTickets(ticketData);

    router.push("/ticketsList/TicketsList");
  };
  const registerOptions = {
    message: {
      required: "متن پاسخ تیکت اجباری است.",
      minLength: {
        value: 10,
        message: "طول پیام حداقل ۱۰ کاراکتر باشد"
      }
    }
  };

  return (
    <div
      className={classJoin(["flex rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "750px" }}
      {...restProps}
    >
      <div className="w-full px-14 py-8">
        <div className="flex flex-col rounded-lg bg-white p-3 shadow-customLg">
          {ticket && ticket[0] && (
            <div className="m-7 flex flex-row items-center  justify-between border-b border-borderColor pb-6">
              <span className="text-2xl font-bold">فاکتور رسمی</span>
              <div className="flex flex-col px-4 ">
                <span>{new Date(ticket[0]?.received).toLocaleString("fa").split(" ")[0].replace("،", "")}</span>
                <div className="flex items-center">
                  <Image src={ticket[0]?.status === "answered" ? tic : wait} width={15} height={14} alt="icon" />
                  <span className="px-2">{ticket[0]?.status === "answered" ? "پاسخ داده شده" : "منتظر پاسخ"}</span>
                </div>
              </div>{" "}
            </div>
          )}
          <div className="flex justify-center">
            <div className=" flex w-3/4 flex-col">
              {ticket?.map((item: ISendTicketProps) => {
                return (
                  <div key={item.id} className={"relative"}>
                    <div
                      className={classJoin([
                        "mb-11 flex flex-col rounded-2.5xl  px-9 py-6",
                        item.status === "pending"
                          ? "rounded-br-none bg-ticketReply"
                          : "rounded-bl-none bg-ticketResponse"
                      ])}
                    >
                      <div className="pb-5 text-base font-bold">
                        {item.status === "pending" ? "علی صالحی" : "پشتیبانی; ماندانا موحدی"}
                      </div>
                      <div className="text-base">{item.message}</div>
                    </div>
                    <div
                      className={classJoin([
                        "left absolute top-24",
                        item.status === "pending" ? " -right-14" : " -left-14"
                      ])}
                    >
                      <Image src={item.status === "pending" ? user : support} width={44} height={44} alt="icon" />
                    </div>
                  </div>
                );
              })}
              <form onSubmit={handleSubmit(handleRegistration)}>
                <div className="mb-11 flex flex-col ">
                  <div className="pb-5 text-base font-bold">پاسخ تیکت</div>
                  <textarea
                    rows={3}
                    className="rounded-lg border border-neutral400-border px-3 py-5  focus:outline-0 "
                    placeholder="متن موردنظرتان را وارد کنید..."
                    {...register("message", registerOptions.message)}
                  ></textarea>
                  <small className="px-2 text-pailred">{errors?.message && errors.message.message}</small>
                </div>
                <div className="flex justify-end">
                  <button className=" mt-9 mb-4 w-60 rounded-llg bg-pailred py-4 text-base font-bold text-white  	">
                    پاسخ تیکت
                  </button>
                </div>
              </form>
              <div className="left absolute bottom-5 -right-14">
                <Image src={user} width={44} height={44} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketDetails;
