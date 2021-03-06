import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const { expect } = chai;
import * as memFs from "mem-fs";
import * as fsEditor from "mem-fs-editor";
import subject from "../../steps/correct_version";
import { fromJS, Map } from "immutable";

describe("correct version", () => {
  let editor;
  let options: Map<string, any>;
  const manifestPath = "v1/manifest.json";

  before(() => {
    editor = fsEditor.create(memFs.create());
    options = fromJS({ src: "v1", editor });
  });

  afterEach(() => {
    editor.delete(manifestPath);
  });

  it("should pass with a version < 2.0", () => {
    editor.writeJSON(manifestPath, {
      frameworkVersion: "1.0"
    });
    return expect(subject(options)).to.eventually.be.fulfilled;
  });

  it("should raise an exception with a version >= 2.0", () => {
    editor.writeJSON(manifestPath, {
      frameworkVersion: "2.0"
    });
    return expect(subject(options)).to.eventually.be.rejectedWith(
      Error,
      /"frameworkVersion" parameter must be less than 2.0/
    );
  });

  it("should raise an exception with no manifest file", () => {
    return expect(subject(options)).to.eventually.be.rejectedWith(
      Error,
      /"frameworkVersion" parameter must be less than 2.0/
    );
  });
});
