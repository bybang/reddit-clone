import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();

  return (
    <div
      className={`relative h-10 w-10 rounded-full overflow-hidden border-gray-300 bg-white ${
        large && "w-20 h-20"
      }`}
    >
      <img
        src={`
        https://api.dicebear.com/5.x/adventurer/svg?seed=${
          seed || session?.user?.name || "placeholder"
        }`}
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
