import * as React from "react"

import {cn} from "@/lib/utils"

type InputProps = {
    type: string,
    className?: string,
    id: string,
    placeholder: string,
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
    const {type, className = '', id, placeholder, ...rest} = props;
    return (
        <input
            type={type}
            className={cn(
                "flex h-[55px] w-full rounded-full border bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            id={id}
            placeholder={placeholder}
            {...rest}
        />
    );
}
