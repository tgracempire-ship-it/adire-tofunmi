import { app } from './app.js';
import { ATELIER_INFO } from './data.js';

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`✨ Threads of Heritage Server running on http://localhost:${PORT}`);
    console.log(`🧵 Purveyor of Luxurious Aso Oke — Master Artisan: ${ATELIER_INFO.masterWeaver}`);
  });
}

export default app;
