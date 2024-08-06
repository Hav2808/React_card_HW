import { PropsWithChildren } from "react"


export const CardModal = ({children}: PropsWithChildren) => {
    return (
        <div className="card text-white bg-secondary mb-3">
            {children}
        </div>
    )
}