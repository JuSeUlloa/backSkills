import Category from "./category";

class Bill {
   public _id?: string;
   public nameBill: string;
   public descriptionBill: string;
   public valueBill: number;
   public dateBill: Date;
   public codCategory: Category;

   constructor(name: string, desc: string, val: number, date: Date, cat: Category) {
      this.nameBill = name;
      this.descriptionBill = desc;
      this.valueBill = val;
      this.dateBill = date;
      this.codCategory = cat;
   }
}

export default Bill;