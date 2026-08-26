import os
from pathlib import Path
from PIL import Image

def remplacer_par_photos_compressees(dossier_chemin: str, qualite: int = 70) -> None:
    """
    Compresse toutes les images d'un dossier et remplace directement les originaux.
    
    :param dossier_chemin: Chemin vers le dossier contenant les photos.
    :param qualite: Qualité de compression (1 à 95, 70 est recommandé).
    """
    dossier = Path(dossier_chemin)
    extensions_valides = {'.jpg', '.jpeg', '.png', '.webp'}

    if not dossier.exists() or not dossier.is_dir():
        print(f"Le dossier '{dossier_chemin}' n'existe pas.")
        return

    photos = [f for f in dossier.iterdir() if f.is_file() and f.suffix.lower() in extensions_valides]
    
    if not photos:
        print("Aucune photo prise en charge n'a été trouvée.")
        return

    print(f"Début de la compression de {len(photos)} photos...")

    for fichier in photos:
        # Fichier temporaire pour la compression
        fichier_temp = dossier / f"temp_{fichier.name}"

        try:
            with Image.open(fichier) as img:
                # Préservation de l'orientation EXIF originale s'il y en a une
                exif = img.info.get("exif")

                # Conversion RGBA -> RGB si le format de sortie ne supporte pas l'alpha (JPEG)
                if img.mode in ("RGBA", "P") and fichier.suffix.lower() in ('.jpg', '.jpeg'):
                    img = img.convert("RGB")

                # Options d'enregistrement
                save_kwargs = {
                    "optimize": True,
                    "quality": qualite
                }
                if exif:
                    save_kwargs["exif"] = exif

                # Sauvegarde temporaire
                img.save(fichier_temp, **save_kwargs)

            # Remplacement de la photo originale par la version compressée
            os.replace(fichier_temp, fichier)
            print(f"Remplacé avec succès : {fichier.name}")

        except Exception as e:
            print(f"Erreur lors du traitement de {fichier.name} : {e}")
            # Nettoyage du fichier temp si l'opération a échoué
            if fichier_temp.exists():
                fichier_temp.unlink()

if __name__ == "__main__":
    # Remplacez par le chemin de votre dossier
    DOSSIER_TARGET = r".\exoweb\src\img\team\2026"    
    
    # Ajustez la qualité selon vos besoins (70-75 est un bon compromis)
    remplacer_par_photos_compressees(DOSSIER_TARGET, qualite=70)