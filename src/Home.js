import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Redmi Note 13 Pro+ (Fusion Purple, 8GB RAM, 256GB Storage) | World's First Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge"
            price={30999}
            rating={5}
            image="https://m.media-amazon.com/images/I/31k+gXNf-hL._SY300_SX300_.jpg"
          />
          <Product
            id="49538094"
            title="MuscleBlaze Biozyme Iso-Zero, Low Carb, 100% Pure Whey Protein Isolate with USA Patent-Published |Labdoor USA Certified, 27 g Pure Isolate Whey Per Scoop (Ice Cream Chocolate, 2 kg / 4.4 lb)"
            price={6399}
            rating={4}
            image="https://m.media-amazon.com/images/I/61h-VNFizEL._SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="ZEBRONICS AC32FHD LED, Gaming Monitor, 32 inch (81.28cm), 300 nits, 165hz, 1800R Curved wide screen, FHD, 1080p, Wall Mountable"
            price={19999}
            rating={3}
            image="https://m.media-amazon.com/images/I/51cWZKJ8EcL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="Acer ED343CUR 34 Inch UWQHD (3440x1440) Pixels VA Panel 1000R Curved Backlight LED Monitor I 1 MS, 180Hz Refresh "
            price={27999}
            rating={5}
            image="https://m.media-amazon.com/images/I/81YJV6rp69L._SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple iPad (10th Generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Silver"
            price={29899}
            rating={4}
            image="https://m.media-amazon.com/images/I/31Wj0j4RXhL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="FRONTECH 32 Inch Ultima Series Curved LED Gaming Monitor | Refresh Rate 75Hz,IPS Panel,3000R Curve | Full HD 1080p, Slim Bezel Less Design"
            price={19498}
            rating={4}
            image="https://m.media-amazon.com/images/I/41P63mNssAL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="90829334"
            title="Apple iPhone 14 (512 GB) - Blue"
            price={48999}
            rating={4}
            image="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Pixel 6 Pro 5G (Stromy Black, 12GB RAM, 128GB Storage)"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61Xh3fMdU1L._SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Pixel 8 Pro 5G (12GB RAM) (512, Obsidian Black, New)"
            price={115999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61X4kxP-OnL._SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Pixel 6a 5G (Charcoal, 6GB RAM, 128GB Stoarge)"
            price={30999}
            rating={4}
            image="https://m.media-amazon.com/images/I/41MF9mpSoxL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49038510"
            title="MOKOBARA Unisex Lightweight Transit Luggage - Green, 54 cm Small - Polycarbonate"
            price={5999}
            rating={3}
            image="https://m.media-amazon.com/images/I/6100JktWyXL._SX522_.jpg"
          />
          <Product
            id="23445937"
            title="Casio Men Resin Edifice Analog Blue Dial Efr-556Pc-2Avudf ( Ex386 ), Band Color-Blue"
            price={9899}
            rating={5}
            image="https://m.media-amazon.com/images/I/61E8RXXE4pL._SX679_.jpg"
          />
          <Product
            id="3254354325"
            title="boAt Wave Call 2 with 1.83 HD Display, Advanced BT Calling, DIY Watch Face Studio, Coins, 700+Active Modes"
            price={1499}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Ftw893oAL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="325435434"
            title="Sony HT-S20R Real 5.1ch Dolby Digital Soundbar for TV with subwoofer and Compact Rear Speakers, )"
            price={15999}
            rating={4}
            image="https://m.media-amazon.com/images/I/41E--EoLIIL._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
