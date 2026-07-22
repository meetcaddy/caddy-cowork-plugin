"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/zod/dist/esm/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/dist/esm/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/dist/esm/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/dist/esm/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/dist/esm/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/dist/esm/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path: path8, errorMaps, issueData } = params;
  const fullPath = [...path8, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/dist/esm/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/dist/esm/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path8, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path8;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
var LATEST_PROTOCOL_VERSION = "2025-03-26";
var SUPPORTED_PROTOCOL_VERSIONS = [
  LATEST_PROTOCOL_VERSION,
  "2024-11-05",
  "2024-10-07"
];
var JSONRPC_VERSION = "2.0";
var ProgressTokenSchema = external_exports.union([external_exports.string(), external_exports.number().int()]);
var CursorSchema = external_exports.string();
var RequestMetaSchema = external_exports.object({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: external_exports.optional(ProgressTokenSchema)
}).passthrough();
var BaseRequestParamsSchema = external_exports.object({
  _meta: external_exports.optional(RequestMetaSchema)
}).passthrough();
var RequestSchema = external_exports.object({
  method: external_exports.string(),
  params: external_exports.optional(BaseRequestParamsSchema)
});
var BaseNotificationParamsSchema = external_exports.object({
  /**
   * This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.
   */
  _meta: external_exports.optional(external_exports.object({}).passthrough())
}).passthrough();
var NotificationSchema = external_exports.object({
  method: external_exports.string(),
  params: external_exports.optional(BaseNotificationParamsSchema)
});
var ResultSchema = external_exports.object({
  /**
   * This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.
   */
  _meta: external_exports.optional(external_exports.object({}).passthrough())
}).passthrough();
var RequestIdSchema = external_exports.union([external_exports.string(), external_exports.number().int()]);
var JSONRPCRequestSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION),
  id: RequestIdSchema
}).merge(RequestSchema).strict();
var isJSONRPCRequest = (value) => JSONRPCRequestSchema.safeParse(value).success;
var JSONRPCNotificationSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION)
}).merge(NotificationSchema).strict();
var isJSONRPCNotification = (value) => JSONRPCNotificationSchema.safeParse(value).success;
var JSONRPCResponseSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  result: ResultSchema
}).strict();
var isJSONRPCResponse = (value) => JSONRPCResponseSchema.safeParse(value).success;
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["ConnectionClosed"] = -32e3] = "ConnectionClosed";
  ErrorCode2[ErrorCode2["RequestTimeout"] = -32001] = "RequestTimeout";
  ErrorCode2[ErrorCode2["ParseError"] = -32700] = "ParseError";
  ErrorCode2[ErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
  ErrorCode2[ErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
  ErrorCode2[ErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
  ErrorCode2[ErrorCode2["InternalError"] = -32603] = "InternalError";
})(ErrorCode || (ErrorCode = {}));
var JSONRPCErrorSchema = external_exports.object({
  jsonrpc: external_exports.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  error: external_exports.object({
    /**
     * The error type that occurred.
     */
    code: external_exports.number().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: external_exports.string(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: external_exports.optional(external_exports.unknown())
  })
}).strict();
var isJSONRPCError = (value) => JSONRPCErrorSchema.safeParse(value).success;
var JSONRPCMessageSchema = external_exports.union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResponseSchema,
  JSONRPCErrorSchema
]);
var EmptyResultSchema = ResultSchema.strict();
var CancelledNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/cancelled"),
  params: BaseNotificationParamsSchema.extend({
    /**
     * The ID of the request to cancel.
     *
     * This MUST correspond to the ID of a request previously issued in the same direction.
     */
    requestId: RequestIdSchema,
    /**
     * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
     */
    reason: external_exports.string().optional()
  })
});
var ImplementationSchema = external_exports.object({
  name: external_exports.string(),
  version: external_exports.string()
}).passthrough();
var ClientCapabilitiesSchema = external_exports.object({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: external_exports.optional(external_exports.object({}).passthrough()),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: external_exports.optional(external_exports.object({}).passthrough()),
  /**
   * Present if the client supports listing roots.
   */
  roots: external_exports.optional(external_exports.object({
    /**
     * Whether the client supports issuing notifications for changes to the roots list.
     */
    listChanged: external_exports.optional(external_exports.boolean())
  }).passthrough())
}).passthrough();
var InitializeRequestSchema = RequestSchema.extend({
  method: external_exports.literal("initialize"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
     */
    protocolVersion: external_exports.string(),
    capabilities: ClientCapabilitiesSchema,
    clientInfo: ImplementationSchema
  })
});
var ServerCapabilitiesSchema = external_exports.object({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: external_exports.optional(external_exports.object({}).passthrough()),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: external_exports.optional(external_exports.object({}).passthrough()),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: external_exports.optional(external_exports.object({}).passthrough()),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: external_exports.optional(external_exports.object({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: external_exports.optional(external_exports.boolean())
  }).passthrough()),
  /**
   * Present if the server offers any resources to read.
   */
  resources: external_exports.optional(external_exports.object({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: external_exports.optional(external_exports.boolean()),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: external_exports.optional(external_exports.boolean())
  }).passthrough()),
  /**
   * Present if the server offers any tools to call.
   */
  tools: external_exports.optional(external_exports.object({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: external_exports.optional(external_exports.boolean())
  }).passthrough())
}).passthrough();
var InitializeResultSchema = ResultSchema.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: external_exports.string(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ImplementationSchema,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: external_exports.optional(external_exports.string())
});
var InitializedNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/initialized")
});
var PingRequestSchema = RequestSchema.extend({
  method: external_exports.literal("ping")
});
var ProgressSchema = external_exports.object({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: external_exports.number(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: external_exports.optional(external_exports.number()),
  /**
   * An optional message describing the current progress.
   */
  message: external_exports.optional(external_exports.string())
}).passthrough();
var ProgressNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/progress"),
  params: BaseNotificationParamsSchema.merge(ProgressSchema).extend({
    /**
     * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
     */
    progressToken: ProgressTokenSchema
  })
});
var PaginatedRequestSchema = RequestSchema.extend({
  params: BaseRequestParamsSchema.extend({
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor: external_exports.optional(CursorSchema)
  }).optional()
});
var PaginatedResultSchema = ResultSchema.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: external_exports.optional(CursorSchema)
});
var ResourceContentsSchema = external_exports.object({
  /**
   * The URI of this resource.
   */
  uri: external_exports.string(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: external_exports.optional(external_exports.string())
}).passthrough();
var TextResourceContentsSchema = ResourceContentsSchema.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: external_exports.string()
});
var BlobResourceContentsSchema = ResourceContentsSchema.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: external_exports.string().base64()
});
var ResourceSchema = external_exports.object({
  /**
   * The URI of this resource.
   */
  uri: external_exports.string(),
  /**
   * A human-readable name for this resource.
   *
   * This can be used by clients to populate UI elements.
   */
  name: external_exports.string(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: external_exports.optional(external_exports.string()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: external_exports.optional(external_exports.string())
}).passthrough();
var ResourceTemplateSchema = external_exports.object({
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: external_exports.string(),
  /**
   * A human-readable name for the type of resource this template refers to.
   *
   * This can be used by clients to populate UI elements.
   */
  name: external_exports.string(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: external_exports.optional(external_exports.string()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: external_exports.optional(external_exports.string())
}).passthrough();
var ListResourcesRequestSchema = PaginatedRequestSchema.extend({
  method: external_exports.literal("resources/list")
});
var ListResourcesResultSchema = PaginatedResultSchema.extend({
  resources: external_exports.array(ResourceSchema)
});
var ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
  method: external_exports.literal("resources/templates/list")
});
var ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
  resourceTemplates: external_exports.array(ResourceTemplateSchema)
});
var ReadResourceRequestSchema = RequestSchema.extend({
  method: external_exports.literal("resources/read"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: external_exports.string()
  })
});
var ReadResourceResultSchema = ResultSchema.extend({
  contents: external_exports.array(external_exports.union([TextResourceContentsSchema, BlobResourceContentsSchema]))
});
var ResourceListChangedNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/resources/list_changed")
});
var SubscribeRequestSchema = RequestSchema.extend({
  method: external_exports.literal("resources/subscribe"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: external_exports.string()
  })
});
var UnsubscribeRequestSchema = RequestSchema.extend({
  method: external_exports.literal("resources/unsubscribe"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The URI of the resource to unsubscribe from.
     */
    uri: external_exports.string()
  })
});
var ResourceUpdatedNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/resources/updated"),
  params: BaseNotificationParamsSchema.extend({
    /**
     * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
     */
    uri: external_exports.string()
  })
});
var PromptArgumentSchema = external_exports.object({
  /**
   * The name of the argument.
   */
  name: external_exports.string(),
  /**
   * A human-readable description of the argument.
   */
  description: external_exports.optional(external_exports.string()),
  /**
   * Whether this argument must be provided.
   */
  required: external_exports.optional(external_exports.boolean())
}).passthrough();
var PromptSchema = external_exports.object({
  /**
   * The name of the prompt or prompt template.
   */
  name: external_exports.string(),
  /**
   * An optional description of what this prompt provides
   */
  description: external_exports.optional(external_exports.string()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: external_exports.optional(external_exports.array(PromptArgumentSchema))
}).passthrough();
var ListPromptsRequestSchema = PaginatedRequestSchema.extend({
  method: external_exports.literal("prompts/list")
});
var ListPromptsResultSchema = PaginatedResultSchema.extend({
  prompts: external_exports.array(PromptSchema)
});
var GetPromptRequestSchema = RequestSchema.extend({
  method: external_exports.literal("prompts/get"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The name of the prompt or prompt template.
     */
    name: external_exports.string(),
    /**
     * Arguments to use for templating the prompt.
     */
    arguments: external_exports.optional(external_exports.record(external_exports.string()))
  })
});
var TextContentSchema = external_exports.object({
  type: external_exports.literal("text"),
  /**
   * The text content of the message.
   */
  text: external_exports.string()
}).passthrough();
var ImageContentSchema = external_exports.object({
  type: external_exports.literal("image"),
  /**
   * The base64-encoded image data.
   */
  data: external_exports.string().base64(),
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: external_exports.string()
}).passthrough();
var AudioContentSchema = external_exports.object({
  type: external_exports.literal("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: external_exports.string().base64(),
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: external_exports.string()
}).passthrough();
var EmbeddedResourceSchema = external_exports.object({
  type: external_exports.literal("resource"),
  resource: external_exports.union([TextResourceContentsSchema, BlobResourceContentsSchema])
}).passthrough();
var PromptMessageSchema = external_exports.object({
  role: external_exports.enum(["user", "assistant"]),
  content: external_exports.union([
    TextContentSchema,
    ImageContentSchema,
    AudioContentSchema,
    EmbeddedResourceSchema
  ])
}).passthrough();
var GetPromptResultSchema = ResultSchema.extend({
  /**
   * An optional description for the prompt.
   */
  description: external_exports.optional(external_exports.string()),
  messages: external_exports.array(PromptMessageSchema)
});
var PromptListChangedNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/prompts/list_changed")
});
var ToolAnnotationsSchema = external_exports.object({
  /**
   * A human-readable title for the tool.
   */
  title: external_exports.optional(external_exports.string()),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: external_exports.optional(external_exports.boolean()),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: external_exports.optional(external_exports.boolean()),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: external_exports.optional(external_exports.boolean()),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: external_exports.optional(external_exports.boolean())
}).passthrough();
var ToolSchema = external_exports.object({
  /**
   * The name of the tool.
   */
  name: external_exports.string(),
  /**
   * A human-readable description of the tool.
   */
  description: external_exports.optional(external_exports.string()),
  /**
   * A JSON Schema object defining the expected parameters for the tool.
   */
  inputSchema: external_exports.object({
    type: external_exports.literal("object"),
    properties: external_exports.optional(external_exports.object({}).passthrough()),
    required: external_exports.optional(external_exports.array(external_exports.string()))
  }).passthrough(),
  /**
   * An optional JSON Schema object defining the structure of the tool's output returned in
   * the structuredContent field of a CallToolResult.
   */
  outputSchema: external_exports.optional(external_exports.object({
    type: external_exports.literal("object"),
    properties: external_exports.optional(external_exports.object({}).passthrough()),
    required: external_exports.optional(external_exports.array(external_exports.string()))
  }).passthrough()),
  /**
   * Optional additional tool information.
   */
  annotations: external_exports.optional(ToolAnnotationsSchema)
}).passthrough();
var ListToolsRequestSchema = PaginatedRequestSchema.extend({
  method: external_exports.literal("tools/list")
});
var ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: external_exports.array(ToolSchema)
});
var CallToolResultSchema = ResultSchema.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: external_exports.array(external_exports.union([
    TextContentSchema,
    ImageContentSchema,
    AudioContentSchema,
    EmbeddedResourceSchema
  ])).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: external_exports.object({}).passthrough().optional(),
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   *
   * Any errors that originate from the tool SHOULD be reported inside the result
   * object, with `isError` set to true, _not_ as an MCP protocol-level error
   * response. Otherwise, the LLM would not be able to see that an error occurred
   * and self-correct.
   *
   * However, any errors in _finding_ the tool, an error indicating that the
   * server does not support tool calls, or any other exceptional conditions,
   * should be reported as an MCP error response.
   */
  isError: external_exports.optional(external_exports.boolean())
});
var CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({
  toolResult: external_exports.unknown()
}));
var CallToolRequestSchema = RequestSchema.extend({
  method: external_exports.literal("tools/call"),
  params: BaseRequestParamsSchema.extend({
    name: external_exports.string(),
    arguments: external_exports.optional(external_exports.record(external_exports.unknown()))
  })
});
var ToolListChangedNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/tools/list_changed")
});
var LoggingLevelSchema = external_exports.enum([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]);
var SetLevelRequestSchema = RequestSchema.extend({
  method: external_exports.literal("logging/setLevel"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
     */
    level: LoggingLevelSchema
  })
});
var LoggingMessageNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/message"),
  params: BaseNotificationParamsSchema.extend({
    /**
     * The severity of this log message.
     */
    level: LoggingLevelSchema,
    /**
     * An optional name of the logger issuing this message.
     */
    logger: external_exports.optional(external_exports.string()),
    /**
     * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
     */
    data: external_exports.unknown()
  })
});
var ModelHintSchema = external_exports.object({
  /**
   * A hint for a model name.
   */
  name: external_exports.string().optional()
}).passthrough();
var ModelPreferencesSchema = external_exports.object({
  /**
   * Optional hints to use for model selection.
   */
  hints: external_exports.optional(external_exports.array(ModelHintSchema)),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: external_exports.optional(external_exports.number().min(0).max(1)),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: external_exports.optional(external_exports.number().min(0).max(1)),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: external_exports.optional(external_exports.number().min(0).max(1))
}).passthrough();
var SamplingMessageSchema = external_exports.object({
  role: external_exports.enum(["user", "assistant"]),
  content: external_exports.union([TextContentSchema, ImageContentSchema, AudioContentSchema])
}).passthrough();
var CreateMessageRequestSchema = RequestSchema.extend({
  method: external_exports.literal("sampling/createMessage"),
  params: BaseRequestParamsSchema.extend({
    messages: external_exports.array(SamplingMessageSchema),
    /**
     * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
     */
    systemPrompt: external_exports.optional(external_exports.string()),
    /**
     * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
     */
    includeContext: external_exports.optional(external_exports.enum(["none", "thisServer", "allServers"])),
    temperature: external_exports.optional(external_exports.number()),
    /**
     * The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.
     */
    maxTokens: external_exports.number().int(),
    stopSequences: external_exports.optional(external_exports.array(external_exports.string())),
    /**
     * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
     */
    metadata: external_exports.optional(external_exports.object({}).passthrough()),
    /**
     * The server's preferences for which model to select.
     */
    modelPreferences: external_exports.optional(ModelPreferencesSchema)
  })
});
var CreateMessageResultSchema = ResultSchema.extend({
  /**
   * The name of the model that generated the message.
   */
  model: external_exports.string(),
  /**
   * The reason why sampling stopped.
   */
  stopReason: external_exports.optional(external_exports.enum(["endTurn", "stopSequence", "maxTokens"]).or(external_exports.string())),
  role: external_exports.enum(["user", "assistant"]),
  content: external_exports.discriminatedUnion("type", [
    TextContentSchema,
    ImageContentSchema,
    AudioContentSchema
  ])
});
var ResourceReferenceSchema = external_exports.object({
  type: external_exports.literal("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: external_exports.string()
}).passthrough();
var PromptReferenceSchema = external_exports.object({
  type: external_exports.literal("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: external_exports.string()
}).passthrough();
var CompleteRequestSchema = RequestSchema.extend({
  method: external_exports.literal("completion/complete"),
  params: BaseRequestParamsSchema.extend({
    ref: external_exports.union([PromptReferenceSchema, ResourceReferenceSchema]),
    /**
     * The argument's information
     */
    argument: external_exports.object({
      /**
       * The name of the argument
       */
      name: external_exports.string(),
      /**
       * The value of the argument to use for completion matching.
       */
      value: external_exports.string()
    }).passthrough()
  })
});
var CompleteResultSchema = ResultSchema.extend({
  completion: external_exports.object({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: external_exports.array(external_exports.string()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: external_exports.optional(external_exports.number().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: external_exports.optional(external_exports.boolean())
  }).passthrough()
});
var RootSchema = external_exports.object({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: external_exports.string().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: external_exports.optional(external_exports.string())
}).passthrough();
var ListRootsRequestSchema = RequestSchema.extend({
  method: external_exports.literal("roots/list")
});
var ListRootsResultSchema = ResultSchema.extend({
  roots: external_exports.array(RootSchema)
});
var RootsListChangedNotificationSchema = NotificationSchema.extend({
  method: external_exports.literal("notifications/roots/list_changed")
});
var ClientRequestSchema = external_exports.union([
  PingRequestSchema,
  InitializeRequestSchema,
  CompleteRequestSchema,
  SetLevelRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  SubscribeRequestSchema,
  UnsubscribeRequestSchema,
  CallToolRequestSchema,
  ListToolsRequestSchema
]);
var ClientNotificationSchema = external_exports.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  InitializedNotificationSchema,
  RootsListChangedNotificationSchema
]);
var ClientResultSchema = external_exports.union([
  EmptyResultSchema,
  CreateMessageResultSchema,
  ListRootsResultSchema
]);
var ServerRequestSchema = external_exports.union([
  PingRequestSchema,
  CreateMessageRequestSchema,
  ListRootsRequestSchema
]);
var ServerNotificationSchema = external_exports.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  LoggingMessageNotificationSchema,
  ResourceUpdatedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  PromptListChangedNotificationSchema
]);
var ServerResultSchema = external_exports.union([
  EmptyResultSchema,
  InitializeResultSchema,
  CompleteResultSchema,
  GetPromptResultSchema,
  ListPromptsResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  CallToolResultSchema,
  ListToolsResultSchema
]);
var McpError = class extends Error {
  constructor(code, message, data) {
    super(`MCP error ${code}: ${message}`);
    this.code = code;
    this.data = data;
    this.name = "McpError";
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js
var DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4;
var Protocol = class {
  constructor(_options) {
    this._options = _options;
    this._requestMessageId = 0;
    this._requestHandlers = /* @__PURE__ */ new Map();
    this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
    this._notificationHandlers = /* @__PURE__ */ new Map();
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers = /* @__PURE__ */ new Map();
    this._timeoutInfo = /* @__PURE__ */ new Map();
    this.setNotificationHandler(CancelledNotificationSchema, (notification) => {
      const controller = this._requestHandlerAbortControllers.get(notification.params.requestId);
      controller === null || controller === void 0 ? void 0 : controller.abort(notification.params.reason);
    });
    this.setNotificationHandler(ProgressNotificationSchema, (notification) => {
      this._onprogress(notification);
    });
    this.setRequestHandler(
      PingRequestSchema,
      // Automatic pong by default.
      (_request) => ({})
    );
  }
  _setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
    this._timeoutInfo.set(messageId, {
      timeoutId: setTimeout(onTimeout, timeout),
      startTime: Date.now(),
      timeout,
      maxTotalTimeout,
      resetTimeoutOnProgress,
      onTimeout
    });
  }
  _resetTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (!info)
      return false;
    const totalElapsed = Date.now() - info.startTime;
    if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout) {
      this._timeoutInfo.delete(messageId);
      throw new McpError(ErrorCode.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: info.maxTotalTimeout, totalElapsed });
    }
    clearTimeout(info.timeoutId);
    info.timeoutId = setTimeout(info.onTimeout, info.timeout);
    return true;
  }
  _cleanupTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (info) {
      clearTimeout(info.timeoutId);
      this._timeoutInfo.delete(messageId);
    }
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    this._transport = transport;
    this._transport.onclose = () => {
      this._onclose();
    };
    this._transport.onerror = (error) => {
      this._onerror(error);
    };
    this._transport.onmessage = (message, extra) => {
      if (isJSONRPCResponse(message) || isJSONRPCError(message)) {
        this._onresponse(message);
      } else if (isJSONRPCRequest(message)) {
        this._onrequest(message, extra);
      } else if (isJSONRPCNotification(message)) {
        this._onnotification(message);
      } else {
        this._onerror(new Error(`Unknown message type: ${JSON.stringify(message)}`));
      }
    };
    await this._transport.start();
  }
  _onclose() {
    var _a;
    const responseHandlers = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers.clear();
    this._transport = void 0;
    (_a = this.onclose) === null || _a === void 0 ? void 0 : _a.call(this);
    const error = new McpError(ErrorCode.ConnectionClosed, "Connection closed");
    for (const handler of responseHandlers.values()) {
      handler(error);
    }
  }
  _onerror(error) {
    var _a;
    (_a = this.onerror) === null || _a === void 0 ? void 0 : _a.call(this, error);
  }
  _onnotification(notification) {
    var _a;
    const handler = (_a = this._notificationHandlers.get(notification.method)) !== null && _a !== void 0 ? _a : this.fallbackNotificationHandler;
    if (handler === void 0) {
      return;
    }
    Promise.resolve().then(() => handler(notification)).catch((error) => this._onerror(new Error(`Uncaught error in notification handler: ${error}`)));
  }
  _onrequest(request, extra) {
    var _a, _b, _c, _d;
    const handler = (_a = this._requestHandlers.get(request.method)) !== null && _a !== void 0 ? _a : this.fallbackRequestHandler;
    if (handler === void 0) {
      (_b = this._transport) === null || _b === void 0 ? void 0 : _b.send({
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: ErrorCode.MethodNotFound,
          message: "Method not found"
        }
      }).catch((error) => this._onerror(new Error(`Failed to send an error response: ${error}`)));
      return;
    }
    const abortController = new AbortController();
    this._requestHandlerAbortControllers.set(request.id, abortController);
    const fullExtra = {
      signal: abortController.signal,
      sessionId: (_c = this._transport) === null || _c === void 0 ? void 0 : _c.sessionId,
      _meta: (_d = request.params) === null || _d === void 0 ? void 0 : _d._meta,
      sendNotification: (notification) => this.notification(notification, { relatedRequestId: request.id }),
      sendRequest: (r, resultSchema, options) => this.request(r, resultSchema, { ...options, relatedRequestId: request.id }),
      authInfo: extra === null || extra === void 0 ? void 0 : extra.authInfo,
      requestId: request.id
    };
    Promise.resolve().then(() => handler(request, fullExtra)).then((result) => {
      var _a2;
      if (abortController.signal.aborted) {
        return;
      }
      return (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.send({
        result,
        jsonrpc: "2.0",
        id: request.id
      });
    }, (error) => {
      var _a2, _b2;
      if (abortController.signal.aborted) {
        return;
      }
      return (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.send({
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: Number.isSafeInteger(error["code"]) ? error["code"] : ErrorCode.InternalError,
          message: (_b2 = error.message) !== null && _b2 !== void 0 ? _b2 : "Internal error"
        }
      });
    }).catch((error) => this._onerror(new Error(`Failed to send response: ${error}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(request.id);
    });
  }
  _onprogress(notification) {
    const { progressToken, ...params } = notification.params;
    const messageId = Number(progressToken);
    const handler = this._progressHandlers.get(messageId);
    if (!handler) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
      return;
    }
    const responseHandler = this._responseHandlers.get(messageId);
    const timeoutInfo = this._timeoutInfo.get(messageId);
    if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) {
      try {
        this._resetTimeout(messageId);
      } catch (error) {
        responseHandler(error);
        return;
      }
    }
    handler(params);
  }
  _onresponse(response) {
    const messageId = Number(response.id);
    const handler = this._responseHandlers.get(messageId);
    if (handler === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
      return;
    }
    this._responseHandlers.delete(messageId);
    this._progressHandlers.delete(messageId);
    this._cleanupTimeout(messageId);
    if (isJSONRPCResponse(response)) {
      handler(response);
    } else {
      const error = new McpError(response.error.code, response.error.message, response.error.data);
      handler(error);
    }
  }
  get transport() {
    return this._transport;
  }
  /**
   * Closes the connection.
   */
  async close() {
    var _a;
    await ((_a = this._transport) === null || _a === void 0 ? void 0 : _a.close());
  }
  /**
   * Sends a request and wait for a response.
   *
   * Do not use this method to emit notifications! Use notification() instead.
   */
  request(request, resultSchema, options) {
    const { relatedRequestId, resumptionToken, onresumptiontoken } = options !== null && options !== void 0 ? options : {};
    return new Promise((resolve2, reject) => {
      var _a, _b, _c, _d, _e, _f;
      if (!this._transport) {
        reject(new Error("Not connected"));
        return;
      }
      if (((_a = this._options) === null || _a === void 0 ? void 0 : _a.enforceStrictCapabilities) === true) {
        this.assertCapabilityForMethod(request.method);
      }
      (_b = options === null || options === void 0 ? void 0 : options.signal) === null || _b === void 0 ? void 0 : _b.throwIfAborted();
      const messageId = this._requestMessageId++;
      const jsonrpcRequest = {
        ...request,
        jsonrpc: "2.0",
        id: messageId
      };
      if (options === null || options === void 0 ? void 0 : options.onprogress) {
        this._progressHandlers.set(messageId, options.onprogress);
        jsonrpcRequest.params = {
          ...request.params,
          _meta: {
            ...((_c = request.params) === null || _c === void 0 ? void 0 : _c._meta) || {},
            progressToken: messageId
          }
        };
      }
      const cancel = (reason) => {
        var _a2;
        this._responseHandlers.delete(messageId);
        this._progressHandlers.delete(messageId);
        this._cleanupTimeout(messageId);
        (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: messageId,
            reason: String(reason)
          }
        }, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error) => this._onerror(new Error(`Failed to send cancellation: ${error}`)));
        reject(reason);
      };
      this._responseHandlers.set(messageId, (response) => {
        var _a2;
        if ((_a2 = options === null || options === void 0 ? void 0 : options.signal) === null || _a2 === void 0 ? void 0 : _a2.aborted) {
          return;
        }
        if (response instanceof Error) {
          return reject(response);
        }
        try {
          const result = resultSchema.parse(response.result);
          resolve2(result);
        } catch (error) {
          reject(error);
        }
      });
      (_d = options === null || options === void 0 ? void 0 : options.signal) === null || _d === void 0 ? void 0 : _d.addEventListener("abort", () => {
        var _a2;
        cancel((_a2 = options === null || options === void 0 ? void 0 : options.signal) === null || _a2 === void 0 ? void 0 : _a2.reason);
      });
      const timeout = (_e = options === null || options === void 0 ? void 0 : options.timeout) !== null && _e !== void 0 ? _e : DEFAULT_REQUEST_TIMEOUT_MSEC;
      const timeoutHandler = () => cancel(new McpError(ErrorCode.RequestTimeout, "Request timed out", { timeout }));
      this._setupTimeout(messageId, timeout, options === null || options === void 0 ? void 0 : options.maxTotalTimeout, timeoutHandler, (_f = options === null || options === void 0 ? void 0 : options.resetTimeoutOnProgress) !== null && _f !== void 0 ? _f : false);
      this._transport.send(jsonrpcRequest, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error) => {
        this._cleanupTimeout(messageId);
        reject(error);
      });
    });
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(notification, options) {
    if (!this._transport) {
      throw new Error("Not connected");
    }
    this.assertNotificationCapability(notification.method);
    const jsonrpcNotification = {
      ...notification,
      jsonrpc: "2.0"
    };
    await this._transport.send(jsonrpcNotification, options);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a request with the given method.
   *
   * Note that this will replace any previous request handler for the same method.
   */
  setRequestHandler(requestSchema, handler) {
    const method = requestSchema.shape.method.value;
    this.assertRequestHandlerCapability(method);
    this._requestHandlers.set(method, (request, extra) => {
      return Promise.resolve(handler(requestSchema.parse(request), extra));
    });
  }
  /**
   * Removes the request handler for the given method.
   */
  removeRequestHandler(method) {
    this._requestHandlers.delete(method);
  }
  /**
   * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
   */
  assertCanSetRequestHandler(method) {
    if (this._requestHandlers.has(method)) {
      throw new Error(`A request handler for ${method} already exists, which would be overridden`);
    }
  }
  /**
   * Registers a handler to invoke when this protocol object receives a notification with the given method.
   *
   * Note that this will replace any previous notification handler for the same method.
   */
  setNotificationHandler(notificationSchema, handler) {
    this._notificationHandlers.set(notificationSchema.shape.method.value, (notification) => Promise.resolve(handler(notificationSchema.parse(notification))));
  }
  /**
   * Removes the notification handler for the given method.
   */
  removeNotificationHandler(method) {
    this._notificationHandlers.delete(method);
  }
};
function mergeCapabilities(base, additional) {
  return Object.entries(additional).reduce((acc, [key, value]) => {
    if (value && typeof value === "object") {
      acc[key] = acc[key] ? { ...acc[key], ...value } : value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, { ...base });
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js
var Server = class extends Protocol {
  /**
   * Initializes this server with the given name and version information.
   */
  constructor(_serverInfo, options) {
    var _a;
    super(options);
    this._serverInfo = _serverInfo;
    this._capabilities = (_a = options === null || options === void 0 ? void 0 : options.capabilities) !== null && _a !== void 0 ? _a : {};
    this._instructions = options === null || options === void 0 ? void 0 : options.instructions;
    this.setRequestHandler(InitializeRequestSchema, (request) => this._oninitialize(request));
    this.setNotificationHandler(InitializedNotificationSchema, () => {
      var _a2;
      return (_a2 = this.oninitialized) === null || _a2 === void 0 ? void 0 : _a2.call(this);
    });
  }
  /**
   * Registers new capabilities. This can only be called before connecting to a transport.
   *
   * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
   */
  registerCapabilities(capabilities) {
    if (this.transport) {
      throw new Error("Cannot register capabilities after connecting to transport");
    }
    this._capabilities = mergeCapabilities(this._capabilities, capabilities);
  }
  assertCapabilityForMethod(method) {
    var _a, _b;
    switch (method) {
      case "sampling/createMessage":
        if (!((_a = this._clientCapabilities) === null || _a === void 0 ? void 0 : _a.sampling)) {
          throw new Error(`Client does not support sampling (required for ${method})`);
        }
        break;
      case "roots/list":
        if (!((_b = this._clientCapabilities) === null || _b === void 0 ? void 0 : _b.roots)) {
          throw new Error(`Client does not support listing roots (required for ${method})`);
        }
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(method) {
    switch (method) {
      case "notifications/message":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support notifying about resources (required for ${method})`);
        }
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support notifying of tool list changes (required for ${method})`);
        }
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support notifying of prompt list changes (required for ${method})`);
        }
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(method) {
    switch (method) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) {
          throw new Error(`Server does not support sampling (required for ${method})`);
        }
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support prompts (required for ${method})`);
        }
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support resources (required for ${method})`);
        }
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support tools (required for ${method})`);
        }
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  async _oninitialize(request) {
    const requestedVersion = request.params.protocolVersion;
    this._clientCapabilities = request.params.capabilities;
    this._clientVersion = request.params.clientInfo;
    return {
      protocolVersion: SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion) ? requestedVersion : LATEST_PROTOCOL_VERSION,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...this._instructions && { instructions: this._instructions }
    };
  }
  /**
   * After initialization has completed, this will be populated with the client's reported capabilities.
   */
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  /**
   * After initialization has completed, this will be populated with information about the client's name and version.
   */
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, EmptyResultSchema);
  }
  async createMessage(params, options) {
    return this.request({ method: "sampling/createMessage", params }, CreateMessageResultSchema, options);
  }
  async listRoots(params, options) {
    return this.request({ method: "roots/list", params }, ListRootsResultSchema, options);
  }
  async sendLoggingMessage(params) {
    return this.notification({ method: "notifications/message", params });
  }
  async sendResourceUpdated(params) {
    return this.notification({
      method: "notifications/resources/updated",
      params
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
var import_node_process = __toESM(require("node:process"), 1);

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/stdio.js
var ReadBuffer = class {
  append(chunk) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, chunk]) : chunk;
  }
  readMessage() {
    if (!this._buffer) {
      return null;
    }
    const index = this._buffer.indexOf("\n");
    if (index === -1) {
      return null;
    }
    const line = this._buffer.toString("utf8", 0, index).replace(/\r$/, "");
    this._buffer = this._buffer.subarray(index + 1);
    return deserializeMessage(line);
  }
  clear() {
    this._buffer = void 0;
  }
};
function deserializeMessage(line) {
  return JSONRPCMessageSchema.parse(JSON.parse(line));
}
function serializeMessage(message) {
  return JSON.stringify(message) + "\n";
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
var StdioServerTransport = class {
  constructor(_stdin = import_node_process.default.stdin, _stdout = import_node_process.default.stdout) {
    this._stdin = _stdin;
    this._stdout = _stdout;
    this._readBuffer = new ReadBuffer();
    this._started = false;
    this._ondata = (chunk) => {
      this._readBuffer.append(chunk);
      this.processReadBuffer();
    };
    this._onerror = (error) => {
      var _a;
      (_a = this.onerror) === null || _a === void 0 ? void 0 : _a.call(this, error);
    };
  }
  /**
   * Starts listening for messages on stdin.
   */
  async start() {
    if (this._started) {
      throw new Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    }
    this._started = true;
    this._stdin.on("data", this._ondata);
    this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    var _a, _b;
    while (true) {
      try {
        const message = this._readBuffer.readMessage();
        if (message === null) {
          break;
        }
        (_a = this.onmessage) === null || _a === void 0 ? void 0 : _a.call(this, message);
      } catch (error) {
        (_b = this.onerror) === null || _b === void 0 ? void 0 : _b.call(this, error);
      }
    }
  }
  async close() {
    var _a;
    this._stdin.off("data", this._ondata);
    this._stdin.off("error", this._onerror);
    const remainingDataListeners = this._stdin.listenerCount("data");
    if (remainingDataListeners === 0) {
      this._stdin.pause();
    }
    this._readBuffer.clear();
    (_a = this.onclose) === null || _a === void 0 ? void 0 : _a.call(this);
  }
  send(message) {
    return new Promise((resolve2) => {
      const json = serializeMessage(message);
      if (this._stdout.write(json)) {
        resolve2();
      } else {
        this._stdout.once("drain", resolve2);
      }
    });
  }
};

// src/caddy-mcp/server.ts
var fs6 = __toESM(require("fs"));
var path7 = __toESM(require("path"));

// src/caddy-mcp/notion-gen.ts
var import_child_process = require("child_process");
var http = __toESM(require("http"));
var fs3 = __toESM(require("fs"));

// src/caddy-mcp/remote.ts
var fs2 = __toESM(require("fs"));
var os2 = __toESM(require("os"));
var path2 = __toESM(require("path"));

// src/caddy-mcp/device.ts
var fs = __toESM(require("fs"));
var os = __toESM(require("os"));
var path = __toESM(require("path"));
var PORTALS = {
  prod: "https://portal-production-e91b.up.railway.app",
  production: "https://portal-production-e91b.up.railway.app",
  dev: "https://portal-dev-3b3b.up.railway.app"
};
var DEFAULT_PORTAL = process.env.CADDY_PORTAL || PORTALS.prod;
function resolvePortal(input) {
  if (!input) return void 0;
  return PORTALS[input.toLowerCase().trim()] || input;
}
function credentialsFile() {
  return path.join(os.homedir(), ".caddy", "credentials.json");
}
function loadCredentials() {
  try {
    const raw = JSON.parse(fs.readFileSync(credentialsFile(), "utf8"));
    if (raw && typeof raw.url === "string" && raw.orgs && Object.keys(raw.orgs).length) return raw;
  } catch {
  }
  return null;
}
function saveCredentials(store) {
  const file = credentialsFile();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(store, null, 2), { mode: 384 });
  try {
    fs.chmodSync(file, 384);
  } catch {
  }
}
var pending = null;
function pendingFile() {
  return path.join(os.homedir(), ".caddy", "pending-login.json");
}
function loadPending() {
  if (pending) return pending;
  try {
    const raw = JSON.parse(fs.readFileSync(pendingFile(), "utf8"));
    if (raw && raw.deviceCode && raw.url) {
      pending = raw;
      return pending;
    }
  } catch {
  }
  return null;
}
function savePending(p) {
  pending = p;
  const file = pendingFile();
  if (p === null) {
    try {
      fs.unlinkSync(file);
    } catch {
    }
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(p), { mode: 384 });
  try {
    fs.chmodSync(file, 384);
  } catch {
  }
}
async function graphLogin(a) {
  const url = (resolvePortal(a.portal) || loadCredentials()?.url || DEFAULT_PORTAL).replace(/\/+$/, "");
  const label = a.label || os.hostname();
  const r = await fetch(`${url}/api/device/code`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ label })
  });
  if (!r.ok) throw new Error(`portal /api/device/code returned ${r.status}`);
  const d = await r.json();
  savePending({
    url,
    deviceCode: d.device_code,
    userCode: d.user_code,
    verificationUri: d.verification_uri_complete,
    interval: d.interval || 5,
    expiresAt: Date.now() + (d.expires_in || 600) * 1e3,
    lastPollAt: 0
  });
  return {
    status: "waiting_for_authorization",
    authorize_url: d.verification_uri_complete,
    user_code: d.user_code,
    expires_in: d.expires_in,
    device_code: d.device_code,
    portal: url,
    instructions: "Surface authorize_url for the user to click (their code is prefilled; they log in, pick which orgs to grant, approve). Then IMMEDIATELY call graph_auth_status with wait_seconds: 120 AND this result's device_code + portal (they let the poll resume even if this server process restarts). Repeat until it stops returning waiting_for_authorization."
  };
}
async function graphAuthStatus(a = {}) {
  if (a.device_code && a.portal) {
    const url = (resolvePortal(a.portal) || a.portal).replace(/\/+$/, "");
    const cur = loadPending();
    if (!cur || cur.deviceCode !== a.device_code) {
      savePending({
        url,
        deviceCode: a.device_code,
        userCode: "",
        verificationUri: "",
        interval: 5,
        // Local ceiling only — the portal's expired_token verdict is authoritative.
        expiresAt: Date.now() + 15 * 60 * 1e3,
        lastPollAt: 0
      });
    }
  }
  const waitMs = Math.min(Math.max(a.wait_seconds ?? 0, 0), 570) * 1e3;
  const deadline = Date.now() + waitMs;
  let result = await pollAuthOnce();
  while (result.status === "waiting_for_authorization" && Date.now() < deadline) {
    result = await pollAuthOnce();
  }
  return result;
}
async function pollAuthOnce() {
  const p = loadPending();
  if (!p) {
    const creds = loadCredentials();
    return creds ? { status: "authenticated", url: creds.url, orgs: Object.keys(creds.orgs) } : { status: "no_pending_login", hint: "Run graph_login first." };
  }
  if (Date.now() > p.expiresAt) {
    savePending(null);
    return { status: "expired", hint: "The code expired. Run graph_login again." };
  }
  const wait = p.lastPollAt + p.interval * 1e3 - Date.now();
  if (wait > 0) await new Promise((res) => setTimeout(res, wait));
  p.lastPollAt = Date.now();
  savePending(p);
  const r = await fetch(`${p.url}/api/device/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ device_code: p.deviceCode })
  });
  const d = await r.json().catch(() => ({}));
  if (r.ok && d.orgs) {
    const existing = loadCredentials();
    const url = p.url;
    const store = {
      url,
      // Merge with existing grants for the same portal; a different portal replaces the store.
      orgs: { ...existing && existing.url === url ? existing.orgs : {}, ...d.orgs },
      obtained_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    saveCredentials(store);
    savePending(null);
    return { status: "authenticated", url: store.url, orgs: Object.keys(store.orgs), store: credentialsFile() };
  }
  switch (d.error) {
    case "authorization_pending":
    case "slow_down":
      return {
        status: "waiting_for_authorization",
        authorize_url: p.verificationUri,
        user_code: p.userCode,
        expires_in_seconds: Math.max(0, Math.round((p.expiresAt - Date.now()) / 1e3))
      };
    case "expired_token":
      savePending(null);
      return { status: "expired", hint: "The code expired. Run graph_login again." };
    case "access_denied":
      savePending(null);
      return { status: "denied", hint: "The request was denied in the portal." };
    default:
      savePending(null);
      return { status: "error", error: d.error || `HTTP ${r.status}` };
  }
}

// src/caddy-mcp/remote.ts
var REMEMBERED_G = "http://ops-sys.local/graph#remembered";
function migrateInlineRememberedFacts(graphFile) {
  if (!fs2.existsSync(graphFile)) return 0;
  const remembered = fs2.readFileSync(graphFile, "utf-8").split("\n").filter((l) => l.includes(`<${REMEMBERED_G}>`));
  if (!remembered.length) return 0;
  const overlayFile = graphFile.replace(/\.nq$/, ".local.nq");
  const existing = fs2.existsSync(overlayFile) ? fs2.readFileSync(overlayFile, "utf-8") : "";
  const fresh = remembered.filter((l) => !existing.includes(l));
  if (!fresh.length) return 0;
  fs2.appendFileSync(overlayFile, (existing && !existing.endsWith("\n") ? "\n" : "") + fresh.join("\n") + "\n");
  return fresh.length;
}
function hasCredentials() {
  return loadCredentials() !== null;
}
function cacheDir() {
  const env = process.env.GRAPH_DIR;
  if (env) return env.split(path2.delimiter).filter(Boolean)[0];
  return path2.join(os2.homedir(), ".caddy", "graphs");
}
async function remotePull(force = false, org, kind, destDir) {
  const creds = loadCredentials();
  if (!creds) {
    return { status: "auth_required", hint: "Not connected to the portal. Run graph_login." };
  }
  const slugs = Object.keys(creds.orgs);
  const slug = org || (slugs.length === 1 ? slugs[0] : null);
  if (!slug) {
    return { status: "org_required", orgs: slugs, hint: "Pass org: one of the listed slugs." };
  }
  const token = creds.orgs[slug];
  if (!token) {
    return { status: "unknown_org", org: slug, orgs: slugs, hint: `No credentials for org "${slug}". Run graph_login and grant it.` };
  }
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/json" };
  const dir = destDir || cacheDir();
  if (kind && kind !== "company") {
    const kindResponse = await fetch(`${creds.url}/api/orgs/${slug}/graphs/${kind}`, { headers });
    if (kindResponse.status === 403) {
      return { status: "not_shared", org: slug, kind, hint: "This source graph has not been shared with your seat." };
    }
    if (kindResponse.status === 401) {
      return { status: "auth_required", org: slug, hint: "Credentials revoked or expired. Run graph_login again." };
    }
    if (kindResponse.status === 404) {
      return { status: "not_found", org: slug, kind };
    }
    if (!kindResponse.ok) throw new Error(`portal /graphs/${kind} returned ${kindResponse.status}`);
    const kindBody = Buffer.from(await kindResponse.arrayBuffer());
    fs2.mkdirSync(dir, { recursive: true });
    const kindFile = path2.join(dir, `remote-${slug}-${kind}.nq`);
    fs2.writeFileSync(kindFile + ".tmp", kindBody);
    fs2.renameSync(kindFile + ".tmp", kindFile);
    return { status: "pulled", org: slug, kind, bytes: kindBody.length, file: kindFile, semver: kindResponse.headers.get("x-graph-semver") };
  }
  const graphFile = path2.join(dir, `remote-${slug}.nq`);
  const metaFile = path2.join(dir, `remote-${slug}.meta.json`);
  const overlayFile = path2.join(dir, `remote-${slug}.local.nq`);
  const versionResponse = await fetch(`${creds.url}/api/orgs/${slug}/graph/version`, { headers });
  if (versionResponse.status === 401 || versionResponse.status === 403) {
    return { status: "auth_required", org: slug, hint: "Credentials revoked or expired. Run graph_login again." };
  }
  if (versionResponse.status === 404) return { status: "no_graph_yet", org: slug, hint: "Generate a graph in the portal first." };
  if (!versionResponse.ok) throw new Error(`portal /graph/version returned ${versionResponse.status}`);
  const remote = await versionResponse.json();
  if (!force && fs2.existsSync(graphFile) && fs2.existsSync(metaFile)) {
    try {
      const meta = JSON.parse(fs2.readFileSync(metaFile, "utf8"));
      if (meta.version === remote.version) {
        return { status: "fresh", org: slug, version: remote.version, semver: remote.semver ?? null, file: graphFile };
      }
    } catch {
    }
  }
  const graphResponse = await fetch(`${creds.url}/api/orgs/${slug}/graph`, { headers });
  if (graphResponse.status === 401 || graphResponse.status === 403) {
    return { status: "auth_required", org: slug, hint: "Credentials revoked or expired. Run graph_login again." };
  }
  if (graphResponse.status === 409) {
    return { status: "refresh_required", org: slug, hint: "The portal holds no copy (pass-through delivery). Run graph_refresh to generate and pull a fresh graph." };
  }
  if (!graphResponse.ok) throw new Error(`portal /graph returned ${graphResponse.status}`);
  const body = Buffer.from(await graphResponse.arrayBuffer());
  fs2.mkdirSync(dir, { recursive: true });
  let previousVersion = null;
  let migratedFacts = 0;
  if (fs2.existsSync(graphFile)) {
    try {
      previousVersion = JSON.parse(fs2.readFileSync(metaFile, "utf8")).version ?? null;
    } catch {
    }
    migratedFacts = migrateInlineRememberedFacts(graphFile);
    if (previousVersion !== null && previousVersion !== remote.version) {
      fs2.copyFileSync(graphFile, path2.join(dir, `remote-${slug}.v${previousVersion}.nq`));
      const history = fs2.readdirSync(dir).filter((f) => f.startsWith(`remote-${slug}.v`) && /\.v\d+\.nq$/.test(f)).map((f) => ({ f, v: parseInt(/\.v(\d+)\.nq$/.exec(f)?.[1] || "0", 10) })).sort((a, b) => b.v - a.v);
      for (const h of history.slice(2)) fs2.unlinkSync(path2.join(dir, h.f));
    }
  }
  fs2.writeFileSync(graphFile + ".tmp", body);
  fs2.renameSync(graphFile + ".tmp", graphFile);
  fs2.writeFileSync(metaFile, JSON.stringify({
    version: remote.version,
    semver: remote.semver ?? null,
    etag: graphResponse.headers.get("etag"),
    pulledAt: (/* @__PURE__ */ new Date()).toISOString(),
    url: creds.url
  }, null, 2));
  const overlayLines = fs2.existsSync(overlayFile) ? fs2.readFileSync(overlayFile, "utf-8").split("\n").filter((l) => l.trim()).length : 0;
  return {
    status: "pulled",
    org: slug,
    version: remote.version,
    semver: remote.semver ?? null,
    previous_version: previousVersion,
    bytes: body.length,
    file: graphFile,
    local_overlay: overlayLines ? { file: overlayFile, lines: overlayLines, migrated_inline_facts: migratedFacts } : null,
    note: "Source artifact replaced; local overlay (Cowork-added knowledge) untouched and unioned at query time."
  };
}
async function remotePullAll() {
  const creds = loadCredentials();
  if (!creds) return [{ status: "auth_required", hint: "Run graph_login." }];
  const results = [];
  for (const slug of Object.keys(creds.orgs)) {
    try {
      results.push(await remotePull(false, slug));
    } catch (e) {
      results.push({ status: "error", org: slug, error: String(e?.message || e) });
    }
  }
  return results;
}

// src/caddy-mcp/notion-gen.ts
var path3 = __toESM(require("path"));
var NOTION_BUNDLE = path3.join(__dirname, "notion-snapshot.cjs");
var PORT = parseInt(process.env.NOTION_OAUTH_PORT || "8735", 10);
var IS_WSL = process.platform === "linux" && (!!process.env.WSL_DISTRO_NAME || (() => {
  try {
    return fs3.readFileSync("/proc/version", "utf-8").toLowerCase().includes("microsoft");
  } catch {
    return false;
  }
})());
function toWslPath(p) {
  if (!IS_WSL) return p;
  const m = /^([A-Za-z]):[\\/](.*)$/.exec(p);
  if (m) return `/mnt/${m[1].toLowerCase()}/${m[2].replace(/\\/g, "/")}`;
  return p;
}
function isUnscannable(dir) {
  const norm = path3.resolve(dir);
  if (norm === path3.parse(norm).root) return true;
  if (process.platform !== "win32") return false;
  const windir = process.env.SystemRoot || process.env.windir || "C:\\Windows";
  return norm.toLowerCase().startsWith(path3.resolve(windir).toLowerCase());
}
function readToken(tokenFile) {
  if (!fs3.existsSync(tokenFile)) return null;
  const t = fs3.readFileSync(tokenFile, "utf-8").trim();
  return t || null;
}
async function preflight(token) {
  try {
    const r = await fetch("https://api.notion.com/v1/users/me", {
      headers: { Authorization: `Bearer ${token}`, "Notion-Version": "2022-06-28" }
    });
    if (!r.ok) return { ok: false, status: r.status, body: (await r.text()).slice(0, 160) };
    const d = await r.json();
    return { ok: true, status: 200, workspace: d?.bot?.workspace_name };
  } catch (e) {
    return { ok: false, status: 0, body: String(e?.message || e) };
  }
}
var pending2 = null;
function notionAuthorize(a) {
  if (!a.project_dir) throw new Error("project_dir is required");
  const clientId = a.client_id || process.env.NOTION_CLIENT_ID;
  const clientSecret = a.client_secret || process.env.NOTION_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error("Notion OAuth client_id/client_secret required (env NOTION_CLIENT_ID/SECRET or args)");
  const dir = toWslPath(a.project_dir);
  const port = a.port || PORT;
  const redirectUri = `http://localhost:${port}/callback`;
  const tokenFile = path3.join(dir, ".notion-token");
  const authUrl = `https://api.notion.com/v1/oauth/authorize?client_id=${encodeURIComponent(clientId)}&response_type=code&owner=user&redirect_uri=${encodeURIComponent(redirectUri)}`;
  pending2 = { started: Date.now(), tokenFile, done: false };
  const server = http.createServer(async (req, res) => {
    const u = new URL(req.url || "", `http://localhost:${port}`);
    if (u.pathname !== "/callback") {
      res.writeHead(404);
      res.end();
      return;
    }
    const code = u.searchParams.get("code");
    const err = u.searchParams.get("error");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<html><body style="font-family:system-ui;padding:3rem;text-align:center"><h2>${code ? "Authorized \u2713" : "Authorization failed"}</h2><p>${code ? "Close this tab and return to Cowork." : err}</p></body></html>`);
    server.close();
    if (!code) {
      pending2 = { ...pending2, done: true, error: `OAuth error: ${err}` };
      return;
    }
    try {
      const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
      const r = await fetch("https://api.notion.com/v1/oauth/token", {
        method: "POST",
        headers: { Authorization: `Basic ${basic}`, "Content-Type": "application/json", "Notion-Version": "2022-06-28" },
        body: JSON.stringify({ grant_type: "authorization_code", code, redirect_uri: redirectUri })
      });
      if (!r.ok) throw new Error(`token exchange ${r.status}: ${(await r.text()).slice(0, 200)}`);
      const tok = await r.json();
      if (!tok.access_token) throw new Error("token exchange returned no access_token");
      fs3.writeFileSync(tokenFile, tok.access_token, { mode: 384 });
      pending2 = { ...pending2, done: true, workspace: tok.workspace_name || "workspace" };
    } catch (e) {
      pending2 = { ...pending2, done: true, error: String(e?.message || e) };
    }
  });
  server.on("error", (e) => {
    pending2 = { ...pending2, done: true, error: `listener: ${e?.message}` };
  });
  server.listen(port);
  setTimeout(() => {
    try {
      server.close();
    } catch {
    }
  }, 3e5);
  return {
    status: "waiting_for_authorization",
    authorize_url: authUrl,
    instructions: "Surface authorize_url for the user to click and pick the workspace. Then call notion_auth_status until it reports authorized.",
    redirect_uri: redirectUri
  };
}
function notionAuthStatus() {
  if (!pending2) return { status: "no_pending_authorization" };
  if (!pending2.done) return { status: "waiting_for_authorization", waited_seconds: Math.round((Date.now() - pending2.started) / 1e3) };
  if (pending2.error) return { status: "error", error: pending2.error };
  return { status: "authorized", workspace: pending2.workspace, token_saved: fs3.existsSync(pending2.tokenFile) };
}
function logPath(dir) {
  return path3.join(dir, ".notion-refresh.log");
}
async function generateNotionGraph(a) {
  if (!a.project_dir) throw new Error("project_dir is required");
  const dir = toWslPath(a.project_dir);
  const tokenFile = a.token_file ? toWslPath(a.token_file) : path3.join(dir, ".notion-token");
  const token = readToken(tokenFile);
  if (!token) return { status: "auth_required", hint: `No token at ${tokenFile}. Call notion_authorize first.` };
  const pf = await preflight(token);
  if (!pf.ok) {
    return pf.status === 401 ? { status: "reauthorize_required", detail: `Notion rejected the saved token (401). Run notion_authorize to mint a fresh one. (${pf.body})` } : { status: "notion_unreachable", detail: `Preflight failed (HTTP ${pf.status}): ${pf.body}` };
  }
  const content = a.content !== false;
  let migratedFacts = 0;
  for (const scanDir of [dir, path3.join(dir, "graphs")]) {
    if (!fs3.existsSync(scanDir)) continue;
    for (const f of fs3.readdirSync(scanDir)) {
      if (/^notion-.*\.nq$/.test(f) && !f.endsWith(".local.nq")) {
        migratedFacts += migrateInlineRememberedFacts(path3.join(scanDir, f));
      }
    }
  }
  const log = logPath(dir);
  fs3.writeFileSync(log, `${(/* @__PURE__ */ new Date()).toISOString()} refresh start (workspace: ${pf.workspace}, depth: ${content ? "content" : "structure"})
`);
  const args = [NOTION_BUNDLE, "--token-file", tokenFile, "--out", dir, ...content ? ["--content"] : []];
  const fd = fs3.openSync(log, "a");
  const child = (0, import_child_process.spawn)("node", args, { cwd: dir, detached: true, stdio: ["ignore", fd, fd], env: process.env });
  child.unref();
  fs3.closeSync(fd);
  return {
    status: "refresh_started",
    workspace: pf.workspace,
    depth: content ? "content" : "structure",
    migrated_inline_facts: migratedFacts,
    note: "A content refresh runs for a few minutes. Call generate_notion_status to check progress/result. Live-added knowledge lives in the .local.nq overlay and survives the refresh.",
    log
  };
}
function generateNotionStatus(a) {
  if (!a.project_dir) throw new Error("project_dir is required");
  const dir = toWslPath(a.project_dir);
  const log = logPath(dir);
  if (!fs3.existsSync(log)) return { status: "no_refresh_found" };
  const text = fs3.readFileSync(log, "utf-8");
  const done = text.split("\n").find((l) => l.includes("Done \u2014"));
  const fatal = text.split("\n").find((l) => l.includes("FATAL"));
  const graph = text.split("\n").find((l) => l.includes("Graph emitted"))?.replace(/.*Graph emitted: /, "");
  if (fatal) return { status: "failed", detail: fatal.replace(/.*FATAL: /, "").slice(0, 300) };
  if (done) return { status: "done", summary: done.replace(/.*\] /, ""), graph };
  const last = text.trim().split("\n").slice(-1)[0];
  return { status: "running", last_line: last.replace(/.*\] /, "") };
}

// src/caddy-mcp/refresh.ts
var path4 = __toESM(require("path"));
var active = /* @__PURE__ */ new Map();
var POLL_MS = 1e4;
var TIMEOUT_MS = 30 * 6e4;
function destFor(a) {
  return a.project_dir ? path4.join(toWslPath(a.project_dir), "graphs") : void 0;
}
async function graphRefresh(a) {
  const creds = loadCredentials();
  if (!creds) return { status: "auth_required", hint: "Not connected to the portal. Run graph_login." };
  const slugs = Object.keys(creds.orgs);
  const slug = a.org || (slugs.length === 1 ? slugs[0] : null);
  if (!slug) return { status: "org_required", orgs: slugs, hint: "Pass org: one of the listed slugs." };
  const token = creds.orgs[slug];
  if (!token) return { status: "unknown_org", org: slug, orgs: slugs, hint: `No credentials for org "${slug}". Run graph_login and grant it.` };
  const running = active.get(slug);
  if (running && (running.phase === "queued" || running.phase === "generating" || running.phase === "downloading")) {
    return { status: "already_running", org: slug, phase: running.phase, hint: "Poll graph_refresh_status." };
  }
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/json", "Content-Type": "application/json" };
  const r = await fetch(`${creds.url}/api/orgs/${slug}/generate`, { method: "POST", headers });
  const body = await r.json().catch(() => ({}));
  if (r.status === 401) return { status: "auth_required", org: slug, hint: "Credentials revoked or expired. Run graph_login again." };
  if (r.status === 403) return { status: "not_permitted", org: slug, hint: "Your seat cannot trigger a refresh (graphs.generate). Ask the org Primary to grant it, or re-run graph_login if the device was connected before packages/refresh support." };
  if (r.status === 409) return { status: "already_running", org: slug, hint: "A generation is already in progress on the portal. Poll graph_refresh_status or retry in a minute." };
  if (r.status === 429) return { status: "cooldown", org: slug, detail: body.message || "Refreshed too recently.", hint: "The graph was refreshed recently \u2014 pull the current one with graph_pull, or wait out the cooldown." };
  if (r.status !== 202) return { status: "error", org: slug, error: body.message || `portal /generate returned ${r.status}` };
  const job = String(body.job);
  const state = { phase: "generating", org: slug, job, startedAt: Date.now() };
  active.set(slug, state);
  void pollUntilDone(creds.url, token, slug, job, destFor(a), state);
  return {
    status: "refresh_started",
    org: slug,
    job,
    note: "The portal is extracting from the connected sources \u2014 this runs for a few minutes. Poll graph_refresh_status; when it reports done, the fresh graph is already in place (pass-through: the portal deletes its copy the moment it delivers)."
  };
}
async function pollUntilDone(url, token, slug, job, destDir, state) {
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/json" };
  try {
    while (Date.now() - state.startedAt < TIMEOUT_MS) {
      await new Promise((res) => setTimeout(res, POLL_MS));
      const r = await fetch(`${url}/api/orgs/${slug}/jobs/${job}`, { headers });
      if (!r.ok) {
        state.phase = "failed";
        state.detail = `job status returned ${r.status}`;
        state.finishedAt = Date.now();
        return;
      }
      const s = await r.json();
      if (s.state === "failed") {
        state.phase = "failed";
        state.detail = s.detail || "generation failed";
        state.finishedAt = Date.now();
        return;
      }
      if (s.state === "complete") {
        state.phase = "downloading";
        const pulled = await remotePull(true, slug, void 0, destDir);
        state.phase = pulled.status === "pulled" ? "done" : "failed";
        state.detail = pulled.status === "pulled" ? void 0 : `pull after generation returned ${pulled.status}`;
        state.result = pulled;
        state.finishedAt = Date.now();
        return;
      }
    }
    state.phase = "failed";
    state.detail = `timed out after ${Math.round(TIMEOUT_MS / 6e4)} minutes`;
    state.finishedAt = Date.now();
  } catch (e) {
    state.phase = "failed";
    state.detail = String(e?.message || e);
    state.finishedAt = Date.now();
  }
}
function graphRefreshStatus(a) {
  const creds = loadCredentials();
  const slugs = creds ? Object.keys(creds.orgs) : [];
  const slug = a.org || (slugs.length === 1 ? slugs[0] : null);
  if (!slug) return { status: "org_required", orgs: slugs, hint: "Pass org: one of the listed slugs." };
  const state = active.get(slug);
  if (!state) return { status: "no_refresh_found", org: slug, hint: "Start one with graph_refresh." };
  return {
    status: state.phase,
    org: slug,
    job: state.job,
    elapsed_seconds: Math.round(((state.finishedAt ?? Date.now()) - state.startedAt) / 1e3),
    detail: state.detail,
    result: state.result ?? null
  };
}

// src/caddy-mcp/accountmap.ts
var fs4 = __toESM(require("fs"));
var path5 = __toESM(require("path"));
var active2 = /* @__PURE__ */ new Map();
var POLL_MS2 = 1e4;
var TIMEOUT_MS2 = 30 * 6e4;
function stateKey(slug, provider, scope) {
  return `${slug}:${provider}:${scope}`;
}
function normalizeScope(scope) {
  return String(scope || "personal").toLowerCase() === "company" ? "company" : "personal";
}
function filePrefix(provider, scope) {
  return scope === "company" ? `${provider}-company-` : `${provider}-`;
}
function mapsDir(a) {
  const root = a.project_dir ? toWslPath(a.project_dir) : isUnscannable(process.cwd()) ? path5.join(require("os").homedir(), ".caddy") : process.cwd();
  return path5.join(root, "graphs");
}
function timestamp() {
  return (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
}
async function accountMapRefresh(a) {
  if (!a.provider) throw new Error("provider is required (e.g. notion)");
  const scope = normalizeScope(a.scope);
  const creds = loadCredentials();
  if (!creds) return { status: "auth_required", hint: "Not connected to the portal. Run graph_login." };
  const slugs = Object.keys(creds.orgs);
  const slug = a.org || (slugs.length === 1 ? slugs[0] : null);
  if (!slug) return { status: "org_required", orgs: slugs, hint: "Pass org: one of the listed slugs." };
  const token = creds.orgs[slug];
  if (!token) return { status: "unknown_org", org: slug, orgs: slugs, hint: `No credentials for org "${slug}". Run graph_login and grant it.` };
  const key = stateKey(slug, a.provider, scope);
  const running = active2.get(key);
  if (running && running.phase !== "done" && running.phase !== "failed") {
    return { status: "already_running", org: slug, provider: a.provider, scope, phase: running.phase, hint: "Poll account_map_status." };
  }
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/json", "Content-Type": "application/json" };
  const r = await fetch(`${creds.url}/api/orgs/${slug}/account-maps/${a.provider}/generate`, {
    method: "POST",
    headers,
    body: JSON.stringify({ scope })
  });
  const body = await r.json().catch(() => ({}));
  if (r.status === 401) return { status: "auth_required", org: slug, hint: "Credentials revoked or expired. Run graph_login again." };
  if (r.status === 403) {
    return scope === "company" ? {
      status: "not_permitted",
      org: slug,
      provider: a.provider,
      scope,
      detail: body.message,
      hint: `Your seat can't generate the org's ${a.provider} platform graph. Ask the org owner to grant it \u2014 or run scope: "personal" to map your own ${a.provider} login instead.`
    } : { status: "auth_required", org: slug, hint: "Credentials revoked or expired. Run graph_login again." };
  }
  if (r.status === 404) return { status: "unknown_provider", provider: a.provider };
  if (r.status === 409) return { status: "already_running", org: slug, provider: a.provider, scope, hint: "A generation is already in progress. Poll account_map_status or retry in a minute." };
  if (r.status === 422) {
    return {
      status: "not_connected",
      org: slug,
      provider: a.provider,
      scope,
      detail: body.message,
      hint: scope === "company" ? `The org has no connected company ${a.provider} account. An owner connects it on the portal's Connections page \u2014 or run scope: "personal" to map your own login.` : `Connect YOUR ${a.provider} account on the portal's Connections page first \u2014 a personal account map runs on your own login.`
    };
  }
  if (r.status === 429) return { status: "cooldown", org: slug, provider: a.provider, scope, detail: body.message || "Refreshed too recently." };
  if (r.status !== 202) return { status: "error", org: slug, error: body.message || `portal account-map generate returned ${r.status}` };
  const state = { phase: "generating", org: slug, provider: a.provider, scope, job: String(body.job), startedAt: Date.now() };
  active2.set(key, state);
  void pollAndLand(creds.url, token, slug, a.provider, scope, mapsDir(a), state);
  return {
    status: "refresh_started",
    org: slug,
    provider: a.provider,
    scope,
    job: state.job,
    note: scope === "company" ? `The portal is extracting the org's ${a.provider} platform graph \u2014 this runs for a few minutes. Poll account_map_status; when done, the map is in the project (the portal deletes its copy the moment it delivers).` : "The portal is extracting with YOUR grant \u2014 this runs for a few minutes. Poll account_map_status; when done, the map is in the project (the portal deletes its copy the moment it delivers)."
  };
}
async function pollAndLand(url, token, slug, provider, scope, dir, state) {
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/json" };
  try {
    while (Date.now() - state.startedAt < TIMEOUT_MS2) {
      await new Promise((res) => setTimeout(res, POLL_MS2));
      const r = await fetch(`${url}/api/orgs/${slug}/jobs/${state.job}`, { headers });
      if (!r.ok) {
        state.phase = "failed";
        state.detail = `job status returned ${r.status}`;
        state.finishedAt = Date.now();
        return;
      }
      const s = await r.json();
      if (s.state === "failed") {
        state.phase = "failed";
        state.detail = s.detail || "generation failed";
        state.finishedAt = Date.now();
        return;
      }
      if (s.state !== "complete") continue;
      state.phase = "downloading";
      const download = await fetch(`${url}/api/orgs/${slug}/account-maps/${provider}?scope=${scope}`, { headers });
      if (!download.ok) {
        state.phase = "failed";
        state.detail = download.status === 404 && scope === "company" ? "map download returned 404 \u2014 your seat is no longer permitted to pull this platform graph." : `map download returned ${download.status}`;
        state.finishedAt = Date.now();
        return;
      }
      const bytes = Buffer.from(await download.arrayBuffer());
      fs4.mkdirSync(dir, { recursive: true });
      const prefix = filePrefix(provider, scope);
      const file = path5.join(dir, `${prefix}${timestamp()}.nq`);
      fs4.writeFileSync(file + ".tmp", bytes);
      fs4.renameSync(file + ".tmp", file);
      const companyPrefix = filePrefix(provider, "company");
      const previous = fs4.readdirSync(dir).filter((f) => f.startsWith(prefix) && (scope === "company" || !f.startsWith(companyPrefix)) && f.endsWith(".nq") && !f.endsWith(".local.nq") && path5.join(dir, f) !== file).sort().reverse();
      if (previous[0]) {
        const prevOverlay = path5.join(dir, previous[0].replace(/\.nq$/, ".local.nq"));
        if (fs4.existsSync(prevOverlay)) {
          fs4.copyFileSync(prevOverlay, file.replace(/\.nq$/, ".local.nq"));
        }
      }
      for (const f of previous.slice(1)) {
        fs4.rmSync(path5.join(dir, f), { force: true });
        fs4.rmSync(path5.join(dir, f.replace(/\.nq$/, ".local.nq")), { force: true });
      }
      state.phase = "done";
      state.result = { file, bytes: bytes.length };
      state.finishedAt = Date.now();
      return;
    }
    state.phase = "failed";
    state.detail = `timed out after ${Math.round(TIMEOUT_MS2 / 6e4)} minutes`;
    state.finishedAt = Date.now();
  } catch (e) {
    state.phase = "failed";
    state.detail = String(e?.message || e);
    state.finishedAt = Date.now();
  }
}
function accountMapStatus(a) {
  if (!a.provider) throw new Error("provider is required (e.g. notion)");
  const scope = normalizeScope(a.scope);
  const creds = loadCredentials();
  const slugs = creds ? Object.keys(creds.orgs) : [];
  const slug = a.org || (slugs.length === 1 ? slugs[0] : null);
  if (!slug) return { status: "org_required", orgs: slugs, hint: "Pass org: one of the listed slugs." };
  const state = active2.get(stateKey(slug, a.provider, scope));
  if (!state) return { status: "no_refresh_found", org: slug, provider: a.provider, scope, hint: `Start one with account_map_refresh (scope: "${scope}").` };
  return {
    status: state.phase,
    org: slug,
    provider: state.provider,
    scope: state.scope,
    job: state.job,
    elapsed_seconds: Math.round(((state.finishedAt ?? Date.now()) - state.startedAt) / 1e3),
    detail: state.detail,
    result: state.result ?? null
  };
}

// src/caddy-mcp/packages.ts
var import_child_process2 = require("child_process");
var fs5 = __toESM(require("fs"));
var os3 = __toESM(require("os"));
var path6 = __toESM(require("path"));
function portalContext(org) {
  const creds = loadCredentials();
  if (!creds) return { status: "auth_required", hint: "Not connected to the portal. Run graph_login." };
  const slugs = Object.keys(creds.orgs);
  const slug = org || (slugs.length === 1 ? slugs[0] : null);
  if (!slug) return { status: "org_required", orgs: slugs, hint: "Pass org: one of the listed slugs." };
  const token = creds.orgs[slug];
  if (!token) return { status: "unknown_org", org: slug, orgs: slugs, hint: `No credentials for org "${slug}". Run graph_login and grant it.` };
  return { url: creds.url, slug, token };
}
function isContext(c) {
  return !("status" in c);
}
async function portalGet(ctx, apiPath) {
  return fetch(`${ctx.url}/api/orgs/${ctx.slug}${apiPath}`, {
    headers: { Authorization: `Bearer ${ctx.token}`, Accept: "application/json" }
  });
}
function installRoot(a) {
  return a.project_dir ? toWslPath(a.project_dir) : process.cwd();
}
function manifestFile(root) {
  return path6.join(root, ".claude", "caddy-packages.json");
}
function readManifest(root) {
  try {
    return JSON.parse(fs5.readFileSync(manifestFile(root), "utf8"));
  } catch {
    return {};
  }
}
function writeManifest(root, manifest) {
  const file = manifestFile(root);
  fs5.mkdirSync(path6.dirname(file), { recursive: true });
  fs5.writeFileSync(file, JSON.stringify(manifest, null, 2) + "\n");
}
function defaultTarget(root, product) {
  const kind = product.mcp_target === "plugin" ? "plugins" : "skills";
  return path6.join(root, ".claude", kind, product.slug);
}
function extractTarball(tarball, product, target) {
  const scratch = fs5.mkdtempSync(path6.join(os3.tmpdir(), "caddy-pkg-"));
  try {
    const r = (0, import_child_process2.spawnSync)("tar", ["-xzf", tarball, "-C", scratch, "--strip-components=1"], { encoding: "utf8" });
    if (r.error || r.status !== 0) {
      throw new Error(`tar extraction failed: ${r.error?.message || r.stderr?.slice(0, 300) || `exit ${r.status}`}. A system tar is required (built into Windows 10+, macOS, Linux).`);
    }
    const source = product.path ? path6.join(scratch, product.path) : scratch;
    if (!fs5.existsSync(source)) {
      throw new Error(`product path "${product.path}" not found inside the ${product.slug} archive`);
    }
    fs5.rmSync(target, { recursive: true, force: true });
    fs5.mkdirSync(path6.dirname(target), { recursive: true });
    fs5.cpSync(source, target, { recursive: true });
    let files = 0;
    const count = (dir) => {
      for (const entry of fs5.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) count(path6.join(dir, entry.name));
        else files++;
      }
    };
    count(target);
    return files;
  } finally {
    fs5.rmSync(scratch, { recursive: true, force: true });
  }
}
async function packagesList(a) {
  const ctx = portalContext(a.org);
  if (!isContext(ctx)) return ctx;
  const r = await portalGet(ctx, "/products");
  if (r.status === 401 || r.status === 403) return { status: "auth_required", hint: "Credentials revoked or expired. Run graph_login again." };
  if (r.status === 404) return { status: "unavailable", hint: "Package delivery is not enabled for this portal yet." };
  if (!r.ok) throw new Error(`portal /products returned ${r.status}`);
  const { products } = await r.json();
  const manifest = readManifest(installRoot(a));
  return {
    status: "ok",
    org: ctx.slug,
    products: products.map((p) => ({
      ...p,
      installed: manifest[p.slug] ? { sha: manifest[p.slug].sha, target: manifest[p.slug].target, installedAt: manifest[p.slug].installedAt } : null
    }))
  };
}
async function packageInstall(a) {
  if (!a.product) throw new Error("product is required (a slug from packages_list)");
  const ctx = portalContext(a.org);
  if (!isContext(ctx)) return ctx;
  const show = await portalGet(ctx, `/products/${encodeURIComponent(a.product)}`);
  if (show.status === 401 || show.status === 403) return { status: "auth_required", hint: "Credentials revoked or expired. Run graph_login again." };
  if (show.status === 404) return { status: "not_found", product: a.product, hint: "Unknown product or your seat is not entitled to it." };
  if (!show.ok) throw new Error(`portal /products/${a.product} returned ${show.status}`);
  const product = await show.json();
  const root = installRoot(a);
  const manifest = readManifest(root);
  const installed = manifest[product.slug];
  if (!a.force && installed && installed.sha === product.version && fs5.existsSync(installed.target)) {
    return { status: "fresh", product: product.slug, sha: product.version, target: installed.target };
  }
  const download = await portalGet(ctx, `/products/${encodeURIComponent(a.product)}/download`);
  if (!download.ok) throw new Error(`portal product download returned ${download.status}`);
  const sha = download.headers.get("x-product-sha") || product.version;
  const tarball = path6.join(os3.tmpdir(), `caddy-${product.slug}-${sha.slice(0, 12)}.tar.gz`);
  fs5.writeFileSync(tarball, Buffer.from(await download.arrayBuffer()));
  const target = a.target_dir ? toWslPath(a.target_dir) : defaultTarget(root, product);
  try {
    const files = extractTarball(tarball, product, target);
    manifest[product.slug] = {
      sha,
      target,
      name: product.name,
      mcp_target: product.mcp_target,
      org: ctx.slug,
      installedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    writeManifest(root, manifest);
    return {
      status: installed ? "updated" : "installed",
      product: product.slug,
      name: product.name,
      sha,
      previous_sha: installed?.sha ?? null,
      target,
      files,
      note: product.mcp_target === "plugin" ? "Installed as a plugin \u2014 restart Cowork/Claude so it loads the new plugin." : "Installed as a project skill \u2014 available to Cowork in this project immediately."
    };
  } finally {
    fs5.rmSync(tarball, { force: true });
  }
}
async function packagesSync(a) {
  const ctx = portalContext(a.org);
  if (!isContext(ctx)) return ctx;
  const listed = await packagesList(a);
  if (listed.status !== "ok") return listed;
  const root = installRoot(a);
  const manifest = readManifest(root);
  const plan = [];
  for (const p of listed.products) {
    const current = manifest[p.slug];
    if (!current || !fs5.existsSync(current.target)) {
      plan.push({ product: p.slug, action: "install" });
    } else if (p.version && current.sha !== p.version) {
      plan.push({ product: p.slug, action: "update", from: current.sha.slice(0, 12), to: p.version.slice(0, 12) });
    }
  }
  const entitledSlugs = new Set(listed.products.map((p) => p.slug));
  const orphaned = Object.keys(manifest).filter((slug) => manifest[slug].org === ctx.slug && !entitledSlugs.has(slug));
  if (a.dry_run) {
    return { status: "plan", org: ctx.slug, pending: plan, orphaned, up_to_date: plan.length === 0 };
  }
  const results = [];
  for (const step of plan) {
    try {
      results.push(await packageInstall({ product: step.product, org: a.org, project_dir: a.project_dir }));
    } catch (e) {
      results.push({ status: "error", product: step.product, error: String(e?.message || e) });
    }
  }
  return {
    status: "synced",
    org: ctx.slug,
    applied: results,
    orphaned: orphaned.length ? { products: orphaned, note: "Installed but no longer entitled \u2014 not auto-removed; delete their target folders to drop them." } : null,
    up_to_date: plan.length === 0
  };
}

// src/caddy-mcp/server.ts
var NS = process.env.OPS_NS || "http://ops-sys.local/ontology#";
var CODE_NS = process.env.CODE_NS || "http://ops-sys.local/code#";
var RDF_TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
var RDFS_LABEL = "http://www.w3.org/2000/01/rdf-schema#label";
var TEXT_PREDS = [
  ...["name", "noteText", "summary", "description", "rationale", "recall", "ruleText", "criterion", "purpose", "filePath", "path"].map((p) => NS + p),
  RDFS_LABEL
];
var SOURCE_PREDS = ["sourceDoc", "sourceFile", "filePath", "path"].map((p) => NS + p);
var LINE = new RegExp(
  String.raw`^\s*(<[^>]*>|_:\S+)\s+(<[^>]*>)\s+("(?:[^"\\]|\\.)*"(?:\^\^<[^>]*>|@[A-Za-z][A-Za-z0-9-]*)?|<[^>]*>|_:\S+)(?:\s+(<[^>]*>|_:\S+))?\s*\.\s*$`
);
var LIT = /^"((?:[^"\\]|\\.)*)"(?:\^\^<[^>]*>|@[\w-]+)?$/;
function parseTerm(t) {
  if (t.startsWith("<")) return { kind: "iri", value: t.slice(1, -1) };
  if (t.startsWith("_:")) return { kind: "blank", value: t };
  const m = LIT.exec(t);
  if (m) return { kind: "lit", value: m[1].replace(/\\([ntr"\\])/g, (_, c) => ({ n: "\n", t: "	", r: "\r", '"': '"', "\\": "\\" })[c]) };
  return { kind: "lit", value: t };
}
function localName(iri) {
  for (const sep of ["#", "/"]) {
    const i = iri.lastIndexOf(sep);
    if (i !== -1 && i + 1 < iri.length) return iri.slice(i + 1);
  }
  return iri;
}
var Graph = class {
  constructor(file) {
    this.file = file;
    this.load();
  }
  file;
  spo = /* @__PURE__ */ new Map();
  incoming = /* @__PURE__ */ new Map();
  pidx = /* @__PURE__ */ new Map();
  quads = 0;
  skipped = 0;
  localQuads = 0;
  mtimeMs = 0;
  overlayMtimeMs = 0;
  /**
   * Local-knowledge overlay: the source .nq is an immutable, replaceable
   * artifact (pulled or regenerated); everything Cowork adds lives in the
   * sibling overlay file. The logical graph is source UNION overlay, with
   * overlay overrides masking the source values they replace.
   */
  overlayFile() {
    return this.file.replace(/\.nq$/, ".local.nq");
  }
  index(s, p, o, g) {
    if (!this.spo.has(s)) this.spo.set(s, []);
    this.spo.get(s).push({ p, o, g });
    if (o.kind === "iri") {
      if (!this.incoming.has(o.value)) this.incoming.set(o.value, []);
      this.incoming.get(o.value).push({ s, p, g });
    }
    if (!this.pidx.has(p)) this.pidx.set(p, []);
    this.pidx.get(p).push({ s, o, g });
    this.quads++;
  }
  load() {
    this.spo.clear();
    this.incoming.clear();
    this.pidx.clear();
    this.quads = 0;
    this.skipped = 0;
    this.localQuads = 0;
    this.mtimeMs = fs6.statSync(this.file).mtimeMs;
    const masked = /* @__PURE__ */ new Set();
    const overlay = this.overlayFile();
    if (fs6.existsSync(overlay)) {
      this.overlayMtimeMs = fs6.statSync(overlay).mtimeMs;
      for (const raw of fs6.readFileSync(overlay, "utf-8").split("\n")) {
        if (!raw.trim() || raw.trim().startsWith("#")) continue;
        const m = LINE.exec(raw);
        if (!m) {
          this.skipped++;
          continue;
        }
        const s = parseTerm(m[1]).value;
        const p = parseTerm(m[2]).value;
        const o = parseTerm(m[3]);
        const g = m[4] ? parseTerm(m[4]).value : "";
        if (p === OVERRIDES_P && o.kind === "iri") {
          masked.add(s + "|" + o.value);
          continue;
        }
        this.index(s, p, o, g);
        this.localQuads++;
      }
    } else {
      this.overlayMtimeMs = 0;
    }
    for (const raw of fs6.readFileSync(this.file, "utf-8").split("\n")) {
      if (!raw.trim() || raw.trim().startsWith("#")) continue;
      const m = LINE.exec(raw);
      if (!m) {
        this.skipped++;
        continue;
      }
      const s = parseTerm(m[1]).value;
      const p = parseTerm(m[2]).value;
      if (masked.has(s + "|" + p)) continue;
      const o = parseTerm(m[3]);
      const g = m[4] ? parseTerm(m[4]).value : "";
      this.index(s, p, o, g);
    }
  }
  fresh() {
    const sourceChanged = fs6.existsSync(this.file) && fs6.statSync(this.file).mtimeMs !== this.mtimeMs;
    const overlay = this.overlayFile();
    const overlayMtime = fs6.existsSync(overlay) ? fs6.statSync(overlay).mtimeMs : 0;
    if (sourceChanged || overlayMtime !== this.overlayMtimeMs) this.load();
  }
  types(s) {
    return (this.spo.get(s) || []).filter((t) => t.p === RDF_TYPE && t.o.kind === "iri").map((t) => t.o.value);
  }
  firstText(s) {
    for (const tp of TEXT_PREDS) {
      const hit = (this.spo.get(s) || []).find((t) => t.p === tp && t.o.kind === "lit");
      if (hit) return hit.o.value;
    }
    return "";
  }
  sourceOf(s) {
    for (const sp of SOURCE_PREDS) {
      const hit = (this.spo.get(s) || []).find((t) => t.p === sp && t.o.kind === "lit");
      if (hit) return hit.o.value;
    }
    return "";
  }
  resolve(node) {
    if (this.spo.has(node) || this.incoming.has(node)) return node;
    for (const cand of [NS + node, CODE_NS + node]) {
      if (this.spo.has(cand)) return cand;
    }
    const hits = this.search(node, 1);
    return hits.length ? hits[0].iri : null;
  }
  schema() {
    const classes = /* @__PURE__ */ new Map();
    for (const { o } of this.pidx.get(RDF_TYPE) || []) {
      if (o.kind === "iri") classes.set(localName(o.value), (classes.get(localName(o.value)) || 0) + 1);
    }
    const preds = /* @__PURE__ */ new Map();
    for (const [p, rows] of this.pidx) preds.set(localName(p), rows.length);
    const graphs = /* @__PURE__ */ new Set();
    for (const rows of this.spo.values()) rows.forEach((r) => r.g && graphs.add(localName(r.g)));
    return {
      file: this.file,
      quads: this.quads,
      skipped_lines: this.skipped,
      classes: [...classes.entries()].sort((a, b) => b[1] - a[1]),
      predicates: [...preds.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30),
      named_graphs: [...graphs]
    };
  }
  search(kw, limit = 20, typeFilter) {
    const kwl = kw.toLowerCase();
    const seen = /* @__PURE__ */ new Map();
    for (const tp of TEXT_PREDS) {
      for (const { s, o, g } of this.pidx.get(tp) || []) {
        if (o.kind !== "lit" || !o.value.toLowerCase().includes(kwl) || seen.has(s)) continue;
        const types = this.types(s).map(localName);
        if (typeFilter && !types.includes(typeFilter)) continue;
        seen.set(s, {
          id: localName(s),
          iri: s,
          type: types.length ? types : null,
          match_pred: localName(tp),
          text: o.value.slice(0, 300),
          source: this.sourceOf(s),
          graph: localName(g || "")
        });
        if (seen.size >= limit) return [...seen.values()];
      }
    }
    return [...seen.values()];
  }
  neighbors(node, hops = 1, limit = 80) {
    const start = this.resolve(node);
    if (!start) return { error: `node not found: ${node}` };
    const visited = /* @__PURE__ */ new Set([start]);
    let frontier = [start];
    const edges = [];
    for (let h = 0; h < Math.max(1, hops); h++) {
      const nxt = [];
      for (const s of frontier) {
        for (const { p, o } of this.spo.get(s) || []) {
          if (p !== RDF_TYPE && o.kind === "iri") {
            edges.push({ from: localName(s), rel: localName(p), to: localName(o.value), dir: "out" });
            if (!visited.has(o.value)) {
              visited.add(o.value);
              nxt.push(o.value);
            }
          }
        }
        for (const { s: s2, p } of this.incoming.get(s) || []) {
          if (p !== RDF_TYPE) {
            edges.push({ from: localName(s2), rel: localName(p), to: localName(s), dir: "in" });
            if (!visited.has(s2)) {
              visited.add(s2);
              nxt.push(s2);
            }
          }
        }
      }
      frontier = nxt;
      if (!frontier.length) break;
    }
    const nodes = [...visited].slice(0, limit).map((n) => ({
      id: localName(n),
      iri: n,
      type: this.types(n).map(localName) || null,
      text: this.firstText(n).slice(0, 200),
      source: this.sourceOf(n)
    }));
    return { center: localName(start), hops, nodes, edges: edges.slice(0, limit * 3) };
  }
  node(id) {
    const s = this.resolve(id);
    if (!s) return { error: `node not found: ${id}` };
    const props = {};
    for (const { p, o } of this.spo.get(s) || []) {
      const key = localName(p);
      (props[key] = props[key] || []).push(o.kind === "iri" ? localName(o.value) : o.value);
    }
    const inbound = (this.incoming.get(s) || []).map(({ s: s2, p }) => ({ from: localName(s2), rel: localName(p) }));
    return {
      id: localName(s),
      iri: s,
      type: this.types(s).map(localName),
      text: this.firstText(s),
      source: this.sourceOf(s),
      properties: props,
      incoming: inbound.slice(0, 50)
    };
  }
};
var REMEMBERED_G2 = "http://ops-sys.local/graph#remembered";
var OVERRIDES_P = NS + "overrides";
function escLit(v) {
  return v.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
}
function quadLine(s, p, o) {
  const obj = o.iri !== void 0 ? `<${o.iri}>` : `"${escLit(o.lit)}"`;
  return `<${s}> <${p}> ${obj} <${REMEMBERED_G2}> .`;
}
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "entry";
}
function resolvePred(pred) {
  return pred.includes("://") ? pred : NS + pred;
}
function endsWithNewline(file) {
  const fd = fs6.openSync(file, "r");
  try {
    const size = fs6.fstatSync(fd).size;
    if (size === 0) return true;
    const b = Buffer.alloc(1);
    fs6.readSync(fd, b, 0, 1, size - 1);
    return b[0] === 10;
  } finally {
    fs6.closeSync(fd);
  }
}
function appendQuads(g, lines) {
  for (const l of lines) {
    if (!LINE.test(l)) throw new Error(`refusing write \u2014 invalid N-Quads line: ${l.slice(0, 120)}`);
  }
  const overlay = g.overlayFile();
  if (fs6.existsSync(overlay)) {
    fs6.copyFileSync(overlay, overlay + ".bak");
    fs6.appendFileSync(overlay, (endsWithNewline(overlay) ? "" : "\n") + lines.join("\n") + "\n");
  } else {
    fs6.writeFileSync(overlay, lines.join("\n") + "\n");
  }
  g.load();
}
function mustResolve(g, node, what) {
  const iri = g.resolve(node);
  if (!iri) throw new Error(`${what} not found: "${node}" \u2014 locate it with graph_search first; never invent ids`);
  return iri;
}
function graphRemember(g, a) {
  if (!a.fact) throw new Error("fact is required");
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const typed = Boolean(a.type && a.name);
  const label = a.name || a.fact.slice(0, 60);
  const iri = NS + slugify(label) + "-" + Date.now().toString(36);
  const lines = [
    quadLine(iri, RDF_TYPE, { iri: NS + (typed ? a.type : "Note") }),
    quadLine(iri, NS + "name", { lit: label }),
    quadLine(iri, NS + (typed ? "description" : "noteText"), { lit: a.fact }),
    quadLine(iri, NS + "addedAt", { lit: now }),
    quadLine(iri, NS + "addedBy", { lit: a.source || "cowork-remember" })
  ];
  if (a.about) lines.push(quadLine(iri, NS + "about", { iri: mustResolve(g, a.about, "about entity") }));
  for (const l of a.links || []) lines.push(quadLine(iri, NS + "relatesTo", { iri: mustResolve(g, l, "link target") }));
  appendQuads(g, lines);
  return { status: "remembered", id: localName(iri), class: typed ? a.type : "Note", quads_added: lines.length, graph: path7.basename(g.file) };
}
function graphUpdate(g, a) {
  if (!a.node || !a.predicate) throw new Error("node and predicate are required");
  const mode = a.mode || "replace";
  if (mode !== "restore" && a.value === void 0) throw new Error('value is required (except mode "restore")');
  const s = mustResolve(g, a.node, "node");
  const p = resolvePred(a.predicate);
  if (mode === "restore") {
    const overlay = g.overlayFile();
    if (!fs6.existsSync(overlay)) return { status: "nothing_to_restore", node: localName(s), predicate: localName(p) };
    fs6.copyFileSync(overlay, overlay + ".bak");
    let removed = 0;
    const kept = [];
    for (const raw of fs6.readFileSync(overlay, "utf-8").split("\n")) {
      if (!raw.trim()) continue;
      const m = LINE.exec(raw);
      const isOverrideMarker = m && parseTerm(m[1]).value === s && parseTerm(m[2]).value === OVERRIDES_P && parseTerm(m[3]).value === p;
      const isValue = m && parseTerm(m[1]).value === s && parseTerm(m[2]).value === p;
      if (isOverrideMarker || isValue) {
        removed++;
        continue;
      }
      kept.push(raw);
    }
    fs6.writeFileSync(overlay + ".tmp", kept.join("\n") + (kept.length ? "\n" : ""));
    fs6.renameSync(overlay + ".tmp", overlay);
    g.load();
    return { status: "restored", node: localName(s), predicate: localName(p), overlay_lines_removed: removed, graph: path7.basename(g.file) };
  }
  const newLine = quadLine(s, p, { lit: String(a.value) });
  if (!LINE.test(newLine)) throw new Error("refusing write \u2014 invalid N-Quads line");
  if (mode === "replace") {
    const marker = `<${s}> <${OVERRIDES_P}> <${p}> <${REMEMBERED_G2}> .`;
    const overlay = g.overlayFile();
    let removed = 0;
    if (fs6.existsSync(overlay)) {
      fs6.copyFileSync(overlay, overlay + ".bak");
      const kept = [];
      for (const raw of fs6.readFileSync(overlay, "utf-8").split("\n")) {
        if (!raw.trim()) continue;
        const m = LINE.exec(raw);
        const sameSP = m && parseTerm(m[1]).value === s && (parseTerm(m[2]).value === p || parseTerm(m[2]).value === OVERRIDES_P && parseTerm(m[3]).value === p);
        if (sameSP) {
          removed++;
          continue;
        }
        kept.push(raw);
      }
      kept.push(marker, newLine);
      fs6.writeFileSync(overlay + ".tmp", kept.join("\n") + "\n");
      fs6.renameSync(overlay + ".tmp", overlay);
      g.load();
    } else {
      fs6.writeFileSync(overlay, marker + "\n" + newLine + "\n");
      g.load();
    }
    const masked = (g.spo.get(s) || []).filter((t) => t.p === p).length;
    return { status: "updated", node: localName(s), predicate: localName(p), mode: "replace (override)", overlay_lines_replaced: removed, values_now: masked, graph: path7.basename(g.file) };
  }
  appendQuads(g, [newLine]);
  return { status: "updated", node: localName(s), predicate: localName(p), mode, quads_removed: 0, quads_added: 1, graph: path7.basename(g.file) };
}
function graphLink(g, a) {
  if (!a.from || !a.rel || !a.to) throw new Error("from, rel, and to are required");
  const s = mustResolve(g, a.from, "from entity");
  const t = mustResolve(g, a.to, "to entity");
  const p = resolvePred(a.rel);
  if ((g.spo.get(s) || []).some((r) => r.p === p && r.o.kind === "iri" && r.o.value === t)) {
    return { status: "already_linked", from: localName(s), rel: localName(p), to: localName(t) };
  }
  appendQuads(g, [quadLine(s, p, { iri: t })]);
  return { status: "linked", from: localName(s), rel: localName(p), to: localName(t), graph: path7.basename(g.file) };
}
var cache = /* @__PURE__ */ new Map();
function graphDirs() {
  const env = process.env.GRAPH_DIR;
  if (env) return env.split(path7.delimiter).filter(Boolean);
  const dirs = [process.cwd(), path7.join(process.cwd(), "graphs")].filter((d) => !isUnscannable(d));
  if (hasCredentials() || dirs.length === 0) {
    dirs.push(path7.join(require("os").homedir(), ".caddy", "graphs"));
  }
  return dirs;
}
function discover() {
  const found = [];
  const seen = /* @__PURE__ */ new Set();
  const listDir = (dir) => {
    try {
      return fs6.readdirSync(dir);
    } catch {
      return [];
    }
  };
  const scan = (dir) => {
    for (const f of listDir(dir)) {
      if (!f.endsWith(".nq")) continue;
      if (f.endsWith(".local.nq") || /\.v\d+\.nq$/.test(f)) continue;
      const full = path7.join(dir, f);
      if (seen.has(full)) continue;
      try {
        const st = fs6.statSync(full);
        seen.add(full);
        found.push({ name: f, path: full, sizeKB: Math.round(st.size / 1024), modified: st.mtime.toISOString() });
      } catch {
      }
    }
  };
  for (const dir of graphDirs()) {
    scan(dir);
    scan(path7.join(dir, "graphs"));
    for (const sub of listDir(dir)) {
      const subPath = path7.join(dir, sub);
      try {
        if (!fs6.statSync(subPath).isDirectory()) continue;
      } catch {
        continue;
      }
      scan(subPath);
      scan(path7.join(subPath, "graphs"));
    }
  }
  return found;
}
function classifyGraph(name) {
  if (/^remote-.*\.nq$/.test(name) || /^base(-v\d+)?\.nq$/.test(name)) {
    return {
      role: "company-graph",
      guidance: "COMPANY DATA: the org owner's curated union of company sources (can span Notion, Drive, HubSpot\u2026 in one graph). Treat it as the organization's shared business truth \u2014 people, clients, processes, decisions. Query it to answer business questions; do not treat it as any single platform's layout."
    };
  }
  if (/^[a-z][a-z-]*-\d{8}-\d{6}\.nq$/.test(name)) {
    return {
      role: "account-map",
      guidance: "ACCOUNT MAP: an exact snapshot of ONE platform account as its user sees it \u2014 structure, boards/databases, ids. Use it to navigate and operate that platform intelligently with its tools (find the right database/board/id fast). It is a layout map, not curated business truth; prefer the company graph for business questions."
    };
  }
  if (/^notion-.*\.nq$/.test(name)) {
    return {
      role: "account-map",
      guidance: "ACCOUNT MAP: a snapshot of one Notion workspace as that login sees it. Use it to navigate the workspace and find databases/pages/ids for tool calls; prefer the company graph for curated business questions."
    };
  }
  return {
    role: "knowledge-graph",
    guidance: "General knowledge graph \u2014 profile it with graph_schema to see what it holds."
  };
}
function graphLabel(g) {
  let dir = path7.dirname(g.path);
  if (path7.basename(dir) === "graphs") dir = path7.dirname(dir);
  return `${path7.basename(dir)}/${g.name}`;
}
function getGraph(name) {
  const graphs = discover();
  if (!graphs.length) throw new Error(`No .nq graph files found in: ${graphDirs().join(", ")}`);
  let target = graphs[0];
  if (name) {
    const hit = graphs.find((g2) => g2.name === name || g2.path === name || graphLabel(g2) === name) || graphs.find((g2) => g2.name.includes(name) || graphLabel(g2).includes(name));
    if (!hit) throw new Error(`Graph "${name}" not found. Available: ${graphs.map(graphLabel).join(", ")}`);
    target = hit;
  } else if (graphs.length > 1) {
    throw new Error(`Multiple graphs available \u2014 pass "graph": ${graphs.map(graphLabel).join(", ")}`);
  }
  let g = cache.get(target.path);
  if (!g) {
    g = new Graph(target.path);
    cache.set(target.path, g);
  } else g.fresh();
  return g;
}
var GRAPH_ARG = { graph: { type: "string", description: "Graph file name (from list_graphs). Optional when only one graph exists." } };
var TOOLS = [
  { name: "list_graphs", description: "List the knowledge graph (.nq) files available to query, with size, last-modified, and ROLE. Two roles matter: company-graph = the org owner's curated multi-source business truth (answer business questions from it); account-map = one platform account's exact layout snapshot (use it to navigate that platform's tools \u2014 ids, boards, structure). Each entry carries guidance on how to use it.", inputSchema: { type: "object", properties: {}, required: [] } },
  { name: "graph_schema", description: "Profile a graph: entity classes with counts, top predicates, named graphs. Orient here first.", inputSchema: { type: "object", properties: { ...GRAPH_ARG }, required: [] } },
  { name: "graph_search", description: "Case-insensitive text search over the graph's text predicates (labels, names, summaries). Returns matching entities with type and source.", inputSchema: { type: "object", properties: { ...GRAPH_ARG, query: { type: "string" }, type: { type: "string", description: "Filter by class local name, e.g. GHLCustomField or Decision" }, limit: { type: "number" } }, required: ["query"] } },
  { name: "graph_neighbors", description: 'BFS traversal from an entity: everything it connects to (both directions), with relationship names. Use for "what is in X" / "what connects to X".', inputSchema: { type: "object", properties: { ...GRAPH_ARG, node: { type: "string", description: "Entity id, slug, IRI, or name" }, hops: { type: "number" } }, required: ["node"] } },
  { name: "graph_node", description: "Full record of one entity: all properties (including ids like ghlId/fieldKey), text, source, incoming links.", inputSchema: { type: "object", properties: { ...GRAPH_ARG, node: { type: "string" } }, required: ["node"] } },
  { name: "graph_remember", description: `Add new knowledge to a graph so it appreciates over time. Creates a Note (or a typed entity when type+name are given) carrying the fact, with provenance (addedAt/addedBy) and optional links to existing entities. Resolve "about"/"links" targets with graph_search first \u2014 never invent ids. Confirm with the user before consequential writes. Writes land in the graph's local overlay (<graph>.local.nq) \u2014 the source artifact is never modified, so pulled/regenerated graphs keep every remembered fact across refreshes. Backed up (.bak) on every write.`, inputSchema: { type: "object", properties: { ...GRAPH_ARG, fact: { type: "string", description: "The knowledge to store, in plain language" }, about: { type: "string", description: "Existing entity this fact is about (id/name \u2014 resolved against the graph)" }, type: { type: "string", description: "With name: create a typed entity (e.g. Client, Process, Decision) instead of a Note" }, name: { type: "string", description: "Label for the new entity" }, links: { type: "array", items: { type: "string" }, description: "Existing entities to relate this to (relatesTo edges)" }, source: { type: "string", description: "Attribution, default cowork-remember" } }, required: ["fact"] } },
  { name: "graph_update", description: 'Update a property on an existing entity. mode "replace" (default) writes an OVERRIDE into the local overlay: the new value masks every source value of that predicate and keeps winning across graph refreshes until mode "restore" clears it. mode "append" adds another value alongside. mode "restore" removes the override so the source values reappear. The source artifact is never rewritten. Literal values only \u2014 use graph_link for relationships. Resolve the node with graph_search first. Confirm with the user before consequential writes.', inputSchema: { type: "object", properties: { ...GRAPH_ARG, node: { type: "string", description: "Entity id, slug, IRI, or name" }, predicate: { type: "string", description: "Property local name (e.g. description, status, noteText) or full IRI" }, value: { type: "string", description: "Required except for mode restore" }, mode: { type: "string", enum: ["replace", "append", "restore"] } }, required: ["node", "predicate"] } },
  { name: "graph_link", description: "Add a relationship edge between two EXISTING entities (e.g. client \u2192 ownedBy \u2192 person). Both ends must already resolve in the graph; duplicates are refused. Confirm with the user before consequential writes.", inputSchema: { type: "object", properties: { ...GRAPH_ARG, from: { type: "string" }, rel: { type: "string", description: "Relationship local name (e.g. ownedBy, relatesTo, affects) or full IRI" }, to: { type: "string" } }, required: ["from", "rel", "to"] } },
  { name: "graph_pull", description: "Sync an org graph from the connected graph-portal. Version-checked: downloads only when the portal has a newer version than the local copy. Auth comes from the device-login store (run graph_login once per machine); returns auth_required when not connected or credentials were revoked. The portal is PASS-THROUGH (no data at rest): refresh_required means it holds no copy \u2014 run graph_refresh to generate and land a fresh one. Pass project_dir to pull into the Cowork project's graphs/ folder instead of the machine cache. Pass kind for an explicitly shared source graph (e.g. notion) \u2014 not_shared when your seat lacks access. Run at session start or when the graph feels stale.", inputSchema: { type: "object", properties: { force: { type: "boolean", description: "Re-download even when versions match" }, org: { type: "string", description: "Org slug to pull (optional when exactly one org is connected)" }, kind: { type: "string", description: "Graph kind: company (default) or a shared source kind like notion" }, project_dir: { type: "string", description: "Cowork project folder \u2014 the graph lands in <project_dir>/graphs (Windows or WSL path)" } }, required: [] } },
  { name: "graph_refresh", description: "Generate a FRESH COMPANY graph (base.nq \u2014 the org's curated union of connected sources) and land it in the project. OWNER territory: only the org Primary (or a delegated seat) may trigger it; other seats get not_permitted \u2014 they use account_map_refresh for their own maps, and graph_pull to receive the company graph the owner generated. Pass-through: the portal extracts, streams here, and deletes its copy. Runs minutes in the background \u2014 poll graph_refresh_status.", inputSchema: { type: "object", properties: { org: { type: "string", description: "Org slug (optional when exactly one org is connected)" }, project_dir: { type: "string", description: "Cowork project folder \u2014 the fresh graph lands in <project_dir>/graphs (recommended; omit to use the machine cache)" } }, required: [] } },
  { name: "graph_refresh_status", description: "Progress of a graph_refresh: generating (portal extracting) \u2192 downloading \u2192 done (graph in place, with file/version) or failed (with detail).", inputSchema: { type: "object", properties: { org: { type: "string", description: "Org slug (optional when exactly one org is connected)" } }, required: [] } },
  { name: "account_map_refresh", description: `Generate a single-platform graph and land it in the project's graphs/ folder. scope "personal" (the default) maps YOUR OWN platform login \u2014 connected on the portal's Connections page under "Your account" \u2014 so it covers what YOU can see, separate from the company graph; any seat may run it, and not_connected means connect your own account in the portal first. scope "company" maps the ORG's connection instead: the platform graph (e.g. the monday-specific graph), which is still NOT the company graph \u2014 that one is the curated union of every source, pulled with graph_pull. Company scope needs permission on the portal: not_permitted means ask the org owner, or fall back to scope "personal". Runs minutes in the background \u2014 poll account_map_status with the same scope.`, inputSchema: { type: "object", properties: { provider: { type: "string", description: "Platform: notion, monday, highlevel" }, scope: { type: "string", enum: ["personal", "company"], description: "personal (default) = your own login; company = the org's connection (the platform graph), requires permission" }, org: { type: "string", description: "Org slug (optional when exactly one org is connected)" }, project_dir: { type: "string", description: "Cowork project folder (recommended; defaults to cwd)" } }, required: ["provider"] } },
  { name: "account_map_status", description: "Progress of an account_map_refresh: generating \u2192 downloading \u2192 done (file in place) or failed (with detail). Pass the SAME scope you refreshed with \u2014 personal and company maps track separately.", inputSchema: { type: "object", properties: { provider: { type: "string" }, scope: { type: "string", enum: ["personal", "company"], description: "Defaults to personal \u2014 must match the refresh" }, org: { type: "string" } }, required: ["provider"] } },
  { name: "packages_list", description: "List the products/packages this seat is entitled to on the portal, with current version (commit SHA) and local install state. The catalog is entitlement-scoped: only assigned packages appear.", inputSchema: { type: "object", properties: { org: { type: "string", description: "Org slug (optional when exactly one org is connected)" }, project_dir: { type: "string", description: "Cowork project folder (for install-state; defaults to cwd)" } }, required: [] } },
  { name: "package_install", description: "Install or update one entitled package into the Cowork project. The portal streams the content from our private repos server-side \u2014 no GitHub credential ever reaches this machine. Unpacks into <project>/.claude/skills/<slug> (or plugins/<slug> per the product), replacing any prior version; records the installed SHA in .claude/caddy-packages.json. Skips the download when already current (pass force to reinstall).", inputSchema: { type: "object", properties: { product: { type: "string", description: "Product slug from packages_list" }, org: { type: "string" }, project_dir: { type: "string", description: "Cowork project folder (defaults to cwd)" }, target_dir: { type: "string", description: "Override the install location" }, force: { type: "boolean", description: "Reinstall even when current" } }, required: ["product"] } },
  { name: "packages_sync", description: "Make this project match the portal entitlements: install every assigned package that's missing and update every stale one. Reports orphans (installed but no longer entitled) without deleting them. Pass dry_run to see the plan without applying. Run after onboarding or when the team assigns you something new.", inputSchema: { type: "object", properties: { org: { type: "string" }, project_dir: { type: "string", description: "Cowork project folder (defaults to cwd)" }, dry_run: { type: "boolean", description: "Report the plan without installing" } }, required: [] } },
  { name: "graph_login", description: "Connect this machine to the graph-portal via device-code login. Returns a click-URL (code prefilled) to surface to the user; they log in, pick which orgs to grant, and approve. Then call graph_auth_status until it reports authenticated. Credentials are tool-managed \u2014 no files or env vars to set.", inputSchema: { type: "object", properties: { portal: { type: "string", description: 'Portal target: "prod" or "dev" (named environments), or a full base URL. Sticky \u2014 the portal you authenticate against becomes the default for graph_pull/refresh until you log into a different one. Defaults to the previously connected portal, else prod (CADDY_PORTAL env overrides).' }, label: { type: "string", description: "Device label shown on the approval page (defaults to hostname)" } }, required: [] } },
  { name: "graph_auth_status", description: "Check whether a pending graph_login has been approved yet. On approval it saves the credential store and reports the connected orgs. ALWAYS pass device_code + portal from graph_login's result \u2014 they make the poll stateless, so it works even when each tool call runs in a fresh process or sandbox. Pass wait_seconds (recommended: 120) to LONG-POLL inside this one call \u2014 surface the login link, then call this immediately and the flow rides straight through the user's browser approval with no turn break. Repeat while it returns waiting_for_authorization.", inputSchema: { type: "object", properties: { wait_seconds: { type: "number", description: "Block up to this many seconds waiting for the approval (capped at 570). Omit for a single instant check." }, device_code: { type: "string", description: "The device_code from graph_login's result \u2014 always pass it so the poll survives process restarts" }, portal: { type: "string", description: "The portal from graph_login's result (base URL or dev/prod alias) \u2014 always pass it alongside device_code" } }, required: [] } },
  { name: "notion_authorize", description: "Start a one-time Notion OAuth authorization for a project. Returns a click-URL to surface to the user; on their approval it captures the callback and saves the access token (.notion-token) in the project. Runs the listener on the local machine. Use once per workspace (or after rotating the OAuth app).", inputSchema: { type: "object", properties: { project_dir: { type: "string", description: "Project folder to save the token into (Windows or WSL path)" }, client_id: { type: "string" }, client_secret: { type: "string" } }, required: ["project_dir"] } },
  { name: "notion_auth_status", description: "Check whether a pending notion_authorize has completed (token saved) yet.", inputSchema: { type: "object", properties: {}, required: [] } },
  { name: "generate_notion_graph", description: "Generate or refresh a Notion workspace graph on the LOCAL machine into a project folder, using the saved OAuth token (.notion-token). Overwrites graphs/notion-<workspace>.nq (live-added knowledge is safe in the .local.nq overlay). For STANDALONE local pipelines only \u2014 portal-connected setups schedule refreshes in the portal (Connections, Auto-refresh) and use graph_pull; do not run local generation crons against a portal-managed org. Returns auth_required if no token yet (call notion_authorize first).", inputSchema: { type: "object", properties: { project_dir: { type: "string" }, content: { type: "boolean", description: "Full content depth (records + page text). Default true." }, token_file: { type: "string" } }, required: ["project_dir"] } },
  { name: "generate_notion_status", description: "Check the progress/result of a generate_notion_graph refresh (which runs in the background because a full content pull takes minutes). Returns running / done (with summary) / failed.", inputSchema: { type: "object", properties: { project_dir: { type: "string" } }, required: ["project_dir"] } }
];
async function main() {
  const server = new Server({ name: "caddy-mcp", version: "0.4.5" }, { capabilities: { tools: {} } });
  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const a = args || {};
    try {
      let result;
      if (name === "list_graphs") result = { dirs: graphDirs(), graphs: discover().map((g) => {
        const overlay = g.path.replace(/\.nq$/, ".local.nq");
        const hasOverlay = fs6.existsSync(overlay);
        return { ...g, label: graphLabel(g), ...classifyGraph(g.name), local_overlay: hasOverlay ? { file: path7.basename(overlay), sizeKB: Math.round(fs6.statSync(overlay).size / 1024) } : null };
      }) };
      else if (name === "graph_schema") {
        const g = getGraph(a.graph);
        result = { ...classifyGraph(path7.basename(g.file)), ...g.schema() };
      } else if (name === "graph_search") result = getGraph(a.graph).search(a.query, a.limit || 20, a.type);
      else if (name === "graph_neighbors") result = getGraph(a.graph).neighbors(a.node, a.hops || 1);
      else if (name === "graph_node") result = getGraph(a.graph).node(a.node);
      else if (name === "graph_remember") result = graphRemember(getGraph(a.graph), a);
      else if (name === "graph_update") result = graphUpdate(getGraph(a.graph), a);
      else if (name === "graph_link") result = graphLink(getGraph(a.graph), a);
      else if (name === "graph_pull") result = await remotePull(!!a.force, a.org, a.kind, a.project_dir ? path7.join(toWslPath(a.project_dir), "graphs") : void 0);
      else if (name === "graph_refresh") result = await graphRefresh(a);
      else if (name === "graph_refresh_status") result = graphRefreshStatus(a);
      else if (name === "account_map_refresh") result = await accountMapRefresh(a);
      else if (name === "account_map_status") result = accountMapStatus(a);
      else if (name === "packages_list") result = await packagesList(a);
      else if (name === "package_install") result = await packageInstall(a);
      else if (name === "packages_sync") result = await packagesSync(a);
      else if (name === "graph_login") result = await graphLogin(a);
      else if (name === "graph_auth_status") result = await graphAuthStatus(args ?? {});
      else if (name === "notion_authorize") result = notionAuthorize(a);
      else if (name === "notion_auth_status") result = notionAuthStatus();
      else if (name === "generate_notion_graph") result = await generateNotionGraph(a);
      else if (name === "generate_notion_status") result = generateNotionStatus(a);
      else throw new Error(`Unknown tool: ${name}`);
      return { content: [{ type: "text", text: JSON.stringify(result) }] };
    } catch (e) {
      throw new McpError(ErrorCode.InternalError, `caddy-mcp: ${e?.message || e}`);
    }
  });
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write(`[caddy-mcp] ready \u2014 dirs: ${graphDirs().join(", ")}
`);
  if (hasCredentials()) {
    remotePullAll().then(
      (rs) => rs.forEach((r) => process.stderr.write(`[caddy-mcp] remote sync${r.org ? ` ${r.org}` : ""}: ${r.status}${r.version ? ` v${r.version}` : ""}
`)),
      (e) => process.stderr.write(`[caddy-mcp] remote sync failed: ${e?.message || e}
`)
    );
  }
}
main().catch((e) => {
  process.stderr.write(`[caddy-mcp] fatal: ${e}
`);
  process.exit(1);
});
