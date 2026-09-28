const filterItems = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40}
]

if (filterItems.filter(item => item.name === "jon").length > 0) {
    console.log("Found jon");
}