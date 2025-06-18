document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos HTML
  const btn = document.getElementById("btnShowTable");
  const container = document.getElementById("tableContainer");
  const tbody = document.getElementById("productTableBody");

  // Dados dos produtos
  const produtos = [
    {
      id: 1,
      titulo: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      categoria: "men's clothing",
      imagem: "./img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantia: 5,
      desconto: 0.2,
      precoSemDesconto: 27.5,
    },
    {
      id: 2,
      titulo: "Mens Casual Premium Slim Fit T-Shirts",
      categoria: "men's clothing",
      imagem: "./img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantia: 13,
      desconto: 0.2,
      precoSemDesconto: 39.0,
    },
    {
      id: 3,
      titulo: "Mens Cotton Jacket",
      categoria: "men's clothing",
      imagem: "./img/71li-ujtlUL._AC_UX679_.jpg",
      quantia: 18,
      desconto: 0.2,
      precoSemDesconto: 29.0,
    },
    {
      id: 4,
      titulo: "Mens Casual Slim Fit",
      categoria: "men's clothing",
      imagem: "./img/71YXzeOuslL._AC_UY879_.jpg",
      quantia: 29,
      desconto: 0.2,
      precoSemDesconto: 30.99,
    },
    {
      id: 5,
      titulo: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      categoria: "jewelery",
      imagem: "./img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      quantia: 32,
      desconto: 0.2,
      precoSemDesconto: 28.0,
    },
    {
      id: 6,
      titulo: "Solid Gold Petite Micropave",
      categoria: "jewelery",
      imagem: "./img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      quantia: 11,
      desconto: 0.2,
      precoSemDesconto: 20.75,
    },
    {
      id: 7,
      titulo: "White Gold Plated Princess",
      categoria: "jewelery",
      imagem: "./img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      quantia: 9,
      desconto: 0.2,
      precoSemDesconto: 21.20,
    },
    {
      id: 8,
      titulo: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      categoria: "jewelery",
      imagem: "./img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      quantia: 22,
      desconto: 0.2,
      precoSemDesconto: 28.99,
    },
    {
      id: 9,
      titulo: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      categoria: "electronics",
      imagem: "./img/61IBBVJvSDL._AC_SY879_.jpg",
      quantia: 25,
      desconto: 0.2,
      precoSemDesconto: 32.19,
    },
    {
      id: 10,
      titulo: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      categoria: "electronics",
      imagem: "./img/61U7T1koQqL._AC_SX679_.jpg",
      quantia: 10,
      desconto: 0.2,
      precoSemDesconto: 24.99,
    },
    // Adicione mais produtos conforme necessário...
  ];

  // Função para formatar preços
  const formatarPreco = (valor) => `R$ ${valor.toFixed(2).replace(".", ",")}`;

  // Lógica do botão para mostrar/ocultar a tabela
  btn.addEventListener("click", function () {
    // Se a tabela estiver oculta, mostra ela
    if (container.style.display === "none") {
      // Preenche a tabela apenas na primeira vez que for mostrado
      if (tbody.children.length === 0) {
        produtos.forEach((produto) => {
          const precoComDesconto = produto.precoSemDesconto * (1 - produto.desconto);

          const tr = document.createElement("tr");
          tr.innerHTML = `
            <th scope="row">${produto.id}</th>
            <td>${produto.titulo}</td>
            <td>${produto.categoria}</td>
            <td><img src="${produto.imagem}" alt="Imagem do produto" style="width: 80px; height: 80px; object-fit: cover;"></td>
            <td>${produto.quantia}</td>
            <td>${(produto.desconto * 100).toFixed(0)}%</td>
            <td>${formatarPreco(precoComDesconto)}</td>
            <td>${formatarPreco(produto.precoSemDesconto)}</td>
          `;
          tbody.appendChild(tr);
        });
      }

      // Torna a tabela visível
      container.style.display = "block";
      btn.textContent = "Ocultar Tabela"; // Altera o texto do botão
    } else {
      // Esconde a tabela se já estiver visível
      container.style.display = "none";
      btn.textContent = "Mostrar Tabela"; // Restaura o texto do botão
    }
  });
});
