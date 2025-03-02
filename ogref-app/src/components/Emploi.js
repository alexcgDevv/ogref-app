import React, { useState } from "react";
const API_URL = process.env.REACT_APP_API_URL;

const Emploi = () => {
    const [cv, setCv] = useState(null);
    const [commentaire, setCommentaire] = useState("");
    const [message, setMessage] = useState("");

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

        const formData = new FormData();
        formData.append("cv", cv);
        formData.append("commentaire", commentaire);

        try {
            const response = await fetch(`${API_URL}/endpoint`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setMessage("Votre candidature a bien été envoyée !");
                setCv(null);
                setCommentaire("");

            } else {
                const errorText = await response.text();  // Récupérer le texte de l'erreur
                setMessage(`Une erreur est survenue : ${errorText}`);
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            setMessage(`Impossible d'envoyer la candidature. Détail : ${error.message}`);
        }

    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <h1 className="mb-4 fw-bold">Rejoignez notre équipe !</h1>
                    <p className="lead">
                        Nous recherchons toujours des frigoristes et ferblantiers motivés, qu’ils soient apprentis ou compagnons.
                        Ici, dans notre entreprise familiale, vous aurez l’opportunité d’apprendre et de contribuer à son évolution.
                    </p>

                    {/* Espace Image (Peut être remplacé par une vraie image) */}
                  {/**  <div className="my-4">
                        <img src="https://via.placeholder.com/800x300" alt="Notre équipe" className="img-fluid rounded shadow" />
                    </div>*/}

                    {/* Formulaire */}
                    <form onSubmit={handleSubmit} className="text-start mt-4">
                        <div className="mb-3">
                            <label className="form-label fw-bold">Joindre votre CV :</label>
                            <input type="file" className="form-control" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
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

                        <button type="submit" className="btn btn-primary w-100 fw-bold">
                            Envoyer ma candidature
                        </button>
                    </form>

                    {/* Message de confirmation */}
                    {message && <div className="alert alert-info mt-3">{message}</div>}
                </div>
            </div>
        </div>
    );
};

export default Emploi;
