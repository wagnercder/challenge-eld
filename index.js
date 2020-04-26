var fs = require('fs')
var dir = []

//Get args
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)

    if(index >= 2)
        dir.push(val)
})

var file_array_content = []
var survey_relation = []

dir.forEach(file_dir => {
    file_array_content.push(fs.readFileSync(process.cwd() + file_dir, 'utf8').split("\n"))
})

console.log(file_array_content[0])

var companies_relation = []

file_array_content.forEach(company_data => {
    size = company_data.length

    for(i = 0 ; i < size ; i ++){
        if(i > 0){
            aux = company_data[i].split(" ")

            if(parseInt(aux[1]) >= 0 && aux[1] <= 4)
                companies_relation[company_data[0]].push(aux)

        }else{
            companies_relation[company_data[0]] = []
        }
    }
})

console.log(companies_relation)