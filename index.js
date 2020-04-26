var fs = require('fs')
var dir = []

//Get args
process.argv.forEach((val, index) => {
    if(index >= 2){
        dir.push(val)
        console.log(`${index}: ${val}`)
    }
})

var file_array_content = []
var valid_answers = []
var invalid_answers = []
var key_companie = []

dir.forEach(file_dir => {
    file_array_content.push(fs.readFileSync(process.cwd() + file_dir, 'utf8').split("\n"))
})

var companies_relation = []

//Separate every company survey into array and discard invalid answers
file_array_content.forEach(company_data => {
    size = company_data.length

    for(i = 0 ; i < size ; i ++){
        if(i > 0){
            aux = company_data[i].split(" ")

            if(parseInt(aux[1]) >= 0 && aux[1] <= 4){
                companies_relation[company_data[0]].push(aux)
                valid_answers[company_data[0]]++
            } else
                invalid_answers[company_data[0]]++

        }else{
            companies_relation[company_data[0]] = []
            valid_answers[company_data[0]] = 0
            invalid_answers[company_data[0]] = 0
            key_companie.push(company_data[0])
        }
    }
})

console.log(valid_answers)
console.log(invalid_answers)
console.log(companies_relation)

