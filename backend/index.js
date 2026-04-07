const { default: app } = await import("./app.js");
const { default: config } = await import("./config.js");

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
