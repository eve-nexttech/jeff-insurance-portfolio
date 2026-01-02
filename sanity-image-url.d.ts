declare module '@sanity/image-url' {
  export type SanityImageSource = string | { asset: { _ref: string } } | object;

  export interface ImageUrlBuilder {
    image(source: SanityImageSource): ImageUrlBuilder;
    width(width: number): ImageUrlBuilder;
    height(height: number): ImageUrlBuilder;
    url(): string;
    projectId(projectId: string): ImageUrlBuilder;
    dataset(dataset: string): ImageUrlBuilder;
    bg(bg: string): ImageUrlBuilder;
    dpr(dpr: number): ImageUrlBuilder;
    fit(value: string): ImageUrlBuilder;
  }

  export default function imageUrlBuilder(client: unknown): ImageUrlBuilder;
}
