import Image from 'next/image'
import React from 'react'
import './Gallery.css'

export default function Gallery() {
    return (
        <div>
            <div className="grid-wrapper">
                <div>
                    <Image src="/1.jpg" width={2000} height={3020} alt="random image" />
                </div>
                <div>
                    <Image src="/2.jpg" width={2000} height={3020} alt="random image" />
                </div>
                <div>
                    <Image src="/3.jpg" width={2000} height={3020} alt="random image" />
                </div>
                <div>
                    <Image src="/4.jpg" width={2000} height={3020} alt="random image" />
                </div>
                <div>
                    <Image src="/5.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/6.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/7.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/8.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/9.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/10.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/11.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/12.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/16.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
                <div>
                    <Image src="/17.jpg" width={2000} height={3020} alt="random image" />
                </div>
                <div>
                    <Image src="/18.jpg" width={2000} height={3020} alt="random image" />
                </div>
              
            </div>
        </div>
    )
}
