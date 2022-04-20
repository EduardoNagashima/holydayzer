import express from "express";

const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get("/holidays", (req, res)=>{
      const feriados = holidays.map( el=>{
        const {date, name} = el;
        return (`<p> data: ${date}  -  nome: ${name} </p>`)
      })

    res.send(`${feriados}`);
})

app.get("/is-today-holiday", (req,res)=>{
    let resposta = 'Não, hoje não é feriado';

    const hoje = new Date();

    const hojeStr = hoje.toLocaleDateString();

    holidays.filter(el=> {
        if(el.date === hojeStr){
            resposta = "Sim, hoje é nome-do-feriado";
        }
    })

    res.send(`${resposta}`)
})

for (let i = 1; i <= 12; i ++){
    app.get(`/holidays/${i}`, (req,res)=>{
    
        const feriados = holidays.map(el=>{
            const {date, name} = el;

            const mes = date.split("/");

            if (mes[0] == i){
                return (`<p> data: ${date}  -  nome: ${name} </p>`)
            }

          })

        res.send(`${feriados}`);
    })
}

app.listen(4000);