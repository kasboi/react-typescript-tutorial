import React from "react"

interface ButtonProps {
    children: React.ReactNode
}

export const Button = (props: { children: React.ReactNode }): React.JSX.Element => {
    return <button>{props.children}</button>
}

const Parent = () => {
    return (
        <>
            {/* @ts-expect-error */}
            <Button></Button>
            <Button>Hello world!</Button>
        </>
    )
}
