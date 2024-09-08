'use client'
import Image from "next/image"
import loader from '../../static/img/loader.png'


const Loader = () => {
    return (
        <div className="ready loaded">
            <div className="loader_box">
                <div className="loader-swapp">
                    <Image src={loader} alt="loader" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}

export default Loader;