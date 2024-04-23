import { writable } from 'svelte/store'

export const loader = writable(0);
export const mode = writable('dark');
export const pathname = writable('/')
export const isModalOpen = writable(false)