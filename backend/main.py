from fastapi import FastAPI, File, Form, UploadFile, HTTPException
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

EMAIL_SENDER = "alexcg.devv@gmail.com"
EMAIL_PASSWORD = "sjmc gblp iexn xxmg "
EMAIL_RECEIVER = "cholette1103@gmail.com"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TEMPORAIREMENT POUR TESTER (peut être restreint plus tard)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def send_email(cv_file, commentaire):
    try:
        msg = MIMEMultipart()
        msg["From"] = EMAIL_SENDER
        msg["To"] = EMAIL_RECEIVER
        msg["Subject"] = "Nouvelle Candidature"

        msg.attach(MIMEText(f"Commentaire du candidat :\n{commentaire}", "plain"))

        # Ajouter le fichier CV en pièce jointe
        part = MIMEBase("application", "octet-stream")
        part.set_payload(cv_file.file.read())
        encoders.encode_base64(part)
        part.add_header("Content-Disposition", f"attachment; filename={cv_file.filename}")
        msg.attach(part)

        # Envoyer l'email
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(EMAIL_SENDER, EMAIL_PASSWORD)
        server.sendmail(EMAIL_SENDER, EMAIL_RECEIVER, msg.as_string())
        server.quit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de l'envoi de l'email : {str(e)}")

@app.post("/emploi")
async def submit_emploi(cv: UploadFile = File(...), commentaire: str = Form(...)):
    send_email(cv, commentaire)
    return {"message": "Candidature envoyée avec succès"}
