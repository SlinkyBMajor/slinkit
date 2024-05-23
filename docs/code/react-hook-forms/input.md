# Reusable react hook forms input

```jsx
import React from "react";
import { UseFormRegisterReturn, useFormContext } from "react-hook-form";
import { get } from "lodash";
import { InputErrorStyle } from "./types";
import { classNames } from "@/lib/styling";

interface RHFInputProps
  extends UseFormRegisterReturn<string>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "name" | "onBlur" | "onChange"
    > {
  errorStyle?: InputErrorStyle;
  className?: string;
}

function RHFInput(
  { className, errorStyle = "border", name, ...rest }: RHFInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <input
      className={classNames(
        "border border-transparent",
        className,
        "type" in get(errors, name, {}) &&
          (errorStyle === "border"
            ? "border border-red-500 dark:border-red-400"
            : "placeholder:text-red-500 dark:placeholder:text-red-400")
      )}
      name={name}
      {...rest}
      ref={ref}
    />
  );
}

export default React.forwardRef<HTMLInputElement, RHFInputProps>(RHFInput);

```
