import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { ReviewCardProps } from "@/interfaces/reviewCardProps"

import Star from "@/public/assets/star.svg"

const ReviewCard: React.FC<ReviewCardProps> = ({ imageSrc, name, stars, description }) => {
    return (
        <div className="flex flex-col py-5 sm:flex sm:flex-col gap-5">
            <Image
                className="rounded-lg"
                src={imageSrc}
                width={423}
                height={337}
                alt={""}
            />
             <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <p className="text-xl text-modaltext">{name}</p>
                    <div className="flex">
                        {[...Array(stars)].map((_, i) => (
                            <Image key={i} src={Star} alt={''} height={16} width={16}></Image>
                        ))}
                    </div>
                </div>
                <p className="w-full text-center md:w-[26rem]">{description}</p>
            </div>
        </div>
    );
}

export default ReviewCard;