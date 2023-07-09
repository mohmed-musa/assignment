// var products =[]
// var ProductNameInput =  document.getElementById("ProductNameInput")
// var productPriceInput =  document.getElementById("productPriceInput")
// var productCategoryInput = document.getElementById("productCategoryInput")
// var productDescInput = document.getElementById("productDescInput")

// checkProducts()

// function addProduct() {
//   var product = {
//     name: ProductNameInput.value,
//     price: productPriceInput.value,
//     category: productCategoryInput.value,
//     desc: productDescInput.value
//   }

//   products.push(product)

//   console.log(products);
//   clearForm()
//   displayProducts(products)

// }
// function clearForm() {
//   ProductNameInput.value = ""
//   productPriceInput.value = ""
//   productCategoryInput.value = ""
//   productDescInput.value = ""
// }

// function displayProducts(productsArr) {
//   var trs = ""
//   for( var i = 0; i < productsArr.length; i++) {
//     trs += `
//     <tr>
//     <td>${i +1}</td>
//     <td>${productsArr[i].name}</td>
//     <td>${productsArr[i].price}</td>
//     <td>${productsArr[i].category}</td>
//     <td>${productsArr[i].desc}</td>
//     <td>
//         <button class="btn btn-outline-warning">Update</button>
//     </td>
//     <td>
//         <button class="btn btn-outline-danger">Delete</button>
//     </td>
//   </tr>  
//     `
//   }
//   document.getElementById('tbody').innerHTML = trs
 
// }
// function checkProducts() {
//   if(localStorage.getItem("products") != null) {
//     products = JSON.parse(localStorage.getItem("products"))
//     displayProducts(products)
//   }
// }


const quotes = [
  {
    quote: "So many books, so little time..",
    author: "Frank Zappa"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind..",
    author: "Dr. Seuss"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams..",
    author: "Dr. Seuss"
  },
  {
    quote: "Be the change that you wish to see in the world..",
    author: " Mahatma Gandhi"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals..",
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire"
  },
  {
    quote: "Without music, life would be a mistake..",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do..",
    author: " Steve Jobs"
  }
];

const quoteBtn = document.querySelector("#new-quote");
const quoteText = document.querySelector("#quote");

quoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
}

