import { writable } from "svelte/store";

export const filterToppings = writable(new Set());
export const filteredPizzas = writable([]);
