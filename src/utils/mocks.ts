const mockProducts = [
  {
    name: "Nombre producto 1",
    price: 320.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '1'
  },
  {
    name: "Nombre producto 1",
    price: 920.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '12'
  },
  {
    name: "Nombre producto 1",
    price: 920.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '12'
  },
  {
    name: "Nombre producto 1",
    price: 920.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '12'
  },
  {
    name: "Nombre producto 1",
    price: 920.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '12'
  },
  {
    name: "Nombre producto 1",
    price: 920.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '12'
  },
  {
    name: "Nombre producto 1",
    price: 100.00,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '17'
  },
  {
    name: "Nombre producto 1",
    price: 120.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '21'
  },
  {
    name: "Nombre producto 1",
    price: 999.99,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '1'
  },
  {
    name: "Nombre producto 2",
    price: 1200,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: true,
    id: '2'
  },
  {
    name: "Nombre producto 3",
    price: 120.50,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: true,
    id: '3'
  },
  {
    name: "Nombre producto 3",
    price: 1200.00,
    description: "La descripción del producto",
    image: "https://picsum.photos/600/400",
    desc_large: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
    stock: false,
    id: '4'
  },
];

export default mockProducts;
