/**
 * Created by n.vinayakan on 06.06.17.
 */
//tslint:disable-next-line
export const isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
)();
//tslint:disable-next-line
export const isWorker = new Function(
  "try {return this===self && typeof importScripts !== 'undefined';}catch(e){return false;}"
)();
//tslint:disable-next-line
export const isNode =
  typeof global !== "undefined" &&
  typeof process !== "undefined" &&
  typeof process.stdout !== "undefined";

export function env(name: string, defaultValue?: string): string | undefined {
  const envValue = process.env[name];
  return envValue || defaultValue;
}
export function envInt(
  name: string,
  defaultValue?: number
): number | undefined {
  const envValue = process.env[name];
  return envValue ? parseInt(envValue) : defaultValue;
}
export function envFloat(
  name: string,
  defaultValue?: number
): number | undefined {
  const envValue = process.env[name];
  return envValue ? parseFloat(envValue) : defaultValue;
}
export function envBoolean(
  name: string,
  defaultValue?: boolean
): boolean | undefined {
  const envValue = process.env[name];
  return envValue ? envValue === "true" : defaultValue;
}
export function envJson(name: string, defaultValue?: any): any {
  const envValue = process.env[name];
  if (envValue) {
    try {
      return JSON.parse(envValue);
    } catch (e) {}
  }
  return defaultValue;
}
