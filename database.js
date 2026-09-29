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
];
