import Image, { StaticImageData } from "next/image";

interface CardProps {
  backgroundImage: StaticImageData;
  circleImage: StaticImageData;
  name: string;
  experience: string;
}

const Card: React.FC<CardProps> = ({
  backgroundImage,
  circleImage,
  name,
  experience,
}) => (
  <div className="bg-white w-[338px] h-[328px] rounded-2xl relative overflow-hidden">
    <div className="relative h-[164px]">
      <Image src={backgroundImage.src} layout="fill" objectFit="cover" alt="" />
    </div>
    <div className="absolute inset-5 flex justify-start items-center">
      <div className="bg-white rounded-full p-1 w-[128px] h-[128px] overflow-hidden">
        <Image
          src={circleImage.src}
          width={128}
          height={128}
          className="rounded-full"
          alt=""
        />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-2xl">{name}</p>
      <p className="text-modaltext">{experience}</p>
    </div>
  </div>
);

export default Card;
