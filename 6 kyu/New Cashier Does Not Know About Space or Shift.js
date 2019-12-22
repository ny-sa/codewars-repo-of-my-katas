//Some new cashiers started to work at your restaurant.

//They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

//All the orders they create look something like this:

//"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

//The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

//Their preference is to get the orders as a nice clean string with spaces and capitals like so:

//"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

//The kitchen staff expect the items to be in the same order as they appear in the menu.

//The menu items are fairly simple, there is no overlap in the names of the items:
//1. Burger
//2. Fries
//3. Chicken
//4. Pizza
//5. Sandwich
//6. Onionrings
//7. Milkshake
//8. Coke

//My solution
function getOrder(input) {
    let ledgible = '', menu = { burg:'Burger', frie:'Fries', chic:'Chicken', pizz:'Pizza', sand:'Sandwich', onio:'Onionrings', milk:'Milkshake' ,
        coke:'Coke' };
    for (let chars in menu)
        for (let i = 0; i < input.length; i++)  //should be i < input.length - 4 instead
            if (input.substring(i, i + 4) === chars)    //add item when the 4-char string matches the selected key 'chars'
                ledgible += menu[chars] + ' '; 
    return ledgible.trim();
}

//'Best Practices' solution
const MENU = {
    Burger:     1, 
    Fries:      2,
    Chicken:    3,
    Pizza:      4,
    Sandwich:   5,
    Onionrings: 6,
    Milkshake:  7,
    Coke:       8,
  };
  const REG_CMD = new RegExp(Object.keys(MENU).join('|'), 'gi');
  
  function getOrder(cmd) {  //regex match with MENU, map to first char capitalized, sort to order in MENU, join into string
    return cmd.match(REG_CMD)
              .map(s=>s.charAt(0).toUpperCase()+s.slice(1))
              .sort((x,y)=>MENU[x]-MENU[y])
              .join(' ');
  }