import { sendEmail } from "@/utils/send-email";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  file: FileList;
};

interface ContactUsProps {
  data: {
    title: string;
    content: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      file?: string;
      submit: string;
    };
  };
}

export default function ContactUs({ data }: ContactUsProps) {
  const searchParams = useSearchParams();
  const subjectFromParams = searchParams.get("subject");
  const { register, handleSubmit } = useForm<FormData>();
  const [fileContent, setFileContent] = useState<string | null>(null);

  const onSubmit = (formData: FormData) => {
    const subject = formData.subject || "";
    const fileName = formData.file[0].name;
    const fileType = formData.file[0].type;

    const dataToSend = {
      ...formData,
      subject,
      fileName,
      fileType,
      fileContent,
    };

    sendEmail(dataToSend);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFileContent(base64String.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative container mx-auto px-4 mt-20 text-pink">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
        <p className="text-lg">{data?.content}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium ">
              {data.form.name}
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium">
              {data.form.email}
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium"
            >
              {data.form.subject}
            </label>
            <input
              type="subject"
              placeholder="Subject"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
              {...register("subject", { required: true })}
              defaultValue={subjectFromParams || ""}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium "
            >
              {data.form.message}
            </label>
            <textarea
              rows={4}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
              {...register("message", { required: true })}
            ></textarea>
            <input
              type="file"
              className="mt-4"
              {...register("file", { required: false })}
              onChange={handleFileChange}
            />
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none">
              {data.form.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
