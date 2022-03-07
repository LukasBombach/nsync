import chokidar from "chokidar";

chokidar
  .watch("/Applications/**/*", {
    ignored: [/\/\./, /\.app\/.+/],
  })
  .on("all", (event, path) => {
    console.log(event, path);
  });
