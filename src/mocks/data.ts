import { Asignatura, Materia } from "@/types";

export const levelData = [
    {
        value: "pregrado",
        label: "Pregrado",
    },
    {
        value: "doctorado",
        label: "Doctorado",
    },
    {
        value: "posgrado",
        label: "Posgrado y masteres",
    },
];

export const facultiesData = [
    {
        id: "3064",
        value: "facultad-arquitectura",
        label: "Facultad de Arquitectura",
    },
    {
        id: "3065",
        value: "facultad-ciencias",
        label: "Facultad de Ciencias",
    },
    {
        id: "3442",
        value: "facultad-agrarias",
        label: "Facultad de Ciencias Agrarias",
    },
    {
        id: "3067",
        value: "facultad-humanas",
        label: "Facultad de Ciencias Humanas y Economicas",
    },
    {
        id: "3068",
        value: "facultad-minas",
        label: "Facultad de Minas",
    },
];

export const careersData = [
    {
        id: "3064",
        label: "facultad-arquitectura",
        careers: [
            { id: "3501", value: "arquitectura", label: "Arquitectura" },
            { id: "3502", value: "artes", label: "Artes Plásticas" },
            { id: "3503", value: "construccion", label: "Construcción" },
        ],
    },
    {
        id: "3065",
        label: "facultad-ciencias",
        careers: [
            { id: "3647", value: "cs", label: "Ciencias de la Computación" },
            { id: "3504", value: "estadistica", label: "Estadística" },
            { id: "3505", value: "biologica", label: "Ingeniería Biológica" },
            { id: "3506", value: "fisica", label: "Ingeniería Física" },
            { id: "3507", value: "matematicas", label: "Matemáticas" },
        ],
    },
    {
        id: "3442",
        label: "facultad-agrarias",
        careers: [
            { id: "3508", value: "agricola", label: "Ingeniería Agrícola" },
            { id: "3509", value: "agronomica", label: "Ingeniería Agronómica" },
            { id: "3510", value: "forestal", label: "Ingeniería Forestal" },
            { id: "3511", value: "zootecnia", label: "Zootecnia" },
        ],
    },
    {
        id: "3067",
        label: "facultad-humanas",
        careers: [
            { id: "3512", value: "politicas", label: "Ciencias Políticas" },
            { id: "3513", value: "economica", label: "Economía" },
            { id: "3514", value: "historia", label: "Historia" },
        ],
    },
    {
        id: "3068",
        label: "facultad-minas",
        careers: [
            {
                id: "3515",
                value: "admin-1",
                label: "Ingeniería Administrativa",
            },
            {
                id: "3528",
                value: "admin-2",
                label: "Ingeniería Administrativa",
            },
            {
                id: "3527",
                value: "ambiental-1",
                label: "Ingeniería Ambiental",
            },
            {
                id: "3529",
                value: "ambiental-2",
                label: "Ingeniería Ambiental",
            },
            {
                id: "3516",
                value: "civil-1",
                label: "Ingeniería Civil",
            },
            {
                id: "3530",
                value: "civil-2",
                label: "Ingeniería Civil",
            },
            {
                id: "3517",
                value: "control-1",
                label: "Ingeniería de Control",
            },
            {
                id: "3531",
                value: "control-2",
                label: "Ingeniería de Control",
            },
            {
                id: "3518",
                value: "minas-1",
                label: "Ingeniería de Minas y Metalurgia",
            },
            {
                id: "3532",
                value: "minas-2",
                label: "Ingeniería de Minas y Metalurgia",
            },
            {
                id: "3519",
                value: "petroleos-1",
                label: "Ingeniería de Petróleos",
            },
            {
                id: "3533",
                value: "petroleos-2",
                label: "Ingeniería de Petróleos",
            },
            {
                id: "3520",
                value: "sistemas-1",
                label: "Ingeniería de Sistemas e Informática",
            },
            {
                id: "3534",
                value: "sistemas-2",
                label: "Ingeniería de Sistemas e Informática",
            },
            {
                id: "3521",
                value: "electrica-1",
                label: "Ingeniería Eléctrica",
            },
            {
                id: "3535",
                value: "electrica-2",
                label: "Ingeniería Eléctrica",
            },
            {
                id: "3522",
                value: "geologica-1",
                label: "Ingeniería Geológica",
            },
            {
                id: "3536",
                value: "geologica-2",
                label: "Ingeniería Geológica",
            },
            {
                id: "3523",
                value: "industrial-1",
                label: "Ingeniería Industrial",
            },
            {
                id: "3537",
                value: "industrial-2",
                label: "Ingeniería Industrial",
            },
            {
                id: "3524",
                value: "mecanica-1",
                label: "Ingeniería Mecánica",
            },
            {
                id: "3538",
                value: "mecanica-2",
                label: "Ingeniería Mecánica",
            },
            {
                id: "3525",
                value: "quimica-1",
                label: "Ingeniería Química",
            },
            {
                id: "3539",
                value: "quimica-2",
                label: "Ingeniería Química",
            },
        ],
    },
];

export const typologyData = [
    {
        value: "fund-obligatoria",
        label: "Fundamental Obligatoria",
    },
    {
        value: "fund-optativa",
        label: "Fundamental Optativa",
    },
    {
        value: "disc-obligatoria",
        label: "Disciplinar Obligatoria",
    },
    {
        value: "disc-optativa",
        label: "Disciplinar Optativa",
    },
    {
        value: "trabajo-grado",
        label: "Trabajo de Grado",
    },
    {
        value: "nivelacion",
        label: "Nivelación",
    },
];

export const paymentData: Asignatura[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
];

export const subjectData: Materia[] = [
    {
        codigo: "1000003-M",
        asignatura: "Algebra Lineal",
        creditos: 4,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000004-M",
        asignatura: "Cálculo Diferencial",
        creditos: 4,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000005-M",
        asignatura: "Programación I",
        creditos: 3,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000006-M",
        asignatura: "Estructuras de Datos",
        creditos: 3,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000007-M",
        asignatura: "Introducción a la Ingeniería de Software",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000008-M",
        asignatura: "Física I",
        creditos: 3,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000009-M",
        asignatura: "Química General",
        creditos: 3,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000010-M",
        asignatura: "Biología General",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000011-M",
        asignatura: "Matemáticas Discretas",
        creditos: 3,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000012-M",
        asignatura: "Informática Básica",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000013-M",
        asignatura: "Historia Universal",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000014-M",
        asignatura: "Filosofía y Lógica",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000015-M",
        asignatura: "Sociología General",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000016-M",
        asignatura: "Lengua Castellana",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000017-M",
        asignatura: "Arte y Cultura",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000018-M",
        asignatura: "Deportes y Recreación",
        creditos: 1,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000019-M",
        asignatura: "Práctica Profesional",
        creditos: 2,
        tipologia: "Fundamental Obligatoria",
    },
    {
        codigo: "1000020-M",
        asignatura: "Proyecto Final",
        creditos: 3,
        tipologia: "Fundamental Obligatoria",
    },
];
