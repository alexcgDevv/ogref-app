from fastapi import FastAPI, File, Form, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import base64
import html
import resend

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
EMAIL_FROM = os.getenv("EMAIL_FROM", "cv@ogref.ca")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER", "contact@ogref.ca")

resend.api_key = RESEND_API_KEY


def send_email(cv_file: UploadFile, commentaire: str):
    if not RESEND_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="RESEND_API_KEY manquante sur le serveur."
        )

    try:
        commentaire_safe = html.escape(commentaire)

        file_bytes = cv_file.file.read()
        if not file_bytes:
            raise HTTPException(
                status_code=400,
                detail="Le fichier CV est vide."
            )

        file_base64 = base64.b64encode(file_bytes).decode("utf-8")

        resend.Emails.send({
            "from": f"O.G. Réfrigération <{EMAIL_FROM}>",
            "to": [EMAIL_RECEIVER],
            "subject": "Nouvelle candidature - O.G. Réfrigération",
            "html": f"""
                <h2>Nouvelle candidature</h2>
                <p><strong>Commentaire du candidat :</strong></p>
                <p>{commentaire_safe}</p>
                <p>Le CV est joint à ce courriel.</p>
            """,
            "attachments": [
                {
                    "filename": cv_file.filename,
                    "content": file_base64,
                }
            ],
        })

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erreur lors de l'envoi de l'email : {str(e)}"
        )


@app.post("/emploi")
async def submit_emploi(
    cv: UploadFile = File(...),
    commentaire: str = Form(...)
):
    send_email(cv, commentaire)
    return {"message": "Candidature envoyée avec succès"}
