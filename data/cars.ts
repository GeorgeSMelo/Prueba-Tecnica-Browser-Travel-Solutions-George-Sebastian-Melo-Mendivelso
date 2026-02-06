export const cars = [
  {
    id: 1,
    brand: 'Hertz',
    brandImage: '/images/hertz.png', // <-- nueva propiedad
    cost: 'Economico',
    model: 'Kia Soul o Similar',
    price: 550552,
    passengers: 5,
    luggage: 3,
    temperature: 'A/C',
    automatic: 'A/C',
    image: '/images/kia soul@2x.png'
  },
  {
    id: 2,
    brand: 'Avis',
    cost: 'Intermedio',
    model: 'Kia Soul o Similar',
    price: 550552,
    passengers: 5,
    luggage: 3,
    temperature: 'A/C',
    automatic: 'A/C',
    image: '/images/Chrysler Pacifica.png'
  }
];

export const reservationTypes = [
  {
    id: "withInsurance",
    title: "Reserva con seguro",
    hasInsurance: true,
    discount: 0.15, // 15%
  },
  {
    id: "withoutInsurance",
    title: "Reserva sin seguro",
    hasInsurance: false,
    discount: 0,
  },
  
];