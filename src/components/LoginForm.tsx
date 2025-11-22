// @ts-nocheck
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  loginWithGoogle,
  loginWithOTP,
  verifyOneTimePassword,
} from "@/utils/actions";
import SumbitFormButton from "./SumbitFormButton";
import { setegid } from "process";

export default function LoginForm() {
  const [isOTPRequested, setIsOTPRequested] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [optError, setOtpError] = React.useState("");

  async function handleEmailSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    setEmail(formData.get("email"));
    const status = await loginWithOTP(formData);
    console.log("status", status);

    setIsOTPRequested(status === "ok");

    if (status !== "ok") {
      setEmailError(status);
    } else {
      setEmailError("");
    }
  }

  async function handleOTPVerify(event) {
    event.preventDefault();
    console.log("Submitted OTP:", token);
    const status = await verifyOneTimePassword(email, token);

    if (status !== "ok") {
      if (status === "Token has expired or is invalid")
        setOtpError("Code has expired or is invalid");
      else setOtpError(status);
    }
  }

  function handleOpenChange(isOpen) {
    setIsOTPRequested(isOpen);
    setToken("");
    setOtpError("");
  }

  return (
    <>
      <div className="flex h-dvh items-center justify-center flex-col gap-3">
        <h1 className="text-3xl font-bold">Login to access courses</h1>
        <form
          onSubmit={handleEmailSubmit}
          // action={loginWithOTP}
          className="flex flex-col w-100 mx-5 mt-5 gap-2"
        >
          <Input className="" type="email" name="email" placeholder="Email" />
          {emailError && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {emailError}
            </p>
          )}
          <SumbitFormButton className="">
            Send one-time password
          </SumbitFormButton>
        </form>

        <form
          action={loginWithGoogle}
          className="flex flex-col w-100 mx-5 gap-2"
        >
          <Button className="" variant="outline">
            <svg
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
              data--h-bstatus="0OBSERVED"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                data--h-bstatus="0OBSERVED"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                data--h-bstatus="0OBSERVED"
              ></g>
              <g id="SVGRepo_iconCarrier" data--h-bstatus="0OBSERVED">
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                  data--h-bstatus="0OBSERVED"
                ></path>
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                  data--h-bstatus="0OBSERVED"
                ></path>
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                  data--h-bstatus="0OBSERVED"
                ></path>
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                  data--h-bstatus="0OBSERVED"
                ></path>
              </g>
            </svg>
            Login with Google
          </Button>
        </form>
        <p className="max-w-sm text-center">
          Note that, for demo puposes, you are not required to go through any
          purchase process, you just need to create an account and you'll be
          able to explore all platform features..
        </p>
      </div>

      <Dialog open={isOTPRequested} onOpenChange={handleOpenChange}>
        <DialogContent
          onPointerDownOutside={(e) => e.preventDefault()}
          className="sm:max-w-[425px]"
        >
          <DialogHeader className="text-center">
            <DialogTitle>Confirm Password</DialogTitle>
            <DialogDescription>
              Check your email, we sent you a one-time code
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleOTPVerify}>
            <div className="flex justify-center">
              {" "}
              <InputOTP
                className="justify-center"
                value={token}
                onChange={(token) => setToken(token)}
                maxLength={6}
              >
                <InputOTPGroup>
                  <InputOTPSlot className="" index={0} />
                  <InputOTPSlot className="" index={1} />
                  <InputOTPSlot className="" index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot className="" index={3} />
                  <InputOTPSlot className="" index={4} />
                  <InputOTPSlot className="" index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            {optError && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {optError}
              </p>
            )}{" "}
            <DialogFooter className="items-center mt-4 sm:justify-center">
              <DialogClose asChild>
                <Button className="w-full sm:w-[50%] " variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <SumbitFormButton
                disabled={token.length < 6}
                className="w-full sm:w-[50%]"
              >
                Submit
              </SumbitFormButton>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
