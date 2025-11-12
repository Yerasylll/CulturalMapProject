// Countries Data with Cultural Information
const countriesData = [
    {
        id: 1,
        name: "Japan",
        flag: "🇯🇵",
        lat: 36.2048,
        lng: 138.2529,
        traditions: ["Tea Ceremony", "Origami", "Ikebana", "Sumo Wrestling"],
        music: ["Traditional Koto", "Shamisen", "Taiko Drums", "J-Pop"],
        cuisine: ["Sushi", "Ramen", "Tempura", "Takoyaki", "Matcha"],
        festivals: ["Cherry Blossom Festival (Hanami)", "Obon Festival", "New Year (Shogatsu)", "Tanabata"],
        description: "An island nation known for its blend of ancient traditions and cutting-edge technology.",
        capital: "Tokyo",
        population: "125.8 million",
        language: "Japanese",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400"
    },
    {
        id: 2,
        name: "Italy",
        flag: "🇮🇹",
        lat: 41.8719,
        lng: 12.5674,
        traditions: ["Opera", "Renaissance Art", "Fashion Design", "Family Values"],
        music: ["Opera", "Classical Music", "Tarantella", "Contemporary Pop"],
        cuisine: ["Pizza", "Pasta", "Risotto", "Gelato", "Tiramisu"],
        festivals: ["Carnevale di Venezia", "Palio di Siena", "Festa della Repubblica", "Ferragosto"],
        description: "The birthplace of the Renaissance, famous for art, architecture, and cuisine.",
        capital: "Rome",
        population: "60.4 million",
        language: "Italian",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400"
    },
    {
        id: 3,
        name: "India",
        flag: "🇮🇳",
        lat: 20.5937,
        lng: 78.9629,
        traditions: ["Yoga", "Meditation", "Rangoli", "Classical Dance", "Ayurveda"],
        music: ["Classical Ragas", "Bollywood", "Bhangra", "Tabla"],
        cuisine: ["Curry", "Biryani", "Samosa", "Tandoori", "Masala Chai"],
        festivals: ["Diwali", "Holi", "Dussehra", "Eid", "Navratri"],
        description: "A diverse country with ancient civilizations and vibrant spiritual traditions.",
        capital: "New Delhi",
        population: "1.4 billion",
        language: "Hindi, English",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400"
    },
    {
        id: 4,
        name: "Mexico",
        flag: "🇲🇽",
        lat: 23.6345,
        lng: -102.5528,
        traditions: ["Day of the Dead", "Mariachi", "Lucha Libre", "Pottery"],
        music: ["Mariachi", "Banda", "Norteño", "Regional Mexican"],
        cuisine: ["Tacos", "Mole", "Enchiladas", "Tamales", "Guacamole"],
        festivals: ["Día de los Muertos", "Cinco de Mayo", "Guelaguetza", "Independence Day"],
        description: "Rich in ancient Aztec and Mayan heritage with colorful traditions.",
        capital: "Mexico City",
        population: "128.9 million",
        language: "Spanish",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400"
    },
    {
        id: 5,
        name: "Egypt",
        flag: "🇪🇬",
        lat: 26.8206,
        lng: 30.8025,
        traditions: ["Ancient Hieroglyphics", "Papyrus Making", "Traditional Dance", "Calligraphy"],
        music: ["Oud", "Classical Arabic", "Shaabi", "Mahraganat"],
        cuisine: ["Koshari", "Ful Medames", "Molokhia", "Falafel", "Baklava"],
        festivals: ["Ramadan", "Eid al-Fitr", "Eid al-Adha", "Coptic Christmas"],
        description: "Home to one of the world's oldest civilizations and the pyramids.",
        capital: "Cairo",
        population: "102.3 million",
        language: "Arabic",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400"
    },
    {
        id: 6,
        name: "Brazil",
        flag: "🇧🇷",
        lat: -14.2350,
        lng: -51.9253,
        traditions: ["Capoeira", "Samba", "Carnival", "Football Culture"],
        music: ["Samba", "Bossa Nova", "Forró", "Funk Carioca"],
        cuisine: ["Feijoada", "Pão de Queijo", "Açaí", "Brigadeiro", "Churrasco"],
        festivals: ["Carnival", "Festa Junina", "Bumba Meu Boi", "Lavagem do Bonfim"],
        description: "The largest country in South America, famous for Carnival and the Amazon.",
        capital: "Brasília",
        population: "212.6 million",
        language: "Portuguese",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400"
    },
    {
        id: 7,
        name: "France",
        flag: "🇫🇷",
        lat: 46.2276,
        lng: 2.2137,
        traditions: ["Wine Making", "Fashion", "Perfume", "Fine Dining"],
        music: ["Chanson", "Electronic Music", "Classical", "Jazz"],
        cuisine: ["Croissants", "Baguette", "Cheese", "Escargot", "Crème Brûlée"],
        festivals: ["Bastille Day", "Cannes Film Festival", "Tour de France", "Fête de la Musique"],
        description: "Known for its art, fashion, cuisine, and romantic culture.",
        capital: "Paris",
        population: "67.4 million",
        language: "French",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400"
    },
    {
        id: 8,
        name: "China",
        flag: "🇨🇳",
        lat: 35.8617,
        lng: 104.1954,
        traditions: ["Calligraphy", "Martial Arts", "Tea Culture", "Paper Cutting"],
        music: ["Traditional Opera", "Guzheng", "Erhu", "C-Pop"],
        cuisine: ["Dim Sum", "Peking Duck", "Hot Pot", "Dumplings", "Kung Pao Chicken"],
        festivals: ["Chinese New Year", "Mid-Autumn Festival", "Dragon Boat Festival", "Lantern Festival"],
        description: "One of the world's oldest civilizations with a rich cultural heritage.",
        capital: "Beijing",
        population: "1.4 billion",
        language: "Mandarin",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400"
    },
    {
        id: 9,
        name: "Russia",
        flag: "🇷🇺",
        lat: 61.5240,
        lng: 105.3188,
        traditions: ["Matryoshka Dolls", "Ballet", "Orthodox Christianity", "Banya"],
        music: ["Classical Ballet", "Folk Songs", "Classical Composers", "Contemporary"],
        cuisine: ["Borscht", "Pelmeni", "Blini", "Beef Stroganoff", "Caviar"],
        festivals: ["Maslenitsa", "Victory Day", "New Year", "White Nights"],
        description: "The world's largest country, rich in literature, music, and dance.",
        capital: "Moscow",
        population: "144.1 million",
        language: "Russian",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400"
    },
    {
        id: 10,
        name: "Greece",
        flag: "🇬🇷",
        lat: 39.0742,
        lng: 21.8243,
        traditions: ["Ancient Philosophy", "Theater", "Olympic Games", "Pottery"],
        music: ["Rebetiko", "Laiko", "Byzantine Chant", "Contemporary"],
        cuisine: ["Moussaka", "Souvlaki", "Tzatziki", "Baklava", "Greek Salad"],
        festivals: ["Easter", "Athens Festival", "Apokries (Carnival)", "Ohi Day"],
        description: "Birthplace of democracy, philosophy, and the Olympic Games.",
        capital: "Athens",
        population: "10.7 million",
        language: "Greek",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400"
    },
    {
        id: 11,
        name: "Morocco",
        flag: "🇲🇦",
        lat: 31.7917,
        lng: -7.0926,
        traditions: ["Mosaic Art", "Carpet Weaving", "Henna Art", "Traditional Hammam"],
        music: ["Gnawa", "Chaabi", "Andalusian Classical", "Rai"],
        cuisine: ["Tagine", "Couscous", "Harira", "Pastilla", "Mint Tea"],
        festivals: ["Ramadan", "Eid al-Fitr", "Marrakech Film Festival", "Rose Festival"],
        description: "A North African country with vibrant markets and rich Islamic heritage.",
        capital: "Rabat",
        population: "36.9 million",
        language: "Arabic, Berber",
        image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400"
    },
    {
        id: 12,
        name: "Australia",
        flag: "🇦🇺",
        lat: -25.2744,
        lng: 133.7751,
        traditions: ["Aboriginal Art", "Surf Culture", "BBQ Culture", "Didgeridoo"],
        music: ["Aboriginal Music", "Rock", "Country", "Electronic"],
        cuisine: ["Meat Pies", "Vegemite", "Lamingtons", "Pavlova", "Barramundi"],
        festivals: ["Australia Day", "Sydney Festival", "Melbourne Cup", "Vivid Sydney"],
        description: "Known for unique wildlife, beaches, and indigenous Aboriginal culture.",
        capital: "Canberra",
        population: "25.7 million",
        language: "English",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400"
    },
    {
        id: 13,
        name: "Spain",
        flag: "🇪🇸",
        lat: 40.4637,
        lng: -3.7492,
        traditions: ["Flamenco", "Bullfighting", "Siesta", "Tapas Culture"],
        music: ["Flamenco", "Classical Guitar", "Rumba", "Reggaeton"],
        cuisine: ["Paella", "Tapas", "Gazpacho", "Jamón Ibérico", "Churros"],
        festivals: ["La Tomatina", "Running of the Bulls", "Semana Santa", "Feria de Abril"],
        description: "Famous for flamenco, bullfighting, and passionate cultural expressions.",
        capital: "Madrid",
        population: "47.4 million",
        language: "Spanish",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400"
    },
    {
        id: 14,
        name: "South Korea",
        flag: "🇰🇷",
        lat: 35.9078,
        lng: 127.7669,
        traditions: ["Hanbok", "Taekwondo", "Korean Calligraphy", "Kimchi Making"],
        music: ["K-Pop", "Traditional Pansori", "Gayageum", "K-Hip Hop"],
        cuisine: ["Kimchi", "Bibimbap", "Korean BBQ", "Tteokbokki", "Bulgogi"],
        festivals: ["Lunar New Year", "Chuseok", "Buddha's Birthday", "Boryeong Mud Festival"],
        description: "A modern nation blending ancient traditions with contemporary pop culture.",
        capital: "Seoul",
        population: "51.7 million",
        language: "Korean",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400"
    },
    {
        id: 15,
        name: "Peru",
        flag: "🇵🇪",
        lat: -9.1900,
        lng: -75.0152,
        traditions: ["Weaving", "Inca Heritage", "Pottery", "Traditional Dance"],
        music: ["Marinera", "Huayno", "Festejo", "Peruvian Waltz"],
        cuisine: ["Ceviche", "Lomo Saltado", "Aji de Gallina", "Anticuchos", "Pisco Sour"],
        festivals: ["Inti Raymi", "Qoyllur Rit'i", "Día de los Muertos", "Mistura Food Festival"],
        description: "Home to Machu Picchu and the ancient Inca civilization.",
        capital: "Lima",
        population: "32.9 million",
        language: "Spanish, Quechua",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400"
    }
];

// Quiz Questions Data
const quizQuestions = [
    {
        question: "Which country is famous for the Cherry Blossom Festival (Hanami)?",
        options: ["China", "Japan", "South Korea", "Vietnam"],
        correct: 1,
        explanation: "Japan celebrates Hanami, the centuries-old tradition of viewing cherry blossoms."
    },
    {
        question: "What is the traditional dance of Spain?",
        options: ["Samba", "Tango", "Flamenco", "Salsa"],
        correct: 2,
        explanation: "Flamenco is the passionate traditional dance and music style from Spain."
    },
    {
        question: "Which festival involves throwing tomatoes in Spain?",
        options: ["La Tomatina", "Running of the Bulls", "Feria de Abril", "Semana Santa"],
        correct: 0,
        explanation: "La Tomatina is the famous tomato-throwing festival held in Buñol, Spain."
    },
    {
        question: "What is the capital of Japan?",
        options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        correct: 2,
        explanation: "Tokyo is the capital and largest city of Japan."
    },
    {
        question: "Which country is famous for Carnival with Samba?",
        options: ["Argentina", "Brazil", "Colombia", "Chile"],
        correct: 1,
        explanation: "Brazil hosts the world's most famous Carnival, especially in Rio de Janeiro."
    },
    {
        question: "What is India's Festival of Lights called?",
        options: ["Holi", "Diwali", "Navratri", "Dussehra"],
        correct: 1,
        explanation: "Diwali is the Hindu festival of lights celebrated across India."
    },
    {
        question: "Which country is home to the ancient pyramids?",
        options: ["Morocco", "Egypt", "Greece", "Peru"],
        correct: 1,
        explanation: "Egypt is famous for the ancient pyramids of Giza."
    },
    {
        question: "What is the traditional Korean dress called?",
        options: ["Kimono", "Hanbok", "Sari", "Cheongsam"],
        correct: 1,
        explanation: "Hanbok is the traditional Korean dress worn during special occasions."
    },
    {
        question: "Which country invented pizza?",
        options: ["France", "Greece", "Italy", "Spain"],
        correct: 2,
        explanation: "Pizza was invented in Naples, Italy."
    },
    {
        question: "What is the famous ancient Inca city in Peru?",
        options: ["Cusco", "Machu Picchu", "Lima", "Arequipa"],
        correct: 1,
        explanation: "Machu Picchu is the famous 15th-century Inca citadel in Peru."
    },
    {
        question: "Which country celebrates Bastille Day?",
        options: ["Belgium", "Switzerland", "France", "Canada"],
        correct: 2,
        explanation: "France celebrates Bastille Day on July 14th, marking the French Revolution."
    },
    {
        question: "What is the traditional Mexican celebration honoring the deceased?",
        options: ["Cinco de Mayo", "Day of the Dead", "Independence Day", "Guelaguetza"],
        correct: 1,
        explanation: "Día de los Muertos (Day of the Dead) is a Mexican holiday honoring deceased loved ones."
    },
    {
        question: "Which martial art originated in South Korea?",
        options: ["Karate", "Judo", "Taekwondo", "Kung Fu"],
        correct: 2,
        explanation: "Taekwondo is the Korean martial art known for its kicks."
    },
    {
        question: "What is Russia's traditional wooden doll called?",
        options: ["Matryoshka", "Kokeshi", "Daruma", "Babushka"],
        correct: 0,
        explanation: "Matryoshka dolls are the famous Russian nesting dolls."
    },
    {
        question: "Which country is the birthplace of democracy?",
        options: ["Rome", "Greece", "Egypt", "Persia"],
        correct: 1,
        explanation: "Ancient Greece, particularly Athens, is considered the birthplace of democracy."
    }
];

// Gallery Images Data
const galleryImages = [
    { id: 1, country: "Japan", category: "festivals", url: "https://images.unsplash.com/photo-1555231955-348aa2312e19?q=80&w=600", title: "Cherry Blossom Festival" },
    { id: 2, country: "Italy", category: "cuisine", url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600", title: "Italian Pizza" },
    { id: 3, country: "India", category: "festivals", url: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=600", title: "Holi Festival" },
    { id: 4, country: "Mexico", category: "traditions", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600", title: "Day of the Dead" },
    { id: 5, country: "Egypt", category: "traditions", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600", title: "Pyramids of Giza" },
    { id: 6, country: "Brazil", category: "festivals", url: "https://images.unsplash.com/photo-1560458386-df616c1a8b54?q=80&w=600", title: "Rio Carnival" },
    { id: 7, country: "France", category: "cuisine", url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600", title: "French Pastries" },
    { id: 8, country: "China", category: "traditions", url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600", title: "Chinese Calligraphy" },
    { id: 9, country: "Greece", category: "traditions", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600", title: "Santorini Views" },
    { id: 10, country: "Spain", category: "music", url: "https://images.unsplash.com/photo-1692455546756-7af4862bfcc4?q=80&w=600", title: "Flamenco Dance" },
    { id: 11, country: "South Korea", category: "cuisine", url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600", title: "Korean BBQ" },
    { id: 12, country: "Peru", category: "traditions", url: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600", title: "Machu Picchu" }
];