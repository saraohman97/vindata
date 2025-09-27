export const wines = [
    // {
    //     id: 4,
    //     label: "",
    //     brand: "",
    //     color: "Rött",
    //     flavor: "",
    //     country: "",
    //     price: 99,
    //     grape: "",
    //     review: 1,
    //     createdAt: "20 september 2025"
    // },
    {
        id: 7,
        label: "Le Grand Manège, 2023",
        brand: "Côtes-du-Rhône",
        color: "Rött",
        flavor: "Fruktigt & Smakrikt",
        country: "Frankrike",
        price: 99,
        grape: "Grenache, syrah och mourvèdre.",
        review: 4,
        createdAt: "27 september 2025"
    },
    {
        id: 6,
        label: "2014",
        brand: "Château Les Trois Manoirs",
        color: "Rött",
        flavor: "Stramt & Nyanserat",
        country: "Frankrike",
        price: 149,
        grape: "55% Cabernet sauvignon / 35 % Merlot / 5% Malbec / 3% Petit Verdot / 2% Cabernet franc",
        review: 5,
        createdAt: "24 september 2025"
    },
    {
        id: 5,
        label: "2020",
        brand: "Villa Puccini",
        color: "Rött",
        flavor: "Kryddigt & Mustigt",
        country: "Italien",
        price: 99,
        grape: "Sangiovese",
        review: 5,
        createdAt: "20 september 2025"
    },
    {
        id: 4,
        label: "la Bestia, 2024",
        brand: "Governo Rosso Toscano",
        color: "Rött",
        flavor: "Fruktigt & Smakrikt",
        country: "Italien",
        price: 109,
        grape: "Sangiovese och colorino",
        review: 5,
        createdAt: "20 september 2025"
    },
    {
        id: 3,
        label: "Labouré-Roi, 2023",
        brand: "Bourgogne Pinot Noir",
        color: "Rött",
        flavor: "Mjukt & Bärigt",
        country: "Frankrike",
        price: 145,
        grape: "Pinot noir",
        review: 4,
        createdAt: "20 september 2025"
    },
    {
        id: 2,
        label: "Malbec, 2023",
        brand: "Le Grand Gourmet",
        color: "Rött",
        flavor: "Fruktigt & Smakrikt",
        country: "Frankrike",
        price: 99,
        grape: "Malbec",
        review: 4,
        createdAt: "20 september 2025"
    },
    {
        id: 1,
        label: "Bordeaux, 2015",
        brand: "ChateauBriand",
        color: "Rött",
        flavor: "Stramt & nyanserat",
        country: "Frankrike",
        price: 119,
        grape: "Merlot",
        review: 3,
        createdAt: "20 september 2025"
    },
]

export const posts = [
    // {
    //     id: 1, 
    //     heading: "",
    //     text: "",
    //     image: "",
    //     createdAt: "",
    //     category: "",
    //     recipe: {
    //         summary: "",
    //         ingredients: {
    //             1: "",
    //             2: "",
    //         },
    //         instructions: {
    //             1: "",
    //             2: "",
    //         }
    //     }
    // },
    {
        id: 2, 
        heading: "Tranellska restaurang",
        text: "Idag var jag på gymnasieskolans restaurang där trerättersluncher serveras för 160 kr per kuvert. Jag fick en förrätt att preppa och tillaga, halstrad råbiff.",
        image: "post-1.jpg",
        createdAt: "24 september 2025",
        category: "Kockskola",
        recipe: {
            summary: "",
            ingredients: [
                "Ryggbiff",
                "Kapris",
                "Bostongurka",
                "Rödlök",
                "Rödbeta",
            ],
            instructions: {
                1: "Hacka ryggbiff och forma till 100g puckar.",
                2: "Förbered grönsaker i mise en place.",
                3: "Halstra råbiff och dekorera medäggula."
            }
        }
    },
    {
        id: 1, 
        heading: "Tranellska restaurang",
        text: "Idag var jag på gymnasieskolans restaurang där trerättersluncher serveras för 160 kr per kuvert. Jag fick en förrätt att preppa och tillaga, halstrad råbiff. Ryggbiff hackades för hand och formades till puckar. Grönsaker som kapris, lök, bostongurka och rödbetor lades Mise en place. Råbiffen halstras innan servering och dekoreras med en äggula. ",
        image: "post-1.jpg",
        createdAt: "24 september 2025",
        category: "Kockskola",
        recipe: {
            summary: "",
            ingredients: {
                1: "",
                2: "",
            },
            instructions: {
                1: "",
                2: "",
            }
        }
    },
]

export type WineType = {
    id: number,
    label: string,
    brand: string,
    color: string,
    flavor: string,
    country: string,
    price: number,
    grape: string,
    review: number,
    createdAt: string
}