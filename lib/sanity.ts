import { client } from "@/app/sanity/client";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
