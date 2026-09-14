# Script pour modifier le titre (métadonnées) des documents de commandites
# afin que le nom soit propre lors de l'affichage/téléchargement

import re
from pypdf import PdfReader, PdfWriter


def fix_pdf_title(input_path, output_path, new_title):
    reader = PdfReader(input_path)
    writer = PdfWriter()

    for page in reader.pages:
        writer.add_page(page)

    metadata = reader.metadata or {}
    writer.add_metadata(metadata)
    writer.add_metadata({"/Title": new_title})

    with open(output_path, "wb") as f:
        writer.write(f)

    print(f"✅ Titre corrigé : {output_path}")



# Fichier français
fix_pdf_title(
    f"Document de commandites Exocet 2025-2026.pdf", # ancien nom: À MODIFIER SELON LE NOM DU FICHIER DE COMMANDITES
    f"Document de commandites Exocet 2025-2026.pdf", # nouveau nom affiché: À MODIFIER SELON LE NOM DÉSIRÉ
    f"Document de commandites Exocet 2025-2026"  # nouveau nom interne: À MODIFIER SELON LE NOM DÉSIRÉ
)

# Fichier anglais
fix_pdf_title(
    f"Exocet Sponsorship document 2025-2026.pdf", # ancien nom: À MODIFIER SELON LE NOM DU FICHIER DE COMMANDITES
    f"Exocet Sponsorship document 2025-2026.pdf", # nouveau nom affiché: À MODIFIER SELON LE NOM DÉSIRÉ
    f"Exocet Sponsorship Document 2025-2026" # nouveau nom interne: À MODIFIER SELON LE NOM DÉSIRÉ
)