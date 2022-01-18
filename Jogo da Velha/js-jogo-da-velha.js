$(function () {

    "use string";

    window.JV = window.JV || {};

    //Variáveis
    var resultj1 = 0;
    var resultj2 = 0;
    var count = 1;
    var q1length, q2length, q3length, q4length, q5length, q6length, q7length, q8length, q9length;

    JV.CarregarComandos = function () {
        $(document).ready(function () {
            JV.ModalAddNomes();
            $(document).on("click", ".quadrado", function () { JV.AcaoClicar(this.id) });
            $(document).on("click", "#limpar-jogo", function () { JV.LimparJogo() });
            $(document).on("click", "#add-nomes", function () { JV.ModalAddNomes() });
            $(document).on("click", "#zerar-placar", function () { JV.ZerarPlacar() });
        });
    };

    // Funções
    JV.AcaoClicar = function (idQuadrado) {
        if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
            if ($(`#${idQuadrado}`).children().length == 0) {
                $(`#${idQuadrado}`).append("<img class='circle' src='img-circulo.png'>");
                count++;
                JV.RegraDoJogo();
            }
        }
        else if (count === 2 || count === 4 || count === 6 || count === 8) {
            if ($(`#${idQuadrado}`).children().length == 0) {
                $(`#${idQuadrado}`).append("<img class='x' src='img-x.png'>");
                count++;
                JV.RegraDoJogo();
            }
        }
    };

    JV.ModalAddNomes = function () {
        const { value: formValues } = swal.fire({
            title: 'Incluir nome de jogadores',
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="Nome jogador 1">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Nome jogador 2">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    $("#nome-j1").text($('#swal-input1').val()),
                    $("#nome-j2").text($('#swal-input2').val())
                ]
            }
        });
    };

    JV.LimparJogo = function () {
        for (var i = 1; i <= 9; i++) {
            $("#q-" + i).empty();
        }
        count = 1;
    };

    JV.ZerarPlacar = function () {
        resultj1 = 0;
        resultj2 = 0;
        $("#result-j1").text(resultj1);
        $("#result-j2").text(resultj2);
        JV.LimparJogo();
    };

    JV.ModalResultado = function (result) {
        var nomej1 = $("#nome-j1").text();
        var nomej2 = $("#nome-j2").text();

        count = 1;
        if (result === "j1") {
            resultj1++;
            Swal.fire(
                'Parabens!',
                `O Jogador 1 <b>${nomej1}</b> venceu o jogo`,
                'success'
            ).then(function () { JV.LimparJogo(); })
            $("#result-j1").text(resultj1);
        }
        else if (result === "j2") {
            resultj2++;
            Swal.fire(
                'Parabens!',
                `O Jogador 2 <b>${nomej2}</b> venceu o jogo`,
                'success'
            ).then(function () { JV.LimparJogo(); })
            $("#result-j2").text(resultj2);
        }
        else {
            Swal.fire(
                'Jogo difícil!',
                'Empate',
                'info'
            ).then(function () { JV.LimparJogo(); })
        }

    };

    JV.BuscarLengthQ = function () {
        q1length = $("#q-1").children().length;
        q2length = $("#q-2").children().length;
        q3length = $("#q-3").children().length;
        q4length = $("#q-4").children().length;
        q5length = $("#q-5").children().length;
        q6length = $("#q-6").children().length;
        q7length = $("#q-7").children().length;
        q8length = $("#q-8").children().length;
        q9length = $("#q-9").children().length;
    };

    JV.RegraDoJogo = function () {
        if (count >= 5) {
            JV.BuscarLengthQ();
            var jogador1 = "j1";
            var jogador2 = "j2";
            //1-2-3 horizontal
            if (q1length !== 0 && q2length !== 0 && q3length !== 0) {
                var q1class = $("#q-1").children()[0].className;
                var q2class = $("#q-2").children()[0].className;
                var q3class = $("#q-3").children()[0].className;
                if (q1class == "circle" && q2class == "circle" && q3class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q1class == "x" && q2class == "x" && q3class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //4-5-6 horizontal
            if (q4length !== 0 && q5length !== 0 && q6length !== 0) {
                var q4class = $("#q-4").children()[0].className;
                var q5class = $("#q-5").children()[0].className;
                var q6class = $("#q-6").children()[0].className;
                if (q4class == "circle" && q5class == "circle" && q6class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q4class == "x" && q5class == "x" && q6class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //7-8-9 horizontal
            if (q7length !== 0 && q8length !== 0 && q9length !== 0) {
                var q7class = $("#q-7").children()[0].className;
                var q8class = $("#q-8").children()[0].className;
                var q9class = $("#q-9").children()[0].className;
                if (q7class == "circle" && q8class == "circle" && q9class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q7class == "x" && q8class == "x" && q9class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //1-4-7 vertical
            if (q1length !== 0 && q4length !== 0 && q7length !== 0) {
                var q1class = $("#q-1").children()[0].className;
                var q4class = $("#q-4").children()[0].className;
                var q7class = $("#q-7").children()[0].className;
                if (q1class == "circle" && q4class == "circle" && q7class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q1class == "x" && q4class == "x" && q7class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //2-5-8 vertical
            if (q2length !== 0 && q5length !== 0 && q8length !== 0) {
                var q2class = $("#q-2").children()[0].className;
                var q5class = $("#q-5").children()[0].className;
                var q8class = $("#q-8").children()[0].className;
                if (q2class == "circle" && q5class == "circle" && q8class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q2class == "x" && q5class == "x" && q8class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //3-6-9 vertical
            if (q3length !== 0 && q6length !== 0 && q9length !== 0) {
                var q3class = $("#q-3").children()[0].className;
                var q6class = $("#q-6").children()[0].className;
                var q9class = $("#q-9").children()[0].className;
                if (q3class == "circle" && q6class == "circle" && q9class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q3class == "x" && q6class == "x" && q9class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //1-5-9 diagonal
            if (q1length !== 0 && q5length !== 0 && q9length !== 0) {
                var q1class = $("#q-1").children()[0].className;
                var q5class = $("#q-5").children()[0].className;
                var q9class = $("#q-9").children()[0].className;
                if (q1class == "circle" && q5class == "circle" && q9class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q1class == "x" && q5class == "x" && q9class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //3-5-7 diagonal
            if (q3length !== 0 && q5length !== 0 && q7length !== 0) {
                var q3class = $("#q-3").children()[0].className;
                var q5class = $("#q-5").children()[0].className;
                var q7class = $("#q-7").children()[0].className;
                if (q3class == "circle" && q5class == "circle" && q7class == "circle") {
                    JV.ModalResultado(jogador1);
                }
                else if (q3class == "x" && q5class == "x" && q7class == "x") {
                    JV.ModalResultado(jogador2);
                }
            }
            //Empate
            if (q1length !== 0 && q2length !== 0 && q3length !== 0 && q4length !== 0 && q5length !== 0 && q6length !== 0 && q7length !== 0 && q8length !== 0 && q9length !== 0 && count !== 1) {
                JV.ModalResultado("empate");
            }
        }
    };

    //Início
    JV.CarregarComandos();
});