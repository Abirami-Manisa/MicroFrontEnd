import React, { type Dispatch, useRef } from "react";
import { Icon } from "@iconify/react";

interface IFloatingLabelInput {
  type?: "text" | "email" | "password";
  name?: string;
  disabled?: boolean;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  showLabel?: any;
  maxLength?: any;
}

export function FloatingLabelInput(props: Readonly<IFloatingLabelInput>) {
  const { type, name, value, setValue, disabled, showLabel, maxLength } = props;

  const inpurRef: any = useRef<any>(null);
  const [showPassword, setShowPassword] = React.useState(false);

  function handleOnChange(e: any) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <label htmlFor="input" ref={inpurRef} className="block relative ">
      {showLabel !== "false" && <span className="text-sm">{name}</span>}
      <input
        id={name}
        autoComplete="off"
        className="form-input mt-1.5 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
        placeholder={name}
        type={showPassword ? "text" : type}
        disabled={disabled}
        onChange={handleOnChange}
        maxLength={maxLength}
        value={value}
      />
      {type === "password" && (
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="absolute right-0 h-12 w-12 inline-flex items-center justify-center focus:outline-none"
        >
          <Icon
            color="rgba(55, 65, 81, 1)"
            icon={!showPassword ? "akar-icons:eye" : "akar-icons:eye-slashed"}
            width={20}
          />
        </button>
      )}
    </label>
  );
}
