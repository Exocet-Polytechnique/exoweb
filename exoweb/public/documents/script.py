# Script pour modifier le nom des documents de commandites pour s'assurer que le nom est propre lors du téléchargement 

from pypdf import PdfReader, PdfWriter

def fix_pdf_title(input_path, output_path, new_title):
    reader = PdfReader(input_path)
    writer = PdfWriter()

    # Copier toutes les pages
    for page in reader.pages:
        writer.add_page(page)

    # Copier les métadonnées existantes, puis écraser le titre
    metadata = reader.metadata or {}
    writer.add_metadata(metadata)
    writer.add_metadata({"/Title": new_title})

    with open(output_path, "wb") as f:
        writer.write(f)

    print(f"✅ Titre corrigé : {output_path}")


# Fichier français
fix_pdf_title(
    "Document de commandites Exocet 2025-2026.pdf",
    "Document de commandites Exocet 2025-2026.pdf",  # écrase le même fichier
    "Document de commandites Exocet 2025-2026"
)

# Fichier anglais
fix_pdf_title(
    "Exocet Sponsorship document 2025-2026.pdf",
    "Exocet Sponsorship document 2025-2026.pdf",  # écrase le même fichier
    "Exocet Sponsorship Document 2025-2026"
)