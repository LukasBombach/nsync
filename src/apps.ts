import chokidar from "chokidar";

chokidar
  .watch("/Applications/**/*", {
    ignored: [/\/\./, /\.app\/.+/],
    // followSymlinks: false,
  })
  .on("all", (event, path) => {
    console.log(event, path);
  });
