import Image, { StaticImageData } from 'next/image'
import React from 'react'

import Star from "@/public/assets/star.svg"

interface ReviewCardProps {
    imageSrc: StaticImageData;
    name: string;
    stars: number;
    description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ imageSrc, name, stars, description }) => {
    return (
        <div className="flex flex-row sm:flex sm:flex-col gap-5">
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
                <p className="w-[26rem]">{description}</p>
            </div>
        </div>
    );
}

export default ReviewCard;