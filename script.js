const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./assets/air.png",
        },
        {
          code: "darkblue",
          img: "./assets/air2.png",
        },
      ],
      desc:"Experience the ultimate in athletic performance and style with our Nike shoes. These iconic sneakers are designed to keep you at the top of your game, whether you're on the court or hitting the streets",
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./assets/jordan.png",
        },
        {
          code: "green",
          img: "./assets/jordan2.png",
        },
      ],
      desc:" Elevate your sneaker game with Jordan, a legendary brand inspired by basketball legend Michael Jordan.",
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./assets/blazer.png",
        },
        {
          code: "green",
          img: "./assets/blazer2.png",
        },
      ],
      desc:"Make a statement with our Blazer shoes. These classic leather dress shoes are the epitome of sophistication and are ideal for formal occasions or adding a touch of elegance to your everyday look",
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./assets/crater.png",
        },
        {
          code: "lightgray",
          img: "./assets/crater2.png",
        },
      ],
      desc:"Go green with our Crater sneakers. These eco-friendly shoes are crafted from recycled materials, offering a sustainable and stylish choice for those who care about the environment",
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./assets/hippie.png",
        },
        {
          code: "black",
          img: "./assets/hippie2.png",
        },
      ],
      desc:"Embrace a laid-back, bohemian vibe with our Hippie shoes. These comfortable and stylish sandals are perfect for those who appreciate a relaxed, carefree lifestyle",
    },
  ];

  let choosenProduct = products[0]

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
    const currentProductDesc = document.querySelector(".productDesc");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{

        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change the text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductDesc.textContent = choosenProduct.desc;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assigning new color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
  payment.style.display = "flex";
})

close.addEventListener("click", ()=>{
  payment.style.display = "none";
})