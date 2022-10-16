describe("helper functions test", function() {

    it('should calculate tip percent', function() {
        expect(calculateTipPercent(100, 15)).toEqual(15);
      });
    
      it('should append a Td', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        appendTd(newTr, 'test2');
        expect(newTr.children.length).toEqual(2);
      });
});