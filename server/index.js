import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS, WEDDING_PACKAGES, ATELIER_INFO } from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory inquiry storage (for demonstration and logging)
const inquiries = [];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    atelier: ATELIER_INFO.brandName,
    weaver: ATELIER_INFO.masterWeaver,
    timestamp: new Date().toISOString()
  });
});

// Get Atelier Info
app.get('/api/info', (req, res) => {
  res.json(ATELIER_INFO);
});

// Get All Products / Collections
app.get('/api/products', (req, res) => {
  const { category, weaveType } = req.query;
  let results = [...PRODUCTS];

  if (category && category !== 'all') {
    results = results.filter(p => p.category === category);
  }
  if (weaveType) {
    results = results.filter(p => p.weaveType === weaveType);
  }

  res.json({
    total: results.length,
    products: results
  });
});

// Get Specific Product by ID
app.get('/api/products/:id', (req, res) => {
  const product = PRODUCTS.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Creation not found' });
  }
  res.json(product);
});

// Get Wedding Packages
app.get('/api/packages', (req, res) => {
  res.json(WEDDING_PACKAGES);
});

// Submit Custom Loom Inquiry
app.post('/api/inquiries', (req, res) => {
  const {
    clientName,
    clientPhone,
    weaveType,
    ensemble,
    baseColor,
    accentColor,
    embellishment,
    eventDate,
    notes
  } = req.body;

  if (!weaveType || !ensemble) {
    return res.status(400).json({ error: 'weaveType and ensemble are required' });
  }

  const inquiry = {
    id: `INQ-${Date.now()}`,
    clientName: clientName || 'Anonymous Client',
    clientPhone: clientPhone || 'N/A',
    weaveType,
    ensemble,
    baseColor,
    accentColor,
    embellishment,
    eventDate,
    notes,
    createdAt: new Date().toISOString(),
    status: 'received'
  };

  inquiries.push(inquiry);
  console.log(`[Atelier Inquiry Received] ID: ${inquiry.id} from ${inquiry.clientName}`);

  res.status(201).json({
    success: true,
    message: 'Inquiry received. Artisan Jesutofunmi will review your specifications.',
    inquiryId: inquiry.id
  });
});

// Calculate Aso Ebi Quote Proposal
app.post('/api/aso-ebi-quote', (req, res) => {
  const { guestCount, bundleType, packagingTier, destination, eventDate } = req.body;
  const count = Number(guestCount) || 30;

  let leadWeeks = '2–3 weeks';
  if (count > 20 && count <= 50) leadWeeks = '3–4 weeks';
  else if (count > 50 && count <= 100) leadWeeks = '4–6 weeks';
  else if (count > 100) leadWeeks = '6–8 weeks';

  let volumeTier = 'Standard Artisanal Commission';
  if (count >= 100) volumeTier = 'VIP Wholesale Tier (15% Volume Rebate)';
  else if (count >= 50) volumeTier = 'Royal Bulk Tier (10% Volume Rebate)';
  else if (count >= 25) volumeTier = 'Group Privilege Tier (5% Volume Rebate)';

  res.json({
    guestCount: count,
    bundleType: bundleType || 'Gele & Ipele Set',
    packagingTier: packagingTier || 'Rigid Gold-Foil Keepsake Box',
    destination: destination || 'Lagos / Nigeria',
    eventDate: eventDate || null,
    volumeTier,
    estimatedLeadWeeks: leadWeeks,
    dyeGuarantee: '100% Kettle Batch Harmonized',
    contactArtisanUrl: `https://wa.me/${ATELIER_INFO.phone}?text=Hello%20Jesutofunmi,%20I%20am%20inquiring%20about%20an%20Aso%20Ebi%20order%20for%20${count}%20guests`
  });
});

// Serve frontend build in production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✨ Threads of Heritage Server running on http://localhost:${PORT}`);
  console.log(`🧵 Purveyor of Luxurious Aso Oke — Master Artisan: ${ATELIER_INFO.masterWeaver}`);
});
