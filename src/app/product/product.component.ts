import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.89,3.5,"我正在努力学习angualar4的内容，希望能坚持下去",["电子书"]),
      new Product(2,"第二个商品",2.89,1.5,"我正在努力学习angualar4的内容，希望能坚持下去",["小说"]),
      new Product(3,"第三个商品",4.89,4.5,"我正在努力学习angualar4的内容，希望能坚持下去",["文学"]),
      new Product(4,"第四个商品",5.89,2.5,"我正在努力学习angualar4的内容，希望能坚持下去",["生物"]),
      new Product(5,"第五个商品",6.89,1.5,"我正在努力学习angualar4的内容，希望能坚持下去",["物理"]),
      new Product(6,"第六个商品",7.89,3.5,"我正在努力学习angualar4的内容，希望能坚持下去",["高数"]),
    ]
  }

}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

