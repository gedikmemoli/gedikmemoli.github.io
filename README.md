# gedikmemoli.github.io

Mehmet Ali Gedik — Game Designer portfolyo sitesi. Canlı adres: **https://gedik.games**

Saf HTML + CSS + JavaScript ile yazılmıştır; derleme (build) adımı yoktur. GitHub Pages `main` dalını doğrudan yayınlar.

## Klasör Yapısı

```
.
├── index.html                  # Tek sayfa (ana sayfa + proje detay görünümü)
├── CNAME                       # Özel alan adı (gedik.games) — SİLMEYİN
│
├── assets/
│   ├── docs/
│   │   └── mehmet-ali-gedik-cv.pdf
│   ├── icons/
│   │   └── favicon.png
│   └── images/
│       ├── profile/
│       │   └── profile.webp     # Ana sayfadaki profil fotoğrafı
│       └── projects/            # Her oyun için ayrı klasör (klasör adı = proje id)
│           ├── broken-dice/
│           ├── firuze/          # cover.webp + screenshot-1..8.webp
│           ├── kelime-kultur-kemer/
│           ├── kelime-oyunu-plus/
│           ├── living-cells/
│           └── mind-cafe/
│
├── css/                         # index.html'de bu SIRAYLA yüklenir (cascade sırası önemli)
│   ├── base.css                 # renk tokenları, body, .container, görünüm geçişi
│   ├── components/
│   │   ├── navbar.css           # Sabit üst bar: yer imleri, CV butonu, dil seçici
│   │   ├── buttons.css          # .btn ve iletişim butonu
│   │   └── lightbox.css         # Görsel büyütme penceresi
│   ├── pages/
│   │   ├── home-profile.css     # Üst hero: profil foto, isim, kısa özet
│   │   ├── home-projects.css    # Öne çıkan proje, filtreler, proje kartları
│   │   ├── home-about.css       # Detaylı Hakkımda bölümü
│   │   ├── home-footer.css      # WIP kartı, iletişim bölümü, sosyal linkler, footer
│   │   └── project-detail.css   # Proje detay sayfası, galeri, bento grid
│   └── responsive.css           # Mobil/tablet düzenlemeler — HER ZAMAN EN SONDA
│
└── js/                          # index.html'de bu SIRAYLA yüklenir
    ├── data/
    │   ├── projects.js          # ⭐ Oyun listesi (yeni oyun buraya eklenir)
    │   └── translations.js      # EN / TR metinler
    ├── i18n.js                  # Dil değiştirme
    ├── render.js                # Kartlar, detay sayfası, galeri
    ├── router.js                # #project-<id> hash yönlendirmesi
    ├── ui.js                    # İletişim butonu, lightbox
    └── main.js                  # Başlangıç + olay dinleyicileri (EN SON yüklenir)
```

## Yeni Oyun Ekleme

1. Görselleri `assets/images/projects/<oyun-id>/` klasörüne koyun (ör. `cover.webp`, `screenshot-1.webp`).
2. [`js/data/projects.js`](js/data/projects.js) dosyasının en altındaki **şablonu** kopyalayıp listeye ekleyin.
3. `thumbnail` ve `media` yollarını `assets/images/projects/<oyun-id>/...` şeklinde yazın.

HTML'e dokunmanıza gerek yoktur.

## Yeni Metin / Çeviri Ekleme

1. HTML elemanına `data-i18n="anahtarAdi"` ekleyin.
2. [`js/data/translations.js`](js/data/translations.js) içinde hem `en` hem `tr` altına `anahtarAdi` değerini yazın.

## Yerelde Çalıştırma

```bash
python3 -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

## Notlar

- CSS ve JS dosyalarının `index.html` içindeki **yükleme sırasını değiştirmeyin**; orijinal tek dosyadaki kural sırası aynen korunmuştur.
- Dosya adlarında Türkçe karakter ve boşluk kullanmayın (URL sorunlarını önler).