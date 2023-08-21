import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import PlayButton from "./PlayButton";

interface SongItemProps {
  onClick: (id: string) => void;
  data: Song;
}

function SongItem({ data, onClick }: SongItemProps) {
  const image = useLoadImage(data);

  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
      onClick={() => onClick(data.id)}
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={image || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full gap-y-1 pt-4">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-4">
        <PlayButton />
      </div>
    </div>
  );
}

export default SongItem;
