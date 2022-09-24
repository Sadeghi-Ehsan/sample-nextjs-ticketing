import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { classJoin } from "../../utils/helper";
import { ISendTicketProps } from "./types";
import { aggregateTickets } from "./utils";

const SendTicket: NextPage<ISendTicketProps> = ({ className, style, ...restProps }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const handleRegistration = (data: any) => {
    let received = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
    let status = "pending";
    let ticketData = { id: uuidv4(), received, ...data, status };
    aggregateTickets(ticketData);

    router.push("/ticketsList/TicketsList");
  };
  const handleError = () => {};

  const registerOptions = {
    title: {
      required: "عنوان تیکت اجباری است.",
      minLength: {
        value: 3,
        message: "حداقل ۳ کاراکتر باشد"
      }
    },
    message: {
      required: "متن تیکت اجباری است.",
      minLength: {
        value: 10,
        message: "طول پیام حداقل ۱۰ کاراکتر باشد"
      }
    }
  };

  return (
    <div className={classJoin(["flex rounded-2.5xl bg-neutral400", className])} style={style} {...restProps}>
      <div className="w-full px-14 py-8">
        <h1 className="text-2xl font-bold">ایجاد تیکت جدید</h1>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="mt-13 flex flex-col">
            <label className="pb-3 text-base font-bold">عنوان تیکت</label>
            <input
              className="rounded-llg border border-neutral400-border px-4 py-3 focus:outline-0 "
              placeholder="عنوان تیکت خود را وارد کنید..."
              {...register("title", registerOptions.title)}
            />
            <small className="px-2 text-pailred">{errors?.title && errors.title.message}</small>
          </div>
          <div className="mt-13 flex flex-col">
            <label className="pb-3 text-base font-bold">متن تیکت</label>
            <textarea
              rows={6}
              className="box-border rounded-llg  border border-neutral400-border px-5 py-3 focus:outline-0 "
              placeholder="متن تیکت را وارد کنید..."
              {...register("message", registerOptions.message)}
            />
            <small className="px-2 text-pailred">{errors?.message && errors.message.message}</small>
          </div>
          <div className="flex justify-end">
            <button className=" mt-9 mb-4 w-60 rounded-llg bg-pailred py-4 text-base font-bold text-white  	">
              ارسال تیکت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SendTicket;
