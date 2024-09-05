import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal",
  texts: "text-[15px] font-normal",
  textmd: "text-[16px] font-normal lg:text-[13px]",
  textlg: "text-[24px] font-normal lg:text-[20px] md:text-[22px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
