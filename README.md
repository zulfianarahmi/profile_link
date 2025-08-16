# 🌸 Zulfiana Rahmi - Social Media Links Website 🐧

Website personal yang unik dengan tema **Linux** 🐧 dan **Bunga** 🌸 untuk Zulfiana Rahmi. Website ini menggabungkan estetika teknologi dengan keindahan alam, menampilkan link social media dengan desain yang menarik dan interaktif.

## ✨ Fitur Khusus

- 🐧 **Linux Theme**: Icon penguin Linux yang beranimasi
- 🌸 **Flower Effects**: Petal bunga yang jatuh dan berputar
- 💻 **Tech Elements**: Efek matrix, glitch, dan terminal
- 🎭 **Interactive Animations**: Hover effects, ripple, dan particle effects
- 🔒 **Cybersecurity Touch**: Tema keamanan dan cloud computing
- 📱 **Responsive Design**: Optimal di semua device
- 🎨 **Modern UI**: Gradient borders dan glassmorphism

## ✨ Fitur

- 🎨 Desain modern dengan gradient background
- 📱 Responsive design untuk semua device
- 🎭 Efek hover dan animasi yang smooth
- 🔗 Support untuk 5 platform social media:
  - Instagram
  - X (Twitter)
  - LinkedIn
  - GitHub
  - Threads
- ♿ Accessible design
- 🌙 Auto theme detection

## 🚀 Cara Penggunaan

### 1. Setup Awal
1. Download semua file ke folder yang sama
2. Buka file `script.js` dengan text editor
3. Edit konfigurasi sesuai profile Anda

### 2. Konfigurasi Profile
Edit bagian ini di `script.js`:

```javascript
const profileConfig = {
    name: "Nama Anda",                    // Ganti dengan nama Anda
    bio: "Deskripsi singkat",            // Ganti dengan bio Anda
    profileImage: "URL foto profile"     // Ganti dengan URL foto Anda
};
```

### 3. Konfigurasi Social Media Links
Edit bagian ini di `script.js`:

```javascript
const socialMediaConfig = {
    instagram: {
        url: "https://instagram.com/username_anda",
        name: "Instagram"
    },
    twitter: {
        url: "https://x.com/username_anda",
        name: "X (Twitter)"
    },
    linkedin: {
        url: "https://linkedin.com/in/username_anda",
        name: "LinkedIn"
    },
    github: {
        url: "https://github.com/username_anda",
        name: "GitHub"
    },
    threads: {
        url: "https://threads.net/@username_anda",
        name: "Threads"
    }
};
```

### 4. Ganti Foto Profile
- Ganti URL placeholder di `script.js` dengan URL foto Anda
- Atau upload foto ke folder yang sama dan gunakan path relatif
- Format yang didukung: JPG, PNG, WebP

### 5. Deploy
- Upload semua file ke hosting service (GitHub Pages, Netlify, Vercel, dll)
- Atau buka file `index.html` langsung di browser untuk testing lokal

## 🎨 Kustomisasi

### Warna
Edit file `style.css` untuk mengubah warna:
- Background gradient: edit `body` background
- Social media colors: edit class `.instagram`, `.twitter`, dll
- Text colors: edit color properties

### Font
- Ganti font dengan mengubah `font-family` di CSS
- Atau ganti Google Fonts link di `index.html`

### Layout
- Ubah ukuran container dengan mengedit `.container` max-width
- Sesuaikan padding dan margin sesuai kebutuhan

## 📱 Responsive Design

Website sudah responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Troubleshooting

### Link tidak berfungsi
- Pastikan URL di `script.js` sudah benar
- Cek apakah ada typo di username
- Pastikan profile social media Anda public

### Foto tidak muncul
- Cek URL foto apakah valid
- Pastikan foto bisa diakses dari internet
- Gunakan format gambar yang didukung

### Styling tidak sesuai
- Pastikan file `style.css` ada di folder yang sama
- Cek browser console untuk error
- Clear browser cache

## 🌟 Tips

1. **Gunakan foto profile yang bagus** - Foto yang jelas dan profesional
2. **Bio yang menarik** - Buat deskripsi singkat yang menarik
3. **Update secara berkala** - Jaga agar link selalu aktif
4. **Test di berbagai device** - Pastikan responsive di semua ukuran layar

## 📄 License

Website ini open source dan bisa digunakan untuk keperluan personal maupun komersial.

## 🤝 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

---

**Happy Connecting! 🚀** 