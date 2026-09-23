export interface Product {
  id: string;
  title: string;
  price: number;
  category: 'Müəllif Buketləri' | 'Qutuda Güllər' | 'Ürək Kompozisiyaları' | 'Hədiyyə Dəstləri';
  flowerType: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary' | 'light';
  subtitle?: string;
  description: string;
  image: string;
  thumbnails?: string[];
  composition?: string[];
  rating?: number;
  reviewsCount?: number;
  deliveryTime?: string;
  tag?: string;
  colorTone?: string;
  occasion?: string[];
  sizes?: {
    name: string;
    flowers: string;
    price: number;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'monet-bagi',
    title: '"Monet Bağı" Müəllif Buketi',
    price: 185,
    category: 'Müəllif Buketləri',
    flowerType: 'Pion və Ranunkulus',
    badge: 'Məhdud Sayda',
    badgeType: 'light',
    subtitle: 'Müəllif Buketləri',
    description: "Klassik impressionist rəssamların palitrasından ilhamlanan bu kompozisiya fransız pion qızılgülləri, zərif ranunkulus və təravətli evkalipt yarpaqlarının mükəmməl harmoniyasını təcəssüm etdirir. Hər bir qönçə Bakı studiyamızda baş florist tərəfindən seçilir.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhNbfxFLA783KAmY58OFWB-eeLN5_KKshueoy_XxmIG_25L4jYFzRyew4jfg8iFsSwYuaEZYD2vfiT8E8JsPeyCo4pDlcv2JSGWG-BvELUHNuNh26G8_sfBxNabAnte3nZWJu9ZmxANZnUNMMvAK0WPN9-znGHGnA_MVZ_SRtk1tnpJ8WbdDbcdNzkcv6hGcZE19Z3nBWPZfSCEuhSFFKtLHJf4HySHePrh-HPND3ASqhvyIt7_vuYcQ',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCV9wjo-B7NBPnI5qDrsfAHv89CbJO8HXS_uxaoAoCm4e5HAmpZw9eCMHWXra3V9XIC1liEFaN_cueyQB_chdVcwTdIw-LRSl0yeIoDtwKkIAob7WCzeRIv2oQp8JzmZ4BjC4p0ymyFIPvIFGRKI718IupASgyiJAkr8ljJdEfNMAtvdNtpn4JrPLXojuPG1mdVFmGnvZUmDpiuw9b5fujahS1hH6ir9tjg_pSbzb-ogYmh7lvHiM0w6g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoTNdsYqsCaLrq15SwFQtyfyOsPdqc2CgvYjKPGI7-NnDkjx8acdbxLSe8L5O8f9KGzXoE1oj7JTjmMPCL_ZkuduHwv2ue20kP01uHu-5sYM7_0jv6J7lsOkFbRGozSmgSZE3-NKUax3EUatgxFZHwezVy_sVnapzhq8eq1joR9hwi1Gs5qFPrVSd3mkHy8JQAYmvQk-4xXRiQqLKBfDfu0veX8dNLT2CR1fC14EcH1dDwv3fTSF9ddA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDw1UkInWYLlUCgcDFLqR7vW373seQWoxyQ0S-1UaMzQ18_RaMzQP1UuIbcuzCaNAzfpqTljWz5FNcdImZHnjTb8llb_qIRgPAov3qf3PppcVRhtASCcqC6EukC3gX9skdisJjpYe6akpPKErARc_FLtr_9cEZm0XwzVgW3n9OZMq2cyOYmjCnUZMOjxiHbleIghKgXPk3Vy1aoZzMZrQHKv0fmCIC1EWl8l1XLsb-SumeePUNjMW7Asw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJDFouffa8cJ7Xw7_B8P0zGoBO9qRs7qIc4bUuITe1LIXWBPUVn6aUeFvGjCcnsp3v3O6fNIn3JRjxaE720NofHpiQJbYXu3NHws-hgxqlq4EyFNpPFDu9hje41XVfjvJtwY_0WZPiFgnRQcrInl4tFS2w1g-S6oN_zjPqFpZtvBY-CAlPDaAOGz8FkZ-s0cR2jDh_I3GsNUCOB-DH9RO8r94PY9jSYOvVa7oqWxUTaiIhuZVvrX0Xog'
    ],
    composition: [
      "11 ədəd fransız O'Hara pion qızılgülü",
      "5 ədəd İtaliya zərif ranunkulusu",
      "Evkalipt Cinerea təbii budaqları",
      "Pastel çalar şirin noxud çiçəkləri",
      "İpək atlas bordon lent bağlaması",
      "Xüsusi eko-nəmləndirici kapsula (Aqua-pack)"
    ],
    rating: 5.0,
    reviewsCount: 28,
    deliveryTime: '2 Saat',
    tag: 'Eksklüziv',
    colorTone: 'Pudra Çəhrayı',
    occasion: ['Romantika', 'Ad Günü', 'Yubiley'],
    sizes: [
      { name: 'Standart', flowers: 'Standart (19 çiçək)', price: 185 },
      { name: 'Premium', flowers: 'Premium (29 çiçək)', price: 265 },
      { name: 'Deluxe Lüks', flowers: 'Deluxe Lüks (45 çiçək)', price: 390 }
    ]
  },
  {
    id: 'sefeq-negmesi',
    title: 'Şəfəq Nəğməsi',
    price: 145,
    category: 'Müəllif Buketləri',
    flowerType: 'Lalələr və Freziyalar',
    badge: 'Yeni',
    badgeType: 'light',
    subtitle: 'Fransız Qızılgülləri',
    description: 'Pudra rəngli lalə və qönçə qızılgül buketi. Şaftalı və qaymaqlı çalarlarda şən, parlaq və bahar ovqatlı möhtəşəm dəst.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1dJ98GQY33jeGBlqZ0ouEUUq-WsA9riAbMLqZYpL8l8OlVQJaNj678CXDO55dg2fWC5Rkdb9Ocq2o6azSr-6dzgmgGaZuVFpewLaHGvVxUKagV8VlFCZK_dW5yH39cYEjypxL1faZOJOcieIYTMKaD81u-Y0Jup7k7yAWUZKHOVa_8TM-1PlfxymcHtH_nVlh6UMmEtpSyd3Oi7o3jfaMAbbvPTsrf2zUcLByAEcT-qsk5AM72w99mw',
    rating: 4.9,
    reviewsCount: 19,
    deliveryTime: '2 Saat',
    colorTone: 'Pudra Çəhrayı',
    occasion: ['Ad Günü', 'Bahar', 'Təşəkkür']
  },
  {
    id: 'bordo-elegans',
    title: 'Bordo Elegans',
    price: 220,
    category: 'Qutuda Güllər',
    flowerType: 'Qızılgüllər (Pion & Ekvador)',
    badge: 'Özəl Seçim',
    badgeType: 'primary',
    subtitle: 'Məxmər Qutu',
    description: 'Dərin şərab tonlarında tünd qırmızı qızılgüllər və qızılı zərif toxunuşlar. Orxideya budaqları ilə bəzədilmiş unikal lüks seçim.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5-6AFffKxPESQXEA5WCdo2cvQWAaOTjSn8x8NiKciTOaAqCvSVQPsUsFW-xa--U14zwgrhF8Qf5ScSUDOEFb5pIUdRfIBYx1NvhIZIFaOxY56urxn5Z6-NdCWq05uHjbk4ik7FhRduMBjhIgLbrR2cATFM4WzbKtxMHTwc6oRR8NSxZ2GKLitIKJUXih71XES4MFqiVXJLs6TExuWGY8Jqoc5C8l_XfZWEdSICShcBDjO4yKPplaULA',
    rating: 5.0,
    reviewsCount: 34,
    deliveryTime: '2 Saat',
    colorTone: 'Bordo & Şərab',
    occasion: ['Romantika', 'Yubiley', 'Toy & Tədbir']
  },
  {
    id: 'ag-nagil',
    title: 'Ağ Nağıl',
    price: 165,
    category: 'Müəllif Buketləri',
    flowerType: 'Qortenziyalar',
    badge: 'Mövsümi',
    badgeType: 'light',
    subtitle: 'Ağ Hortenziya & Qızılgül',
    description: 'Qar kimi ağ qortenziya və freziyalar. Qüsursuz zəriflik və təmiz hisslərin əksi olan möhtəşəm kompozisiya.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9v371f3f9Lkj2GfUVObRCN7_loKl3vUrWE6wq6fOGjaEJ4R2VYIp7MBWaTYUQtiVOmMt0mPI9g_mgtD35zgRdy1IvkOyDzVL_onl7eBcdq4y0U2Jm8ke1LK1nEQov0_oQWZESynJpzfn3tfhhn27rHEI-E6cu8_y6SKKNXt84w1G_NkW-IfrGGaT6rJ9NejgEjQcDRkaefRLGnIQopoSU7dggZT69cKJ6F-3rC6tbYER-s19a06eOag',
    rating: 4.9,
    reviewsCount: 22,
    deliveryTime: '2 Saat',
    colorTone: 'Ağ & Süd Rəngi',
    occasion: ['Toy & Tədbir', 'Təşəkkür', 'Romantika']
  },
  {
    id: 'zerif-fransiz-buketi',
    title: 'Zərif Fransız Buketi',
    price: 175,
    category: 'Müəllif Buketləri',
    flowerType: 'Pion və Ranunkulus',
    badge: 'Müəllif İşi',
    badgeType: 'light',
    subtitle: 'Bahar Kolleksiyası',
    description: 'Pion qızılgüllər, təbii lavanda və zərif fransız zərifliyi ilə bəzədilmiş kompozisiya.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGiveWW6MKl_NWM8KUnxfGou_JL1XQJcb-qMUlyq2ZqtVzjDvoULVAjlc7ri8pa1ZLvlxvwr3DjOu1stZEkeDiArtQJDF-lseAaDzA_Bd9haPy2gDKmuQJO3ztE3GKo9VDv3FWCun6PJ_8VAElQIrkIJ4zNghZV6QGJxGbIotURE3ttlIv1TIv9rfoV3CAsMxdafBP6MLNwVA6hFd8KkS44eQPdP5lpdbo6opBQ0YtzO5L7WZ8Su3R4Q',
    rating: 4.8,
    reviewsCount: 16,
    colorTone: 'Pudra Çəhrayı',
    occasion: ['Romantika', 'Ad Günü']
  },
  {
    id: 'mexmer-qutuda-bordo',
    title: 'Məxmər Qutuda Bordo',
    price: 210,
    category: 'Qutuda Güllər',
    flowerType: 'Qızılgüllər (Pion & Ekvador)',
    badge: 'Bestseller',
    badgeType: 'primary',
    subtitle: 'Qutuda Kolleksiya',
    description: '25 ədəd lüks Ekvador qızılgülü, qızılı loqo həkk olunmuş dəbdəbəli məxmər qutuda.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRr7iz-uJzL3b4ZTziuBaYYWem3Nc-cZzXAxouDckEvFjg7TKWKEqwipNvIcr-Qofivg1LmRkoZze20AByZGsSc_UGj3ruitzw0VZc88NWQcuOP3thpIVtWOWtbD-dQ6Gqku0kggWThXkTMx-W0HKuk-6DMAY5O-M4ss0Fd4ZxnviJgr1JxHYb0U0k7SMdJadx4bJWxXYBqLlLyirLDwV-5E-iubRYxrfrkXiMbZ8T5ydLZroCaWQS5Q',
    rating: 5.0,
    reviewsCount: 45,
    colorTone: 'Bordo & Şərab',
    occasion: ['Romantika', 'Yubiley']
  },
  {
    id: 'monako-bahari',
    title: 'Monako Baharı',
    price: 190,
    category: 'Müəllif Buketləri',
    flowerType: 'Qortenziyalar',
    badge: 'Yeni',
    badgeType: 'light',
    subtitle: 'Zərif Pastel',
    description: 'Böyük ağ qortenziyalar, pudra pionlar və gümüşü evkalipt harmoniyası.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDTJYcK-BD0N4G98xrN3fkf8FS9DeBEK3rGfHtx30E3h-9oEmkT9I2-vimBRlMS5p1z68SwQ95z8e7-lt2bobmU3JmLNYPuMuksJ_aWLX7i8xAyfXyTQPqB0O5kNAUdjLtu-omsxakuPgosQLrbeyLPkFIKmTGjO3OQPJu5Gm9bVvQBXsxEIrXZkmwExxg8QhJ_idKLQ7CAsuIw6au1Y54KlGkJnFGMIT3Q2QElWZPj4-dchv-xvCnsg',
    rating: 4.9,
    reviewsCount: 14,
    colorTone: 'Pudra Çəhrayı',
    occasion: ['Bahar', 'Ad Günü']
  },
  {
    id: 'urek-formali-qutu',
    title: 'Ürək Formalı Qutu',
    price: 240,
    category: 'Ürək Kompozisiyaları',
    flowerType: 'Qızılgüllər (Pion & Ekvador)',
    badge: 'Özəl Sevgi',
    badgeType: 'secondary',
    subtitle: 'Romantik Seriya',
    description: 'Qırmızı və çəhrayı qızılgüllərin ürək formalı lüks qutuda zərif ombresi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYtboC4YlaslFXK5alMjfNuej2Hh8HWii7JU5EtM5JJ16b3R_a61Lc0E1Os0GEoEIRdZzZ7Z1WvxBo2gJ2Z191ia2ozLSYXiy2fl9bEbmChIbhwBrj7kMznQUSsCi3qrzwlEG6spVgcNdl8th6N3LhzaUhKoi7bG2IdVAU2FJNpzkh4yMZ00iGAXHX0q2HF7HiPUUDnfj6AOJWe1HCMH3JncHVeqnFVm5BsCzj_DSvszQm17xaNsTPuQ',
    rating: 5.0,
    reviewsCount: 38,
    colorTone: 'Bordo & Şərab',
    occasion: ['Romantika', 'Yubiley']
  },
  {
    id: 'baki-sefeqi',
    title: 'Bakı Şəfəqi',
    price: 155,
    category: 'Müəllif Buketləri',
    flowerType: 'Qızılgüllər (Pion & Ekvador)',
    subtitle: 'Müəllif Buketləri',
    description: 'Sarı və şaftalı tonlu nadir qızılgüllər, ranunkuluslar və zərif ipək lent.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQMvvSWVthEImN4DFeDcr5K3OiIIM4RSy67kXkSonTBk5L1Ct6tn85ay4U_CR7ujNH_c6JjiK7Yjqc3pSdEqX2GWzZCUUyUJO87hcbwKo7SWNSn6-2AKm2WleTkxQ8KriikDTn1jMnQ6FhKMgNxZBgfF4GZRvhVW94BxxyXgATrEPUw6hjFgToIhXAPl0d0Jv0WreaBkbfJY4CL5St7Ni7cLjt35ZEm92YLhXjmrn1XdhlsNSmb6EIKA',
    rating: 4.8,
    reviewsCount: 11,
    colorTone: 'Qızılı Şaftalı',
    occasion: ['Ad Günü', 'Təşəkkür']
  },
  {
    id: 'melek-nefesi',
    title: 'Mələk Nəfəsi',
    price: 120,
    category: 'Müəllif Buketləri',
    flowerType: 'Lalələr və Freziyalar',
    badge: 'Populyar',
    badgeType: 'tertiary',
    subtitle: 'Həcmli Buketlər',
    description: 'Böyük ölçülü çəhrayı qipsogil buludu. Yüngül, uzunömürlü və romantik.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgG0fwBqaBM8dI6fLoZf-pnDVTiZWAjJCZ_SJEJqeAUbU9kgh68Hw8WA_0N7jxLCVhu95M5kVOS91XptgajGn20ZVS7XBjOxMotL_RDOODCSWyOwH83S414dJwydROAKXBG1etOClt2qTYdv8SXsVqN7UcASDgKNXp-wDLzRtDrP2lAp7aeGmOMz28ReKkgPxnS53xzTkcY2D0Egk3L1_dLLt0RNsYxyTxuxCi2QRbdRk3wCAn-HtuA',
    rating: 4.7,
    reviewsCount: 29,
    colorTone: 'Zərif Bənövşəyi',
    occasion: ['Romantika', 'Ad Günü']
  },
  {
    id: 'kralica-qizilgulu',
    title: 'Kraliça Qızılgülü',
    price: 130,
    category: 'Hədiyyə Dəstləri',
    flowerType: 'Qızılgüllər (Pion & Ekvador)',
    badge: 'Əbədi Gül',
    badgeType: 'light',
    subtitle: 'Hədiyyəlik Eksklüziv',
    description: 'Şüşə qübbə altında 5 ilədək təravətini qoruyan canlı stabilləşdirilmiş qızılgül.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_rlB1vUFm7cU1-HZjYHVji_Fan9D6k1L63jUALoQpKKR8kH0suLarM2OTnfNGJamdm1FSO6_kEXHNb_4IPTmMoyy15C5LL_VZVxL60g_vNFVhGqtVft1vTyIoZ5GnbGBJzafPrxeVtIUQSAjqkB-0GPF_jHoErrlOCGem434NtcfIIAdd86BzVMHx-rngdcCYQUBrQVzLpDJT3vjy71dHNbwcTifoyu-TtcE-NQkvLTd-Kir4vJxeMA',
    rating: 4.9,
    reviewsCount: 23,
    colorTone: 'Bordo & Şərab',
    occasion: ['Yubiley', 'Romantika']
  },
  {
    id: 'zumrud-ve-cehrayi',
    title: 'Zümrüd və Çəhrayı',
    price: 260,
    category: 'Müəllif Buketləri',
    flowerType: 'Orxideyalar',
    badge: 'VIP Dəst',
    badgeType: 'primary',
    subtitle: 'Orxideya Seriyası',
    description: 'Nadir yaşıl Tsibidium orxideyaları və ekzotik çiçəklərin elit ansamblı.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXovJ0Eu2Gn6CzAh3IwH5Nhe6H16Q3q5ntzU1DJz3y1rYq26v6wQoyBaPAaudoEYM9zEBi4IMzHotgDmDCpcra_j0K5LtG6c_GOTRN6__4safwrxa1UOTlBqXsO7JNvkIFuZ7VNid2TsFv9cvcaoEcBIcj9RKSsQ1iXXNt71jd85doVTGB2SQsrt8sRr8PjtPHA1cLwfCKzuxUiWp400bEZz_u5TslWefU9TPhe25J_s9BCCZt942vyA',
    rating: 5.0,
    reviewsCount: 15,
    colorTone: 'Zərif Bənövşəyi',
    occasion: ['VIP', 'Toy & Tədbir', 'Yubiley']
  },
  {
    id: 'vanil-dusleri',
    title: 'Vanil Düşləri',
    price: 140,
    category: 'Müəllif Buketləri',
    flowerType: 'Lalələr və Freziyalar',
    subtitle: 'Bahar Təravəti',
    description: 'Hollandiya lalələri və ətirli freziyaların saf, təmiz ağlıq tərənnümü.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq-lv4LCWtSYTXAXMY-E5wVkjEhmdmfCucKGA0r9fCJLQr3bqSXvUPPOtQSCGJiNXOsqcDxcx7LORZ0c76TnLD3UGSrRYeY5_Pcxi6sW1Ghctm8FqTLT7Xwi0twsyO7_YBVA7jqg8w0qKVYuur2MQd5qlKBqkikHbNc4VmNB0ZlhJcesY43LMyfPy0qkTCdoYvC2LXdM5mkaSVHELdhU6TibWvr_GhnjzqQC5q3MuWado1586YKZcezg',
    rating: 4.8,
    reviewsCount: 18,
    colorTone: 'Ağ & Süd Rəngi',
    occasion: ['Bahar', 'Təşəkkür']
  }
];

export const CATEGORIES = [
  {
    id: 'muellif-buketleri',
    title: 'Müəllif Buketləri',
    tag: 'Klassika',
    description: 'Fransız qızılgülləri, təravətli pionlar və dağ çöl çiçəklərinin ahəngdar təbii vəhdəti.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIrw2-_dqTEo1DogbLmRiz4zQ63N1T-1YCyvRDqA8ggBte_LhrEKBmfXlQMwVMEm4-LQ47YRPp3ThgtaFzcgTJgLt63W4rVZ3b_c_jIrGFubAhf1QXG2i-3hvshgyfLhyBpfYBrOspXE6_P1ZDkvD7ryKrDAdIRmAUEw9v-An27AWeca_0q9UBT2A0ufVjBJ-G43NeYhH1g9TPDfodmooHd-1jlqYGqmDzCvido-WXNf_FxTjerRkwXQ',
    categoryFilter: 'Müəllif Buketləri'
  },
  {
    id: 'qutuda-guller',
    title: 'Qutuda Güllər',
    tag: 'Prestige',
    description: 'Xüsusi məxmər və zərif dairəvi qutularda nəm süngərlə bəslənən uzunömürlü kompozisiyalar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlAu7Ppz9tnzJ64PAmGQ7IxytvGTxSx6QQicLS-ZuUEDM7iY3MhSdWQ0Ruy04hrqwa0yQbqNDFNza_XXXjpjoiraVksQGhRb3-bAhPZHEeQQl2XuigyxJh93kgDLLo7wOrdS-urbAKqHAf6NqWROttzXO6qkiXptukFEztfirhz1UxIdWlbBfTPnZmlNZBRoYgNNnbZw0vpVzDkl4WXKktWWWrqnVS-AN90FgoKK33oEuAc5KW4vcV5A',
    categoryFilter: 'Qutuda Güllər'
  },
  {
    id: 'urek-kompozisiyalari',
    title: 'Ürək Kompozisiyaları',
    tag: 'Romantika',
    description: 'Ən səmimi sevgi etirafları və romantik anlar üçün fərdi hazırlanmış ürək siluetləri.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBExLO2gs79gfz36Vegn6vrUG70cvdDfM8VqamgMqT1wCUeoCYTpxQeZPagtnRMPfZ3TQ_6W-6vAzRqq0KxD2iPrK2_k4XftJzXTyLm_ecUjzjTywed0VyssSlkAe4KO69xDtMZapMkpOqNuURo6E30aOYZJPjt8r9JTZC0T8rJo8lBMeCdIQq5Cx8j2ZHc90u65_PXnoOrUgBgkzND3AEsBFjjmdqafOGfa7o87lyeq7DR3ULlc724qw',
    categoryFilter: 'Ürək Kompozisiyaları'
  },
  {
    id: 'hediyye-ve-etir-destleri',
    title: 'Hədiyyə və Ətir Dəstləri',
    tag: 'Eksklüziv',
    description: 'Premium niş şamlar, zərif şokoladlar və gül harmoniyası ilə tamamlanmış qutular.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrdYRWCESj6EM0JbdXGcnYU7Wk6gMTWAs1yAtUciAbbn3pTGRKk1FPsYGXSt6U258g6gg7e4lSjpyQiuGPoZEAfVahX-vECLLlfIolFiVIEtYd8WCA-AWhGuPQI4z732Edsr81j2i7JMhXg0uODlr2KFjaUvI6Qap1lOZPkYSgjnpgnh6D1CewGyDaEyVrSTJn5tNJULECzQDtU9KC3QuQrnl_HXFarSmB-DFQNItNy6m2eq_UAIaKA',
    categoryFilter: 'Hədiyyə Dəstləri'
  }
];

export const SOCIAL_GALLERY = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA43iWam0nxVpP_JAj0a3pPkTFPbifRVg76cFWGSwjuMDhfBnnphRDF-0KjwHWteIqbV8erWav77FEM_3qpUHhrTUOR4qPDQjFWpRC-rGxYV1SrgWnbm8Zea8GyQCPB62-wSTAlp-1kXvEnZkqToWjkZXAC_zpsp5tKm5mhGu8MUWvCGB0brdG-cRXuFqaQcKDcp2VQ-s_cSvOSub6CCAwI6yeoo7DXRFj-6AWFoX2RtFAQY4JnaKzb9w',
    likes: 342
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIkXQsp6IzNhyX0UlNCdO-5s2d5PQ-jd1akOaCi2ZUGJG2rQRA_gzETlqIQd9XWRcWSiifTEoe8pprPgcudMT4A1DZXbgvKG-Mjdfr3TWzAKJ9oyvxAuGWIW3-ebLRk6ROHhiwIHCV_WOObRgv5NHAt4-kC0RJYKtfHhXKjLYX3vKwZybxN6Y0dwN12KH_D20XJuq3nPxiV406aYaFv3tyOMjV0gQyqaANUi6tBDn53TtE4RZmit1-Cg',
    likes: 521
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmuqhPmebcdVGYEIdOWSR-xLcaTMv-4xEcG5l0Z4KqF0BkWtArP23M05TCij36GCNwz1QtiVeHjaLksg9ciyIsRmuGfu_o0sa5O1nUCxXj1Ekv-QCBqTOoRZiMZFrABy2TnH-SmHT-gTf6EvNN_N_hgyL5QIMnBjCyGer7MHOiCzCWla3Kgkfe3IgFKHX0fvRdBILB4I5qeHtd1sUV0Hft0N-lcrumJx89WkJahmjzeKocaY6cweXufg',
    likes: 418
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS94Yy1a1y54akqDQn61zHNbdH2tqzjKa_XlU7mzYklTik41CrSo9YXwG6hMNE7sLHiY-hwHXwX7KJHSeMPACD5aQsfvQIwZkrrkWsbsBenA2vW7vlDSxIuP-_XrjhF9coNdj8uE526uiDTeeQa2UgrKP-RqBbWxjGa7CPM2YvLra4ZdWHB7FmiiBEpSJDe_-Dp9m1AnQiiuAe5tqYCe-F86r3OCldpU0a4MnSPMEC9aPjNQ1ZrcZdmQ',
    likes: 612
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_81DoYx3z_xsuhGIB_u3blkMJDYZNALWTdnjjVngg2i25SGcGaexpi9rjWUqXy21xprDGesWJl2mYY79Y-4ox2QmFvlIWGxY3J-S8EXthD0YFOiL2IHtMjBnoRup5-ywjksm1XW4cA5Z-0tvdxEoeOlAeXbnbTccBX6bO6ofuHbp1pTzxlkM8Z3izFbbYzmD78NILiVHkpyvyUA-nXnP3lv0K7wbtytbOlp9t5nrW6y2vtp6EmxqRxA',
    likes: 889
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlvlv1VtmPgb1KyyHpHVdXCQEtOCuzhOyUMOShJp38AHAV3LIliD1scEmJdZYjYpbjqpt0oPdsegYvSF-TnP1db2uWA7XdNzA5AkI4m8UZuw8WfGUf8PvRvdirXinbtHtzbWKwo_Mqg-60XkQc5392pY670v34ZhYBuVyEw2YrIjwFjRUktrxsQlnmeJB0aIeh8CqJ3lX9LCesCcb_SBdCsnZd8POQHhCnd5UrFf0eXT0kxzNzajr_tA',
    likes: 490
  }
];
