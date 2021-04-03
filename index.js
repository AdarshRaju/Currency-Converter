$(document).ready(function() {

async function currencies() {
 
        const data = await fetch('https://free.currconv.com/api/v7/currencies?apiKey=ba9bedef9a06aefb049c')
        const json = await data.json()
        const list = await Object.keys(json.results)
        return await list.forEach(item => { $('#new-currency-unit').append(`<option value=${item}>${item}</option>`)
        $('#original-currency-unit').append(`<option value=${item}>${item}</option>`)
        })    
}
(async ()=> {await currencies()})()

$('button').click(function(){
    var searchurl = `https://free.currconv.com/api/v7/convert?apiKey=ba9bedef9a06aefb049c&q=${$('#original-currency-unit').val()}_${$('#new-currency-unit').val()}&compact=y` 
    async function convert() {
 
        const data = await fetch(searchurl)
        const json = await data.json()
        const exchange = Object.values(json)[0].val
        $('#exchange-rate').text(Object.values(json)[0].val)
        const ans = $('#original-currency-amount').val() * exchange
        $('#output-text').text(ans)
        $('#output-text').addClass('converted')
        return json
}
    (async ()=> {await convert()})()
})

})
