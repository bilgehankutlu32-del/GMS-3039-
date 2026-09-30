import json
import time
import random

try:
    from duckduckgo_search import DDGS
except ImportError:
    print("Lütfen önce terminale şunu yazıp kurun: pip install duckduckgo-search")
    exit()

def resimleri_otomatik_bul():
    # 1. Veritabanını aç
    with open('database.json', 'r', encoding='utf-8') as f:
        recipes = json.load(f)

    print("🥷 Ninja Bot devrede... (Yakalanamamak için insansı hızda ilerleyecek)")

    for i, recipe in enumerate(recipes):
        # Eğer yemeğin zaten gerçek ve geçerli bir fotoğrafı varsa (mesela ilk 25'i) onları hızla es geç
        if "image" in recipe and recipe["image"] and "unsplash.com" not in recipe["image"]:
            continue

        yemek_adi = recipe.get('name', '')
        mutfak = recipe.get('cuisine', '')
        # Nokta atışı nizami tabak bulması için "high quality plating" (yüksek kalite sunum) takısı
        arama_terimi = f"{yemek_adi} {mutfak} cuisine food high quality plating"
        
        print(f"\n[{i+1}/{len(recipes)}] Aranıyor: {yemek_adi}...")
        
        basari = False
        # Engeli aşmak için DDGS oturumunu her denemede sıfırdan açıyoruz
        for deneme in range(4):
            try:
                with DDGS() as ddgs:
                    sonuclar = list(ddgs.images(arama_terimi, max_results=1))
                    
                    if sonuclar:
                        bulunan_link = sonuclar[0]['image']
                        recipe['image'] = bulunan_link
                        print(f"✅ Başarılı: {bulunan_link}")
                        
                        # ÇÖKME İHTİMALİNE KARŞI ANINDA KAYDET! Emekler gitmesin.
                        with open('database.json', 'w', encoding='utf-8') as f_out:
                            json.dump(recipes, f_out, ensure_ascii=False, indent=4)
                        
                        basari = True
                        
                        # Ban yememek için her arama sonrası rastgele kısa mola (2 ile 5 saniye arası)
                        time.sleep(random.uniform(2, 5))
                        break
                    else:
                        print(f"❌ Görsel bulunamadı.")
                        break

            except Exception as e:
                # Güvenlik duvarına çarparsak bekleme süresini katlayarak artır
                bekleme_suresi = 30 + (deneme * 15) # Önce 30, sonra 45, sonra 60 saniye saklan
                print(f"🚨 Radara yakalandık (Timeout). Ban'ın kalkması için {bekleme_suresi} saniye siperde bekleniyor...")
                time.sleep(bekleme_suresi)
        
        if not basari:
            print(f"⏩ {yemek_adi} çok inatçı çıktı, şimdilik atlanıyor.")

    print("\n🎉 GÖREV TAMAMLANDI! Nizami menü hazır şefim.")

if __name__ == "__main__":
    resimleri_otomatik_bul()