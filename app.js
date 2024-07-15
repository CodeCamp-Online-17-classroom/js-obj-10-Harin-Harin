let obj = {};
let fruit = prompt("กรุณาใส่ชื่อผลไม้ หรือพิมพ์ stop");

while(fruit.toLowerCase() !== 'stop'){
let num = +prompt(`กรุณาใส่ value ของ ${fruit}`);
if( num > 1){
    fruit = fruit + 's'
  }
obj[fruit] = num;
fruit = prompt("กรุณาใส่ชื่อผลไม้ หรือพิมพ์ stop");
}

console.log('Object:',obj);

for (let fruit in obj) {
  alert(`ผลไม้: ${fruit}, จำนวน: ${obj[fruit]} หน่วย`);
}
