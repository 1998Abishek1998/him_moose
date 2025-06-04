import type React from "react"
import CustomLabel from "./Label"

const Title = ({
    children,
    bold
}: {
    children: React.ReactNode,
    bold?: boolean
}) => {
    return (
        <div className={"text-center mb-10 relative"}>
            <CustomLabel size="xl2" color="text-orange-600" bold={bold} children={children} className="mb-2"/>
            <span className="
               absolute 
               bottom-[-2] 
               left-[41%]
               w-[17.333333%] 
               h-[3px] 
               bg-orange-600
             ">
            </span>
        </div>
    )
}

export default Title