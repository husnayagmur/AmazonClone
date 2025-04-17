import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bestsellers: [
    {
      label: 'Pişirme ve Pastacılık Malzemeleri',
      image: require('../assets/product/pastacilik.png'),
      price: '359.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'RAFELLO'
    },
    {
      label: 'İçecekler, Çay ve Kahveler',
      image: require('../assets/product/cay.png'),
      price: '169.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'FİLİZ'
    },
    {
      label: 'Tatlı ve Tuzlu Atıştırmalıklar',
      image: require('../assets/product/züber.png'),
      price: '129.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ZÜBER'
    },
    {
      label: 'Çeşni ve Baharatlar',
      image: require('../assets/product/baharat.png'),
      price: '109.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'MAYİ'
    },
    {
      label: 'Baklagiller ve Makarnalar',
      image: require('../assets/product/makarna.png'),
      price: '59.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'FİLİZ'
    },
    {
      label: 'Yağlar, Sirkeler ve Salata Sosları',
      image: require('../assets/product/siviYag.png'),
      price: '249.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'YUDUM'
    },
    {
      label: 'Reçeller, Ballar ve Ezmeler',
      image: require('../assets/product/nutella.png'),
      price: '189.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'NUTELLA'
    },
    {
      label: 'Konserve Kavanoz ve Paket Gıdalar',
      image: require('../assets/product/konserve.png'),
      price: '99.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'YAYLA'
    },
    {
      label: 'Bebek Beslenme',
      image: require('../assets/product/bebekBeslenme.png'),
      price: '3-559.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'OPTIPRO'
    },
  ],
  featuredImages: [
    {
      label: "Raffaello Ferrero 15x1'li Paket",
      image: require('../assets/product/pastacilik.png'),
      price: '450.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'RAFELLO'
    },
    {
      label: 'Eti Burçak Bisküvi 131 gr',
      image: require('../assets/product/burcak.png'),
      price: '35.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Kurukahveci Mehmet Efendi Türk Kahvesi Poşet 250 G',
      image: require('../assets/product/kurukahveciMehmet.png'),
      price: '423.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'KURUKAHVECİ MEHMET EFENDİ'
    },
    {
      label: 'Jacobs Monarch Espresso Filtre Kahve 500 G',
      image: require('../assets/product/jacobs.png'),
      price: '15 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'JACOBS'
    },
    {
      label: 'Kahve Dünyası 500gr',
      image: require('../assets/product/kahveDünyasi.png'),
      price: '455.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'KAHVE DÜNYASI'
    },
    {
      label: 'Eti ( 4 ADET ) Eti Puf Kakaolu Bisküvi 18 gr',
      image: require('../assets/product/etiPuf.png'),
      price: '18.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
  ],
  multiPack: [
    {
      label: "Aptamil 4 Devam Sütü 1200x3 G 1 Yaş+",
      image: require('../assets/product/cokluAptamil.png'),
      price: '2100.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'APTAMIL'
    },
    {
      label: 'Bebelac Gold 3 Devam Sütü 800 gr X 3 Adet',
      image: require('../assets/product/cokluBebelac.png'),
      price: ' 1658.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'BEBELAC'
    },
    {
      label: 'Mehmet Efendi Kurukahveci Türk Kahvesi 25 X 100 G Skt: 01/2026',
      image: require('../assets/product/cokluKahve.png'),
      price: ' 1500.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'KURUKAHVECİ MEHMET EFENDİ'
    },
    {
      label: 'Milka Oreo Ve Choco & Biscuit Tablet Çikolata 300 Grx 2 Adet',
      image: require('../assets/product/cokluMilka.png'),
      price: '359.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'MİLKA'
    },
    {
      label: 'Eti ETİ POP KEK HİNDİSTAN CEVİZLİ 24 ADET',
      image: require('../assets/product/cokluPopKek.png'),
      price: '250.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Red Bull Redbull Enerji Içeceği 24 X 250 ml',
      image: require('../assets/product/cokluRedbull.png'),
      price: '969.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'RED BULL'
    },
  ],
  maximumValue: [
    {
      label: "Eti Form Kepekli Bisküvi 45 g ",
      image: require('../assets/product/form.png'),
      price: '25.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti Cin Tek Lokmalık Portakal Soslu Bisküvi 114 gr',
      image: require('../assets/product/cin.png'),
      price: ' 33.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti Burçak Tuzlu Zeytinli Bisküvi',
      image: require('../assets/product/zeytinliBurcak.png'),
      price: ' 45.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti Wanted Bumba 20 Gr',
      image: require('../assets/product/wanted.png'),
      price: '21.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti ETİ POP KEK HİNDİSTAN CEVİZLİ 24 ADET',
      image: require('../assets/product/crax.png'),
      price: '32.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Ülker ALBENİ BÜYÜK BOY 52 GR',
      image: require('../assets/product/albeni.png'),
      price: '25.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ÜLKER'
    },
  ],
  multiPack: [
    {
      label: "Aptamil 4 Devam Sütü 1200x3 G 1 Yaş+",
      image: require('../assets/product/cokluAptamil.png'),
      price: '2100.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'APTAMİL'
    },
    {
      label: 'Bebelac Gold 3 Devam Sütü 800 gr X 3 Adet',
      image: require('../assets/product/cokluBebelac.png'),
      price: ' 1658.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'BEBELAC'
    },
    {
      label: 'Mehmet Efendi Kurukahveci Türk Kahvesi 25 X 100 G Skt: 01/2026',
      image: require('../assets/product/cokluKahve.png'),
      price: ' 1500.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'KURUKAHVECİ MEHMET EFENDİ'
    },
    {
      label: 'Milka Oreo Ve Choco & Biscuit Tablet Çikolata 300 Grx 2 Adet',
      image: require('../assets/product/cokluMilka.png'),
      price: '359.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'MİLKA'
    },
    {
      label: 'Eti ETİ POP KEK HİNDİSTAN CEVİZLİ 24 ADET',
      image: require('../assets/product/cokluPopKek.png'),
      price: '250.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Red Bull Redbull Enerji Içeceği 24 X 250 ml',
      image: require('../assets/product/cokluRedbull.png'),
      price: '969.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'RED BULL'
    },
  ],
  maximumValue: [
    {
      label: "Eti Form Kepekli Bisküvi 45 g ",
      image: require('../assets/product/form.png'),
      price: '25.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti Cin Tek Lokmalık Portakal Soslu Bisküvi 114 gr',
      image: require('../assets/product/cin.png'),
      price: ' 33.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti Burçak Tuzlu Zeytinli Bisküvi',
      image: require('../assets/product/zeytinliBurcak.png'),
      price: ' 45.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Eti Wanted Bumba 20 Gr',
      image: require('../assets/product/wanted.png'),
      price: '21.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    
    {
      label: 'Eti ETİ POP KEK HİNDİSTAN CEVİZLİ 24 ADET',
      image: require('../assets/product/crax.png'),
      price: '32.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Ülker ALBENİ BÜYÜK BOY 52 GR',
      image: require('../assets/product/albeni.png'),
      price: '25.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'ÜLKER'
    },
  ],
  products: [
    {
      label: 'Raffaello 150 gr x 1 Paket',
      image: require('../assets/product/pastacilik.png'),
      price: ' 360.99 TL',
      starCount:4.4,
      starText:'(564)',
      salesInfo:'Geçen ay 100 adetten fazla satın alındı',
      brand:'RAFELLO'
    },
    {
      label: 'Ofçay Efsane Filiz Siyah Dökme Çay 200 Gr',
      image: require('../assets/product/cay.png'),
      price: ' 180.99 TL',
      starCount:4.5,
      starText:'(145)',
      salesInfo:'Geçen ay 200 adetten fazla satın alındı',
       brand:'FİLİZ'
    },
    {
      label: 'Eti Cin Tek Lokmalık Portakal Soslu Bisküvi 114 gr',
      image: require('../assets/product/cin.png'),
      price: ' 33.99 TL',
      starCount:4.4,
      starText:'(215)',
      salesInfo:'Geçen ay 1 B adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Çeşni ve Baharatlar',
      image: require('../assets/product/baharat.png'),
      price: ' 350.99 TL',
      starCount:4.4,
      starText:'(556)',
      salesInfo:'Geçen ay 550 adetten fazla satın alındı',//bakk
       brand:'ETİ'
    },
    {
      label: 'Mehmet Efendi Kurukahveci Türk Kahvesi 25 X 100 G Skt: 01/2026',
      image: require('../assets/product/cokluKahve.png'),
      price: ' 1500.99 TL',
      starCount:4.4,
      starText:'(656)',
      salesInfo:'Geçen ay 350 adetten fazla satın alındı',
       brand:'KURUKAHVECİ MEHMET EFENDİ'
    },
    {
      label: 'Kahve Dünyası 500gr',
      image: require('../assets/product/kahveDünyasi.png'),
      price: '455.99 TL',
      starCount:4.4,
      starText:'(899)',
      salesInfo:'Geçen ay 750 adetten fazla satın alındı',
       brand:'KAHVE DÜNYASI'
    },
    {
      label: 'Eti ( 4 ADET ) Eti Puf Kakaolu Bisküvi 18 gr',
      image: require('../assets/product/etiPuf.png'),
      price: '18.99 TL',
      starCount:4.4,
      starText:'(212)',
      salesInfo:'Geçen ay 450 adetten fazla satın alındı',
       brand:'ETİ'
    },
    {
      label: 'Milka Oreo Ve Choco & Biscuit Tablet Çikolata 300 Grx 2 Adet',
      image: require('../assets/product/cokluMilka.png'),
      price: '359.99 TL',
      starCount:4.4,
      starText:'(444)',
      salesInfo:'Geçen ay 600 adetten fazla satın alındı',
       brand:'MİLKA'
    },
    {
      label: 'Eti ETİ POP KEK HİNDİSTAN CEVİZLİ 24 ADET',
      image: require('../assets/product/cokluPopKek.png'),
      price: '250.99 TL',
      starCount:4.4,
      starText:'(788)',
      salesInfo:'Geçen ay 800 adetten fazla satın alındı',
       brand:'ETİ'
    },
  ],
  showAll: false,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleShowMore: (state) => {
      state.showAll = !state.showAll;  
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload; // Tıklanan ürünü state'e ekliyoruz
    },
  },
});

export const { toggleShowMore,setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
