let statesFile = 'https://d3js.org/us-10m.v1.json'
let gasPriceStateFile = 'static/data/gasPriceState.json'

let statesData
let gasPriceData

let canvas = d3.select('#canvas')
let tooltip = d3.select('#tooltip')

let drawMap = () => {

    canvas.selectAll('path')
        .data(statesData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('class', 'states')
        .attr('fill', (statesDataItem) => {
            let id = statesDataItem['id']
            let state = gasPriceData.find((item) => {
                return item['id'] === id
            })
            let gasPriceAverage = (parseFloat(state['gasoline']) + parseFloat(state['midGrade']) + parseFloat(state['premium']) + parseFloat(state['diesel'])) / 4
            console.log(gasPriceAverage)

            let regular = parseFloat(state['gasoline'])
            if (gasPriceAverage >= 3.260 || gasPriceAverage <= 2.374) {
                return 'tomato'
            } else if (gasPriceAverage >= 2.373 || gasPriceAverage <= 2.206) {
                return 'orange'
            } else if (gasPriceAverage >= 2.205 || gasPriceAverage <= 2.104) {
                return 'green'
            } else if (gasPriceAverage >= 2.103 || gasPriceAverage <= 1.994) {
                return 'limegreen'
            } else if (gasPriceAverage >= 1.993 || gasPriceAverage <= 1.857) {
                return 'purple'
            }

        })
        .attr('data-fips', (statesDataItem) => {
            return statesDataItem['id']
        })
        .attr('data-gasPrices', (statesDataItem) => {
            let id = statesDataItem['id']
            let state = gasPriceData.find((item) => {
                return item['id'] === id
            })
        })
        .on('mouseover', (statesDataItem) => {
            tooltip.transition()
                .style('visibility', 'visible')

            let id = statesDataItem['id']
            let state = gasPriceData.find((item) => {
                return item['id'] === id
            })
            tooltip.text("Gasoline Price: $" + state['gasoline'] +
                " Mid-Grade Price: $" + state['midGrade'] +
                " Premium Price: $" + state['premium'] +
                " Diesel Price: $" + state['diesel'])
        })
        .on('mouseout', (statesDataItem) => {
            tooltip.transition()
                .style('visibility', 'hidden')
        })
}

d3.json(statesFile).then(
    (data, error) => {
        if (error) {
            console.log(error)
        } else {
            // statesData = data
            statesData = topojson.feature(data, data.objects.states).features
            console.log(statesData)


            d3.json(gasPriceStateFile).then(
                (data, error) => {
                    if (error) {
                        console.log(error)
                    } else {
                        gasPriceData = data
                        console.log('Gas Price Data')
                        console.log(gasPriceData)
                        drawMap()
                    }
                }
            )

        }
    }
)