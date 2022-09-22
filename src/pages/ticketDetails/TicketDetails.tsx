import { NextPage } from "next";
import { FunctionComponent } from "react";
import { classJoin } from "../../utils/helper";
import { ITicketsListProps } from "./types";

const TicketDetails: NextPage<ITicketsListProps> = ({ list, className, style, ...restProps }) => {
  return (
    <div
      className={classJoin(["flex rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "577px" }}
      {...restProps}
    >
      <div className="w-full px-14 pt-8">
        <div className="flex flex-col rounded-lg bg-white p-3 shadow-customLg">
          <div className="m-7 flex flex-row justify-between  border-b border-borderColor pb-6">
            <span className="text-2xl font-bold">فاکتور رسمی</span>
            <div className="flex flex-col px-4 ">
              <span>1401/2/23</span>
              <span>پاسخ داده شده</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex w-3/4 flex-col ">
              <div className="mb-11 flex flex-col rounded-2.5xl rounded-bl-none bg-ticketResponse px-9 py-6">
                <div className="pb-5">پشتیبانی; ماندانا موحدی</div>
                <div>این یک متن آزمایشی برای امتحان پاسخ تیکت هاست. </div>
              </div>

              <div className="mb-11 flex flex-col rounded-2.5xl rounded-br-none bg-ticketReply px-9 py-6">
                <div className="pb-5">علی صالحی</div>
                <div>این یک متن آزمایشی برای امتحان ارسال تیکت هاست.</div>
              </div>

              <div className="mb-11 flex flex-col ">
                <div className="pb-5">پاسخ تیکت</div>
                <textarea
                  rows={3}
                  className="rounded-lg border border-neutral400-border px-3 py-5  focus:outline-0 "
                  placeholder="متن موردنظرتان را وارد کنید..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketDetails;
