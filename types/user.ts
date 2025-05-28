export interface User {
    id: string
    name: string
    email: string
    address: string
    phone: string
    img : string
    description : string
    courses : {
        course_id: string
        course_name: string
        certificate : string 
        course_img : string
    }[]
    education: {
        e_id : string
        degree: string
        university: string
        year?: string
        year_of_start ?: string
        year_of_end ?: string
    }[]
    experience: {
        company: string
        position: string
        start: string
        end: string
    }[]
}