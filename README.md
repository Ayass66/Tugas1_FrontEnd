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

#  Vue Component Showcase with shadcn-vue

Project ini merupakan implementasi component-based architecture menggunakan Vue 3 dan shadcn-vue.  
Aplikasi menampilkan beberapa reusable component yang dibagi menjadi:

- 5 Domain Wrapper Component (menggunakan shadcn-vue)
- 3 Custom Layout/UI Component

Semua komponen sudah terintegrasi menggunakan Vue Router dan dapat ditampilkan melalui halaman showcase.

---

#  Teknologi yang Digunakan

- Vue 3
- Vue Router
- Tailwind CSS
- shadcn-vue

---

#  Struktur Folder

```bash
src/
│
├── components/
│   │
│   ├── domain/
│   │   ├── ProductCard.vue
│   │   ├── UserCard.vue
│   │   ├── LoginForm.vue
│   │   ├── DataTableWrapper.vue
│   │   └── ModalForm.vue
│   │
│   ├── layout/
│   │   ├── Navbar.vue
│   │   ├── Sidebar.vue
│   │   └── DashboardLayout.vue
│   │
│   └── ui/
│       └── (komponen bawaan shadcn-vue)
│
├── router/
│   └── index.js
│
├── views/
│   ├── Showcase.vue
│   ├── ProductPage.vue
│   ├── UserPage.vue
│   ├── LoginPage.vue
│   ├── TablePage.vue
│   └── ModalPage.vue
│
├── App.vue
└── main.js
```

---

#  DOMAIN WRAPPER COMPONENT

## 1. ProductCard.vue

###  Deskripsi
Komponen untuk menampilkan informasi produk menggunakan Card component dari shadcn-vue.

###  Fitur
- Menampilkan nama produk
- Menampilkan harga produk
- Tombol aksi “Beli”

###  Props

| Props | Type | Keterangan |
|------|------|-------------|
| name | String | Nama produk |
| price | Number | Harga produk |

###  Cara Penggunaan

```vue
<ProductCard
  name="Laptop Gaming"
  :price="15000000"
/>
```

---

## 2. UserCard.vue

###  Deskripsi
Komponen card untuk menampilkan informasi pengguna.

###  Fitur
- Menampilkan username
- Menampilkan email
- Tombol lihat profil

###  Props

| Props | Type | Keterangan |
|------|------|-------------|
| username | String | Nama pengguna |
| email | String | Email pengguna |

###  Cara Penggunaan

```vue
<UserCard
  username="Anggi"
  email="anggi@email.com"
/>
```

---

## 3. LoginForm.vue

###  Deskripsi
Komponen form login modern menggunakan Input dan Button dari shadcn-vue.

###  Fitur
- Input email
- Input password
- Remember me
- Forgot password
- Tombol login

###  Cara Penggunaan

```vue
<LoginForm />
```

---

## 4. DataTableWrapper.vue

###  Deskripsi
Komponen tabel untuk menampilkan data produk menggunakan Table component dari shadcn-vue.

###  Fitur
- Header tabel
- Menampilkan data dinamis
- Responsive table

###  Props

| Props | Type | Keterangan |
|------|------|-------------|
| items | Array | Data tabel |

###  Cara Penggunaan

```vue
<DataTableWrapper :items="data" />
```

###  Contoh Data

```js
const data = [
  {
    id: 1,
    name: 'Laptop',
    price: 10000000
  },
  {
    id: 2,
    name: 'Mouse',
    price: 250000
  }
]
```

---

## 5. ModalForm.vue

###  Deskripsi
Komponen popup/modal menggunakan Dialog component dari shadcn-vue.

###  Fitur
- Popup dialog
- Input form
- Tombol simpan
- Tombol batal

###  Cara Penggunaan

```vue
<ModalForm />
```

---

#  CUSTOM LAYOUT/UI COMPONENT

## 6. Navbar.vue

###  Deskripsi
Komponen navigasi atas aplikasi.

###  Fitur
- Judul aplikasi
- Menu navigasi
- Avatar user

###  Cara Penggunaan

```vue
<Navbar />
```

---

## 7. Sidebar.vue

###  Deskripsi
Komponen sidebar untuk navigasi halaman.

###  Fitur
- Menu dashboard
- Link navigasi
- Routing antar halaman

###  Cara Penggunaan

```vue
<Sidebar />
```

---

## 8. DashboardLayout.vue

###  Deskripsi
Layout utama aplikasi yang menggabungkan:
- Navbar
- Sidebar
- Content area

###  Fitur
- Layout responsive
- Reusable layout
- Slot content

###  Cara Penggunaan

```vue
<DashboardLayout>

  <h1>Dashboard</h1>

</DashboardLayout>
```

---

#  Routing Halaman

| Route | Halaman |
|------|----------|
| / | Showcase |
| /product | Product Page |
| /user | User Page |
| /login | Login Page |
| /table | Table Page |
| /modal | Modal Page |

---

#  Penjelasan Halaman

## 1. Showcase.vue

Halaman utama yang menampilkan seluruh menu showcase komponen.

### Fitur:
- Card menu interaktif
- Routing ke masing-masing halaman
- Responsive grid layout

---

## 2. ProductPage.vue

Halaman untuk menampilkan implementasi ProductCard component.

### Fitur:
- Menampilkan beberapa produk
- Menggunakan reusable ProductCard

---

## 3. UserPage.vue

Halaman untuk menampilkan implementasi UserCard component.

### Fitur:
- Menampilkan informasi user
- Reusable user card

---

## 4. LoginPage.vue

Halaman login modern menggunakan LoginForm component.

### Fitur:
- Tampilan centered layout
- Modern login UI

---

## 5. TablePage.vue

Halaman untuk menampilkan DataTableWrapper component.

### Fitur:
- Menampilkan data dalam bentuk tabel
- Dynamic rendering data

---

## 6. ModalPage.vue

Halaman implementasi modal/dialog form.

### Fitur:
- Popup dialog
- Form input
- Button action

---

#  Cara Menjalankan Project

## 1. Install Dependency

```bash
npm install
```

---

## 2. Install Vue Router

```bash
npm install vue-router
```

---

## 3. Install shadcn-vue

```bash
npm install shadcn-vue
```

---

## 4. Init shadcn-vue

```bash
npx shadcn-vue@latest init
```

---

## 5. Install Komponen shadcn-vue

```bash
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
npx shadcn-vue@latest add input
npx shadcn-vue@latest add dialog
npx shadcn-vue@latest add table
```

---

## 6. Jalankan Project

```bash
npm run dev
```

---

#  Hasil Project

Project berhasil mengimplementasikan:

✅ Component-based architecture  
✅ Reusable component  
✅ shadcn-vue integration  
✅ Custom layout component  
✅ Vue Router integration  
✅ Responsive UI Design  
✅ Domain wrapper component  
✅ Showcase component page  

---

#  Author

Nama: Anggi Larasati  
Mata Kuliah: Front-End Web Development

