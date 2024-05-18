import type { Project, Album } from "$lib/types";

export async function getProjects(): Promise<Project[]> {
    const res = await fetch("/api/projects");
    const data = await res.json();
    return data;
}

export async function getMusic(): Promise<Album[]> {
    const res = await fetch("/api/music");
    const data = await res.json();
    return data;
}