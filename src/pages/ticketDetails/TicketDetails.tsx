import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import support from "../../assets/icons/support.png";
import tic from "../../assets/icons/tic.png";
import user from "../../assets/icons/user.png";
import { classJoin } from "../../utils/helper";
import { getTickets } from "../ticketsList/utils";
import { ITicketsListProps } from "./types";

const TicketDetails: NextPage<ITicketsListProps> = ({ list, className, style, ...restProps }) => {
  const router = useRouter();
  const { data, error, isError, isLoading } = useQuery("tickets", getTickets);
  const params = router.asPath.split("/")[2];
  let test = data?.find((item: ITicketsListProps) => item.id == params);
  console.log(test);

  return (
    <div
      className={classJoin(["flex rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "750px" }}
      {...restProps}
    >
      <div className="w-full px-14 pt-8">
        <div className="flex flex-col rounded-lg bg-white p-3 shadow-customLg">
          <div className="m-7 flex flex-row items-center  justify-between border-b border-borderColor pb-6">
            <span className="text-2xl font-bold">فاکتور رسمی</span>
            <div className="flex flex-col px-4 ">
              <span>1401/2/23</span>
              <div className="flex items-center">
                <Image src={tic} width={15} height={14} alt="icon" />
                <span className="px-2">پاسخ داده شده</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative flex w-3/4 flex-col">
              <div className="mb-11 flex flex-col rounded-2.5xl rounded-bl-none bg-ticketResponse px-9 py-6">
                <div className="pb-5 text-base font-bold">پشتیبانی; ماندانا موحدی</div>
                <div className="text-base">این یک متن آزمایشی برای امتحان پاسخ تیکت هاست. </div>
              </div>
              <div className="left absolute top-24 -left-14">
                <Image src={support} width={44} height={44} alt="icon" />
              </div>
              <div className="mb-11 flex flex-col rounded-2.5xl rounded-br-none bg-ticketReply px-9 py-6">
                <div className="pb-5 text-base font-bold">علی صالحی</div>
                <div className="text-base">این یک متن آزمایشی برای امتحان ارسال تیکت هاست.</div>
              </div>
              <div className="left absolute top-64 -right-14">
                <Image src={user} width={44} height={44} alt="icon" />
              </div>

              <div className="mb-11 flex flex-col ">
                <div className="pb-5 text-base font-bold">پاسخ تیکت</div>
                <textarea
                  rows={3}
                  className="rounded-lg border border-neutral400-border px-3 py-5  focus:outline-0 "
                  placeholder="متن موردنظرتان را وارد کنید..."
                ></textarea>
              </div>
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
