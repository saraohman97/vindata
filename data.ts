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
        grape: "Sangiovese och colorino.",
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