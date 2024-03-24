const copies:{[key:string]:string} = {
    'tent': "I graduated with a bachelor's degree in IT", // academic
    'campfire': 'Wanna drink a hot cocoa with me?', // curiosities
    'fox': 'My aside pet-projects', // aside projects
    'box': 'Currently working at Cober.io', // professional
    'boat': "Success & failure stories", // companies
}


export default function get(section: string){
    return copies[section]
}