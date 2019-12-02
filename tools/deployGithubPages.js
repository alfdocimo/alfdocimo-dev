import ghpages from "gh-pages";

/**
 * If `git` is not on your path, provide the path as shown below.
 */
ghpages.publish("dist", {
  branch: "master",
  repo: "https://github.com/alfdocimo/alfdocimo-dev",
  message: "Auto-generated commit ( deploy build )",
  user: {
    name: "alfdocimo",
    email: "alfdocimo@gmail.com",
    password: process.env.GITHUB_PASSWORD
  }
});
