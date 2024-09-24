import fs from "fs";
import path from "path";

export const getLanguages = () => {
  const sharedFolderPath = path.join(process.cwd(), "shared");
  const directories = fs
    .readdirSync(sharedFolderPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return directories;
};
