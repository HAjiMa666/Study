class Person<T1,T2,T3>{
  n1:T1
  n2:T2
  n3:T3
  constructor(n1:T1,n2:T2,n3:T3){
    this.n1=n1;
    this.n2=n2;
    this.n3=n3;
  } 
}

//:这边是因为new 实际上也是调用了Person类中的constructor函数
const p1=new Person("czx",123,2222);

export {}