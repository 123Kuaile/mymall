export function antiShake(fun, delazy) {
  //防抖函数
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);  //改变内部fun的this指向
    }, delazy);
  };
}