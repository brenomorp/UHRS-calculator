function calculate() {
    var money = document.getElementById('money')
    var time = document.getElementById('time')
    var res = document.getElementById('res')


    if (money.value.length == 0 || time.value.length == 0) {
        window.alert('Error')
    } else {
        var n1 = 3600 / Number(time.value)
        var MoneyReplace = parseFloat(money.value.replace(",", "."))
        var n2 = n1 * MoneyReplace


        res.innerHTML = `
<p><strong>${n1.toFixed(1)}</strong> hits per hour</p>
<p><strong>$${n2.toFixed(2)}</strong> per hour</p>
`
    }
}
