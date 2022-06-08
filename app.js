const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// selecting the menu container and the btns container

const menuContainer = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//  when page load we want all the menu to display

window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayBtn();
});

// we dont want to hardcode the menu in html so we will set a  global function for that

function displayMenu(arr) {
  let displayMenu = arr.map(function (meal) {
    return `  <article class="menu-item">
<img src=${meal.img} alt="menu item" class="photo" />
<div class="item-info">
  <header>
    <h4>${meal.title}</h4>
    <h4 class="price">$${meal.price}</h4>
  </header>
  <p class="item-text">
  ${meal.desc}
  </p>
</div>
</article>`;
  });
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
}

// we want a function to displat the btns depend on the arrays or data we get so we will depend on the categories that we have and display btns as much as needed

function displayBtn() {
  let btnCategory = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const btns = btnCategory
    .map(function (category) {
      return ` <button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = btns;

  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const meal = e.currentTarget.dataset.id;
      const mealCategory = menu.filter(function (mealItem) {
        if (mealItem.category === meal) {
          return mealItem;
        }
      });
      if (meal === "all") {
        displayMenu(menu);
      } else {
        displayMenu(mealCategory);
      }
    });
  });
}

// ======summary==========
// we use map,filter,reduce,
// in window event we want to display all so we actually use map and inside that map function we add our html and the values taken from the array ,then we join all the values by using .join("") and then we add the inner html to our section center

// related to btns we want to add them here instead of html ,but if we use map we will have 10 btns ,so we used reduce method with function and most important is in this reduce we have 2 parameters (values,item)and the current and the general one so we want to make sure always return the values (also we create the array of "all" to create that btn as well)and to filter them we want to set an if statement as if value is not equal to the category we want to push it into the new array and then we set a map function on our new array to display them all using .join as well
