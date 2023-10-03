import fs from "fs";
import path from "path";

import { getPlaiceholder } from "plaiceholder";

export async function getBufferImage(src: string) {
  const buffer = fs.readFileSync(path.join("./public", src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
}
