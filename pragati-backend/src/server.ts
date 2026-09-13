import app from './app';
import { config } from './config/unifiedConfig';

const startServer = async () => {
  try {
    app.listen(config.app.port, () => {
      console.log(`Pragati Backend running on http://localhost:${config.app.port} in ${config.app.env} mode`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
