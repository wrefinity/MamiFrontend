import "./formComponents.scss"
type PartialInputProps = Pick<
  React.ComponentPropsWithoutRef<"input">,
  "className" | "style"
>;

type Props = {
  value: string;
  onChange(value: string): void;
  size?: number;
  validationPattern?: RegExp;
} & PartialInputProps;

const OtpInput = (props: Props) => {
  const {
    size = 6,
    validationPattern = /[0-9]{1}/,
    value,
    onChange,
    className,
    ...restProps
  } = props;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const elem = e.target;
    const val = e.target.value;
    if (!validationPattern.test(val) && val !== "") return;
    const valueArr = value.split("");
    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);
    onChange(newVal);

    //focus the next element if there's a value
    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };

  const arr = new Array(size).fill("-");
  return (
    <div className="otpInputContainer">
      {arr.map((_, index) => {
        return (
          <input
            key={index}
            {...restProps}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={6}
            value={value.at(index) ?? ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
            onPaste={handlePaste}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;