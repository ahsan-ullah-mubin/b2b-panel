"use client";
import { Button, Checkbox, Input } from "antd";
import Title from "antd/es/typography/Title";
import { Controller, useForm } from "react-hook-form";
import { MdMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
type LoginFormInputs = {
  email: string;
  password: string;
  remember: boolean;
};
export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Form Submitted: ", data);
  };
  return (
    <div className="w-full">
      <Title level={4} style={{ marginTop: 43, textAlign: "center" }}>
        Sign in
      </Title>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-4 mt-6">
        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter your email"
                prefix={<MdMailOutline />}
                style={{
                  borderRadius: 16,
                  padding: 16,
                  background: "rgba(239, 241, 244, 0.94)",
                }}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-start text-sm">
              {errors.email.message}
            </p>
          )}
        </div>
        {/* Password */}
        <div className="mt-6 mb-4">
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Enter password"
                prefix={<TbLockPassword />}
                style={{
                  borderRadius: 16,
                  background: "rgba(239, 241, 244, 0.94)",
                  padding: 16,
                }}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-start text-sm">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* Remember Me Checkbox */}
        <div className="mb-6 flex items-center justify-between">
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                style={{
                  color: "#292828",
                  fontSize: 14,
                  fontWeight: 400,

                  letterSpacing: 0.14,
                }}
              >
                Remember Me
              </Checkbox>
            )}
          />

          <button className="text-sm text-[#292828] font-normal leading-[0.14px]">
            Forgot Password?
          </button>
        </div>
        {/* Submit */}
        <Button
          // type="primary"
          htmlType="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          style={{
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 100,
            padding: "18px 16px",
            height: 56,
          }}
          className="w-full"
        >
          Login
        </Button>
      </form>

      <div>
        <span className="text-[#292828] text-base font-medium leading-[0.16px]">
          Don&apos;t have an account? Please,{" "}
          <span className="text-[#8E191C]">Sign up</span>
        </span>
      </div>
      <div className="my-4 !text-[#616060] text-[15px] font-medium  !leading-[0.15px]">
        <span>Or Sign In with</span>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-3 gap-4  w-full h-[56px]">
        <button
          type="button"
          className="flex items-center justify-center"
          style={{
            borderRadius: 16,
            border: " 1px solid #F6F9FC",
            background: "#FFF",
            boxShadow: " 0 3px 4px 0 rgba(0, 0, 0, 0.11)",
          }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex items-center justify-center"
          style={{
            borderRadius: 16,
            border: " 1px solid #F6F9FC",
            background: "#FFF",
            boxShadow: " 0 3px 4px 0 rgba(0, 0, 0, 0.11)",
          }}
        >
          <svg
            className="w-6 h-6 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button
          type="button"
          className="flex items-center justify-center"
          style={{
            borderRadius: 16,
            border: " 1px solid #F6F9FC",
            background: "#FFF",
            boxShadow: " 0 3px 4px 0 rgba(0, 0, 0, 0.11)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.6641 17.5859C19.3874 18.2651 19.0454 18.9128 18.6436 19.5189C18.1068 20.326 17.666 20.8837 17.3282 21.1941C16.8034 21.7013 16.2396 21.9623 15.6369 21.977C15.2051 21.977 14.6833 21.8476 14.0756 21.5845C13.4659 21.3225 12.9061 21.1941 12.3933 21.1941C11.8566 21.1941 11.2808 21.3225 10.6641 21.5845C10.0484 21.8476 9.55057 21.9854 9.16974 21.998C8.59299 22.0244 8.01624 21.7571 7.44149 21.1941C7.07465 20.8574 6.61586 20.2787 6.0651 19.46C5.47535 18.5877 4.99057 17.5722 4.61073 16.4179C4.20391 15.1689 4 13.9609 4 12.7908C4 11.4512 4.27488 10.2948 4.82564 9.32671C5.2422 8.56642 5.83774 7.93187 6.55488 7.4842C7.26204 7.0377 8.06931 6.79728 8.89386 6.78761C9.35366 6.78761 9.95639 6.93703 10.7031 7.23166C11.4497 7.5263 11.9295 7.67572 12.1384 7.67572C12.2964 7.67572 12.8271 7.49999 13.7307 7.15169C14.5834 6.82865 15.3031 6.69501 15.8928 6.74762C17.4921 6.88336 18.6926 7.54629 19.4912 8.74166C18.0618 9.65397 17.3552 10.9304 17.3692 12.5687C17.3811 13.8451 17.822 14.9069 18.6856 15.7497C19.0674 16.1344 19.5129 16.4421 20 16.6578C19.894 16.9809 19.7821 17.2892 19.6641 17.5859V17.5859ZM15.9988 2.40073C15.9988 3.40038 15.6509 4.33479 14.9602 5.19869C14.1246 6.2257 13.115 6.82023 12.0205 6.72658C12.0062 6.60087 11.9992 6.47437 11.9995 6.34776C11.9995 5.38705 12.3953 4.36004 13.102 3.51928C13.4539 3.09417 13.9017 2.73956 14.4444 2.45755C14.9862 2.17975 15.498 2.02612 15.9798 1.99982C15.9928 2.13451 15.9988 2.26814 15.9988 2.40073V2.40073Z"
              fill="#383A3A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
