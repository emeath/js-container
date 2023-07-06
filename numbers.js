const calculaPrecoPorHora = (salario, horasTrabalhadasMes, flag=0) => {
    const salarioPorHora = salario / horasTrabalhadasMes;
    switch (flag) {
        case 0:
            return salarioPorHora;
    
        case 1:
            return salarioPorHora.toFixed(2);

        case 2:
            return salarioPorHora.toLocaleString(
                                    "pt-BR", 
                                    {
                                        style: "currency",
                                        currency: "BRL"
                                    });

        default:
            break;
    }
    
    return salarioPorHora;
}

let horasTrabalhadasPorDia = 8;
let diasTrabalhadosNaSemana = 5;
let qtdSemanasMes = 4;
let salario = 10543;

let salarioHora = calculaPrecoPorHora(salario, (horasTrabalhadasPorDia
                                                    * diasTrabalhadosNaSemana
                                                    * qtdSemanasMes));
console.log(salarioHora) // 65.89375



salarioHora = calculaPrecoPorHora(
                salario, 
                (horasTrabalhadasPorDia * diasTrabalhadosNaSemana * qtdSemanasMes),
                1);

console.log(salarioHora); // 65.89



salarioHora = calculaPrecoPorHora(
                salario, 
                (horasTrabalhadasPorDia * diasTrabalhadosNaSemana * qtdSemanasMes),
                2);

console.log(salarioHora) // R$ 62,89


