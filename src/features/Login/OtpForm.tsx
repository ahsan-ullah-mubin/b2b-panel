"use client";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React from "react";
import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
type FormValues = {
  otp: string;
};
export default function OtpForm() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("OTP submitted:", data.otp);
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("OTP submitted: " + data.otp);
  };
  return (
    <main className="mt-[64px] w-full px-6 py-10">
      <div className="">
        <Title
          style={{
            color: "#292828",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "120%",
          }}
        >
          OTP Verification
        </Title>
        <Text
          style={{
            color: "var(--Color-Text-Txt-Grey-500, #616060)",
            textAlign: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "28px",
            display: "inline-block",
            marginTop: 10,
          }}
        >
          Enter the verification code we sent <br /> to+880123456789
        </Text>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 ">
        <Controller
          name="otp"
          control={control}
          rules={{
            required: "OTP is required",
            minLength: { value: 5, message: "OTP must be 5 digits" },
            maxLength: { value: 5, message: "OTP must be 5 digits" },
          }}
          render={({ field }) => (
            <Input.OTP
              {...field}
              length={5}
              autoFocus
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            />
          )}
        />
        {errors.otp && (
          <p className="text-red-500 text-start text-sm">
            {errors.otp.message}
          </p>
        )}

        <Button
          //   type="primary"
          htmlType="submit"
          loading={isSubmitting}
          style={{
            padding: "18px 16px",
            height: 56,
            borderRadius: 100,
            fontSize: 16,
            fontWeight: 700,
          }}
          className="w-full my-8 "
        >
          Verify
        </Button>
      </form>
      <div className="flex  items-center justify-center  gap-1">
        {/* Info Text */}
        <p
          style={{
            color: "var(--Color-Text-Txt-Grey-500, #616060)",
            textAlign: "center",

            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Didn&apos;t Receive the OTP?
        </p>

        {/* Resend Link */}
        <button
          type="button"
          style={{
            color: "var(--Primary-Color-Red-Red-500, #8E191C)",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          //   onClick={() => alert("Resend OTP clicked")}
        >
          Resend OTP
        </button>
      </div>
    </main>
  );
}
