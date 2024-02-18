import React from "react"

type BtnProps = {
    className: string
}

export const Button = ({ className }: BtnProps) => {
    return <button className={className}></button>
}

const Parent = () => {
    return (
        <>
            {/* @ts-expect-error */}
            <Button></Button>

            <Button className="my-class"></Button>
        </>
    )
}
