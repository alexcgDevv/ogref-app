const API_URL = "http://127.0.0.1:8000";

export const sendFormData = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire :", error);
    }
};
