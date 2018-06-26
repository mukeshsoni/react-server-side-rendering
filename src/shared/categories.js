const categories = [
  { id: 0, name: "All Categories" },
  {
    id: 1,
    name: "Electronics ",
    subCategories: [
      { id: 0, name: "All Electronics " },
      { id: 1, name: "Mobile Phones " },
      { id: 2, name: "Mobile Phone Accessories " },
      { id: 3, name: "Computers and Tablets " },
      { id: 4, name: "Computer Accessories " },
      {
        id: 5,
        name: "TVs ",
        subCategories: [
          { id: 0, name: "All TVs" },
          { id: 1, name: "4K" },
          { id: 2, name: "Full HD" },
          { id: 4, name: "LED" },
          { id: 4, name: "Plasma" },
          { id: 4, name: "LCD" },
          { id: 4, name: "OLED" },
          { id: 3, name: "Curved LED" }
        ]
      },
      { id: 6, name: "TV and Video Accessories " },
      { id: 7, name: "Cameras and Camcorders " },
      { id: 8, name: "Audio and MP3 " },
      { id: 9, name: "Electronic Home Appliances " },
      { id: 10, name: "Air Conditions and Electrical fittings " },
      { id: 11, name: "Video Games and Consoles " },
      { id: 12, name: "Other Electronics " }
    ]
  },
  {
    id: 2,
    name: "Vehicles ",
    subCategories: [
      { id: 0, name: "All Vehicles " },
      {
        id: 1,
        name: "Cars ",
        subCategories: [
          { id: 0, name: "Hatchback" },
          { id: 1, name: "Sedan" },
          { id: 2, name: "MVP (Multi Utility Vehicle)" },
          { id: 4, name: "SUB (Sports Utility Vehicle)" },
          { id: 4, name: "Crossover" },
          { id: 4, name: "Coupe" },
          { id: 4, name: "Convertible" }
        ]
      },
      { id: 2, name: "Motorbikes and Scooters " },
      { id: 3, name: "Three Wheelers " },
      { id: 4, name: "Push Cycles " },
      { id: 5, name: "Vans, Buses and Lorries " },
      { id: 6, name: "Heavy Machinery and Tractors " },
      { id: 7, name: "Auto Services " },
      { id: 8, name: "Auto Parts and Accessories " },
      { id: 9, name: "Boats and Water Transport " }
    ]
  },
  {
    id: 3,
    name: "Property ",
    subCategories: [
      { id: 0, name: "All Property " },
      { id: 1, name: "Land " },
      { id: 2, name: "Houses " },
      { id: 3, name: "Apartments " },
      { id: 4, name: "New Developments " },
      { id: 5, name: "Rooms and Annexes " },
      { id: 6, name: "Holiday and Short-Term Rental " },
      { id: 7, name: "Commercial Property " },
      { id: 8, name: "Jobs in Sri Lanka " },
      { id: 9, name: "Work Overseas " }
    ]
  },
  {
    id: 4,
    name: "Home and Garden ",
    subCategories: [
      { id: 0, name: "All Home and Garden " },
      { id: 1, name: "Furniture " },
      { id: 2, name: "Bathroom and Sanitary ware " },
      { id: 3, name: "Building Material and Tools " },
      { id: 4, name: "Garden " },
      { id: 5, name: "Home Decor " },
      { id: 6, name: "Kitchen items " },
      { id: 7, name: "Other Home Items " }
    ]
  },
  {
    id: 5,
    name: "Fashion, Health and Beauty ",
    subCategories: [
      { id: 0, name: "All Fashion, Health and Beauty " },
      { id: 1, name: "Bags and Luggage " },
      { id: 2, name: "Clothing " },
      { id: 3, name: "Shoes and Footwear " },
      { id: 4, name: "Jewellery " },
      { id: 5, name: "Sunglasses and Opticians " },
      { id: 6, name: "Watches " },
      { id: 7, name: "Other Fashion Accessories " },
      { id: 8, name: "Health and Beauty Products " },
      { id: 9, name: "Other Personal Items " }
    ]
  },
  {
    id: 6,
    name: "Hobby, Sport and Kids ",
    subCategories: [
      { id: 0, name: "All Hobby, Sport and Kids " },
      { id: 1, name: "Musical Instruments " },
      { id: 2, name: "Sports Equipment " },
      { id: 3, name: "Sports Supplements " },
      { id: 4, name: "Travel, Events and Tickets " },
      { id: 5, name: "Art and Collectibles " },
      { id: 6, name: "Music, Books and Movies " },
      { id: 7, name: "Children's Items " },
      { id: 8, name: "Other Hobby, Sport and Kids Items " }
    ]
  },
  {
    id: 7,
    name: "Business and Industry ",
    subCategories: [
      { id: 0, name: "All Business and Industry " },
      { id: 1, name: "Office Equipment, Supplies and Stationery " },
      { id: 2, name: "Solar and Generators " },
      { id: 3, name: "Industry Tools and Machinery " },
      { id: 4, name: "Raw Materials and Wholesale Lots " },
      { id: 5, name: "Licences and Titles " },
      { id: 6, name: "Healthcare, Medical Equipment and Supplies " },
      { id: 7, name: "Other Business Services " }
    ]
  },
  {
    id: 8,
    name: "Services ",
    subCategories: [
      { id: 0, name: "All Services " },
      { id: 1, name: "Trade Services " },
      { id: 2, name: "Domestic Services " },
      { id: 3, name: "Events and Entertainment " },
      { id: 4, name: "Health and Wellbeing " },
      { id: 5, name: "Travel and Tourism " },
      { id: 6, name: "Other Services " }
    ]
  },
  {
    id: 9,
    name: "Education ",
    subCategories: [
      { id: 0, name: "All Education " },
      { id: 1, name: "Higher Education " },
      { id: 2, name: "Textbooks " },
      { id: 3, name: "Tuition " },
      { id: 4, name: "Vocational Institutes " },
      { id: 5, name: "Other Education " }
    ]
  },
  {
    id: 10,
    name: "Animals ",
    subCategories: [
      { id: 0, name: "All Animals " },
      { id: 1, name: "Pets " },
      { id: 2, name: "Pet Food " },
      { id: 3, name: "Veterinary Services " },
      { id: 4, name: "Farm Animals " },
      { id: 5, name: "Animal Accessories " },
      { id: 6, name: "Other Animals " }
    ]
  },
  {
    id: 11,
    name: "Food and Agriculture ",
    subCategories: [
      { id: 0, name: "All Food and Agriculture " },
      { id: 1, name: "Food " },
      { id: 2, name: "Crops, Seeds and Plants " },
      { id: 3, name: "Farming Tools and Machinery " },
      { id: 4, name: "Other Food and Agriculture " },
      { id: 5, name: "Other " }
    ]
  }
]

export default categories
