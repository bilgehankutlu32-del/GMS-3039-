const recipeDatabase = [
  // --- TURKISH & ANATOLIAN ---
  { name: "Tirmis Hardalı Vinaigrette Salad", cuisine: "Turkish", ingredients: ["lupin beans", "mustard", "mixed greens", "olive oil", "lemon"], cal: 280, p: 12, c: 18, f: 19, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Antalya Usulü Piyaz", cuisine: "Turkish", ingredients: ["white beans", "tahini", "garlic", "lemon", "vinegar", "egg", "tomato"], cal: 380, p: 18, c: 30, f: 22, diet: ["Vegetarian", "Gluten-Free", "Dairy-Free"] },
  { name: "Hibeş", cuisine: "Turkish", ingredients: ["tahini", "lemon", "garlic", "cumin", "paprika", "olive oil"], cal: 320, p: 8, c: 15, f: 28, diet: ["Vegan", "Vegetarian", "Keto", "Dairy-Free", "Gluten-Free"] },
  { name: "Manca Meze", cuisine: "Turkish", ingredients: ["eggplant", "red pepper", "garlic", "olive oil", "vinegar"], cal: 210, p: 3, c: 15, f: 16, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Hünkar Beğendi", cuisine: "Turkish", ingredients: ["lamb", "eggplant", "milk", "butter", "cheese", "flour"], cal: 620, p: 35, c: 20, f: 45, diet: ["Fitness"] },
  { name: "Mercimek Çorbası", cuisine: "Turkish", ingredients: ["red lentils", "onion", "carrot", "potato", "olive oil", "mint"], cal: 280, p: 14, c: 42, f: 8, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Zeytinyağlı Enginar", cuisine: "Turkish", ingredients: ["artichoke", "olive oil", "lemon", "carrot", "peas", "onion"], cal: 220, p: 6, c: 25, f: 12, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Izgara Levrek (Grilled Sea Bass)", cuisine: "Turkish", ingredients: ["sea bass", "olive oil", "lemon", "garlic", "black pepper"], cal: 350, p: 45, c: 2, f: 15, diet: ["Pescatarian", "Keto", "Dairy-Free", "Gluten-Free", "Fitness"] },
  
  // --- ITALIAN ---
  { name: "Agnolotti del Plin", cuisine: "Italian", ingredients: ["pasta dough", "roast veal", "pork", "spinach", "butter", "sage"], cal: 590, p: 28, c: 52, f: 30, diet: [] },
  { name: "Risotto al Tartufo", cuisine: "Italian", ingredients: ["arborio rice", "truffle", "parmesan", "butter", "white wine", "onion"], cal: 480, p: 14, c: 60, f: 22, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Bistecca alla Fiorentina", cuisine: "Italian", ingredients: ["t-bone steak", "olive oil", "rosemary", "sea salt", "black pepper"], cal: 850, p: 75, c: 0, f: 55, diet: ["Keto", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Caprese Salad", cuisine: "Italian", ingredients: ["tomato", "mozzarella", "basil", "olive oil", "balsamic vinegar"], cal: 320, p: 14, c: 8, f: 26, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Pesce all'Acqua Pazza", cuisine: "Italian", ingredients: ["white fish", "tomato", "garlic", "parsley", "white wine", "olive oil"], cal: 310, p: 40, c: 8, f: 12, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Pesto Zucchini Noodles", cuisine: "Italian", ingredients: ["zucchini", "basil", "pine nuts", "parmesan", "garlic", "olive oil"], cal: 280, p: 10, c: 12, f: 24, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Melanzane alla Parmigiana", cuisine: "Italian", ingredients: ["eggplant", "tomato sauce", "mozzarella", "parmesan", "basil"], cal: 450, p: 18, c: 25, f: 32, diet: ["Vegetarian", "Gluten-Free"] },
  
  // --- MEXICAN ---
  { name: "Tacos al Pastor", cuisine: "Mexican", ingredients: ["pork", "pineapple", "corn tortilla", "onion", "cilantro"], cal: 450, p: 24, c: 45, f: 18, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Chiles en Nogada", cuisine: "Mexican", ingredients: ["poblano pepper", "ground beef", "walnut", "pomegranate", "cream"], cal: 580, p: 26, c: 35, f: 38, diet: ["Gluten-Free"] },
  { name: "Guacamole & Cucumber Slices", cuisine: "Mexican", ingredients: ["avocado", "lime", "onion", "tomato", "cilantro", "cucumber"], cal: 220, p: 4, c: 18, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Black Bean Sofrito Bowls", cuisine: "Mexican", ingredients: ["black beans", "brown rice", "bell pepper", "onion", "cilantro"], cal: 380, p: 18, c: 65, f: 4, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Ceviche de Pescado", cuisine: "Mexican", ingredients: ["white fish", "lime", "tomato", "onion", "cilantro", "jalapeno"], cal: 210, p: 30, c: 12, f: 4, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Vegan Mushroom Fajitas", cuisine: "Mexican", ingredients: ["portobello mushroom", "bell pepper", "onion", "corn tortilla", "lime"], cal: 320, p: 8, c: 50, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  
  // --- ASIAN ---
  { name: "Caramelized Soy-Honey Shrimp", cuisine: "Asian", ingredients: ["shrimp", "soy sauce", "honey", "garlic", "ginger", "sesame oil"], cal: 340, p: 28, c: 35, f: 8, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Tofu & Broccoli Stir Fry", cuisine: "Asian", ingredients: ["tofu", "broccoli", "soy sauce", "garlic", "ginger", "rice"], cal: 380, p: 22, c: 45, f: 12, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Fitness"] },
  { name: "Sashimi Platter", cuisine: "Asian", ingredients: ["salmon", "tuna", "soy sauce", "wasabi", "ginger"], cal: 250, p: 45, c: 5, f: 8, diet: ["Pescatarian", "Keto", "Dairy-Free", "Fitness"] },
  { name: "Chicken Lettuce Wraps", cuisine: "Asian", ingredients: ["chicken breast", "lettuce", "water chestnuts", "hoisin sauce", "soy sauce"], cal: 310, p: 35, c: 15, f: 10, diet: ["Dairy-Free", "Keto", "Fitness"] },
  { name: "Miso Glazed Eggplant", cuisine: "Asian", ingredients: ["eggplant", "miso paste", "soy sauce", "mirin", "sesame seeds"], cal: 180, p: 6, c: 25, f: 8, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  
  // --- MEDITERRANEAN / MIDDLE EASTERN ---
  { name: "Fattoush Salad", cuisine: "Middle Eastern", ingredients: ["lettuce", "cucumber", "tomato", "pita bread", "radish", "sumac", "olive oil"], cal: 240, p: 5, c: 30, f: 12, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Grilled Octopus", cuisine: "Mediterranean", ingredients: ["octopus", "olive oil", "lemon", "oregano", "garlic"], cal: 280, p: 42, c: 4, f: 10, diet: ["Pescatarian", "Keto", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Falafel & Tahini Bowl", cuisine: "Middle Eastern", ingredients: ["chickpeas", "tahini", "cucumber", "tomato", "parsley", "garlic"], cal: 450, p: 18, c: 55, f: 22, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Chicken Shawarma Plate", cuisine: "Middle Eastern", ingredients: ["chicken", "garlic sauce", "cucumber", "tomato", "olive oil", "lemon"], cal: 480, p: 45, c: 12, f: 28, diet: ["Keto", "Gluten-Free", "Fitness"] },
  { name: "Shakshuka", cuisine: "Middle Eastern", ingredients: ["egg", "tomato", "bell pepper", "onion", "garlic", "cumin", "olive oil"], cal: 340, p: 16, c: 20, f: 22, diet: ["Vegetarian", "Gluten-Free", "Dairy-Free"] },
  
  // --- FRENCH ---
  { name: "Ratatouille", cuisine: "French", ingredients: ["eggplant", "zucchini", "bell pepper", "tomato", "garlic", "olive oil"], cal: 190, p: 4, c: 22, f: 11, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Salade Niçoise", cuisine: "French", ingredients: ["tuna", "egg", "green beans", "potato", "olives", "olive oil"], cal: 410, p: 32, c: 25, f: 22, diet: ["Pescatarian", "Gluten-Free", "Dairy-Free", "Fitness"] },
  { name: "Steak au Poivre", cuisine: "French", ingredients: ["beef steak", "black peppercorns", "butter", "cream", "cognac"], cal: 720, p: 55, c: 8, f: 48, diet: ["Keto", "Gluten-Free"] }
// --- ITALIAN (Piedmontese & Handcrafted Classics) ---
  { name: "Vitello Tonnato", cuisine: "Italian", ingredients: ["veal", "tuna", "capers", "egg yolk", "olive oil", "lemon"], cal: 420, p: 45, c: 2, f: 25, diet: ["Keto", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Tajarin al Tartufo", cuisine: "Italian", ingredients: ["pasta dough", "egg yolk", "butter", "white truffle", "parmesan"], cal: 550, p: 18, c: 45, f: 32, diet: ["Vegetarian"] },
  { name: "Brasato al Barolo", cuisine: "Italian", ingredients: ["beef roast", "barolo wine", "onion", "carrot", "celery", "rosemary"], cal: 680, p: 55, c: 12, f: 40, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Artisan Handmade Pasta", cuisine: "Italian", ingredients: ["semolina flour", "egg", "olive oil", "salt"], cal: 350, p: 12, c: 65, f: 6, diet: ["Vegetarian", "Dairy-Free"] },
  { name: "Cacio e Pepe", cuisine: "Italian", ingredients: ["spaghetti", "pecorino romano", "black pepper"], cal: 480, p: 18, c: 60, f: 18, diet: ["Vegetarian"] },
  { name: "Ossobuco alla Milanese", cuisine: "Italian", ingredients: ["veal shank", "white wine", "beef broth", "onion", "garlic", "lemon"], cal: 520, p: 48, c: 10, f: 28, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Focaccia Barese", cuisine: "Italian", ingredients: ["flour", "yeast", "olive oil", "cherry tomato", "olives"], cal: 380, p: 8, c: 55, f: 15, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Tiramisu Naturale", cuisine: "Italian", ingredients: ["mascarpone", "ladyfingers", "espresso", "cocoa powder", "egg"], cal: 450, p: 8, c: 40, f: 28, diet: ["Vegetarian"] },

  // --- GASTRONOMIC FUSION & ASIAN ---
  { name: "Caramelized Soy-Honey Shrimp & Arancini", cuisine: "Asian", ingredients: ["shrimp", "soy sauce", "honey", "arborio rice", "mozzarella", "panko"], cal: 680, p: 32, c: 75, f: 24, diet: ["Pescatarian"] },
  { name: "Spicy Tuna Crispy Rice", cuisine: "Japanese", ingredients: ["sushi rice", "tuna", "sriracha", "sesame oil", "jalapeno"], cal: 320, p: 22, c: 35, f: 10, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Matcha Soba Noodles", cuisine: "Japanese", ingredients: ["soba noodles", "matcha", "soy sauce", "sesame oil", "green onion"], cal: 290, p: 12, c: 50, f: 6, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Chicken Yakitori", cuisine: "Japanese", ingredients: ["chicken thigh", "soy sauce", "mirin", "sake", "sugar", "green onion"], cal: 310, p: 28, c: 15, f: 14, diet: ["Dairy-Free", "Fitness"] },
  { name: "Beef Gyudon", cuisine: "Japanese", ingredients: ["beef", "onion", "rice", "soy sauce", "dashi", "egg"], cal: 550, p: 32, c: 65, f: 18, diet: ["Dairy-Free", "Fitness"] },
  { name: "Tom Yum Goong", cuisine: "Asian", ingredients: ["shrimp", "lemongrass", "galangal", "kaffir lime", "chili", "fish sauce"], cal: 240, p: 25, c: 12, f: 8, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Pad Kra Pao", cuisine: "Asian", ingredients: ["ground pork", "holy basil", "chili", "garlic", "soy sauce", "egg"], cal: 480, p: 35, c: 10, f: 30, diet: ["Dairy-Free", "Keto", "Fitness"] },
  
  // --- TURKISH & ANATOLIAN ---
  { name: "Gavurdağı Salatası", cuisine: "Turkish", ingredients: ["tomato", "walnut", "onion", "pomegranate molasses", "olive oil", "parsley"], cal: 250, p: 5, c: 20, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Adana Kebap", cuisine: "Turkish", ingredients: ["lamb", "tail fat", "red pepper", "salt", "pita"], cal: 680, p: 38, c: 35, f: 45, diet: [] },
  { name: "Çılbır", cuisine: "Turkish", ingredients: ["egg", "yogurt", "garlic", "butter", "red pepper flakes"], cal: 320, p: 16, c: 8, f: 24, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Midye Dolma", cuisine: "Turkish", ingredients: ["mussels", "rice", "pine nuts", "currants", "allspice", "cinnamon"], cal: 310, p: 12, c: 45, f: 10, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Kuymak / Mıhlama", cuisine: "Turkish", ingredients: ["cornmeal", "butter", "trabzon cheese", "water"], cal: 520, p: 15, c: 25, f: 42, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Ali Nazik Kebap", cuisine: "Turkish", ingredients: ["ground beef", "eggplant", "yogurt", "garlic", "butter"], cal: 480, p: 28, c: 15, f: 35, diet: ["Gluten-Free"] },
  { name: "Şakşuka", cuisine: "Turkish", ingredients: ["eggplant", "zucchini", "potato", "tomato", "garlic", "olive oil"], cal: 290, p: 4, c: 28, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Zeytinyağlı Yaprak Sarma", cuisine: "Turkish", ingredients: ["vine leaves", "rice", "onion", "pine nuts", "mint", "olive oil"], cal: 340, p: 5, c: 48, f: 15, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },

  // --- HIGH-PROTEIN / FITNESS FOCUSED ---
  { name: "Egg White & Cottage Cheese Scramble", cuisine: "American", ingredients: ["egg whites", "cottage cheese", "spinach", "black pepper"], cal: 220, p: 35, c: 8, f: 4, diet: ["Vegetarian", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Grilled Chicken Breast Plate", cuisine: "American", ingredients: ["chicken breast", "broccoli", "brown rice", "olive oil"], cal: 480, p: 55, c: 45, f: 10, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Lean Turkey Meatballs", cuisine: "American", ingredients: ["ground turkey", "garlic", "egg", "oats", "tomato sauce"], cal: 380, p: 42, c: 22, f: 12, diet: ["Dairy-Free", "Fitness"] },
  { name: "Baked Salmon & Quinoa", cuisine: "American", ingredients: ["salmon", "quinoa", "asparagus", "lemon", "olive oil"], cal: 520, p: 45, c: 35, f: 20, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Beef Mince & Sweet Potato", cuisine: "American", ingredients: ["lean beef", "sweet potato", "spinach", "garlic"], cal: 540, p: 48, c: 50, f: 16, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },

  // --- MEXICAN ---
  { name: "Carnitas Tacos", cuisine: "Mexican", ingredients: ["pork", "orange", "garlic", "oregano", "corn tortilla", "cilantro"], cal: 520, p: 38, c: 35, f: 24, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Pozole Verde", cuisine: "Mexican", ingredients: ["chicken", "hominy corn", "tomatillo", "jalapeno", "cilantro", "radish"], cal: 430, p: 32, c: 45, f: 14, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Sopa de Tortilla", cuisine: "Mexican", ingredients: ["chicken broth", "tomato", "tortilla", "avocado", "cheese", "chili"], cal: 360, p: 15, c: 35, f: 18, diet: ["Gluten-Free"] },
  { name: "Tamales de Elote", cuisine: "Mexican", ingredients: ["masa dough", "corn", "butter", "sugar", "corn husk"], cal: 310, p: 5, c: 48, f: 12, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Elote (Street Corn)", cuisine: "Mexican", ingredients: ["corn", "mayonnaise", "cotija cheese", "chili powder", "lime"], cal: 280, p: 8, c: 30, f: 15, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Huevos Rancheros", cuisine: "Mexican", ingredients: ["egg", "corn tortilla", "tomato", "chili", "black beans", "avocado"], cal: 420, p: 18, c: 40, f: 22, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Enchiladas Suizas", cuisine: "Mexican", ingredients: ["chicken", "corn tortilla", "tomatillo", "cream", "swiss cheese"], cal: 580, p: 35, c: 42, f: 30, diet: ["Gluten-Free"] },

  // --- FRENCH & MEDITERRANEAN ---
  { name: "Coq au Vin", cuisine: "French", ingredients: ["chicken", "red wine", "mushrooms", "bacon", "pearl onions", "garlic"], cal: 620, p: 52, c: 15, f: 32, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Bouillabaisse", cuisine: "French", ingredients: ["white fish", "mussels", "shrimp", "tomato", "saffron", "fennel"], cal: 450, p: 48, c: 20, f: 15, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "French Onion Soup", cuisine: "French", ingredients: ["onion", "beef broth", "baguette", "gruyere cheese", "butter"], cal: 380, p: 18, c: 35, f: 18, diet: [] },
  { name: "Greek Moussaka", cuisine: "Mediterranean", ingredients: ["eggplant", "ground beef", "potato", "tomato", "milk", "flour"], cal: 550, p: 28, c: 35, f: 32, diet: [] },
  { name: "Spanakopita", cuisine: "Mediterranean", ingredients: ["spinach", "feta cheese", "filo pastry", "egg", "onion", "olive oil"], cal: 340, p: 12, c: 30, f: 20, diet: ["Vegetarian"] },
  { name: "Tzatziki & Pita", cuisine: "Mediterranean", ingredients: ["yogurt", "cucumber", "garlic", "dill", "olive oil", "pita bread"], cal: 260, p: 10, c: 35, f: 8, diet: ["Vegetarian"] },

  // --- INDIAN ---
  { name: "Chicken Tikka Masala", cuisine: "Indian", ingredients: ["chicken breast", "yogurt", "tomato", "garam masala", "cream", "garlic"], cal: 550, p: 42, c: 15, f: 35, diet: ["Gluten-Free", "Keto", "Fitness"] },
  { name: "Palak Paneer", cuisine: "Indian", ingredients: ["spinach", "paneer cheese", "onion", "tomato", "garam masala", "garlic"], cal: 420, p: 18, c: 15, f: 32, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Chana Masala", cuisine: "Indian", ingredients: ["chickpeas", "tomato", "onion", "cumin", "coriander", "turmeric"], cal: 320, p: 12, c: 48, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Aloo Gobi", cuisine: "Indian", ingredients: ["potato", "cauliflower", "onion", "tomato", "turmeric", "cumin"], cal: 240, p: 6, c: 38, f: 8, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Lamb Biryani", cuisine: "Indian", ingredients: ["lamb", "basmati rice", "onion", "yogurt", "saffron", "mint"], cal: 680, p: 38, c: 70, f: 26, diet: ["Gluten-Free"] },
  { name: "Dal Makhani", cuisine: "Indian", ingredients: ["black lentils", "kidney beans", "butter", "cream", "tomato", "garlic"], cal: 450, p: 15, c: 45, f: 25, diet: ["Vegetarian", "Gluten-Free"] },

  // --- MIDDLE EASTERN ---
  { name: "Baba Ganoush", cuisine: "Middle Eastern", ingredients: ["eggplant", "tahini", "garlic", "lemon", "olive oil"], cal: 240, p: 5, c: 18, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Tabbouleh", cuisine: "Middle Eastern", ingredients: ["parsley", "bulgur", "tomato", "mint", "lemon", "olive oil"], cal: 180, p: 4, c: 25, f: 8, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Kofta Kebab", cuisine: "Middle Eastern", ingredients: ["ground beef", "onion", "parsley", "cumin", "coriander"], cal: 410, p: 30, c: 8, f: 28, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] }

// --- OTTOMAN PALACE & TURKISH REGIONAL ---
  { name: "Mutancana", cuisine: "Turkish", ingredients: ["lamb", "apricot", "fig", "almond", "honey", "butter"], cal: 650, p: 40, c: 45, f: 35, diet: ["Gluten-Free"] },
  { name: "Piliç Mahmudiye", cuisine: "Turkish", ingredients: ["chicken", "honey", "almond", "apricot", "lemon", "cinnamon"], cal: 520, p: 45, c: 30, f: 24, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Vişneli Yaprak Sarma", cuisine: "Turkish", ingredients: ["vine leaves", "sour cherry", "rice", "pine nuts", "onion", "olive oil"], cal: 310, p: 4, c: 50, f: 12, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Keşkül", cuisine: "Turkish", ingredients: ["milk", "almond flour", "sugar", "rice flour", "pistachio"], cal: 290, p: 8, c: 35, f: 14, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Antalya Serpme Börek", cuisine: "Turkish", ingredients: ["flour", "ground beef", "onion", "butter", "black pepper"], cal: 480, p: 18, c: 45, f: 25, diet: [] },
  { name: "Testi Kebabı", cuisine: "Turkish", ingredients: ["beef", "tomato", "garlic", "green pepper", "butter", "dough"], cal: 580, p: 45, c: 35, f: 28, diet: [] },
  { name: "Yörük Kebabı", cuisine: "Turkish", ingredients: ["lamb", "eggplant", "zucchini", "carrot", "peas", "thyme"], cal: 450, p: 38, c: 22, f: 24, diet: ["Gluten-Free", "Dairy-Free"] },
  { name: "Zerde", cuisine: "Turkish", ingredients: ["rice", "water", "sugar", "saffron", "pine nuts", "rose water"], cal: 220, p: 2, c: 48, f: 2, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Patlıcan Söğürme", cuisine: "Turkish", ingredients: ["eggplant", "garlic", "olive oil", "red pepper flakes", "salt"], cal: 180, p: 3, c: 15, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Kuzu İncik (Lamb Shank)", cuisine: "Turkish", ingredients: ["lamb shank", "potato", "carrot", "garlic", "tomato paste"], cal: 620, p: 55, c: 25, f: 32, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },

  // --- ITALIAN (Piedmont / Pollenzo Regional) ---
  { name: "Bagna Cauda", cuisine: "Italian", ingredients: ["garlic", "anchovies", "olive oil", "butter", "bell pepper", "celery"], cal: 350, p: 12, c: 10, f: 30, diet: ["Pescatarian", "Keto", "Gluten-Free"] },
  { name: "Panissa Vercellese", cuisine: "Italian", ingredients: ["arborio rice", "borlotti beans", "pork belly", "onion", "red wine"], cal: 580, p: 22, c: 65, f: 24, diet: ["Gluten-Free"] },
  { name: "Gnocchi al Castelmagno", cuisine: "Italian", ingredients: ["potato gnocchi", "castelmagno cheese", "butter", "milk", "black pepper"], cal: 520, p: 18, c: 55, f: 25, diet: ["Vegetarian"] },
  { name: "Torta di Nocciole", cuisine: "Italian", ingredients: ["hazelnut", "egg", "sugar", "butter"], cal: 480, p: 10, c: 35, f: 36, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Panna Cotta", cuisine: "Italian", ingredients: ["heavy cream", "sugar", "gelatin", "vanilla bean"], cal: 410, p: 4, c: 25, f: 35, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Risotto al Barbaresco", cuisine: "Italian", ingredients: ["arborio rice", "barbaresco wine", "beef broth", "butter", "parmesan"], cal: 460, p: 12, c: 60, f: 18, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Acciughe al Verde", cuisine: "Italian", ingredients: ["anchovies", "parsley", "garlic", "olive oil", "vinegar"], cal: 210, p: 14, c: 2, f: 18, diet: ["Pescatarian", "Keto", "Dairy-Free", "Gluten-Free"] },
  { name: "Polenta Integrale Con Funghi", cuisine: "Italian", ingredients: ["polenta", "wild mushrooms", "garlic", "olive oil", "parsley"], cal: 320, p: 8, c: 45, f: 12, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Brasato di Cinghiale (Wild Boar)", cuisine: "Italian", ingredients: ["wild boar", "red wine", "juniper berries", "onion", "carrot"], cal: 640, p: 58, c: 15, f: 38, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Gianduiotto (Hazelnut Chocolate)", cuisine: "Italian", ingredients: ["hazelnut paste", "cocoa powder", "sugar", "cocoa butter"], cal: 280, p: 4, c: 20, f: 22, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },

  // --- HIGH PROTEIN / FITNESS CORE ---
  { name: "Whey Protein Pancakes", cuisine: "American", ingredients: ["whey protein", "egg", "oats", "almond milk", "baking powder"], cal: 340, p: 38, c: 30, f: 8, diet: ["Vegetarian", "Fitness"] },
  { name: "Turkey & Zucchini Boats", cuisine: "American", ingredients: ["zucchini", "ground turkey", "tomato sauce", "mozzarella", "garlic"], cal: 380, p: 45, c: 15, f: 16, diet: ["Gluten-Free", "Keto", "Fitness"] },
  { name: "Egg White & Spinach Frittata", cuisine: "American", ingredients: ["egg whites", "spinach", "tomato", "onion", "olive oil"], cal: 210, p: 25, c: 10, f: 8, diet: ["Vegetarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Cottage Cheese & Berry Bowl", cuisine: "American", ingredients: ["cottage cheese", "blueberries", "almonds", "chia seeds", "honey"], cal: 320, p: 28, c: 25, f: 12, diet: ["Vegetarian", "Gluten-Free", "Fitness"] },
  { name: "Lean Beef & Broccoli Stir Fry", cuisine: "Asian", ingredients: ["lean beef", "broccoli", "soy sauce", "garlic", "ginger"], cal: 420, p: 48, c: 18, f: 16, diet: ["Dairy-Free", "Fitness"] },
  { name: "Tuna Stuffed Avocado", cuisine: "American", ingredients: ["avocado", "tuna", "greek yogurt", "celery", "lemon"], cal: 410, p: 35, c: 12, f: 26, diet: ["Pescatarian", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Grilled Salmon & Asparagus", cuisine: "American", ingredients: ["salmon", "asparagus", "olive oil", "lemon", "black pepper"], cal: 450, p: 42, c: 8, f: 28, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Chicken & Sweet Potato Mash", cuisine: "American", ingredients: ["chicken breast", "sweet potato", "cinnamon", "olive oil"], cal: 460, p: 45, c: 45, f: 10, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Shrimp & Quinoa Bowl", cuisine: "American", ingredients: ["shrimp", "quinoa", "cucumber", "tomato", "lemon"], cal: 390, p: 38, c: 45, f: 6, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Bison Burger (Lettuce Wrap)", cuisine: "American", ingredients: ["ground bison", "lettuce", "tomato", "onion", "mustard"], cal: 350, p: 40, c: 8, f: 18, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },

  // --- MEXICAN ---
  { name: "Aguachile Verde", cuisine: "Mexican", ingredients: ["shrimp", "lime", "jalapeno", "cilantro", "cucumber", "red onion"], cal: 180, p: 25, c: 10, f: 2, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Mole Verde", cuisine: "Mexican", ingredients: ["chicken", "pumpkin seeds", "tomatillo", "cilantro", "jalapeno", "garlic"], cal: 540, p: 45, c: 15, f: 34, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Sopes de Pollo", cuisine: "Mexican", ingredients: ["masa dough", "chicken", "refried beans", "lettuce", "cream", "cheese"], cal: 420, p: 25, c: 45, f: 18, diet: ["Gluten-Free"] },
  { name: "Tostadas de Tinga", cuisine: "Mexican", ingredients: ["corn tostada", "chicken", "chipotle", "onion", "tomato", "lettuce"], cal: 380, p: 24, c: 35, f: 16, diet: ["Gluten-Free"] },
  { name: "Chilaquiles Verdes", cuisine: "Mexican", ingredients: ["tortilla chips", "tomatillo", "jalapeno", "egg", "cream", "cheese"], cal: 480, p: 18, c: 45, f: 26, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Quesabirria Tacos", cuisine: "Mexican", ingredients: ["beef", "corn tortilla", "chili", "cheese", "onion", "cilantro"], cal: 620, p: 45, c: 30, f: 35, diet: ["Gluten-Free"] },
  { name: "Flautas de Res", cuisine: "Mexican", ingredients: ["beef", "corn tortilla", "oil", "lettuce", "cream", "cheese"], cal: 520, p: 30, c: 40, f: 28, diet: ["Gluten-Free"] },
  { name: "Esquites", cuisine: "Mexican", ingredients: ["corn", "mayonnaise", "cotija cheese", "chili powder", "lime", "butter"], cal: 310, p: 8, c: 35, f: 18, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Arroz con Pollo", cuisine: "Mexican", ingredients: ["chicken", "rice", "tomato", "peas", "carrot", "garlic"], cal: 460, p: 35, c: 55, f: 12, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Sopa Tarasca", cuisine: "Mexican", ingredients: ["pinto beans", "tomato", "chili", "chicken broth", "tortilla", "cream"], cal: 340, p: 15, c: 45, f: 12, diet: ["Gluten-Free"] },

  // --- JAPANESE & ASIAN ---
  { name: "Sukiyaki", cuisine: "Japanese", ingredients: ["beef", "tofu", "napa cabbage", "soy sauce", "sugar", "mirin"], cal: 480, p: 38, c: 25, f: 26, diet: ["Dairy-Free"] },
  { name: "Okonomiyaki", cuisine: "Japanese", ingredients: ["cabbage", "flour", "egg", "pork belly", "okonomiyaki sauce", "mayonnaise"], cal: 520, p: 18, c: 45, f: 30, diet: ["Dairy-Free"] },
  { name: "Takoyaki", cuisine: "Japanese", ingredients: ["octopus", "flour", "egg", "green onion", "takoyaki sauce", "mayonnaise"], cal: 410, p: 15, c: 45, f: 18, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Shabu Shabu", cuisine: "Japanese", ingredients: ["beef", "kombu", "tofu", "mushrooms", "ponzu", "sesame sauce"], cal: 450, p: 40, c: 15, f: 25, diet: ["Dairy-Free", "Keto", "Fitness"] },
  { name: "Tonkatsu", cuisine: "Japanese", ingredients: ["pork loin", "panko", "egg", "flour", "cabbage", "tonkatsu sauce"], cal: 650, p: 35, c: 45, f: 36, diet: ["Dairy-Free"] },
  { name: "Katsudon", cuisine: "Japanese", ingredients: ["pork loin", "rice", "egg", "onion", "soy sauce", "mirin"], cal: 720, p: 40, c: 75, f: 28, diet: ["Dairy-Free"] },
  { name: "Yakisoba", cuisine: "Japanese", ingredients: ["yakisoba noodles", "pork", "cabbage", "carrot", "yakisoba sauce", "oil"], cal: 480, p: 20, c: 65, f: 16, diet: ["Dairy-Free"] },
  { name: "Oyakodon", cuisine: "Japanese", ingredients: ["chicken thigh", "egg", "rice", "onion", "soy sauce", "mirin"], cal: 580, p: 35, c: 70, f: 18, diet: ["Dairy-Free"] },
  { name: "Unagi Don (Eel Bowl)", cuisine: "Japanese", ingredients: ["eel", "rice", "soy sauce", "mirin", "sugar", "sake"], cal: 540, p: 25, c: 75, f: 15, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Agedashi Tofu", cuisine: "Japanese", ingredients: ["tofu", "potato starch", "oil", "dashi", "soy sauce", "mirin"], cal: 280, p: 12, c: 22, f: 16, diet: ["Pescatarian", "Dairy-Free"] }
// --- FRENCH GASTRONOMY ---
  { name: "Steak Tartare", cuisine: "French", ingredients: ["raw beef", "egg yolk", "capers", "mustard", "shallot", "parsley"], cal: 350, p: 45, c: 2, f: 18, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Duck Confit (Confit de Canard)", cuisine: "French", ingredients: ["duck leg", "duck fat", "garlic", "thyme", "bay leaf"], cal: 680, p: 38, c: 0, f: 58, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Quiche Lorraine", cuisine: "French", ingredients: ["pie crust", "egg", "heavy cream", "bacon", "gruyere cheese", "nutmeg"], cal: 580, p: 22, c: 30, f: 42, diet: [] },
  { name: "Sole Meunière", cuisine: "French", ingredients: ["sole fish", "butter", "lemon", "parsley", "flour"], cal: 380, p: 32, c: 10, f: 22, diet: ["Pescatarian"] },
  { name: "Crêpes Suzette", cuisine: "French", ingredients: ["flour", "egg", "milk", "butter", "orange", "sugar"], cal: 410, p: 8, c: 55, f: 18, diet: ["Vegetarian"] },
  { name: "Cassoulet", cuisine: "French", ingredients: ["white beans", "duck confit", "pork sausage", "pork belly", "garlic", "tomato"], cal: 850, p: 55, c: 50, f: 48, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Soufflé au Fromage", cuisine: "French", ingredients: ["egg", "gruyere cheese", "butter", "flour", "milk"], cal: 420, p: 24, c: 15, f: 30, diet: ["Vegetarian"] },
  { name: "Tarte Tatin", cuisine: "French", ingredients: ["apple", "sugar", "butter", "puff pastry"], cal: 380, p: 3, c: 55, f: 18, diet: ["Vegetarian"] },
  { name: "Vichyssoise", cuisine: "French", ingredients: ["leek", "potato", "chicken broth", "heavy cream", "chive"], cal: 310, p: 6, c: 28, f: 20, diet: ["Gluten-Free"] },
  { name: "Poulet Rôti (Roast Chicken)", cuisine: "French", ingredients: ["whole chicken", "butter", "lemon", "thyme", "garlic"], cal: 540, p: 55, c: 2, f: 32, diet: ["Gluten-Free", "Keto", "Fitness"] },

  // --- SPANISH & GREEK (Mediterranean) ---
  { name: "Paella Valenciana", cuisine: "Mediterranean", ingredients: ["bomba rice", "chicken", "rabbit", "saffron", "green beans", "tomato"], cal: 620, p: 45, c: 68, f: 18, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Gazpacho", cuisine: "Mediterranean", ingredients: ["tomato", "cucumber", "bell pepper", "onion", "garlic", "olive oil"], cal: 150, p: 3, c: 18, f: 8, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Tortilla Española", cuisine: "Mediterranean", ingredients: ["potato", "egg", "onion", "olive oil", "salt"], cal: 380, p: 12, c: 30, f: 24, diet: ["Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Gambas al Ajillo", cuisine: "Mediterranean", ingredients: ["shrimp", "garlic", "olive oil", "red pepper flakes", "parsley"], cal: 280, p: 28, c: 2, f: 18, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Patatas Bravas", cuisine: "Mediterranean", ingredients: ["potato", "olive oil", "tomato", "paprika", "garlic", "mayonnaise"], cal: 410, p: 5, c: 45, f: 24, diet: ["Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Pastitsio", cuisine: "Mediterranean", ingredients: ["bucatini pasta", "ground beef", "tomato", "cinnamon", "milk", "flour"], cal: 650, p: 35, c: 55, f: 30, diet: [] },
  { name: "Dolmades", cuisine: "Mediterranean", ingredients: ["vine leaves", "rice", "pine nuts", "dill", "mint", "lemon"], cal: 220, p: 4, c: 35, f: 8, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Chicken Souvlaki", cuisine: "Mediterranean", ingredients: ["chicken breast", "lemon", "olive oil", "oregano", "garlic", "pita bread"], cal: 420, p: 45, c: 25, f: 14, diet: ["Dairy-Free", "Fitness"] },
  { name: "Halloumi Salad", cuisine: "Mediterranean", ingredients: ["halloumi cheese", "mixed greens", "cherry tomato", "cucumber", "olive oil"], cal: 350, p: 18, c: 10, f: 28, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Salmorejo", cuisine: "Mediterranean", ingredients: ["tomato", "bread", "garlic", "olive oil", "jamon", "egg"], cal: 320, p: 12, c: 30, f: 18, diet: ["Dairy-Free"] },

  // --- INDIAN ---
  { name: "Tandoori Chicken", cuisine: "Indian", ingredients: ["chicken", "yogurt", "garam masala", "ginger", "garlic", "lemon"], cal: 380, p: 48, c: 6, f: 16, diet: ["Gluten-Free", "Keto", "Fitness"] },
  { name: "Vegetable Samosa", cuisine: "Indian", ingredients: ["potato", "peas", "flour", "cumin", "coriander", "oil"], cal: 280, p: 6, c: 35, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Rogan Josh", cuisine: "Indian", ingredients: ["lamb", "yogurt", "onion", "garlic", "ginger", "kashmiri chili"], cal: 520, p: 45, c: 12, f: 32, diet: ["Gluten-Free", "Keto"] },
  { name: "Masala Dosa", cuisine: "Indian", ingredients: ["rice", "urad dal", "potato", "onion", "mustard seeds", "turmeric"], cal: 350, p: 8, c: 60, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Malai Kofta", cuisine: "Indian", ingredients: ["potato", "paneer cheese", "cashew", "tomato", "cream", "garam masala"], cal: 480, p: 14, c: 35, f: 32, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Chicken Korma", cuisine: "Indian", ingredients: ["chicken", "cashew", "cream", "onion", "garlic", "cardamom"], cal: 580, p: 40, c: 15, f: 40, diet: ["Gluten-Free", "Keto"] },
  { name: "Pani Puri", cuisine: "Indian", ingredients: ["semolina", "potato", "chickpeas", "tamarind", "mint", "chili"], cal: 220, p: 6, c: 45, f: 4, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Pork Vindaloo", cuisine: "Indian", ingredients: ["pork", "vinegar", "garlic", "ginger", "chili", "mustard seeds"], cal: 540, p: 45, c: 10, f: 35, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Mango Lassi", cuisine: "Indian", ingredients: ["mango", "yogurt", "sugar", "cardamom", "milk"], cal: 210, p: 8, c: 35, f: 5, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Saag Paneer", cuisine: "Indian", ingredients: ["spinach", "paneer cheese", "onion", "garlic", "ginger", "cream"], cal: 380, p: 18, c: 12, f: 30, diet: ["Vegetarian", "Gluten-Free", "Keto"] },

  // --- MIDDLE EASTERN ---
  { name: "Mujadara", cuisine: "Middle Eastern", ingredients: ["brown lentil", "rice", "onion", "olive oil", "cumin"], cal: 380, p: 14, c: 60, f: 12, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Knafeh", cuisine: "Middle Eastern", ingredients: ["kataifi dough", "cheese", "sugar", "butter", "pistachio", "rose water"], cal: 550, p: 12, c: 65, f: 28, diet: ["Vegetarian"] },
  { name: "Mutabal", cuisine: "Middle Eastern", ingredients: ["eggplant", "tahini", "yogurt", "garlic", "lemon", "olive oil"], cal: 210, p: 6, c: 12, f: 16, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Kibbeh", cuisine: "Middle Eastern", ingredients: ["bulgur", "ground beef", "onion", "pine nuts", "allspice", "oil"], cal: 420, p: 20, c: 45, f: 22, diet: ["Dairy-Free"] },
  { name: "Sabich", cuisine: "Middle Eastern", ingredients: ["pita bread", "eggplant", "egg", "tahini", "cucumber", "tomato"], cal: 450, p: 16, c: 50, f: 22, diet: ["Vegetarian", "Dairy-Free"] },
  { name: "Shish Tawook", cuisine: "Middle Eastern", ingredients: ["chicken breast", "yogurt", "lemon", "garlic", "tomato paste", "olive oil"], cal: 380, p: 45, c: 6, f: 18, diet: ["Gluten-Free", "Keto", "Fitness"] },
  { name: "Ma'amoul", cuisine: "Middle Eastern", ingredients: ["semolina", "date", "butter", "rose water", "mahleb"], cal: 320, p: 4, c: 45, f: 14, diet: ["Vegetarian"] },
  { name: "Mansaf", cuisine: "Middle Eastern", ingredients: ["lamb", "jameed", "rice", "almond", "pine nuts", "pita bread"], cal: 750, p: 55, c: 60, f: 35, diet: [] },
  { name: "Fatayer (Spinach)", cuisine: "Middle Eastern", ingredients: ["flour", "spinach", "onion", "sumac", "lemon", "olive oil"], cal: 280, p: 8, c: 40, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Chicken Machboos", cuisine: "Middle Eastern", ingredients: ["chicken", "basmati rice", "onion", "tomato", "loomi", "baharat"], cal: 580, p: 40, c: 65, f: 18, diet: ["Dairy-Free", "Gluten-Free"] },

  // --- FITNESS & TURKISH ---
  { name: "High-Protein Oatmeal", cuisine: "American", ingredients: ["oats", "whey protein", "chia seeds", "almond milk", "peanut butter"], cal: 420, p: 32, c: 45, f: 14, diet: ["Vegetarian", "Fitness"] },
  { name: "Turkey & Bean Chili", cuisine: "American", ingredients: ["ground turkey", "kidney beans", "tomato", "onion", "chili", "cumin"], cal: 410, p: 42, c: 35, f: 10, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Baked Cod & Quinoa", cuisine: "American", ingredients: ["cod fish", "quinoa", "spinach", "lemon", "olive oil"], cal: 380, p: 45, c: 30, f: 8, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Greek Yogurt & Fruit Parfait", cuisine: "American", ingredients: ["greek yogurt", "strawberry", "blueberry", "honey", "walnut"], cal: 290, p: 22, c: 30, f: 10, diet: ["Vegetarian", "Gluten-Free", "Fitness"] },
  { name: "Sweet Potato Hash & Eggs", cuisine: "American", ingredients: ["sweet potato", "egg", "onion", "bell pepper", "olive oil"], cal: 350, p: 18, c: 35, f: 16, diet: ["Vegetarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "İzmir Köfte", cuisine: "Turkish", ingredients: ["ground beef", "potato", "tomato", "green pepper", "onion", "tomato paste"], cal: 480, p: 30, c: 35, f: 24, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Balık Ekmek", cuisine: "Turkish", ingredients: ["mackerel", "bread", "onion", "lettuce", "lemon", "salt"], cal: 420, p: 28, c: 45, f: 14, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Kumpir", cuisine: "Turkish", ingredients: ["potato", "butter", "kasar cheese", "sausage", "corn", "olives"], cal: 650, p: 18, c: 65, f: 38, diet: ["Gluten-Free"] },
  { name: "Sultan Reşat Pilavı", cuisine: "Turkish", ingredients: ["rice", "chicken", "eggplant", "pine nuts", "currants", "butter"], cal: 550, p: 25, c: 60, f: 22, diet: ["Gluten-Free"] },
  { name: "Fırın Sütlaç", cuisine: "Turkish", ingredients: ["milk", "rice", "sugar", "cornstarch", "vanilla"], cal: 310, p: 8, c: 55, f: 6, diet: ["Vegetarian", "Gluten-Free"] }
// --- FRENCH GASTRONOMY & BISTRO ---
  { name: "Coquilles Saint-Jacques", cuisine: "French", ingredients: ["scallops", "butter", "white wine", "garlic", "shallot", "breadcrumbs"], cal: 380, p: 28, c: 15, f: 22, diet: ["Pescatarian"] },
  { name: "Croque Monsieur", cuisine: "French", ingredients: ["bread", "ham", "gruyere cheese", "butter", "flour", "milk"], cal: 520, p: 28, c: 40, f: 28, diet: [] },
  { name: "Salade Lyonnaise", cuisine: "French", ingredients: ["frisée lettuce", "bacon", "egg", "croutons", "dijon mustard", "vinegar"], cal: 350, p: 18, c: 15, f: 25, diet: ["Dairy-Free"] },
  { name: "Clafoutis aux Cerises", cuisine: "French", ingredients: ["cherry", "egg", "milk", "flour", "sugar", "butter"], cal: 320, p: 8, c: 45, f: 12, diet: ["Vegetarian"] },
  { name: "Blanquette de Veau", cuisine: "French", ingredients: ["veal", "butter", "carrot", "onion", "heavy cream", "mushroom"], cal: 650, p: 55, c: 12, f: 42, diet: ["Gluten-Free", "Keto"] },
  { name: "Gougères", cuisine: "French", ingredients: ["flour", "butter", "egg", "gruyere cheese", "water"], cal: 280, p: 12, c: 20, f: 18, diet: ["Vegetarian"] },
  { name: "Pot-au-Feu", cuisine: "French", ingredients: ["beef chuck", "bone marrow", "carrot", "leek", "turnip", "onion"], cal: 580, p: 48, c: 25, f: 32, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Macarons (Raspberry)", cuisine: "French", ingredients: ["almond flour", "egg white", "sugar", "raspberry", "butter"], cal: 210, p: 4, c: 30, f: 10, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Pâté de Campagne", cuisine: "French", ingredients: ["ground pork", "pork liver", "bacon", "garlic", "cognac", "thyme"], cal: 450, p: 25, c: 4, f: 38, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Navarin d'Agneau", cuisine: "French", ingredients: ["lamb", "turnip", "carrot", "potato", "pea", "tomato paste"], cal: 540, p: 40, c: 35, f: 26, diet: ["Dairy-Free", "Gluten-Free"] },

  // --- JAPANESE CLASSICS ---
  { name: "Udon Noodle Soup", cuisine: "Japanese", ingredients: ["udon noodles", "dashi", "soy sauce", "mirin", "green onion", "kamaboko"], cal: 350, p: 12, c: 68, f: 4, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Tonkotsu Ramen", cuisine: "Japanese", ingredients: ["ramen noodles", "pork broth", "pork belly", "egg", "green onion", "wood ear mushroom"], cal: 720, p: 35, c: 65, f: 38, diet: ["Dairy-Free"] },
  { name: "Onigiri (Tuna Mayo)", cuisine: "Japanese", ingredients: ["sushi rice", "nori", "canned tuna", "mayonnaise", "salt"], cal: 280, p: 12, c: 40, f: 8, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Tamagoyaki", cuisine: "Japanese", ingredients: ["egg", "soy sauce", "mirin", "sugar", "oil"], cal: 210, p: 14, c: 8, f: 14, diet: ["Vegetarian", "Dairy-Free"] },
  { name: "Ebi Tempura", cuisine: "Japanese", ingredients: ["shrimp", "flour", "egg", "ice water", "oil", "tentsuyu"], cal: 380, p: 18, c: 35, f: 20, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Matcha Mochi", cuisine: "Japanese", ingredients: ["glutinous rice flour", "sugar", "water", "matcha", "red bean paste"], cal: 180, p: 2, c: 40, f: 1, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Chawanmushi", cuisine: "Japanese", ingredients: ["egg", "dashi", "shrimp", "chicken", "mushroom", "soy sauce"], cal: 150, p: 15, c: 5, f: 8, diet: ["Dairy-Free"] },
  { name: "Pork Gyoza", cuisine: "Japanese", ingredients: ["ground pork", "cabbage", "garlic", "ginger", "gyoza wrapper", "soy sauce"], cal: 320, p: 18, c: 30, f: 14, diet: ["Dairy-Free"] },
  { name: "Katsu Curry", cuisine: "Japanese", ingredients: ["pork loin", "panko", "rice", "curry roux", "potato", "carrot"], cal: 850, p: 32, c: 95, f: 38, diet: ["Dairy-Free"] },
  { name: "Zaru Soba", cuisine: "Japanese", ingredients: ["soba noodles", "soy sauce", "mirin", "dashi", "green onion", "wasabi"], cal: 310, p: 14, c: 60, f: 2, diet: ["Pescatarian", "Dairy-Free"] },

  // --- ASIAN (Korean, Chinese, Thai) ---
  { name: "Kimchi Fried Rice", cuisine: "Asian", ingredients: ["rice", "kimchi", "egg", "sesame oil", "green onion", "gochujang"], cal: 420, p: 14, c: 65, f: 12, diet: ["Vegetarian", "Dairy-Free"] },
  { name: "Beef Bibimbap", cuisine: "Asian", ingredients: ["rice", "beef", "spinach", "carrot", "egg", "gochujang"], cal: 580, p: 35, c: 75, f: 18, diet: ["Dairy-Free"] },
  { name: "Bulgogi (Korean BBQ)", cuisine: "Asian", ingredients: ["beef ribeye", "soy sauce", "pear", "garlic", "sesame oil", "sugar"], cal: 480, p: 42, c: 20, f: 25, diet: ["Dairy-Free", "Fitness"] },
  { name: "Peking Duck", cuisine: "Asian", ingredients: ["duck", "hoisin sauce", "cucumber", "green onion", "pancake"], cal: 650, p: 35, c: 45, f: 38, diet: ["Dairy-Free"] },
  { name: "Mapo Tofu", cuisine: "Asian", ingredients: ["tofu", "ground pork", "doubanjiang", "Sichuan peppercorn", "garlic", "soy sauce"], cal: 420, p: 25, c: 15, f: 28, diet: ["Dairy-Free", "Keto"] },
  { name: "Har Gow (Shrimp Dumplings)", cuisine: "Asian", ingredients: ["shrimp", "wheat starch", "tapioca starch", "bamboo shoot", "sesame oil"], cal: 260, p: 16, c: 35, f: 6, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Char Siu (BBQ Pork)", cuisine: "Asian", ingredients: ["pork shoulder", "hoisin sauce", "honey", "five spice", "soy sauce"], cal: 480, p: 45, c: 25, f: 22, diet: ["Dairy-Free", "Fitness"] },
  { name: "Tom Kha Gai", cuisine: "Asian", ingredients: ["chicken", "coconut milk", "galangal", "lemongrass", "mushroom", "lime"], cal: 380, p: 28, c: 12, f: 26, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Som Tum (Green Papaya Salad)", cuisine: "Asian", ingredients: ["green papaya", "tomato", "peanut", "chili", "lime", "fish sauce"], cal: 180, p: 6, c: 25, f: 8, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Nasi Goreng", cuisine: "Asian", ingredients: ["rice", "kecap manis", "chicken", "shrimp paste", "egg", "shallot"], cal: 520, p: 25, c: 65, f: 18, diet: ["Dairy-Free"] },

  // --- MEXICAN (Expanded) ---
  { name: "Tlayuda", cuisine: "Mexican", ingredients: ["large tortilla", "refried beans", "oaxaca cheese", "cabbage", "beef", "avocado"], cal: 750, p: 45, c: 65, f: 35, diet: [] },
  { name: "Enchiladas Rojas", cuisine: "Mexican", ingredients: ["corn tortilla", "chicken", "guajillo chili", "cheese", "onion", "cream"], cal: 540, p: 35, c: 45, f: 26, diet: ["Gluten-Free"] },
  { name: "Ceviche de Camarón", cuisine: "Mexican", ingredients: ["shrimp", "lime", "tomato", "onion", "cilantro", "cucumber"], cal: 220, p: 30, c: 15, f: 4, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Gorditas de Chicharrón", cuisine: "Mexican", ingredients: ["masa dough", "chicharron", "salsa verde", "onion", "cilantro", "cheese"], cal: 480, p: 22, c: 35, f: 30, diet: ["Gluten-Free"] },
  { name: "Cochinita Pibil", cuisine: "Mexican", ingredients: ["pork shoulder", "achiote paste", "orange", "lime", "red onion", "habanero"], cal: 520, p: 42, c: 12, f: 34, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Frijoles Refritos", cuisine: "Mexican", ingredients: ["pinto beans", "lard", "onion", "garlic", "salt"], cal: 280, p: 12, c: 35, f: 12, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Churros con Chocolate", cuisine: "Mexican", ingredients: ["flour", "sugar", "cinnamon", "oil", "chocolate", "milk"], cal: 550, p: 8, c: 75, f: 25, diet: ["Vegetarian"] },
  { name: "Huevos Divorciados", cuisine: "Mexican", ingredients: ["egg", "corn tortilla", "salsa roja", "salsa verde", "refried beans"], cal: 410, p: 20, c: 45, f: 18, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Menudo", cuisine: "Mexican", ingredients: ["beef tripe", "hominy corn", "guajillo chili", "garlic", "onion", "oregano"], cal: 380, p: 35, c: 25, f: 16, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Aguachile Rojo", cuisine: "Mexican", ingredients: ["shrimp", "lime", "chiltepin chili", "cucumber", "red onion", "salt"], cal: 190, p: 28, c: 12, f: 2, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },

  // --- MEDITERRANEAN, TURKISH, & ITALIAN ---
  { name: "Patatas a lo Pobre", cuisine: "Mediterranean", ingredients: ["potato", "green pepper", "onion", "olive oil", "garlic"], cal: 320, p: 4, c: 45, f: 16, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Pulpo a la Gallega", cuisine: "Mediterranean", ingredients: ["octopus", "potato", "olive oil", "paprika", "sea salt"], cal: 380, p: 42, c: 25, f: 12, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Calamari Fritti", cuisine: "Italian", ingredients: ["squid", "flour", "lemon", "oil", "salt"], cal: 410, p: 22, c: 35, f: 20, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Arrosticini", cuisine: "Italian", ingredients: ["lamb", "olive oil", "rosemary", "salt", "black pepper"], cal: 450, p: 45, c: 0, f: 30, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Involtini di Melanzane", cuisine: "Italian", ingredients: ["eggplant", "ricotta", "tomato sauce", "parmesan", "basil"], cal: 340, p: 16, c: 20, f: 22, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Lahana Sarması", cuisine: "Turkish", ingredients: ["cabbage", "ground beef", "rice", "onion", "tomato paste", "mint"], cal: 350, p: 18, c: 35, f: 15, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Su Böreği", cuisine: "Turkish", ingredients: ["flour", "egg", "feta cheese", "butter", "parsley"], cal: 520, p: 18, c: 55, f: 26, diet: ["Vegetarian"] },
  { name: "Etsiz Çiğ Köfte", cuisine: "Turkish", ingredients: ["bulgur", "tomato paste", "isot pepper", "pomegranate molasses", "walnut", "onion"], cal: 310, p: 8, c: 60, f: 6, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Ayva Tatlısı", cuisine: "Turkish", ingredients: ["quince", "sugar", "cloves", "kaymak", "pistachio"], cal: 280, p: 2, c: 65, f: 5, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Cacık", cuisine: "Turkish", ingredients: ["yogurt", "cucumber", "garlic", "mint", "olive oil"], cal: 150, p: 8, c: 10, f: 9, diet: ["Vegetarian", "Gluten-Free", "Keto"] }
// --- ITALIAN (Roman Classics & Street Food) ---
  { name: "Spaghetti alla Carbonara", cuisine: "Italian", ingredients: ["spaghetti", "guanciale", "pecorino romano", "egg yolk", "black pepper"], cal: 650, p: 25, c: 55, f: 35, diet: [] },
  { name: "Bucatini all'Amatriciana", cuisine: "Italian", ingredients: ["bucatini", "guanciale", "pecorino romano", "tomato", "chili"], cal: 600, p: 22, c: 60, f: 30, diet: [] },
  { name: "Saltimbocca alla Romana", cuisine: "Italian", ingredients: ["veal", "prosciutto", "sage", "butter", "white wine"], cal: 450, p: 48, c: 5, f: 26, diet: ["Gluten-Free", "Keto", "Fitness"] },
  { name: "Carciofi alla Giudia", cuisine: "Italian", ingredients: ["artichoke", "lemon", "olive oil", "salt", "black pepper"], cal: 220, p: 6, c: 20, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Supplí al Telefono", cuisine: "Italian", ingredients: ["arborio rice", "tomato sauce", "mozzarella", "egg", "breadcrumbs", "oil"], cal: 380, p: 12, c: 45, f: 18, diet: ["Vegetarian"] },
  { name: "Coda alla Vaccinara", cuisine: "Italian", ingredients: ["oxtail", "tomato", "celery", "carrot", "onion", "white wine", "cocoa"], cal: 720, p: 55, c: 15, f: 48, diet: ["Gluten-Free"] },
  { name: "Trippa alla Romana", cuisine: "Italian", ingredients: ["beef tripe", "tomato", "pecorino romano", "mint", "onion", "white wine"], cal: 410, p: 35, c: 12, f: 22, diet: ["Gluten-Free", "Keto"] },
  { name: "Tonnarelli Cacio e Pepe", cuisine: "Italian", ingredients: ["tonnarelli pasta", "pecorino romano", "black pepper"], cal: 520, p: 20, c: 65, f: 22, diet: ["Vegetarian"] },
  { name: "Abbacchio a Scottadito", cuisine: "Italian", ingredients: ["lamb chops", "olive oil", "rosemary", "garlic", "lemon"], cal: 580, p: 45, c: 2, f: 42, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Maritozzo con la Panna", cuisine: "Italian", ingredients: ["flour", "egg", "butter", "sugar", "yeast", "heavy cream"], cal: 450, p: 8, c: 50, f: 24, diet: ["Vegetarian"] },

  // --- HIGH-PROTEIN & FITNESS MEAL PREP ---
  { name: "Grilled Chicken & Quinoa Power Bowl", cuisine: "American", ingredients: ["chicken breast", "quinoa", "spinach", "cherry tomato", "olive oil"], cal: 480, p: 45, c: 40, f: 12, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Cottage Cheese Protein Pancakes", cuisine: "American", ingredients: ["cottage cheese", "egg whites", "oats", "cinnamon", "vanilla"], cal: 320, p: 35, c: 30, f: 4, diet: ["Vegetarian", "Fitness"] },
  { name: "Turkey & Egg White Wrap", cuisine: "American", ingredients: ["ground turkey", "egg whites", "whole wheat wrap", "spinach", "tomato"], cal: 410, p: 42, c: 35, f: 10, diet: ["Dairy-Free", "Fitness"] },
  { name: "Baked Lemon Herb Chicken Breast", cuisine: "American", ingredients: ["chicken breast", "lemon", "rosemary", "garlic", "olive oil"], cal: 310, p: 48, c: 2, f: 12, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Lentil & Tuna Protein Salad", cuisine: "American", ingredients: ["canned tuna", "brown lentils", "red onion", "celery", "lemon"], cal: 340, p: 38, c: 35, f: 4, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Greek Yogurt & Whey Smoothie", cuisine: "American", ingredients: ["greek yogurt", "whey protein", "banana", "almond milk", "chia seeds"], cal: 350, p: 40, c: 35, f: 6, diet: ["Vegetarian", "Gluten-Free", "Fitness"] },
  { name: "Lean Beef & Asparagus Skillet", cuisine: "American", ingredients: ["lean beef", "asparagus", "garlic", "soy sauce", "sesame oil"], cal: 420, p: 45, c: 10, f: 20, diet: ["Dairy-Free", "Keto", "Fitness"] },
  { name: "Edamame & Tofu Power Salad", cuisine: "Asian", ingredients: ["tofu", "edamame", "cabbage", "carrot", "sesame dressing"], cal: 380, p: 28, c: 25, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Fitness"] },
  { name: "Steamed Chicken & Broccoli", cuisine: "Asian", ingredients: ["chicken breast", "broccoli", "garlic", "ginger", "soy sauce"], cal: 320, p: 45, c: 15, f: 6, diet: ["Dairy-Free", "Fitness"] },
  { name: "Chia & Egg White Oatmeal", cuisine: "American", ingredients: ["oats", "egg whites", "chia seeds", "almond milk", "cinnamon"], cal: 310, p: 25, c: 35, f: 8, diet: ["Vegetarian", "Dairy-Free", "Fitness"] },

  // --- TURKISH & ANATOLIAN GASTRONOMY ---
  { name: "Tirmis Ezmesi", cuisine: "Turkish", ingredients: ["lupin beans", "olive oil", "lemon", "garlic", "cumin", "salt"], cal: 240, p: 12, c: 16, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Antalya Tahinli Kabak Tatlısı", cuisine: "Turkish", ingredients: ["pumpkin", "sugar", "tahini", "walnut"], cal: 380, p: 6, c: 55, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Tirmis Hardalı & Izgara Tavuk", cuisine: "Turkish", ingredients: ["chicken breast", "lupin beans", "mustard", "olive oil", "thyme"], cal: 410, p: 48, c: 10, f: 18, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Antalya Şiş Köfte", cuisine: "Turkish", ingredients: ["ground beef", "lamb fat", "salt", "cumin", "pita bread"], cal: 550, p: 35, c: 30, f: 32, diet: [] },
  { name: "Fırında Lagos", cuisine: "Turkish", ingredients: ["grouper fish", "olive oil", "lemon", "garlic", "bay leaf", "potato"], cal: 420, p: 45, c: 25, f: 14, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Alanya Bohçası", cuisine: "Turkish", ingredients: ["crepe dough", "lamb", "onion", "tomato", "kasar cheese"], cal: 580, p: 32, c: 45, f: 28, diet: [] },
  { name: "Toros Salata", cuisine: "Turkish", ingredients: ["arugula", "tomato", "tulum cheese", "walnut", "pomegranate molasses", "olive oil"], cal: 290, p: 8, c: 15, f: 24, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Kabak Çiçeği Dolması", cuisine: "Turkish", ingredients: ["zucchini flowers", "rice", "onion", "mint", "dill", "olive oil"], cal: 240, p: 4, c: 35, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Kereviz Salatası", cuisine: "Turkish", ingredients: ["celery root", "yogurt", "garlic", "walnut", "mayonnaise"], cal: 220, p: 6, c: 12, f: 18, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Zeytinyağlı Kuru Patlıcan Dolması", cuisine: "Turkish", ingredients: ["dried eggplant", "rice", "onion", "pomegranate molasses", "sumac", "olive oil"], cal: 340, p: 5, c: 55, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },

  // --- FRENCH RUSTIC & HAUTE CUISINE ---
  { name: "Duck à l'Orange", cuisine: "French", ingredients: ["duck breast", "orange", "sugar", "vinegar", "chicken broth", "butter"], cal: 680, p: 35, c: 25, f: 48, diet: ["Gluten-Free"] },
  { name: "Tartiflette", cuisine: "French", ingredients: ["potato", "reblochon cheese", "bacon", "onion", "white wine", "cream"], cal: 750, p: 25, c: 45, f: 52, diet: ["Gluten-Free"] },
  { name: "Pissaladière", cuisine: "French", ingredients: ["pizza dough", "onion", "anchovies", "black olives", "olive oil", "thyme"], cal: 420, p: 12, c: 55, f: 16, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Foie Gras Poêlé", cuisine: "French", ingredients: ["foie gras", "salt", "black pepper", "fig", "balsamic vinegar"], cal: 450, p: 8, c: 15, f: 42, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Crème Brûlée", cuisine: "French", ingredients: ["heavy cream", "egg yolk", "sugar", "vanilla bean"], cal: 480, p: 6, c: 30, f: 38, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Poulet Basque", cuisine: "French", ingredients: ["chicken", "bell pepper", "tomato", "onion", "espelette pepper", "white wine"], cal: 460, p: 45, c: 20, f: 22, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Flammekueche", cuisine: "French", ingredients: ["pizza dough", "creme fraiche", "bacon", "onion", "nutmeg"], cal: 580, p: 18, c: 55, f: 32, diet: [] },
  { name: "Hachis Parmentier", cuisine: "French", ingredients: ["ground beef", "potato", "onion", "butter", "milk", "cheese"], cal: 550, p: 35, c: 40, f: 28, diet: ["Gluten-Free"] },
  { name: "Moules-Frites", cuisine: "French", ingredients: ["mussels", "white wine", "shallot", "butter", "parsley", "potato"], cal: 620, p: 38, c: 65, f: 24, diet: ["Pescatarian", "Gluten-Free"] },
  { name: "Gougères au Fromage", cuisine: "French", ingredients: ["flour", "butter", "egg", "gruyere cheese", "nutmeg"], cal: 320, p: 12, c: 20, f: 22, diet: ["Vegetarian"] },

  // --- MIDDLE EASTERN & INDIAN ---
  { name: "Tandoori Paneer Tikka", cuisine: "Indian", ingredients: ["paneer cheese", "yogurt", "garam masala", "bell pepper", "onion", "lemon"], cal: 410, p: 22, c: 15, f: 30, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Baingan Bharta", cuisine: "Indian", ingredients: ["eggplant", "tomato", "onion", "garlic", "ginger", "cumin"], cal: 220, p: 6, c: 30, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Lamb Vindaloo", cuisine: "Indian", ingredients: ["lamb", "vinegar", "garlic", "ginger", "chili", "mustard seeds"], cal: 580, p: 45, c: 12, f: 38, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Dal Tadka", cuisine: "Indian", ingredients: ["yellow lentils", "tomato", "onion", "garlic", "cumin", "ghee"], cal: 340, p: 18, c: 45, f: 12, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Garlic Naan", cuisine: "Indian", ingredients: ["flour", "yogurt", "yeast", "butter", "garlic", "cilantro"], cal: 280, p: 6, c: 45, f: 8, diet: ["Vegetarian"] },
  { name: "Chicken Musakhan", cuisine: "Middle Eastern", ingredients: ["chicken", "sumac", "onion", "olive oil", "pine nuts", "taboon bread"], cal: 620, p: 45, c: 48, f: 28, diet: ["Dairy-Free"] },
  { name: "Muhammara", cuisine: "Middle Eastern", ingredients: ["roasted red pepper", "walnut", "pomegranate molasses", "olive oil", "breadcrumbs", "cumin"], cal: 310, p: 6, c: 22, f: 24, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Labneh with Za'atar", cuisine: "Middle Eastern", ingredients: ["labneh", "zaatar", "olive oil", "pita bread", "cucumber"], cal: 280, p: 10, c: 25, f: 18, diet: ["Vegetarian"] },
  { name: "Kousa Mahshi", cuisine: "Middle Eastern", ingredients: ["zucchini", "rice", "ground beef", "tomato", "mint", "garlic"], cal: 380, p: 20, c: 45, f: 14, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Samak Mashwi", cuisine: "Middle Eastern", ingredients: ["whole fish", "lemon", "garlic", "cumin", "coriander", "olive oil"], cal: 350, p: 42, c: 5, f: 18, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] }
// --- ITALIAN (Roman Classics & Street Food) ---
  { name: "Spaghetti alla Carbonara", cuisine: "Italian", ingredients: ["spaghetti", "guanciale", "pecorino romano", "egg yolk", "black pepper"], cal: 650, p: 25, c: 55, f: 35, diet: [] },
  { name: "Bucatini all'Amatriciana", cuisine: "Italian", ingredients: ["bucatini", "guanciale", "pecorino romano", "tomato", "chili"], cal: 600, p: 22, c: 60, f: 30, diet: [] },
  { name: "Saltimbocca alla Romana", cuisine: "Italian", ingredients: ["veal", "prosciutto", "sage", "butter", "white wine"], cal: 450, p: 48, c: 5, f: 26, diet: ["Gluten-Free", "Keto", "Fitness"] },
  { name: "Carciofi alla Giudia", cuisine: "Italian", ingredients: ["artichoke", "lemon", "olive oil", "salt", "black pepper"], cal: 220, p: 6, c: 20, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Supplí al Telefono", cuisine: "Italian", ingredients: ["arborio rice", "tomato sauce", "mozzarella", "egg", "breadcrumbs", "oil"], cal: 380, p: 12, c: 45, f: 18, diet: ["Vegetarian"] },
  { name: "Coda alla Vaccinara", cuisine: "Italian", ingredients: ["oxtail", "tomato", "celery", "carrot", "onion", "white wine", "cocoa"], cal: 720, p: 55, c: 15, f: 48, diet: ["Gluten-Free"] },
  { name: "Trippa alla Romana", cuisine: "Italian", ingredients: ["beef tripe", "tomato", "pecorino romano", "mint", "onion", "white wine"], cal: 410, p: 35, c: 12, f: 22, diet: ["Gluten-Free", "Keto"] },
  { name: "Tonnarelli Cacio e Pepe", cuisine: "Italian", ingredients: ["tonnarelli pasta", "pecorino romano", "black pepper"], cal: 520, p: 20, c: 65, f: 22, diet: ["Vegetarian"] },
  { name: "Abbacchio a Scottadito", cuisine: "Italian", ingredients: ["lamb chops", "olive oil", "rosemary", "garlic", "lemon"], cal: 580, p: 45, c: 2, f: 42, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Maritozzo con la Panna", cuisine: "Italian", ingredients: ["flour", "egg", "butter", "sugar", "yeast", "heavy cream"], cal: 450, p: 8, c: 50, f: 24, diet: ["Vegetarian"] },

  // --- HIGH-PROTEIN & FITNESS MEAL PREP ---
  { name: "Grilled Chicken & Quinoa Power Bowl", cuisine: "American", ingredients: ["chicken breast", "quinoa", "spinach", "cherry tomato", "olive oil"], cal: 480, p: 45, c: 40, f: 12, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Cottage Cheese Protein Pancakes", cuisine: "American", ingredients: ["cottage cheese", "egg whites", "oats", "cinnamon", "vanilla"], cal: 320, p: 35, c: 30, f: 4, diet: ["Vegetarian", "Fitness"] },
  { name: "Turkey & Egg White Wrap", cuisine: "American", ingredients: ["ground turkey", "egg whites", "whole wheat wrap", "spinach", "tomato"], cal: 410, p: 42, c: 35, f: 10, diet: ["Dairy-Free", "Fitness"] },
  { name: "Baked Lemon Herb Chicken Breast", cuisine: "American", ingredients: ["chicken breast", "lemon", "rosemary", "garlic", "olive oil"], cal: 310, p: 48, c: 2, f: 12, diet: ["Dairy-Free", "Gluten-Free", "Keto", "Fitness"] },
  { name: "Lentil & Tuna Protein Salad", cuisine: "American", ingredients: ["canned tuna", "brown lentils", "red onion", "celery", "lemon"], cal: 340, p: 38, c: 35, f: 4, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Greek Yogurt & Whey Smoothie", cuisine: "American", ingredients: ["greek yogurt", "whey protein", "banana", "almond milk", "chia seeds"], cal: 350, p: 40, c: 35, f: 6, diet: ["Vegetarian", "Gluten-Free", "Fitness"] },
  { name: "Lean Beef & Asparagus Skillet", cuisine: "American", ingredients: ["lean beef", "asparagus", "garlic", "soy sauce", "sesame oil"], cal: 420, p: 45, c: 10, f: 20, diet: ["Dairy-Free", "Keto", "Fitness"] },
  { name: "Edamame & Tofu Power Salad", cuisine: "Asian", ingredients: ["tofu", "edamame", "cabbage", "carrot", "sesame dressing"], cal: 380, p: 28, c: 25, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Fitness"] },
  { name: "Steamed Chicken & Broccoli", cuisine: "Asian", ingredients: ["chicken breast", "broccoli", "garlic", "ginger", "soy sauce"], cal: 320, p: 45, c: 15, f: 6, diet: ["Dairy-Free", "Fitness"] },
  { name: "Chia & Egg White Oatmeal", cuisine: "American", ingredients: ["oats", "egg whites", "chia seeds", "almond milk", "cinnamon"], cal: 310, p: 25, c: 35, f: 8, diet: ["Vegetarian", "Dairy-Free", "Fitness"] },

  // --- TURKISH & ANATOLIAN GASTRONOMY ---
  { name: "Tirmis Ezmesi", cuisine: "Turkish", ingredients: ["lupin beans", "olive oil", "lemon", "garlic", "cumin", "salt"], cal: 240, p: 12, c: 16, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Antalya Tahinli Kabak Tatlısı", cuisine: "Turkish", ingredients: ["pumpkin", "sugar", "tahini", "walnut"], cal: 380, p: 6, c: 55, f: 18, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Tirmis Hardalı & Izgara Tavuk", cuisine: "Turkish", ingredients: ["chicken breast", "lupin beans", "mustard", "olive oil", "thyme"], cal: 410, p: 48, c: 10, f: 18, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Antalya Şiş Köfte", cuisine: "Turkish", ingredients: ["ground beef", "lamb fat", "salt", "cumin", "pita bread"], cal: 550, p: 35, c: 30, f: 32, diet: [] },
  { name: "Fırında Lagos", cuisine: "Turkish", ingredients: ["grouper fish", "olive oil", "lemon", "garlic", "bay leaf", "potato"], cal: 420, p: 45, c: 25, f: 14, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Alanya Bohçası", cuisine: "Turkish", ingredients: ["crepe dough", "lamb", "onion", "tomato", "kasar cheese"], cal: 580, p: 32, c: 45, f: 28, diet: [] },
  { name: "Toros Salata", cuisine: "Turkish", ingredients: ["arugula", "tomato", "tulum cheese", "walnut", "pomegranate molasses", "olive oil"], cal: 290, p: 8, c: 15, f: 24, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Kabak Çiçeği Dolması", cuisine: "Turkish", ingredients: ["zucchini flowers", "rice", "onion", "mint", "dill", "olive oil"], cal: 240, p: 4, c: 35, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Kereviz Salatası", cuisine: "Turkish", ingredients: ["celery root", "yogurt", "garlic", "walnut", "mayonnaise"], cal: 220, p: 6, c: 12, f: 18, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Zeytinyağlı Kuru Patlıcan Dolması", cuisine: "Turkish", ingredients: ["dried eggplant", "rice", "onion", "pomegranate molasses", "sumac", "olive oil"], cal: 340, p: 5, c: 55, f: 14, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },

  // --- FRENCH RUSTIC & HAUTE CUISINE ---
  { name: "Duck à l'Orange", cuisine: "French", ingredients: ["duck breast", "orange", "sugar", "vinegar", "chicken broth", "butter"], cal: 680, p: 35, c: 25, f: 48, diet: ["Gluten-Free"] },
  { name: "Tartiflette", cuisine: "French", ingredients: ["potato", "reblochon cheese", "bacon", "onion", "white wine", "cream"], cal: 750, p: 25, c: 45, f: 52, diet: ["Gluten-Free"] },
  { name: "Pissaladière", cuisine: "French", ingredients: ["pizza dough", "onion", "anchovies", "black olives", "olive oil", "thyme"], cal: 420, p: 12, c: 55, f: 16, diet: ["Pescatarian", "Dairy-Free"] },
  { name: "Foie Gras Poêlé", cuisine: "French", ingredients: ["foie gras", "salt", "black pepper", "fig", "balsamic vinegar"], cal: 450, p: 8, c: 15, f: 42, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Crème Brûlée", cuisine: "French", ingredients: ["heavy cream", "egg yolk", "sugar", "vanilla bean"], cal: 480, p: 6, c: 30, f: 38, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Poulet Basque", cuisine: "French", ingredients: ["chicken", "bell pepper", "tomato", "onion", "espelette pepper", "white wine"], cal: 460, p: 45, c: 20, f: 22, diet: ["Dairy-Free", "Gluten-Free", "Fitness"] },
  { name: "Flammekueche", cuisine: "French", ingredients: ["pizza dough", "creme fraiche", "bacon", "onion", "nutmeg"], cal: 580, p: 18, c: 55, f: 32, diet: [] },
  { name: "Hachis Parmentier", cuisine: "French", ingredients: ["ground beef", "potato", "onion", "butter", "milk", "cheese"], cal: 550, p: 35, c: 40, f: 28, diet: ["Gluten-Free"] },
  { name: "Moules-Frites", cuisine: "French", ingredients: ["mussels", "white wine", "shallot", "butter", "parsley", "potato"], cal: 620, p: 38, c: 65, f: 24, diet: ["Pescatarian", "Gluten-Free"] },
  { name: "Gougères au Fromage", cuisine: "French", ingredients: ["flour", "butter", "egg", "gruyere cheese", "nutmeg"], cal: 320, p: 12, c: 20, f: 22, diet: ["Vegetarian"] },

  // --- MIDDLE EASTERN & INDIAN ---
  { name: "Tandoori Paneer Tikka", cuisine: "Indian", ingredients: ["paneer cheese", "yogurt", "garam masala", "bell pepper", "onion", "lemon"], cal: 410, p: 22, c: 15, f: 30, diet: ["Vegetarian", "Gluten-Free", "Keto"] },
  { name: "Baingan Bharta", cuisine: "Indian", ingredients: ["eggplant", "tomato", "onion", "garlic", "ginger", "cumin"], cal: 220, p: 6, c: 30, f: 10, diet: ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"] },
  { name: "Lamb Vindaloo", cuisine: "Indian", ingredients: ["lamb", "vinegar", "garlic", "ginger", "chili", "mustard seeds"], cal: 580, p: 45, c: 12, f: 38, diet: ["Dairy-Free", "Gluten-Free", "Keto"] },
  { name: "Dal Tadka", cuisine: "Indian", ingredients: ["yellow lentils", "tomato", "onion", "garlic", "cumin", "ghee"], cal: 340, p: 18, c: 45, f: 12, diet: ["Vegetarian", "Gluten-Free"] },
  { name: "Garlic Naan", cuisine: "Indian", ingredients: ["flour", "yogurt", "yeast", "butter", "garlic", "cilantro"], cal: 280, p: 6, c: 45, f: 8, diet: ["Vegetarian"] },
  { name: "Chicken Musakhan", cuisine: "Middle Eastern", ingredients: ["chicken", "sumac", "onion", "olive oil", "pine nuts", "taboon bread"], cal: 620, p: 45, c: 48, f: 28, diet: ["Dairy-Free"] },
  { name: "Muhammara", cuisine: "Middle Eastern", ingredients: ["roasted red pepper", "walnut", "pomegranate molasses", "olive oil", "breadcrumbs", "cumin"], cal: 310, p: 6, c: 22, f: 24, diet: ["Vegan", "Vegetarian", "Dairy-Free"] },
  { name: "Labneh with Za'atar", cuisine: "Middle Eastern", ingredients: ["labneh", "zaatar", "olive oil", "pita bread", "cucumber"], cal: 280, p: 10, c: 25, f: 18, diet: ["Vegetarian"] },
  { name: "Kousa Mahshi", cuisine: "Middle Eastern", ingredients: ["zucchini", "rice", "ground beef", "tomato", "mint", "garlic"], cal: 380, p: 20, c: 45, f: 14, diet: ["Dairy-Free", "Gluten-Free"] },
  { name: "Samak Mashwi", cuisine: "Middle Eastern", ingredients: ["whole fish", "lemon", "garlic", "cumin", "coriander", "olive oil"], cal: 350, p: 42, c: 5, f: 18, diet: ["Pescatarian", "Dairy-Free", "Gluten-Free", "Keto", "Fitness"] }
];
