const locations = [
  {
    id: 0,
    name: "All of Sri Lanka",
    subCategories: [{ id: 0, name: "Districts" }]
  },
  {
    id: 1,
    name: "Colombo",
    subCategories: [
      { id: 0, name: "All of Colombo" },
      { id: 1, name: "Nugegoda" },
      { id: 2, name: "Dehiwala" },
      { id: 3, name: "Piliyandala" },
      { id: 4, name: "Colombo 6" },
      { id: 5, name: "Maharagama" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Angoda" },
      { id: 8, name: "Athurugiriya" },
      { id: 9, name: "Avissawella" },
      { id: 10, name: "Battaramulla" },
      { id: 11, name: "Boralesgamuwa" },
      { id: 12, name: "Colombo 1" },
      { id: 13, name: "Colombo 10" },
      { id: 14, name: "Colombo 11" },
      { id: 15, name: "Colombo 12" },
      { id: 16, name: "Colombo 13" },
      { id: 17, name: "Colombo 14" },
      { id: 18, name: "Colombo 15" },
      { id: 19, name: "Colombo 2" },
      { id: 20, name: "Colombo 3" },
      { id: 21, name: "Colombo 4" },
      { id: 22, name: "Colombo 5" },
      { id: 23, name: "Colombo 7" },
      { id: 24, name: "Colombo 8" },
      { id: 25, name: "Colombo 9" },
      { id: 26, name: "Hanwella" },
      { id: 27, name: "Homagama" },
      { id: 28, name: "Kaduwela" },
      { id: 29, name: "Kesbewa" },
      { id: 30, name: "Kohuwala" },
      { id: 31, name: "Kolonnawa" },
      { id: 32, name: "Kottawa" },
      { id: 33, name: "Kotte" },
      { id: 34, name: "Malabe" },
      { id: 35, name: "Moratuwa" },
      { id: 36, name: "Mount Lavinia" },
      { id: 37, name: "Nawala" },
      { id: 38, name: "Padukka" },
      { id: 39, name: "Pannipitiya" },
      { id: 40, name: "Rajagiriya" },
      { id: 41, name: "Ratmalana" },
      { id: 42, name: "Talawatugoda" },
      { id: 43, name: "Wellampitiya" }
    ]
  },
  {
    id: 2,
    name: "Kandy",
    subCategories: [
      { id: 0, name: "All of Kandy" },
      { id: 1, name: "Kandy" },
      { id: 2, name: "Katugastota" },
      { id: 3, name: "Peradeniya" },
      { id: 4, name: "Gampola" },
      { id: 5, name: "Kundasale" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Akurana" },
      { id: 8, name: "Ampitiya" },
      { id: 9, name: "Digana" },
      { id: 10, name: "Galagedara" },
      { id: 11, name: "Gelioya" },
      { id: 12, name: "Kadugannawa" },
      { id: 13, name: "Madawala Bazaar" },
      { id: 14, name: "Nawalapitiya" },
      { id: 15, name: "Pilimatalawa" },
      { id: 16, name: "Wattegama" }
    ]
  },
  {
    id: 3,
    name: "Galle",
    subCategories: [
      { id: 0, name: "All of Galle" },
      { id: 1, name: "Galle" },
      { id: 2, name: "Ambalangoda" },
      { id: 3, name: "Elpitiya" },
      { id: 4, name: "Hikkaduwa" },
      { id: 5, name: "Baddegama" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Ahangama" },
      { id: 8, name: "Batapola" },
      { id: 9, name: "Bentota" },
      { id: 10, name: "Karapitiya" }
    ]
  },
  {
    id: 4,
    name: "Ampara",
    subCategories: [
      { id: 0, name: "All of Ampara" },
      { id: 1, name: "Akkarepattu" },
      { id: 2, name: "Kalmunai" },
      { id: 3, name: "Ampara" },
      { id: 4, name: "Sainthamaruthu" }
    ]
  },
  {
    id: 5,
    name: "Anuradhapura",
    subCategories: [
      { id: 0, name: "All of Anuradhapura" },
      { id: 1, name: "Anuradhapura" },
      { id: 2, name: "Kekirawa" },
      { id: 3, name: "Medawachchiya" },
      { id: 4, name: "Tambuttegama" },
      { id: 5, name: "Eppawala" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Galenbindunuwewa" },
      { id: 8, name: "Galnewa" },
      { id: 9, name: "Habarana" },
      { id: 10, name: "Mihintale" },
      { id: 11, name: "Nochchiyagama" },
      { id: 12, name: "Talawa" }
    ]
  },
  {
    id: 6,
    name: "Badulla",
    subCategories: [
      { id: 0, name: "All of Badulla" },
      { id: 1, name: "Badulla" },
      { id: 2, name: "Bandarawela" },
      { id: 3, name: "Welimada" },
      { id: 4, name: "Mahiyanganaya" },
      { id: 5, name: "Hali Ela" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Diyatalawa" },
      { id: 8, name: "Ella" },
      { id: 9, name: "Haputale" },
      { id: 10, name: "Passara" }
    ]
  },
  {
    id: 7,
    name: "Batticaloa",
    subCategories: [
      { id: 0, name: "All of Batticaloa" },
      { id: 1, name: "Batticaloa" }
    ]
  },
  {
    id: 8,
    name: "Gampaha",
    subCategories: [
      { id: 0, name: "All of Gampaha" },
      { id: 1, name: "Gampaha" },
      { id: 2, name: "Negombo" },
      { id: 3, name: "Kelaniya" },
      { id: 4, name: "Kadawatha" },
      { id: 5, name: "Kiribathgoda" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Delgoda" },
      { id: 8, name: "Divulapitiya" },
      { id: 9, name: "Ganemulla" },
      { id: 10, name: "Ja-Ela" },
      { id: 11, name: "Kandana" },
      { id: 12, name: "Katunayake" },
      { id: 13, name: "Minuwangoda" },
      { id: 14, name: "Mirigama" },
      { id: 15, name: "Nittambuwa" },
      { id: 16, name: "Ragama" },
      { id: 17, name: "Veyangoda" },
      { id: 18, name: "Wattala" }
    ]
  },
  {
    id: 9,
    name: "Hambantota",
    subCategories: [
      { id: 0, name: "All of Hambantota" },
      { id: 1, name: "Tangalla" },
      { id: 2, name: "Beliatta" },
      { id: 3, name: "Ambalantota" },
      { id: 4, name: "Tissamaharama" },
      { id: 5, name: "Hambantota" }
    ]
  },
  {
    id: 10,
    name: "Jaffna",
    subCategories: [
      { id: 0, name: "All of Jaffna" },
      { id: 1, name: "Jaffna" },
      { id: 2, name: "Nallur" },
      { id: 3, name: "Chavakachcheri" }
    ]
  },
  {
    id: 11,
    name: "Kalutara",
    subCategories: [
      { id: 0, name: "All of Kalutara" },
      { id: 1, name: "Horana" },
      { id: 2, name: "Kalutara" },
      { id: 3, name: "Panadura" },
      { id: 4, name: "Bandaragama" },
      { id: 5, name: "Matugama" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Alutgama" },
      { id: 8, name: "Beruwala" },
      { id: 9, name: "Ingiriya" },
      { id: 10, name: "Wadduwa" }
    ]
  },
  {
    id: 12,
    name: "Kegalle",
    subCategories: [
      { id: 0, name: "All of Kegalle" },
      { id: 1, name: "Kegalle" },
      { id: 2, name: "Mawanella" },
      { id: 3, name: "Warakapola" },
      { id: 4, name: "Rambukkana" },
      { id: 5, name: "Ruwanwella" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Dehiowita" },
      { id: 8, name: "Deraniyagala" },
      { id: 9, name: "Galigamuwa" },
      { id: 10, name: "Kitulgala" },
      { id: 11, name: "Yatiyantota" }
    ]
  },
  {
    id: 13,
    name: "Kilinochchi",
    subCategories: [
      { id: 0, name: "All of Kilinochchi" },
      { id: 1, name: "Kilinochchi" }
    ]
  },
  {
    id: 14,
    name: "Kurunegala",
    subCategories: [
      { id: 0, name: "All of Kurunegala" },
      { id: 1, name: "Kurunegala" },
      { id: 2, name: "Kuliyapitiya" },
      { id: 3, name: "Pannala" },
      { id: 4, name: "Narammala" },
      { id: 5, name: "Wariyapola" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Alawwa" },
      { id: 8, name: "Bingiriya" },
      { id: 9, name: "Galgamuwa" },
      { id: 10, name: "Giriulla" },
      { id: 11, name: "Hettipola" },
      { id: 12, name: "Ibbagamuwa" },
      { id: 13, name: "Mawathagama" },
      { id: 14, name: "Nikaweratiya" },
      { id: 15, name: "Polgahawela" }
    ]
  },
  {
    id: 15,
    name: "Mannar",
    subCategories: [{ id: 0, name: "All of Mannar" }, { id: 1, name: "Mannar" }]
  },
  {
    id: 16,
    name: "Matale",
    subCategories: [
      { id: 0, name: "All of Matale" },
      { id: 1, name: "Matale" },
      { id: 2, name: "Dambulla" },
      { id: 3, name: "Galewela" },
      { id: 4, name: "Ukuwela" },
      { id: 5, name: "Sigiriya" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Palapathwela" },
      { id: 8, name: "Rattota" },
      { id: 9, name: "Yatawatta" }
    ]
  },
  {
    id: 17,
    name: "Matara",
    subCategories: [
      { id: 0, name: "All of Matara" },
      { id: 1, name: "Matara" },
      { id: 2, name: "Akuressa" },
      { id: 3, name: "Weligama" },
      { id: 4, name: "Hakmana" },
      { id: 5, name: "Dikwella" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Deniyaya" },
      { id: 8, name: "Kamburugamuwa" },
      { id: 9, name: "Kamburupitiya" },
      { id: 10, name: "Kekanadurra" }
    ]
  },
  {
    id: 18,
    name: "Moneragala",
    subCategories: [
      { id: 0, name: "All of Moneragala" },
      { id: 1, name: "Moneragala" },
      { id: 2, name: "Wellawaya" },
      { id: 3, name: "Bibile" },
      { id: 4, name: "Kataragama" },
      { id: 5, name: "Buttala" }
    ]
  },
  {
    id: 19,
    name: "Mullativu",
    subCategories: [
      { id: 0, name: "All of Mullativu" },
      { id: 1, name: "Mullativu" }
    ]
  },
  {
    id: 20,
    name: "Nuwara Eliya",
    subCategories: [
      { id: 0, name: "All of Nuwara Eliya" },
      { id: 1, name: "Nuwara Eliya" },
      { id: 2, name: "Hatton" },
      { id: 3, name: "Ginigathena" },
      { id: 4, name: "Madulla" }
    ]
  },
  {
    id: 21,
    name: "Polonnaruwa",
    subCategories: [
      { id: 0, name: "All of Polonnaruwa" },
      { id: 1, name: "Polonnaruwa" },
      { id: 2, name: "Kaduruwela" },
      { id: 3, name: "Hingurakgoda" },
      { id: 4, name: "Medirigiriya" }
    ]
  },
  {
    id: 22,
    name: "Puttalam",
    subCategories: [
      { id: 0, name: "All of Puttalam" },
      { id: 1, name: "Chilaw" },
      { id: 2, name: "Wennappuwa" },
      { id: 3, name: "Puttalam" },
      { id: 4, name: "Dankotuwa" },
      { id: 5, name: "Marawila" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Nattandiya" }
    ]
  },
  {
    id: 23,
    name: "Ratnapura",
    subCategories: [
      { id: 0, name: "All of Ratnapura" },
      { id: 1, name: "Ratnapura" },
      { id: 2, name: "Embilipitiya" },
      { id: 3, name: "Balangoda" },
      { id: 4, name: "Pelmadulla" },
      { id: 5, name: "Eheliyagoda" },
      { id: 6, name: "Other areas (A-Z)" },
      { id: 7, name: "Kuruwita" }
    ]
  },
  {
    id: 24,
    name: "Trincomalee",
    subCategories: [
      { id: 0, name: "All of Trincomalee" },
      { id: 1, name: "Trincomalee" },
      { id: 2, name: "Kinniya" }
    ]
  },
  {
    id: 25,
    name: "Vavuniya",
    subCategories: [
      { id: 0, name: "All of Vavuniya" },
      { id: 1, name: "Vavuniya" }
    ]
  }
]

export default locations
