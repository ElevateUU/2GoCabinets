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
        <div className="flex flex-col py-5 md:flex-row gap-5 w-full">
            <Image
                className="rounded-lg max-w-full"
                src={imageSrc}
                width={423}
                height={337}
                alt={name}
            />
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <p className="text-xl text-modaltext">{name}</p>
                    <div className="flex">
                        {[...Array(stars)].map((_, i) => (
                            <Image key={i} src={Star} alt='star' height={16} width={16}></Image>
                        ))}
                    </div>
                </div>
                <p className="w-full text-center md:w-[26rem]">{description}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
