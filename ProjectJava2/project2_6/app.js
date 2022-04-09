function toCelsius(fahrenheit)
{
    let value = (fahrenheit - 32)*5/9
    return value.toFixed(2)+" ºC"
}

function toFahrenheit(celsius)
{
    let value = (celsius * 9)/5+32
    return value.toFixed(2)+" ºF"
}

function toCelsiusPrograme(value)
{
    alert(toCelsius(value))
}

function toFahrenheitPrograme(value)
{
    alert(toFahrenheit(value))
}