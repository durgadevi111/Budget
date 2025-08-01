let budget ={
    Income:0,
    Expenses:[],
};
function addIncome(amount){
    budget.Income += amount;
}
function addExpense(amount){
    budget.Expenses.push(amount);
}
function setamount(){
    addIncome(Number(document.getElementById("amo").value));
    (document.getElementById("amo")).value="";
}
function add()
{
    addExpense(Number(document.getElementById("rem").value));
    (document.getElementById("rem")).value="";
}
function getRemainingBudget()
{
    let total = budget.Income;

    let totalExpenses = budget.Expenses.reduce((acc,x)=>{
        return acc + x;
    })
    console.log("Remaining Budget : "+(total-totalExpenses));
    document.getElementById("answer").innerHTML = `${total-totalExpenses}`;
}



const products = [
    { name:"laptop", price:1200 },
    { name:"mobile", price:800 },
    { name:'Tablet', price:600 },
    { name:'Monitor', price:300 }
]

var {max:max1,item:item1} = products.reduce(({max,item},x)=>{
    if(x.price>max)
    {
        return {max:x.price,item:x.name};
    }
    return {max,item}
},{max:0,item:''})
console.log(max1,item1)

