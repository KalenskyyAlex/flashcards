export function isDev(): boolean {
    return process.env.PROFILE === "dev";
}