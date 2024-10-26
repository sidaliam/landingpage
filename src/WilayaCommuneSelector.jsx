import React, { useState } from "react";
import "./form.css"; // Le fichier CSS que tu vas créer
import { wilayasData } from "./datawilyaya";
import { useForm, ValidationError } from "@formspree/react";
import AnimationShop from "./images/Animation shop.json";
import Lottie from "lottie-react";
const WilayaCommuneSelector = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [communes, setCommunes] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    telephone: "",
    commune: "",
    quantite: "",
    totale: "",
  });
  const [quantité, setquantité] = useState(1);
  const [total, settotal] = useState(0);

  const handleWilayaChange = (event) => {
    const wilayaName = event.target.value;
    setSelectedWilaya(wilayaName);
    const wilaya = wilayasData.find((w) => w.name === wilayaName);
    setCommunes(wilaya ? wilaya.communes : []);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "quantite") {
      setquantité(value);
    }
  };

  const [state, handleSubmit] = useForm("xdkokybj");
  if (state.succeeded) {
    return <h2>تم إرسال الطلبية بنجاح </h2>;
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <Lottie animationData={AnimationShop} />
      <h1> طلب المنتوج </h1>

      <div className="form-group">
        <label htmlFor="nom">الإسم </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleInputChange}
          required
        />
        <ValidationError prefix="Nom" field="nom" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">اللقب</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleInputChange}
          required
        />
        <ValidationError prefix="Prenom" field="prenom" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="adresse">العنوان</label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          value={formData.adresse}
          onChange={handleInputChange}
          required
        />
        <ValidationError
          prefix="Adresse"
          field="adresse"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="commune">الكمية</label>
        <select
          id="quantite"
          name="quantite"
          value={formData.quantite}
          onChange={handleInputChange}
          required
        >
          <option value=""></option>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <ValidationError
          prefix="Quantite"
          field="quantite"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">رقم الهاتف</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleInputChange}
          pattern="[0-9]{10}"
          required
        />
        <ValidationError
          prefix="Telephone"
          field="telephone"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="wilaya">الولاية </label>
        <select
          id="wilaya"
          name="wilaya"
          value={selectedWilaya}
          onChange={handleWilayaChange}
          required
        >
          <option value="">-- Sélectionner une wilaya --</option>
          {wilayasData.map((wilaya) => (
            <option key={wilaya.id} value={wilaya.name}>
              {wilaya.name}
            </option>
          ))}
        </select>
        <ValidationError prefix="Wilaya" field="wilaya" errors={state.errors} />
      </div>

      {communes.length > 0 && (
        <div className="form-group">
          <label htmlFor="commune">االدائرة</label>
          <select
            id="commune"
            name="commune"
            value={formData.commune}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Sélectionner une commune --</option>
            {communes.map((commune, index) => (
              <option key={index} value={commune}>
                {commune}
              </option>
            ))}
          </select>
          <ValidationError
            prefix="Commune"
            field="commune"
            errors={state.errors}
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="totale">Totale</label>
        <input
          type="text"
          id="totale"
          name="totale"
          value={formData.quantite ? formData.quantite * 1500 : ""}
          readOnly
        />
        <ValidationError prefix="Totale" field="totale" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="submit-btn">
        إرسال
      </button>
    </form>
  );
};

export default WilayaCommuneSelector;
