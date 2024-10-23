// app.config.js
import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    backendUrl: process.env.BACKEND_URL,
  },
});
