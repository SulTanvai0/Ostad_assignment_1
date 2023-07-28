const customerShoppingBill = 139 ; 

const discountCalculator = (amount) => {

    if (amount <= 50) {
    return "No  discount is applied";
  } 
  //----> calculating for 5 % discount <------ | 
  else if (amount >= 50 && amount <= 100) {
    const discountedBill = (( amount / 100) * 5 ).toFixed(2);
    // console.log(discountedBill)
    const afterDiscountBill = `your discounted bill after 5% = $ ${discountedBill}`;
    const totalBill = amount - discountedBill;
    const bill = `${afterDiscountBill}. your total bill is $ ${totalBill}.`;
    return  bill;
  }
   //----> calculating for 10 % discount <------ | 
  else if (amount >= 100 && amount <= 200) {
    const discountedBill = (( amount / 100) * 10 ).toFixed(2);
    // console.log(discountedBill)
    const afterDiscountBill = `your discounted bill after 5% = $ ${discountedBill}`;
    const totalBill = amount - discountedBill;
    const bill = ` ${afterDiscountBill}. your total bill is $ ${totalBill}.`;

    return  bill;
  }
   //----> calculating for 15 % discount <------ | 
  else if (amount >= 200 ) {
    const discountedBill = (( amount / 100) * 15 ).toFixed(2);
    
    const afterDiscountBill = `your discounted bill after 5% = $ ${discountedBill}`;
    const totalBill = amount - discountedBill;
    const bill = `${afterDiscountBill}. your total bill is $ ${totalBill}. `;
    return  bill;
  }
};
console.log(discountCalculator(customerShoppingBill));
