function atualizarContador() {
    const dataInicio = new Date('2024-06-16T00:00:00'); // 16 de junho de 2024
    const agora = new Date();
    const diferenca = agora - dataInicio; // diferença em milissegundos

    if (diferenca < 0) {
        document.getElementById('contador').textContent = 'Ainda não começou!';
        return;
    }

    const segundosTotais = Math.floor(diferenca / 1000);
    const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
    const meses = Math.floor((segundosTotais % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
    const dias = Math.floor((segundosTotais % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
    const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;

    document.getElementById('contador').textContent =
        `${anos} ano, ${meses} mês, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();