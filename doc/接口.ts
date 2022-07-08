

interface Eatable{
    eat():void
}

interface Speakable{
    name:string,
    speak():void
}


// 接口可用同名，类型会自动合并
interface Speakable{
    speak():void
}

class Person implements Speakable,Eatable{
    name: string
    speak(): void {
        throw new Error("Method not implemented.")
    }
    eat(): void {
        throw new Error("Method not implemented.")
    }
    
}

// 1、任意属性
interface Person2{
    readonly id:number,
    name:string,
    [key:string]:any   //可用定义任意属性
}

let p:Person2 = {
    id:1,
    name:"hhhhh",
    age:14,
    home:'dd',
    11:7890  //可以经过转换为字符串
}


//2、接口的继承
interface Speakable2{
    speak():void
}

interface SpeakChinese extends Speakable2{
    speakchinese():void
}

class ChineseMan implements SpeakChinese{
    speakchinese(): void {
        throw new Error("Method not implemented.")
    }
    speak(): void {
        throw new Error("Method not implemented.")
    }

}


// 3、函数类型接口
interface Discount{
    (price:number):number
}
const discount:Discount = (price:number):number=>{
    return price*8
}

// 4、可索引接口
// 对象和数组进行约束
interface User{
    [xx:number]:string
}
let user:User={
    0:'0',10:'10'
}
let arr:User=['22','34']



