describe("helper functions test", function() {
  let newTr = null;
    it('should calculate tip percent', function() {
        expect(calculateTipPercent(100, 15)).toEqual(15);
      });
    
      it('should append a Td', function() {
        newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        appendTd(newTr, 'test2');
        expect(newTr.children.length).toEqual(2);
      });

      // it('should delete table rows and update tips and servers', function() {
      // })

  afterEach(function() {
    if(newTr) newTr.remove();
  })
});