import { writable } from 'svelte/store'

export const loader = writable(0);
export const mode = writable('dark');