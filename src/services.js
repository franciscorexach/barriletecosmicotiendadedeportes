const products = [
    { id: "1", name: "Camiseta Adidas Argentina", price: 200, category: "camisetas" },
    { id: "2", name: "Camiseta Nike Francia", price: 190, category: "camisetas" },
    { id: "3", name: "Pantalón Adidas Boca Juniors", price: 100, category: "pantalones" },
    { id: "4", name: "Pantalón Nike Barcelona F.C.", price: 125, category: "pantalones" },
    { id: "5", name: "Medias Adidas Argentina", price: 5, category: "medias" },
    { id: "6", name: "Medidas NiKe Francia", price: 5, category: "medias" },
    { id: "7", name: "Botines Umbro Beat", price: 40, category: "botines" },
    { id: "8", name: "Botines Mizuno Morelia Neo Kl", price: 50, category: "botines" },
    { id: "9", name: "Pelota Al Rihla Copa Mundial de Qatar 2022", price: 30, category: "pelotas" },
  ];

  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((p) => p.id === id);
  
        if (product) {
          resolve(product);
        } else {
          reject("No existe el producto");
        }
      }, 1000);
    });
  };
  
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
  
        const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
        resolve(productsFiltered);
      }, 1000);
    });
  };