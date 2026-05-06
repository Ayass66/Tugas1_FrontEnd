# siperpus-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
#  Implementasi Komponen Vue 3 dengan shadcn-vue

##  Deskripsi Project

Project ini merupakan implementasi **Component-Based Architecture** menggunakan **Vue 3**, **shadcn-vue**, dan **Tailwind CSS v3**.

Aplikasi ini dikembangkan sebagai bagian dari tugas perancangan struktur komponen, dengan fokus pada:

* Penggunaan reusable component
* Props dan slot
* Struktur folder modular
* Integrasi UI dari shadcn-vue

---

##  Struktur Folder

```bash
src/
 ├── components/
 │    ├── ui/          # Komponen dari shadcn-vue
 │    ├── layout/      # Komponen layout (Navbar, Sidebar, dll)
 │    ├── domain/      # Komponen fitur (misalnya buku, katalog, dll)
 │    └── common/      # Komponen custom umum
 │
 ├── views/
 │    ├── AboutView.vue
 │    ├── FormBuku.vue
 │    ├── HomeView.vue
 │    ├── KatalogView.vue
 │    └── TestShadcn.vue
 │
 └── router/
      └── index.js
```

---

##  Daftar Komponen

### 🔹 Komponen dari shadcn-vue

#### 1. Button

Digunakan untuk aksi seperti klik tombol.

**Contoh penggunaan:**

```vue
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

---

#### 2. Card

Digunakan sebagai container untuk menampilkan informasi.

**Contoh penggunaan:**

```vue
<Card>
  <CardHeader>
    <CardTitle>Judul</CardTitle>
    <CardDescription>Deskripsi</CardDescription>
  </CardHeader>
  <CardContent>
    Isi konten
  </CardContent>
</Card>
```

---

#### 3. Badge

Digunakan untuk label atau status.

**Contoh penggunaan:**

```vue
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
```

---

#### 4. Input

Digunakan untuk input data pada form.

**Contoh penggunaan:**

```vue
<Input placeholder="Masukkan data..." />
```

---

#### 5. Dialog / Modal

Digunakan untuk popup atau konfirmasi.

**Contoh penggunaan:**

```vue
<Dialog>
  <DialogTrigger>Buka</DialogTrigger>
  <DialogContent>Isi modal</DialogContent>
</Dialog>
```

---

##  Komponen Custom

#### 6. Komponen Layout

Contoh: Navbar, Sidebar

**Fungsi:**

* Navigasi halaman aplikasi

**Penggunaan:**

```vue
<Navbar />
<Sidebar />
```

---

#### 7. Komponen Domain (Buku/Katalog)

Digunakan untuk menampilkan data seperti katalog buku.

**Contoh penggunaan:**

```vue
<KartuBuku :judul="buku.judul" :penulis="buku.penulis" />
```

---

#### 8. Komponen Form

Digunakan pada halaman FormBuku untuk input data buku.

**Contoh penggunaan:**

```vue
<FormBuku />
```

---

##  Props & Slot

###  Props

Digunakan untuk mengirim data ke komponen.

**Contoh:**

```vue
<KartuBuku :judul="buku.judul" :penulis="buku.penulis" />
```

---

###  Slot

Digunakan untuk membuat komponen fleksibel.

**Contoh:**

```vue
<Card>
  <h1>Konten bebas</h1>
</Card>
```

---

##  Halaman (Views)

* **HomeView.vue** → Halaman utama
* **AboutView.vue** → Informasi aplikasi
* **KatalogView.vue** → Menampilkan daftar buku
* **FormBuku.vue** → Form input data buku
* **TestShadcn.vue** → Halaman testing komponen shadcn

---

##  Halaman Showcase / Testing

Halaman:

```
/test-shadcn
```

Digunakan untuk:

* Menguji komponen shadcn
* Menampilkan Button, Card, Badge, dll

---

##  Cara Menjalankan Project

1. Install dependency

```bash
npm install
```

2. Jalankan project

```bash
npm run dev
```

3. Buka di browser

```
http://localhost:5173/test-shadcn
```

---

##  Repository

Branch: `feat/shadcn-components`

---

##  Kesimpulan

Project ini telah memenuhi kriteria tugas:

* Minimal 8 komponen
* Menggunakan shadcn-vue
* Mengimplementasikan props dan slot
* Struktur folder modular
* Memiliki halaman showcase/testing

---
