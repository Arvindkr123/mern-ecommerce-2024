import app from "./src/app.js";
import connectDB from "./src/config/db.connection.js";
import { PORT } from "./src/config/envVar.config.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server listening on http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
