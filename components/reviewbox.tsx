import Image from 'next/image'
import React from 'react'

import { ReviewCardProps } from "@/interfaces/reviewCardProps"

import Star from "@/public/assets/star.svg"

const ReviewCard: React.FC<ReviewCardProps> = ({ imageSrc, name, stars, description }) => {
    return (
        <div className="flex flex-col py-5 sm:flex sm:flex-col gap-5">
            <div className="relative w-full h-0 pb-[78.96%] rounded-lg overflow-hidden">
                <Image
                    src={imageSrc}
                    layout="fill"
                    objectFit="cover"
                    alt={name}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                />
            </div>
             <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <p className="text-xl text-modaltext">{name}</p>
                    <div className="flex">
                        {[...Array(stars)].map((_, i) => (
                            <Image key={i} src={Star} alt="star" height={16} width={16}></Image>
                        ))}
                    </div>
                </div>
                <p className="w-full text-center md:w-[26rem]">{description}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
