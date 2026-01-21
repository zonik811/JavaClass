# 🚀 Deployment Guide

## GitHub Repository
✅ **Subido a**: https://github.com/zonik811/JavaClass

---

## 📦 Opciones de Deployment

### 1. Netlify (Recomendado - Más Fácil)

#### Opción A: Netlify Drop
1. Ejecuta `npm run build` localmente
2. Ve a [Netlify Drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist/` al navegador
4. ¡Listo! Tu sitio estará en línea

#### Opción B: Conectar con GitHub
1. Ve a [Netlify](https://app.netlify.com)
2. Click en "New site from Git"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click en "Deploy site"

**URL ejemplo**: `https://java-course-platform.netlify.app`

---

### 2. Vercel

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

O desde la web:
1. Ve a [Vercel](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Configuración automática para Astro
4. Deploy

**URL ejemplo**: `https://java-course-platform.vercel.app`

---

### 3. GitHub Pages

1. Instala gh-pages:
```bash
npm install -D gh-pages
```

2. Agrega a `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Activa GitHub Pages en Settings → Pages → Source: `gh-pages` branch

**URL**: `https://zonik811.github.io/JavaClass`

---

### 4. Cloudflare Pages

1. Ve a [Cloudflare Pages](https://pages.cloudflare.com)
2. Conecta tu repositorio
3. Configuración:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
4. Deploy

---

### 5. Servidor Propio (Apache/Nginx)

1. Build:
```bash
npm run build
```

2. Copia `dist/` a tu servidor:
```bash
scp -r dist/* user@server:/var/www/html/
```

3. Configuración Nginx:
```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🔧 Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:

1. Crea `.env`:
```bash
PUBLIC_SITE_URL=https://tudominio.com
```

2. Usa en Astro:
```typescript
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
```

---

## 📊 Configuración de Analytics (Opcional)

### Google Analytics

1. Agrega a `src/layouts/BaseLayout.astro`:
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

---

## 🌐 Custom Domain

### Netlify:
1. Settings → Domain management
2. Add custom domain
3. Configura DNS en tu proveedor

### Vercel:
1. Settings → Domains
2. Add domain
3. Configura DNS

---

## ✅ Checklist Pre-Deploy

- [x] Build exitoso (`npm run build`)
- [x] Sin errores de TypeScript
- [x] Código subido a GitHub
- [ ] Configurar dominio personalizado (opcional)
- [ ] Agregar analytics (opcional)
- [ ] Configurar SEO meta tags (opcional)
- [ ] Agregar sitemap.xml (opcional)

---

## 🎯 URLs del Proyecto

- **GitHub**: https://github.com/zonik811/JavaClass
- **Netlify** (cuando despliegues): `https://[tu-sitio].netlify.app`
- **Vercel** (cuando despliegues): `https://[tu-sitio].vercel.app`

---

## 📝 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar TypeScript
npm run astro check

# Actualizar dependencias
npm update
```

---

## 🔄 Actualizar el Sitio

1. Haz cambios en el código
2. Commit:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

3. El sitio se actualizará automáticamente (si usas Netlify/Vercel con auto-deploy)

---

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
npm install
npm run build
```

### Error: "Port already in use"
```bash
# Cambia el puerto en package.json
"dev": "astro dev --port 3000"
```

### Build falla en producción
- Verifica que todas las dependencias estén en `dependencies`, no en `devDependencies`
- Ejecuta `npm run build` localmente para verificar

---

**¡Listo para desplegar! 🚀**
