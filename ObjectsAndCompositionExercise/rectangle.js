function rectangle(w, h, c){
    class Rectangle{
        constructor(w, h, c){
            this.width = w;
            this.height = h;
            this.color = c[0].toUpperCase() + c.slice(1);
        }
        calcArea(){
            return this.width * this.height;
        }
    }

    return new Rectangle(w, h, c)
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
