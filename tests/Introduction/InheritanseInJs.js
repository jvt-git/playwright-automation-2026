class Animal{
    parentCategory(){
        console.log("This is parent anical category");
    }
}

// child of Animal class
class Cat extends Animal {
childCategory(){
    console.log("This is cat");
}
}

let cat = new Cat()
cat.parentCategory();
cat.childCategory();