import json
import os

# Şef notu olmayan veya boş olan tarifler için akıllı şablonlar ve üreteç
def chef_notu_uret(yemek_adi, mutfak, malzemeler):
    malzeme_str = ", ".join(z.lower() for z in malzemeler[:3]) if malzemeler else "fresh ingredients"
    
    # Mutfak türüne göre profesyonel dokunuşlar
    if mutfak == "Turkish":
        return f"Sauté or simmer {malzeme_str} with traditional techniques to highlight the rich culinary heritage of {mutfak.lower()} cuisine. Balance the authentic flavors with high-quality olive oil or butter, simmering gently until tender and deeply aromatic."
    elif mutfak == "Italian":
        return f"Build a robust flavor foundation using {malzeme_str}, treating each component with classic Italian precision. Ensure proper balancing of starches, fats, and acidity, finishing with a careful toss or simmer to achieve an authentic texture."
    elif mutfak == "French":
        return f"Execute proper classical French techniques, beginning with a careful sweat or sear of {malzeme_str}. Build complexity through careful reduction, utilizing high-grade butter or stocks to achieve a glossy, harmonious finish."
    elif mutfak == "Japanese":
        return f"Honor the purity of ingredients like {malzeme_str} with precise knife work and balanced heat control. Maintain clean umami profiles through careful dashi, soy, or quick-sear execution without masking the core flavors."
    elif mutfak == "Mexican":
        return f"Toast and blend aromatics including {malzeme_str} to extract deep, smoky, and vibrant profiles. Balance the heat and acidity carefully, finishing with fresh herbs or citrus for an authentic regional finish."
    else:
        return f"Carefully prep and combine {malzeme_str} using balanced heat application. Ensure textures and macro profiles remain harmonious, finishing the dish cleanly to highlight its core character."

def main():
    dosya_adi = "database.json"
    
    if not os.path.exists(dosya_adi):
        print(f"Hata: {dosya_adi} dosyası bulunamadı! Doğru dizinde olduğundan emin ol.")
        return

    print("database.json okunuyor...")
    with open(dosya_adi, "r", encoding="utf-8") as f:
        try:
            veritabani = json.load(f)
        except Exception as e:
            print(f"JSON okuma hatası: {e}")
            return

    guncellenen_sayisi = 0

    if isinstance(veritabani, list):
        tarifler = veritabani
    elif isinstance(veritabani, dict):
        tarifler = veritabani.get("recipes", veritabani.get("data", []))
    else:
        print("Bilinmeyen JSON yapısı!")
        return

    print(f"Toplam {len(tarifler)} tarif taranıyor...")

    for tarif in tarifler:
        if "instructions" not in tarif or not tarif["instructions"].strip():
            isim = tarif.get("name", "Unknown Dish")
            mutfak = tarif.get("cuisine", "Global")
            malzemeler = tarif.get("ingredients", [])
            
            tarif["instructions"] = chef_notu_uret(isim, mutfak, malzemeler)
            guncellenen_sayisi += 1

    print("Güncellenmiş veritabanı kaydediliyor...")
    with open(dosya_adi, "w", encoding="utf-8") as f:
        json.dump(veritabani, f, indent=4, ensure_ascii=False)

    print(f"İşlem tamam! Toplam {guncellenen_sayisi} tarife eksiksiz şef notu yazıldı ve dosya temizlendi.")

if __name__ == "__main__":
    main()