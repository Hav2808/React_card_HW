import { FC } from "react"
import { CardModal } from "./CardModal"
import { TypeData } from "./CardList"

export const CardItem: FC<TypeData> = (item) => {
    const {title, text, url} = item

    return (
        <CardModal>
            {url && <img 
                src="https://play-lh.googleusercontent.com/LECOTVlGWVclV1VU3-1YcNoQdF2f37jQaQhX353GkySuwK9EcPXgy92YgKB3QeNvZMXe" 
                className="card-img-top" 
                alt="ffff"
            />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </CardModal>
    )
}