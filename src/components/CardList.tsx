import { FC } from "react"
import { CardItem } from "./CardItem"
export type TypeData = {
    title: string
    text: string
    url?: string
}

export const CardList: FC = () => {
    const dataList: TypeData[] = [
        {
            title: 'Card title', 
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            url: 'https://play-lh.googleusercontent.com/LECOTVlGWVclV1VU3-1YcNoQdF2f37jQaQhX353GkySuwK9EcPXgy92YgKB3QeNvZMXe'
        },
        {
            title: 'Special title treatment', 
            text: "With supporting text below as a natural lead-in to additional content.",
        }
    ]

    return (
        <div className="card-columns">
            {dataList.map( (item) => (
                <CardItem {...item}/>
            ))}
        </div>
    )
}