import { getBufferImage } from "./getBufferImage";

export default function insertBufferImages<StoryContentItem extends object>(
  content: StoryContentItem[],
  dataEndpoint: string,
  storyId: string
) {
  return Promise.all(
    content.map(async (item) => {
      if (item.hasOwnProperty("image")) {
        const imageItem = item as StoryContentItemImg;
        const imgSrc = `${dataEndpoint}/${storyId}/${imageItem.image.name}.${imageItem.image.extension}`;

        try {
          const { base64 } = await getBufferImage(imgSrc);

          return {
            ...item,
            image: {
              ...imageItem.image,
              base64,
              imgSrc,
            },
          };
        } catch (error) {
          return {
            ...item,
            image: {
              ...imageItem.image,
              imgSrc,
            },
          };
        }
      }

      return item;
    })
  );
}
