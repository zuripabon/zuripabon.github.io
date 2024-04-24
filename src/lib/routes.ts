import { pathname, isModalOpen } from './store'

export const HOME = '/'
export const EDUCATION = '/education'
export const CAREER = '/career'
export const PROJECTS = '/projects'
export const ABOUT = '/about'
export const CONTACT = '/contact'
export const LEGAL = '/legal'

export const goBack = () => {
  if(typeof window !== 'undefined'){
    window.history.back();
  }
}

export const goTo = (route:string, isSection: boolean = false) => {
  if(typeof window !== 'undefined'){
    window.history.pushState({}, '', isSection ? getPathFromSection(route) :route)
    window.dispatchEvent(new Event('popstate'));
  }
}

const updateState = (isHome: boolean, firstLoad: boolean = false) => {
  if(!isHome){
    pathname.set(window.location.pathname);
    setTimeout(()=> {
      isModalOpen.set(true);
    }, 100);
  }
  else {
    isModalOpen.set(false)
    pathname.set(HOME);
  }
}

export const router = () => {
  if(typeof window !== 'undefined'){
    updateState(window.location.pathname === HOME, true)
    window.addEventListener('popstate', () => {
      updateState(window.location.pathname === HOME)
    });
  }
}

const getPathFromSection = (section:string) => {
  if(section === 'tent'){
      return EDUCATION;
  }

  if(section === 'box'){
      return CAREER;
  }

  if(section === 'fox'){
      return PROJECTS
  }

  if(section === 'campfire'){
      return ABOUT
  }

  if(section === 'boat'){
      return CONTACT
  }

  if(section === 'legal'){
      return LEGAL
  }

  return HOME;
}