import React, { useState } from "react";
import { motion } from "framer-motion";

const API_URL = process.env.REACT_APP_API_URL;

const Emploi = () => {
  const [cv, setCv] = useState(null);
  const [commentaire, setCommentaire] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event) => {
    setCv(event.target.files[0]);
  };

  const handleCommentChange = (event) => {
    setCommentaire(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cv) {
      setMessage("Veuillez joindre un CV.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("cv", cv);
    formData.append("commentaire", commentaire);

    try {
      const response = await fetch(`${API_URL}/emploi`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Votre candidature a bien été envoyée !");
        setCv(null);
        setCommentaire("");
      } else {
        const errorText = await response.text();
        setMessage(`Une erreur est survenue : ${errorText}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setMessage(`Impossible d'envoyer la candidature. Détail : ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <motion.div
          className="col-md-8 mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 fw-bold">Rejoignez notre équipe !</h1>
          <p className="lead">
            Nous recherchons toujours des frigoristes et ferblantiers motivés, qu’ils soient apprentis ou compagnons.
            Ici, dans notre entreprise familiale, vous aurez l’opportunité d’apprendre et de contribuer à son évolution.
          </p>


          {/* Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            className="text-start mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="mb-3">
              <label className="form-label fw-bold">Joindre votre CV :</label>
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Laissez-nous un commentaire :</label>
              <textarea
                className="form-control"
                rows="4"
                value={commentaire}
                onChange={handleCommentChange}
                placeholder="Un petit mot pour nous ?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
            </button>
          </motion.form>

          {/* Message de confirmation ou d'erreur */}
          {message && (
            <motion.div
              className="alert alert-info mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {message}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Emploi;
