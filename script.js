console.log(dayjs())
document.getElementById("time").innerHTML = `
    <h3>${dayjs().toISOString()}</h3>
`

const userTimezone = dayjs.tz.guess();
console.log("User's Timezone: ");
document.getElementById("timezone").innerHTML = `
    <h3>${dayjs.tz.guess().toISOString()}</h3>
`


