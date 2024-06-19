class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }
}

var items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6)
];

function update_quality() {
  items.forEach(item => {
    updateItemSellIn(item);
    updateItemQuality(item);
  });
}

function updateItemQuality(item) {
  if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
    decreaseQuality(item);
  } else {
    increaseQuality(item);
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sell_in < 11) increaseQuality(item);
      if (item.sell_in < 6) increaseQuality(item);
    }
  }

  if (item.sell_in < 0) {
    if (item.name !== 'Aged Brie') {
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = 0;
      } else {
        decreaseQuality(item);
      }
    } else {
      increaseQuality(item);
    }
  }
}

function updateItemSellIn(item) {
  if (item.name !== 'Sulfuras, Hand of Ragnaros') {
    item.sell_in -= 1;
  }
}

function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality += 1;
  }
}

function decreaseQuality(item) {
  if (item.name !== 'Sulfuras, Hand of Ragnaros' && item.quality > 0) {
    item.quality -= 1;
  }
}