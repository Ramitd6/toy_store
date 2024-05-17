const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth",
    });

    // For mobile view, close the navigation menu after clicking
    if (window.innerWidth <= 920) {
      document.getElementById("navbar").classList.remove("active");
    }
  });
});

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}

function addToCart() {
  alert("The item has been added to your cart.");
}

function redirectToProductPage(element) {
    const imageSrc = element.getAttribute('data-image-src');
    const price = element.getAttribute('data-price');
    const name = element.getAttribute('data-name');
    const description = element.getAttribute('data-description');
    
    // Encode URL components to handle special characters
    const encodedName = encodeURIComponent(name);
    const encodedDescription = encodeURIComponent(description);
    
    // Redirect to the product details page with the parameters
    const url = `product.html?image=${encodeURIComponent(imageSrc)}&price=${encodeURIComponent(price)}&name=${encodedName}&description=${encodedDescription}`;
    window.location.href = url;
}
