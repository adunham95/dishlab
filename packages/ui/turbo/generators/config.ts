import type { PlopTypes } from "@turbo/gen";
import { componentGenerator } from "./componentGenerator";
 
// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("component", componentGenerator(plop));
}