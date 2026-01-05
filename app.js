const products = [
  {
    name: "Nike Mercurial Superfly",
    price: 275,
    gender: "men",
    link: "https://nike.com?aff=ballknowledge"
  },
  {
    name: "Adidas X Speedportal (Women)",
    price: 250,
    gender: "women",
    link: "https://adidas.com?aff=ballknowledge"
  },
  {
    name: "Puma Training Jersey",
    price: 45,
    gender: "men",
    link: "https://puma.com?aff=ballknowledge"
  }
];

function openProfile() {
  document.getElementById("profileModal").style.display = "flex";
}

function saveProfile() {
  localStorage.setItem("gender", document.getElementById("gender").value);
  localStorage.setItem("size", document.getElementById("size").value);
  document.getElementById("profileModal").style.display = "none";
  alert("Profile saved!");
}

function renderProducts() {
  const list = document.getElementById("productList");
  if (!list) return;

  let filtered = [...products];
  const userGender = document.getElementById("genderFilter")?.value || localStorage.getItem("gender");
  const priceSort = document.getElementById("priceFilter")?.value;

  if (userGender) {
    filtered = filtered.filter(p => p.gender === userGender);
  }

  if (priceSort === "low") filtered.sort((a,b) => a.price - b.price);
  if (priceSort === "high") filtered.sort((a,b) => b.price - a.price);

  list.innerHTML = "";
  filtered.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <a href="${p.link}" target="_blank">Buy</a>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);
