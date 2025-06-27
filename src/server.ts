// alex-dev-BE/src/server.ts
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server avviato sulla porta ${PORT}`);
});
