const scheduleData = [
  {
    date: "31/10",
    dayName: "Sexta-Feira",
    activities: [
      {
        time: "16h",
        activity: "Arrumação do templo",
        responsible: "Decoração",
      },
      {
        time: "17h",
        activity: "Ensaio Final",
        responsible: "Livre Adoração + Som",
      },
      {
        time: "17h",
        activity: "Arrumação da recepção",
        responsible: "Acolhimento",
      },
      {
        time: "17h",
        activity: "Arrumação do Check-in",
        responsible: "Secretaria",
      },
      {
        time: "17h",
        activity: "Testar vídeos a serem passados",
        responsible: "Multeenmídia + Som",
      },
      {
        time: "19h",
        activity: "Chegada dos congressistas e familiares",
        responsible: "",
      },
      {
        time: "19h",
        activity: "Recepção dos congressistas e familiares",
        responsible: "Equipe TROPA",
      },
      {
        time: "19h",
        activity: "Som (música no ambiente, direções e comunicados)",
        responsible: "Som + Liderança Teen",
      },
      {
        time: "19h40",
        activity: "Corredor de Recepção",
        responsible: "Equipe TROPA",
      },
      {
        time: "19h40",
        activity: "Acomodação de familiares na galeria",
        responsible: "Equipe TROPA",
      },
      {
        time: "19h40",
        activity: "Entrada dos Congressistas por Rede",
        responsible: "Líderes de Rede",
      },
      {
        time: "20h",
        activity: "Vídeo de Abertura do Congresso",
        responsible: "Multeenmídia + Som",
      },
      { time: "20h", activity: "Dança de Abertura", responsible: "Flecharte" },
      {
        time: "20h",
        activity: "Palavra de Boas-Vindas + Informes + Oração Inicial",
        responsible: "Liderança Teen",
      },
      {
        time: "20h",
        activity: "Momento de Louvor 1",
        responsible: "Livre Adoração + Equipe Técnica",
      },
      { time: "20h45", activity: "Ministração 1", responsible: "Preletor 1" },
      {
        time: "21h30",
        activity: "Instruções para Embarque dos Congressistas",
        responsible: "Liderança Teen",
      },
      {
        time: "21h30",
        activity: "Apresentação dos Líderes de Ônibus",
        responsible: "Liderança Teen",
      },
      {
        time: "21h30",
        activity: "Separação de Congressistas por Ônibus",
        responsible: "Liderança Teen + Líderes de Ônibus",
      },
      {
        time: "21h30",
        activity: "Oração Final + Agradecimento aos Responsáveis",
        responsible: "Liderança Teen",
      },
      {
        time: "21h45",
        activity: "Embarque dos Congressistas",
        responsible: "Equipe TROPA",
      },
      {
        time: "22h",
        activity: "Check-in dos Congressistas no Ônibus",
        responsible: "Líderes de Ônibus",
      },
      { time: "22h15", activity: "Saída do ônibus", responsible: "" },
      { time: "23h", activity: "Chegada no Sítio", responsible: "" },
      {
        time: "23h",
        activity: "Recepção dos congressistas",
        responsible: "Equipe TROPA",
      },
      {
        time: "23h",
        activity: "Acomodação dos Congressistas no Auditório",
        responsible: "Equipe TROPA",
      },
      {
        time: "23h15",
        activity: "Vídeo de Regras do Congresso",
        responsible: "Multeemídia + Som",
      },
      {
        time: "23h15",
        activity: "Instruções Sobre Malas e Acomodações",
        responsible: "Liderança Teen",
      },
      {
        time: "23h45",
        activity: "Momento de Descontração",
        responsible: "Som + Equipe TROPA",
      },
      {
        time: "23h45",
        activity: "Lanche",
        responsible: "Cozinha + Restaurante",
      },
      {
        time: "00h30",
        activity: "Toque de Recolher",
        responsible: "Equipe TROPA",
      },
      {
        time: "00h30",
        activity: "Intercessão (Grupo 1)",
        responsible: "Grupo 1 da Intercessão",
      },
      {
        time: "00h30",
        activity: "Check-in dos Congressistas no Quarto",
        responsible: "Xerifes de Quarto",
      },
      {
        time: "00h30",
        activity: "Apresentação + Bate Papo Inicial",
        responsible: "Xerifes de Quarto",
      },
      { time: "1h", activity: "Fim do dia", responsible: "" },
    ],
  },
  {
    date: "01/11",
    dayName: "Sábado",
    activities: [
      {
        time: "7h30",
        activity: "Preparação do Café da Manhã",
        responsible: "Cozinha + Restaurante",
      },
      {
        time: "8h30",
        activity: "Café da Manhã",
        responsible: "Cozinha + Restaurante",
      },
      {
        time: "9h30",
        activity: "Devocional Guiado",
        responsible: "Líderes de Grupo",
      },
      {
        time: "9h30",
        activity: "Intercessão (Grupo 2)",
        responsible: "Grupo 2 da Intercessão",
      },
      {
        time: "10h",
        activity: "Momento de Louvor 2",
        responsible: "Livre Adoração + Equipe Técnica",
      },
      {
        time: "10h45",
        activity: "Vídeo de Regras do Congresso (Reprise)",
        responsible: "Multeenmídia + Som",
      },
      { time: "10h45", activity: "Esquete 1", responsible: "Flecharte" },
      { time: "10h45", activity: "Ministração 2", responsible: "Preletor 2" },
      { time: "12h", activity: "Almoço", responsible: "Cozinha + Restaurante" },
      {
        time: "13h30",
        activity: "Intercessão (Grupo 3)",
        responsible: "Grupo 3 da Intercessão",
      },
      { time: "13h30", activity: "Horário Livre", responsible: "" },
      {
        time: "15h30",
        activity: "Concentração para Gincana",
        responsible: "Equipe TROPA",
      },
      { time: "15h45", activity: "Gincana", responsible: "Dinamização" },
      {
        time: "17h",
        activity: "Toque de Recolher: Hora do Banho",
        responsible: "",
      },
      {
        time: "18h30",
        activity: "Jantar",
        responsible: "Cozinha + Restaurante",
      },
      {
        time: "20h",
        activity: "Intercessão (Grupo 3)",
        responsible: "Grupo 3 da Intercessão",
      },
      {
        time: "20h",
        activity: "Momento de Louvor 3",
        responsible: "Livre Adoração + Equipe Técnica",
      },
      { time: "20h", activity: "Peça", responsible: "Flecharte" },
      {
        time: "22h30",
        activity: "Lanche",
        responsible: "Cozinha + Restaurante",
      },
      { time: "22h30", activity: "Louvorzão", responsible: "Equipe Convidada" },
      {
        time: "23h30",
        activity: "Toque de Recolher",
        responsible: "Equipe TROPA",
      },
      {
        time: "23h30",
        activity: "Bate Papo Intencional",
        responsible: "Xerifes de Quarto",
      },
      { time: "00h", activity: "Fim do dia", responsible: "" },
    ],
  },
  {
    date: "02/11",
    dayName: "Domingo",
    activities: [
      {
        time: "7h30",
        activity: "Preparação do Café da Manhã",
        responsible: "Cozinha + Restaurante",
      },
      {
        time: "8h30",
        activity: "Café da Manhã",
        responsible: "Cozinha + Restaurante",
      },
      {
        time: "9h30",
        activity: "Devocional Guiado",
        responsible: "Líderes de Grupo",
      },
      {
        time: "9h30",
        activity: "Intercessão (Grupo 4)",
        responsible: "Grupo 4 da Intercessão",
      },
      {
        time: "10h",
        activity: "Momento de Louvor 5",
        responsible: "Livre Adoração + Equipe Técnica",
      },
      { time: "10h45", activity: "Esquete 2", responsible: "Flecharte" },
      { time: "10h45", activity: "Ministração 4", responsible: "Preletor 4" },
      { time: "12h", activity: "Almoço", responsible: "Cozinha + Restaurante" },
      { time: "12h", activity: "Horário Livre", responsible: "" },
      {
        time: "14h",
        activity: "Entrega das Cartas",
        responsible: "Equipe TROPA",
      },
      {
        time: "14h20",
        activity: "Entrega dos Presentes",
        responsible: "Equipe TROPA",
      },
      {
        time: "14h40",
        activity: "Entrega das Camisas",
        responsible: "Equipe TROPA",
      },
      {
        time: "15h",
        activity: "Toque de Recolher: Hora do Banho",
        responsible: "Equipe TROPA",
      },
      { time: "16h", activity: "Foto Oficial", responsible: "Multeenmídia" },
      {
        time: "16h15",
        activity: "Embarque dos Congressistas",
        responsible: "Xerifes de Ônibus",
      },
      { time: "16h30", activity: "Saída do Sítio", responsible: "" },
      { time: "17h", activity: "Chegada na Igreja", responsible: "" },
    ],
  },
];

function generatePages() {
  const container = document.getElementById("schedule-container");
  let globalPageCount = 1;
  // Aumentado o número de linhas por página para o layout vertical
  const ROWS_PER_PAGE = 22;

  scheduleData.forEach((dayInfo) => {
    const activities = dayInfo.activities;
    const totalPagesPerDay = Math.ceil(activities.length / ROWS_PER_PAGE);

    for (let i = 0; i < totalPagesPerDay; i++) {
      const start = i * ROWS_PER_PAGE;
      const end = start + ROWS_PER_PAGE;
      const pageActivities = activities.slice(start, end);

      const etapaText = totalPagesPerDay > 1 ? ` - ${i + 1}ª Etapa` : "";

      let pageHTML = `
                        <div class="page">
                            <header class="flex justify-between items-center pb-4 border-b-2 border-palette-medium mb-6">
                                <img src="assets/Logo 19 Congresso Teen.png" alt="Logo" class="w-16 h-16">
                                <h2 class="text-2xl md:text-3xl font-bold text-palette-darkest text-center">${dayInfo.dayName} (${dayInfo.date})${etapaText}</h2>
                                <div class="w-16"></div>
                            </header>
                            <div class="page-content">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="table-header">
                                            <th class="p-2 text-sm md:text-base w-1/12">Horário</th>
                                            <th class="p-2 text-sm md:text-base w-6/12">Atividade</th>
                                            <th class="p-2 text-sm md:text-base w-5/12">Responsáveis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                    `;

      pageActivities.forEach((item, index) => {
        const rowClass = index % 2 === 0 ? "table-row-dark" : "table-row-light";
        pageHTML += `
                            <tr class="${rowClass}">
                                <td class="p-2 text-sm md:text-base text-center">${item.time}</td>
                                <td class="p-2 text-sm md:text-base">${item.activity}</td>
                                <td class="p-2 text-sm md:text-base">${item.responsible}</td>
                            </tr>
                        `;
      });

      pageHTML += `
                                    </tbody>
                                </table>
                            </div>
                            <footer class="text-center text-palette-light mt-4">Página ${globalPageCount}</footer>
                        </div>
                    `;
      container.innerHTML += pageHTML;
      globalPageCount++;
    }
  });
}

generatePages();
