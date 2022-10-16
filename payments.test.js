describe('payments testers', function() {
    beforeEach(function() {
        paymentId = 0;
        billAmtInput.value = '100';
        tipAmtInput.value = '50';
    })
    // payments
    it('should return payment obj', function() {
                                            // testing
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
    
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$50');
        expect(curTdList[2].innerText).toEqual('50%');
      });
      
    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
      });
});