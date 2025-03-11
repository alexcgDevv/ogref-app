import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container py-5">
      <motion.h1
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        À propos de nous
      </motion.h1>

      <motion.p
        className="text-center lead"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Depuis trois générations, O.G. Réfrigération se spécialise en chauffage,
        climatisation et réfrigération. Fondée par Omer Gougeon et développée par ses fils,
        l’entreprise a su évoluer avec les avancées technologiques tout en restant fidèle à ses valeurs.
        Aujourd’hui dirigée par Maxime et Alexandre, elle continue d’offrir des solutions durables
        et adaptées aux besoins résidentiels, commerciaux et industriels.
      </motion.p>

      <div className="row align-items-center mt-5">
        {/* Texte */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="fw-bold">Notre Engagement</h2>
          <p>
            Fiabilité, transparence et expertise définissent notre approche. Nous privilégions des
            équipements de qualité, comme ceux de <strong>Fujitsu</strong> et <strong>York</strong>,
            et nous assurons à chaque client un service personnalisé et performant.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="col-md-6 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/img_about/collage-about.jpg`}
            alt="Notre Mission"
            className="img-fluid rounded shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}