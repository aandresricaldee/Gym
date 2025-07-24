# Guía de Publicación - Gym Routines Pro

## Opciones de Publicación (Ordenadas por Facilidad)

### 1. 🚀 **Vercel** (RECOMENDADO - GRATIS)
**Más fácil y rápido**

#### Pasos:
1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Conecta tu proyecto con GitHub:
   - Sube tu código a GitHub
   - En Vercel: "New Project" → Importar desde GitHub
3. Vercel detectará automáticamente que es Next.js
4. ¡Deploy automático! Tu app estará en: `https://tu-proyecto.vercel.app`

#### Ventajas:
- ✅ Completamente GRATIS
- ✅ Deploy automático en segundos
- ✅ SSL incluido (HTTPS)
- ✅ CDN global (carga rápida)
- ✅ Dominio personalizado gratis

---

### 2. 🌐 **Netlify** (GRATIS)
**Alternativa excelente**

#### Pasos:
1. Ejecuta: `npm run build` (crea la versión optimizada)
2. Sube la carpeta `out/` a [netlify.com](https://netlify.com)
3. Arrastra y suelta la carpeta en Netlify
4. ¡Listo! URL: `https://tu-app.netlify.app`

---

### 3. 🔧 **Railway** (GRATIS con límites)
**Para mayor control**

#### Pasos:
1. Cuenta en [railway.app](https://railway.app)
2. Conecta GitHub
3. Deploy automático
4. URL: `https://tu-app.railway.app`

---

### 4. 💻 **VPS Propio** (Más técnico)
**Si tienes servidor propio**

#### Comandos:
```bash
# En tu servidor
npm run build
npm start
# Configura nginx/apache para servir en puerto 80/443
```

---

## 📁 **Preparación de Videos**

### Antes de publicar, agrega tus videos:

1. **Crea los videos** (10-30 segundos cada uno):
   - `pushup.mp4` - Flexiones
   - `squat.mp4` - Sentadillas  
   - `pullup.mp4` - Dominadas
   - `plank.mp4` - Plancha
   - `deadlift.mp4` - Peso muerto
   - `burpee.mp4` - Burpees
   - `lunges.mp4` - Zancadas
   - `dips.mp4` - Fondos

2. **Colócalos en**: `public/videos/`

3. **Optimiza el tamaño**:
   ```bash
   # Opcional: Comprimir videos
   ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 output.mp4
   ```

---

## 🎯 **Recomendación Final**

### Para empezar YA:
1. **Sube a GitHub** tu código
2. **Conecta con Vercel** 
3. **Agrega tus videos** a `public/videos/`
4. **Comparte el link** con tus alumnos

### URL final será algo como:
`https://gym-routines-pro.vercel.app`

---

## 🔒 **Opciones de Privacidad**

### Si quieres restringir acceso:
- **Vercel Pro**: Protección con contraseña
- **Auth0**: Sistema de login
- **Simple password**: Agregar autenticación básica

---

## 📱 **Para que sea como una App**

Tus alumnos pueden:
1. Abrir en el navegador móvil
2. "Agregar a pantalla de inicio"
3. ¡Se comporta como app nativa!

---

## ⚡ **Deploy Rápido con Vercel**

```bash
# Instala Vercel CLI (opcional)
npm i -g vercel

# Deploy directo desde terminal
vercel

# Sigue las instrucciones
```

¿Quieres que te ayude con alguna de estas opciones específicamente?
