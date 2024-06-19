describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("should decrease quality twice as fast after sell by date", function() {
    items = [ new Item("foo", -1, 5) ];
    update_quality();
    expect(items[0].quality).toEqual(3);
  });
  
  it("should not decrease quality below 0", function() {
    items = [ new Item("foo", 5, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase quality of 'Backstage passes' by 2 when there are 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(22);
  });
  
  it("should increase quality of 'Backstage passes' by 3 when there are 5 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(23);
  });

}); 