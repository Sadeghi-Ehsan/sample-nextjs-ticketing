import { FunctionComponent, useId } from "react";
import { classJoin } from "../../../utils/helper";
import { ISendTicketProps } from "./types";
import { useForm } from "react-hook-form";

const SendTicket: FunctionComponent<ISendTicketProps> = ({
  message,
  onClick,
  title,
  received,
  uid,
  className,
  style,
  ...restProps
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const id = useId();
  const handleRegistration = (data: any) => console.log({ ...data, id });
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
      className={classJoin(["rounded-xxxl` relative  flex w-full  flex-col  rounded-2.5xl bg-neutral400", className])}
      style={{ width: "1170px", minHeight: "577px" }}
      {...restProps}
    >
      <div className="flex flex-col px-14 pt-8">
        <h1 className="text-2xl font-bold">ایجاد تیکت جدید</h1>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="mt-13 flex flex-col">
            <label className="pb-3 text-base font-bold">عنوان تیکت</label>
            <input
              className="rounded-llg	 border  border-neutral400-border px-4 py-3 focus:outline-0 "
              placeholder="عنوان تیکت خود را وارد کنید..."
              {...register("title", registerOptions.title)}
            />
            <small className="p-2 text-pailred">{errors?.title && errors.title.message}</small>
          </div>
          <div className="mt-13 flex flex-col">
            <label className="pb-3 text-base font-bold">متن تیکت</label>
            <textarea
              className=" rounded-llg border  border-neutral400-border px-5 py-3 focus:outline-0"
              placeholder="متن تیکت را وارد کنید..."
              {...register("message", registerOptions.message)}
            />
            <small className="p-2 text-pailred">{errors?.message && errors.message.message}</small>
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
