import express from 'express';
import { handler } from './dist/server/entry.mjs';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();

// Lista blanca de dominios permitidos
const whitelist = ['http://aicvanalizer.online', 'http://www.aicvanalizer.online', 'http://localhost:3000', 'http://localhost:4321', "https://aicvanalizer.onrender.com"];

// Configurar CORS con opciones avanzadas y mensaje de error personalizado
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permitir cookies
  optionsSuccessStatus: 204, // Para navegadores que soportan 204
};

app.use(cors(corsOptions));

// Middleware de logging personalizado
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${req.ip}`);
  next();
});

// Configurar el rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 solicitudes por IP
  standardHeaders: true, // Devolver información de rate limit en las cabeceras `RateLimit-*`
  legacyHeaders: false, // Desactivar las cabeceras `X-RateLimit-*`
  handler: (req, res, /*next*/) => {
    console.log(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).send('Too many requests');
  }
});

// Aplicar el middleware de rate limit a todas las rutas
app.use(limiter);

// Manejar las solicitudes con el servidor de Astro
app.use(handler);

// Middleware de manejo de errores de CORS
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'Access denied due to CORS policy' });
  } else {
    next(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
