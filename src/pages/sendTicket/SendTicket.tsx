import { FunctionComponent, useId } from "react";
import { useForm } from "react-hook-form";
import { classJoin } from "../../utils/helper";
import { ISendTicketProps } from "./types";
import { useRouter } from "next/router";
import { NextPage } from "next";

const SendTicket: NextPage<ISendTicketProps> = ({
  message,
  onClick,
  title,
  received,
  uid,
  className,
  style,
  ...restProps
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const id = useId();
  const handleRegistration = (data: any) => {
    console.log({ ...data, id });
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
    <div
      className={classJoin(["flex rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "577px" }}
      {...restProps}
    >
      <div className="w-full px-14 pt-8">
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
