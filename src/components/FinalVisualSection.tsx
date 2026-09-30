import fs from "node:fs";
import path from "node:path";
import FinalVisualPanel from "@/components/FinalVisualPanel";

const IMAGE_PATH = "/images/personal/workspace.jpg";

export default function FinalVisualSection() {
  const hasImage = fs.existsSync(
    path.join(process.cwd(), "public", IMAGE_PATH)
  );

  return <FinalVisualPanel imagePath={IMAGE_PATH} hasImage={hasImage} />;
}
