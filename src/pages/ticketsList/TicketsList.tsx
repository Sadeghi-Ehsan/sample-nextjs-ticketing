import { FunctionComponent } from "react";
import { classJoin } from "../../utils/helper";
import { ISendTicketProps } from "../sendTicket/types";
import { ITicketsListProps } from "./types";
import { useRouter } from "next/router";
import { NextPage } from "next";

const TicketsList: NextPage<ITicketsListProps> = ({ list, className, style, ...restProps }) => {
  const tableList: ISendTicketProps[] = [
    { id: "1", title: "test title", message: "test Message", onClick: () => {} },
    { id: "2", title: "test title", message: "test Message", onClick: () => {} },
    { id: "3", title: "test title", message: "test Message", onClick: () => {} },
    { id: "4", title: "test title", message: "test Message", onClick: () => {} },
    { id: "5", title: "test title", message: "test Message", onClick: () => {} }
  ];
  const router = useRouter();
  return (
    <div
      className={classJoin(["flex rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "577px" }}
      {...restProps}
    >
      <div className="w-full px-14 pt-8">
        <h1 className="mb-10 text-2xl font-bold">لیست تیکت‌ها</h1>
        <div className="flex flex-col overflow-y-auto rounded-lg bg-white p-3 shadow-customLg">
          <div className="mb-4 flex h-13 w-full flex-row items-center  justify-around rounded-lg  !bg-tableGray ">
            <div>تاریخ</div>
            <div>موضوع تیکت</div>
            <div>تاریخ به روز رسانی</div>
            <div>وضعیت تیکت</div>
            <div />
          </div>
          {tableList.map(item => {
            return (
              <div
                key={item.id}
                className="group mb-2 flex h-14 flex-row  items-center justify-around rounded-lg shadow-customLg  hover:scale-x-102 hover:cursor-pointer hover:shadow-customXl"
              >
                <div>{item.id}</div>
                <div>{item.message}</div>
                <div>{item.title}</div>
                <div>{item.title}</div>
                <div
                  className="opacity-0 duration-300 group-hover:opacity-100 "
                  onClick={() => router.push("/ticketDetails/TicketDetails")}
                >
                  مشاهده جزئیات
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TicketsList;
