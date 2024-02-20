import React from "react"

interface Props {
    className: string
}

// /* @ts-expect-error */
export const Button = (props: Props): React.JSX.Element => {
    return <div>Hello</div>
}

// export const Button: React.FC<Props> = (props: Props) => {
//     return <div>Hello</div>
// } Both works...

const Parent = () => {
    return (
        <>
            <Button className="my-class"></Button>
        </>
    )
}
