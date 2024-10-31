import logo from "./logo.svg";
import "./App.css";
import WilayaCommuneSelector from "./WilayaCommuneSelector";
import Caroussel from "./Caroussel.js";
import img1 from "./images/IMG-20241020-WA0027.jpg";
import img2 from "./images/IMG-20241020-WA0028.jpg";
import img3 from "./images/IMG-20241020-WA0029.jpg";
import Header from "./Header.js";
import Photocollage from "./Photocollage.js";
import Footer from "./Footer.js";
import Hero from "./Hero.jsx";
import imgprod from "./images/imgproduct.webp";
import Photocollage2 from "./Photocollage2.js";
function App() {
  const images = [img1, img2, img3];

  return (
    <div className="App">
      <Header />
      <br />
      <h1 id="about-us">ATROX </h1>
      <br />
      <br />
      <h2 id="about-us"> QUALITE PRIX RESULTAT</h2>
      <h2 id="about-us"> الجودة السعر هايل وتشوف نتائج بعينك</h2>

      {/* Section 'about-us' */}
      <h3 className="about-us">
        {" "}
        ، شعرك المجعد يولي مستقيم وسهل التسريح نتائج سريعة وواضحة: من أول
        استعمال ، راح تشوف الفرق في شعرك. الشعر اللي كان مجعد ويطلع في كل اتجاه،
        راح يولي ناعم ومستقيم ترطيب عميق : كابيار يغذي شعرك. بعمق ويحافظ على
        رطوبته، مما يجعله صحي وقوي سهولة الاستعمال: التطبيق سهل وبسيط، وما يحت
        اجش لوقت كبير{" "}
      </h3>
      <br />
      <br />
      <Hero images={images} />
      <br />

      <h3 id="utilisation" className="composition-produit">
        المقادير : يتكون منتوجنا من اجود الزيوت النباتية الطبيعية و كريم سحري
        مصنوع في افضل المخابر يعزز بصيالت الشعر و يعمل على ترطيب و معالجة الشعر
        المتكسر و التالف . ا بتوزيعه وتسريح الشعر بالشكل المطلوب و نمشط الشعر
        لمدة طريقة االستخدام : نضع كمية من الكريم على شعر المتجعد ثم قم بواسطة
        مش ًط 5 دقائق متواصلة و نغسل الشعر بماء فاتر فقط بدون اضافة الشامبو .
        انسى الشعر المتجعد و استمتع بشعر املس و مثالي و ملمسه ناعم . smooth &
        soft hair blue motion edition -- كريم ترطيب تسوية الشعر المتجعد و
      </h3>

      <Photocollage />

      {/* Section 'utilisation' */}
      <h3 id="utilisation">
        Composition : Notre produit est composé des meilleures huiles végétales
        naturelles et d'une crème magique fabriquée dans les meilleurs
        laboratoires. Celle-ci renforce les follicules pileux et agit pour
        hydrater et traiter les cheveux cassants et abîmés. Comment l'utiliser ?
        Appliquez une quantité de crème sur les cheveux crépus, puis
        répartissez-la avec un peigne pour coiffer les cheveux comme vous le
        souhaitez. Peignez les cheveux pendant 5 minutes sans interruption, puis
        lavez-les à l'eau tiède uniquement, sans ajouter de shampoing. Oubliez
        les cheveux crépus et profitez d'une chevelure lisse et parfaite à la
        texture douce.
      </h3>


      <Photocollage2 />

      <br />
      <br />

      {/* Section 'commander' */}
      <div id="commander">
        <WilayaCommuneSelector className="command-product" />
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
