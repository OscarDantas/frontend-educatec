const INITIAL_STATE = {
    items: [
        {
            title: 'Notificações',
            key: 'notificacoes',
            icon: 'user'
        },
        {
            title: 'Chat',
            key: 'chat',
            icon: 'user'
        },
        {
            title: 'Gerenciar Edital',
            key: 'configuracoes',
            icon: 'user',
            subMenu: [
                {
                    title: 'Edital',
                    key: 'edital',
                    icon: 'user'
                },
                {
                    title: 'Lei',
                    key: 'lei',
                    icon: 'user'
                },
                {
                    title: 'Etapa',
                    key: 'etapa',
                    icon: 'user'
                },
                {
                    title: 'Modalidade',
                    key: 'modalidade',
                    icon: 'user'
                },
                {
                    title: 'Grau de Abrangência',
                    key: 'grauAbrangencia',
                    icon: 'user'
                },
                {
                    title: 'Área de Conhecimento',
                    key: 'areaConhecimento',
                    icon: 'user'
                },
                {
                    title: 'Categoria',
                    key: 'categoria',
                    icon: 'user'
                }
            ]
        },
        {
            title: 'Gerenciar Formulário',
            key: 'configuracaoFormulario',
            icon: 'chat',
            subMenu: [
                {
                    title: 'Fator',
                    key: 'fator',
                    icon: 'user'
                },
                {
                    title: 'Critério',
                    key: 'criterio',
                    icon: 'user'
                },
                {
                    title: 'Respostas',
                    key: 'respostas',
                    icon: 'user'
                },
                {
                    title: 'Formulário',
                    key: 'formulario',
                    icon: 'user'
                }
            ]
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}