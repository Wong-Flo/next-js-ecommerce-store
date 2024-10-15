import 'server-only';

const products = [
  {
    id: 1,
    productName: 'illy espresso classic roast 250g',
    categoryType: 'coffeeBeans',
    price: 9.99,
    description:
      'A smooth, balanced espresso with a classic roast, perfect for traditional espresso lovers.',
  },
  {
    id: 2,
    productName: 'murnauer san pedro bio honduras 250g',
    categoryType: 'coffeeBeans',
    price: 12.49,
    description:
      'Organic coffee beans from Honduras, offering rich, fruity notes and a sustainable choice.',
  },
  {
    id: 3,
    productName: 'schwarzmond pluto 250g',
    categoryType: 'coffeeBeans',
    price: 8.99,
    description:
      'A bold and intense blend with dark chocolate notes, ideal for a robust espresso.',
  },
  {
    id: 4,
    productName: 'gimoka granbar beans 1kg',
    categoryType: 'coffeeBeans',
    price: 18.99,
    description:
      'A rich and full-bodied coffee, perfect for both espresso and lungo preparations.',
  },
  {
    id: 5,
    productName: 'fortezza espresso puro 250g',
    categoryType: 'coffeeBeans',
    price: 10.5,
    description:
      'A pure espresso blend with a strong aroma and smooth finish, ideal for espresso lovers.',
  },
  {
    id: 6,
    productName: 'ohavn espresso staerk 1kg',
    categoryType: 'coffeeBeans',
    price: 21.99,
    description:
      'A strong espresso blend, offering bold flavors and a long-lasting crema.',
  },
  {
    id: 7,
    productName: 'supremo turron 250g',
    categoryType: 'coffeeBeans',
    price: 11.75,
    description:
      'A medium roast with nutty and caramel notes, ideal for both espresso and filter coffee.',
  },
  {
    id: 8,
    productName: 'yocomo kickstarter 250g',
    categoryType: 'coffeeBeans',
    price: 10.99,
    description:
      'A lively and vibrant coffee blend to kickstart your day with energy and flavor.',
  },
  {
    id: 9,
    productName: 'dinzler espresso dark roast 250g',
    categoryType: 'coffeeBeans',
    price: 12.99,
    description:
      'A dark roast espresso blend with intense, smoky flavors and a rich crema.',
  },
  {
    id: 10,
    productName: 'wittmann bar classico 250g',
    categoryType: 'coffeeBeans',
    price: 13.49,
    description:
      'A classic espresso blend with balanced acidity and a smooth finish, perfect for any time of day.',
  },
  {
    id: 11,
    productName: 'speicherstadt caffe crema beans 250g',
    categoryType: 'coffeeBeans',
    price: 11.99,
    description:
      'A smooth and creamy blend, perfect for making a mild and velvety coffee crema.',
  },
  {
    id: 12,
    productName: 'mocambo brasilia beans 1kg',
    categoryType: 'coffeeBeans',
    price: 19.99,
    description:
      'Brazilian coffee beans with a rich, chocolaty flavor and smooth finish.',
  },
  {
    id: 13,
    productName: 'andraschko deja vu 250g',
    categoryType: 'coffeeBeans',
    price: 10.25,
    description:
      'A medium roast coffee with a well-balanced profile and hints of cocoa and citrus.',
  },
  {
    id: 14,
    productName: 'gorilla bar crema beans 1kg',
    categoryType: 'coffeeBeans',
    price: 22.5,
    description:
      'A barista-grade blend for a creamy, smooth coffee with rich flavor.',
  },
  {
    id: 16,
    productName: 'hario coffee syphon technica 3cup',
    categoryType: 'brewer',
    price: 45.99,
    description:
      'A vacuum coffee maker that brews 3 cups with precise control, delivering a clean, aromatic cup of coffee using a unique syphon method.',
  },
  {
    id: 17,
    productName: 'dripster brewjar 1.0L',
    categoryType: 'brewer',
    price: 29.99,
    description:
      'A cold brew coffee maker with a 1.0L capacity, ideal for making smooth, refreshing coffee with minimal bitterness.',
  },
  {
    id: 18,
    productName: 'bialetti espresso venus 2cup',
    categoryType: 'brewer',
    price: 39.5,
    description:
      'A stylish stainless-steel stovetop espresso maker, perfect for brewing 2 cups of rich, authentic Italian espresso.',
  },
  {
    id: 19,
    productName: 'chemex caraffe 6cup',
    categoryType: 'brewer',
    price: 42.99,
    description:
      'An iconic pour-over coffee maker with a glass carafe, capable of brewing up to 6 cups of clean, flavorful coffee using Chemex filters.',
  },
  {
    id: 20,
    productName: 'hario clear coffee dripper',
    categoryType: 'brewer',
    price: 25.75,
    description:
      'A clear V60-style coffee dripper for pour-over brewing, offering precision and control for a bright, balanced cup of coffee.',
  },
  {
    id: 21,
    productName: 'aeropress set',
    categoryType: 'brewer',
    price: 35.0,
    description:
      'A compact, versatile brewer for making smooth, full-flavored coffee or espresso quickly and easily, ideal for home or travel use.',
  },
  {
    id: 22,
    productName: 'motta tamper bubble 58mm',
    categoryType: 'accessory',
    price: 39.99,
    description:
      'A high-quality tamper by Motta featuring a 58mm flat base, perfect for professional espresso preparation. The bubble-shaped handle offers excellent grip and control for consistent tamping pressure.',
  },
  {
    id: 23,
    productName: 'joefrex espresso leveler',
    categoryType: 'accessory',
    price: 45.99,
    description:
      'This precision espresso leveler by JoeFrex ensures perfectly even distribution of coffee grounds before tamping. Adjustable height ensures a consistently flat surface, improving shot quality.',
  },
  {
    id: 24,
    productName: 'motta leveling tool 58mm',
    categoryType: 'accessory',
    price: 34.99,
    description:
      'Motta’s 58mm leveling tool is designed to distribute coffee grounds evenly in the portafilter before tamping, improving consistency for every espresso shot.',
  },
  {
    id: 25,
    productName: 'broste copenhagen espresso cup nordic sea',
    categoryType: 'accessory',
    price: 14.99,
    description:
      'A beautifully crafted espresso cup from Broste Copenhagen’s Nordic Sea collection. Its elegant design and artisanal finish bring Scandinavian charm to your espresso experience.',
  },
  {
    id: 26,
    productName: 'motta box 105mm',
    categoryType: 'accessory',
    price: 22.99,
    description:
      'A stainless steel knock box by Motta, 105mm in diameter, perfect for disposing of used coffee pucks. Durable and easy to clean, it’s ideal for home or professional use.',
  },
  {
    id: 27,
    productName: 'motta milk jug',
    categoryType: 'accessory',
    price: 29.99,
    description:
      'The Motta milk jug is a barista favorite for frothing and steaming milk. Made from high-grade stainless steel, it’s perfect for creating silky microfoam for lattes and cappuccinos.',
  },
  {
    id: 28,
    productName: 'concept tamping matt black',
    categoryType: 'accessory',
    price: 19.99,
    description:
      'A durable tamping matt by Concept, designed to protect your counter tops during espresso preparation. Its black silicone surface offers a non-slip base for tamping, ensuring clean and consistent shots.',
  },
  {
    id: 29,
    productName: 'leopold vienna coffee grinder bologna',
    categoryType: 'grinder',
    price: 59.99,
    description:
      'The Leopold Vienna Coffee Grinder Bologna offers a stylish and efficient way to grind coffee beans. Featuring a high-quality ceramic burr mechanism, it ensures even grind sizes for all brewing methods.',
  },
  {
    id: 30,
    productName: 'eureka baby glass',
    categoryType: 'grinder',
    price: 129.99,
    description:
      'The Eureka Baby Glass grinder is a compact and powerful electric coffee grinder. With stepless grind adjustment and high-quality steel burrs, it’s perfect for precise espresso or filter coffee preparation.',
  },
  {
    id: 31,
    productName: 'rhinowares hand grinder adapter',
    categoryType: 'grinder',
    price: 14.99,
    description:
      'An adapter designed specifically for the Rhinowares Hand Grinder, allowing you to use the grinder with Aeropress or other compatible brewing devices. Compact and lightweight, it’s perfect for travel.',
  },
  {
    id: 32,
    productName: 'zassenhaus coffee grinder barista',
    categoryType: 'grinder',
    price: 89.99,
    description:
      'The Zassenhaus Barista Coffee Grinder features a precision stainless steel burr, delivering consistently fine or coarse grounds. Its vintage design and sturdy build make it a favorite for manual brewing enthusiasts.',
  },
  {
    id: 33,
    productName: 'beem hand grinder 40g',
    categoryType: 'grinder',
    price: 29.99,
    description:
      'The Beem Hand Grinder holds up to 40g of coffee and features a durable stainless steel body with adjustable grind settings. Its portable size and easy-to-use crank make it ideal for home or travel.',
  },
  {
    id: 34,
    productName: 'zeller grinder black',
    categoryType: 'grinder',
    price: 24.99,
    description:
      'Zeller’s black manual coffee grinder combines sleek design with function. It features a ceramic burr for precise grinding and an adjustable mechanism to suit various brewing methods from espresso to French press.',
  },
  {
    id: 35,
    productName: 'hario ceramic coffee mill mini slim',
    categoryType: 'grinder',
    price: 39.99,
    description:
      'The Hario Ceramic Coffee Mill Mini Slim is a compact, hand-operated grinder with ceramic burrs for consistent grind size. Its slim, portable design makes it perfect for both home use and travel brewing.',
  },
];
export function getProducts() {
  return products;
}
