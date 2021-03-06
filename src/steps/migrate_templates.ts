import { Map } from "immutable";

export default async (options: Map<string, any>) => {
  const src = options.get("src");
  const dest = options.get("dest");
  const editor = options.get("editor");

  // Copy all template files across
  editor.copy(`${src}/templates/**/*.hdbs`, `${dest}/src/templates/`);
};
