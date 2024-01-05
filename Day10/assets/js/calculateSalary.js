export default function calculateNetsalary(Salary) {
    let amount = Salary * 0.3;
    let netsalary = Salary - amount;
    return netsalary;
}