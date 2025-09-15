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
        link: 'https://github.com/mariana-vallejos/Rest-api-practice'
    },
    {
        id: 2,
        title: 'GRPC practice',
        description: '',
        link: 'https://github.com/mariana-vallejos/grpc-nest-proto'
    },
    {
        id: 3,
        title: 'Pomodoro App',
        description: 'Pomodoro App developed with react typescript using react context and reducers.',
        link: 'https://github.com/mar-vall/webcito-challenges/tree/main/02-pomodoro-tracker'
    },
    {
        id: 4,
        title: 'Parking Frontend',
        description: "Website for managing the UMSS workers' union parking lot. Collaborate on front-end development using React TS",
        link: 'https://github.com/mar-vall/FrontendSindicato'
    },
]