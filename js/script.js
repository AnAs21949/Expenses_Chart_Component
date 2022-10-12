// const stat = [
//     {
//         "day": "mon",
//         "amount": 17.45,
//         "id" : 'hsl(10, 79%, 65%)'
//     },
//     {
//         "day": "tue",
//         "amount": 34.91,
//         "id" : 'hsl(10, 79%, 65%)'
//     },
//     {
//         "day": "wed",
//         "amount": 52.36,
//         "id" : 'hsl(186, 34%, 60%)'
//     },
//     {
//         "day": "thu",
//         "amount": 31.07,
//         "id" : 'hsl(10, 79%, 65%)'
//     },
//     {
//         "day": "fri",
//         "amount": 23.39,
//         "id" : 'hsl(10, 79%, 65%)'
//     },
//     {
//         "day": "sat",
//         "amount": 43.28,
//         "id" : 'hsl(10, 79%, 65%)'
//     },
//     {
//         "day": "sun",
//         "amount": 25.48,
//         "id" : 'hsl(10, 79%, 65%)'
//     }
// ]

// const chartContainer = document.querySelector(".charts");


// function displayCharts(){
//     charts = stat.map(function(item){
//         return`<div class="day">
//         <div class="chart" style="height: calc(${item.amount}vh/2);background-color:${item.id};">
//             <span class="hover">$${item.amount}</span>
//         </div>
//         <small id="day">${item.day}</small>
//         </div>`
//     }
//     ).join("")
//     console.log(charts)
//     chartContainer.innerHTML = charts;

// }
// displayCharts()


const data = fetch("/data.json")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        return data;
    }).catch(error => console.log(error))
    const dataArray = []
    dataArray.push(data)
    console.log(dataArray)
    let maxValueOfY = Math.max(...arrayToSearchIn.map(o => o.amount), 0);
    dataArray.filter(function(item){
        if(item.amount === maxValueOfY){
            console.log(item)
        }
    })

let chartsContainer = document.querySelector(".charts");
data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add("day");
        const height = item.amount / 7;
        const money = item.amount;
        let value = ''
        //Here i think we can use filter and use const maxValueOfY = Math.max(...arrayToSearchIn.map(o => o.y), 0);//
        //to make choosing the biggest value automatically //
        if (item.day == "wed") {
            value=`<div class="chart active" style="height:${height}em">
                <span class="hover">$56.76</span>
            </div>`
        } else {
            value=`<div class="chart" style="height:${height}em">
            <span class="hover">$${money}</span>
            </div>`;
        }

        chart.innerHTML = `
        ${value}
        <small id="day">${item.day}</small>`;

        chartsContainer.appendChild(chart);

    });
})
