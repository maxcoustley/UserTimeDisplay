console.log(dayjs())
document.getElementById("time").innerHTML = `
    <h1>Time: ${dayjs().format('HH:mm:ss')}</h1>
`
dayjs.extend(dayjs_plugin_timezone);
dayjs.extend(dayjs_plugin_utc);

document.getElementById("timezone").innerHTML = `
    <h3>Timezone: ${dayjs.tz.guess()}</h3>
`

document.getElementById("date").innerHTML = `
    <h3>Date: ${dayjs().format('YYYY-MM-DD')}</h3>
`


