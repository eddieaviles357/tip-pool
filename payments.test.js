describe('payments testers', function() {
    beforeEach(function() {
        paymentId = 0;
        billAmtInput.value = '100';
        tipAmtInput.value = '50';
    })
    // payments
    it('should return payment obj', function() {
      let { billAmt, tipAmt, tipPercent } = createCurPayment();
      expect(billAmt).toEqual('100');
      expect(tipAmt).toEqual('50');
      expect(tipPercent).toEqual(50);
    });

    it('should update #paymentTable Bill, Tip and Tip percent', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        // testing
        appendPaymentTable(curPayment);
    
        let tds = document.querySelectorAll('#paymentTable tbody tr td');
        expect(tds.length).toEqual(4);
        expect(tds[0].innerText).toEqual('$100');
        expect(tds[1].innerText).toEqual('$50');
        expect(tds[2].innerText).toEqual('50%');
        expect(tds[3].innerText).toEqual('X');
      });
      
    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        if(paymentTbody.children[0]) paymentTbody.children[0].remove();
        if(serverTbody.children[0]) serverTbody.children[0].remove();
        delete allPayments['payment1'];
        delete allServers['server1'];
      });
});