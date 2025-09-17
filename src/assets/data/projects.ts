export type Project = {
    id: number
    title: string
    description: string
    link: string
    image?: string
}

export const projects : Project[] = [
    {
        id: 1,
        title: 'Song Library API',
        description: 'Song Library API developed in Nest JS that allows you to manage songs, artists, and albums.',
        link: 'https://github.com/mariana-vallejos/Rest-api-practice',
        image: 'https://nordicapis.com/wp-content/uploads/7-Music-Streaming-APIs.png'
    },
    {
        id: 2,
        title: 'GRPC practice',
        description: 'Api gateway that communicates with grpc',
        link: 'https://github.com/mariana-vallejos/grpc-nest-proto',
        image: 'https://grpc.io/img/landing-2.svg'
    },
    {
        id: 3,
        title: 'Pomodoro App',
        description: 'Pomodoro App developed with react typescript using react context and reducers.',
        link: 'https://github.com/mar-vall/webcito-challenges/tree/main/02-pomodoro-tracker',
        image: 'src/assets/img/pomodoro.png'
    },
    {
        id: 4,
        title: 'Parking Frontend',
        description: "Website for managing the UMSS workers' union parking lot. Collaborate on front-end development using React TS",
        link: 'https://github.com/mar-vall/FrontendSindicato',
        image: 'src/assets/img/sindicato.png'
    },
    {
        id: 5,
        title: 'SCESI Webcito',
        description: "A landing page developed with Astro for SCESI (Sociedad Cientifica de Estudiantes de ingenieria de Sistemas e Informatica)",
        link: 'https://github.com/mar-vall/FrontendSindicato',
        image: 'src/assets/img/webcito.png'
    },
]