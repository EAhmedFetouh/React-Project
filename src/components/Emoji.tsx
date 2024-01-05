import meh from "../assets/meh.webp";
import thembUp from "../assets/thumbs-up.webp";
import bullEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
export const Emoji = ({ rating }: Props) => {
  const emojiMapping: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "mah", boxSize: "25px" },
    4: { src: thembUp, alt: "recomended", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <>
      <Image {...emojiMapping[rating]} />
    </>
  );
};
