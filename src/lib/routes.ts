export const getSectionFromPath = (path:string) => {
    if(path === '/education'){
        return 'tent';
    }

    if(path === '/career'){
        return 'box'
    }

    if(path === '/projects'){
        return 'fox'
    }

    if(path === '/about'){
        return 'campfire'
    }

    if(path === '/contact'){
        return 'boat'
    }

    if(path === '/legal'){
        return 'legal'
    }

    return null;
}