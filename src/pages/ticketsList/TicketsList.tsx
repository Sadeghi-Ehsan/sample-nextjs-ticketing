import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import chevron from "../../assets/icons/chevron.png";
import tic from "../../assets/icons/tic.png";
import wait from "../../assets/icons/wait.png";
import { classJoin } from "../../utils/helper";
import { ISendTicketProps } from "../sendTicket/types";
import { ITicketsListProps } from "./types";
import { getTickets } from "./utils";

const TicketsList: NextPage<ITicketsListProps> = ({ list, className, style, ...restProps }) => {
  const router = useRouter();
  const [ticketList, setTticketList] = useState([]);
  const { data, error, isError, isLoading } = useQuery("tickets", getTickets);

  useEffect(() => {
    let tt = data?.reverse().filter((v: { id: any }, i: any, a: any[]) => a.findIndex(v2 => v2.id === v.id) === i);

    setTticketList(tt);
  }, [data]);

  if (isError) {
    return <div>خطا! {error?.message}</div>;
  }

  return (
    <div
      className={classJoin(["flex rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "577px" }}
      {...restProps}
    >
      {isLoading ? (
        <div className="flex w-full animate-pulse items-center justify-center text-2xl font-bold text-pailred">
          در حال بارگذاری...
        </div>
      ) : (
        <div className="w-full px-14 py-8">
          <h1 className="mb-10 text-2xl font-bold">لیست تیکت‌ها</h1>
          <div className="flex flex-col overflow-y-auto rounded-lg bg-white p-3 shadow-customLg">
            <div className="mb-4 flex h-13 w-full flex-row items-center  justify-around rounded-lg  !bg-tableGray ">
              <div>تاریخ</div>
              <div>موضوع تیکت</div>
              <div>زمان به روز رسانی</div>
              <div>وضعیت تیکت</div>
              <div className="w-1/9" />
            </div>
            {ticketList?.map((item: ISendTicketProps) => {
              return (
                <div
                  key={item.id}
                  className="group mb-2 flex h-14 flex-row  items-center justify-around rounded-lg shadow-customLg  hover:scale-x-101 hover:shadow-customXl"
                >
                  <div>{new Date(item.received).toLocaleString("fa").split(" ")[0].replace("،", "")}</div>
                  <div className="w-1/5 truncate">{item.message}</div>
                  <div>
                    {item.lastUpdate
                      ? new Date(item.lastUpdate).toLocaleString("fa").split(" ")[0].replace("،", "")
                      : "-_-_"}
                  </div>
                  <div className="flex items-center">
                    <Image src={item.status === "answered" ? tic : wait} width="16" height="16" alt="Icon" />{" "}
                    <span className="px-2">{item.status === "answered" ? "پاسخ داده شده" : "در انتظار پاسخ"}</span>
                  </div>
                  <div
                    className=" flex items-center opacity-0 duration-300 hover:cursor-pointer  group-hover:opacity-100 "
                    onClick={() => router.push("/ticketDetails/TicketDetails", item.id)}
                  >
                    <span className="px-1 text-xs text-linkColor">مشاهده جزئیات</span>
                    <Image src={chevron} alt="icon" width={5} height={11} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default TicketsList;
