type Info={
  name:string
}

function Person<T extends Info>(test:T){
  return test.name
}

const p1=Person({name:"czx"})
const p2=Person({})

export {}