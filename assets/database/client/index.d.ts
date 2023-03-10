
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ID
 * 
 */
export type ID = {
  ID: number
  Name: string
  PIN: number
}

/**
 * Model user
 * 
 */
export type user = {
  ID: number
  Name: string
  PIN: number
}

/**
 * Model productdata
 * 
 */
export type productdata = {
  product_barcode: bigint
  product_id: number
  tiltle: string
  code: string
  fabric_name: string | null
  front_img: string
  back_img: string
  price: number
  outside_brand: string | null
  description: string | null
  category: string | null
  size: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IDS
 * const iDS = await prisma.iD.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more IDS
   * const iDS = await prisma.iD.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.iD`: Exposes CRUD operations for the **ID** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IDS
    * const iDS = await prisma.iD.findMany()
    * ```
    */
  get iD(): Prisma.IDDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.productdata`: Exposes CRUD operations for the **productdata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productdata
    * const productdata = await prisma.productdata.findMany()
    * ```
    */
  get productdata(): Prisma.productdataDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    ID: 'ID',
    user: 'user',
    productdata: 'productdata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ID
   */


  export type AggregateID = {
    _count: IDCountAggregateOutputType | null
    _avg: IDAvgAggregateOutputType | null
    _sum: IDSumAggregateOutputType | null
    _min: IDMinAggregateOutputType | null
    _max: IDMaxAggregateOutputType | null
  }

  export type IDAvgAggregateOutputType = {
    ID: number | null
    PIN: number | null
  }

  export type IDSumAggregateOutputType = {
    ID: number | null
    PIN: number | null
  }

  export type IDMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    PIN: number | null
  }

  export type IDMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    PIN: number | null
  }

  export type IDCountAggregateOutputType = {
    ID: number
    Name: number
    PIN: number
    _all: number
  }


  export type IDAvgAggregateInputType = {
    ID?: true
    PIN?: true
  }

  export type IDSumAggregateInputType = {
    ID?: true
    PIN?: true
  }

  export type IDMinAggregateInputType = {
    ID?: true
    Name?: true
    PIN?: true
  }

  export type IDMaxAggregateInputType = {
    ID?: true
    Name?: true
    PIN?: true
  }

  export type IDCountAggregateInputType = {
    ID?: true
    Name?: true
    PIN?: true
    _all?: true
  }

  export type IDAggregateArgs = {
    /**
     * Filter which ID to aggregate.
     */
    where?: IDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IDS to fetch.
     */
    orderBy?: Enumerable<IDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IDS
    **/
    _count?: true | IDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IDAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IDSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IDMaxAggregateInputType
  }

  export type GetIDAggregateType<T extends IDAggregateArgs> = {
        [P in keyof T & keyof AggregateID]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateID[P]>
      : GetScalarType<T[P], AggregateID[P]>
  }




  export type IDGroupByArgs = {
    where?: IDWhereInput
    orderBy?: Enumerable<IDOrderByWithAggregationInput>
    by: IDScalarFieldEnum[]
    having?: IDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IDCountAggregateInputType | true
    _avg?: IDAvgAggregateInputType
    _sum?: IDSumAggregateInputType
    _min?: IDMinAggregateInputType
    _max?: IDMaxAggregateInputType
  }


  export type IDGroupByOutputType = {
    ID: number
    Name: string
    PIN: number
    _count: IDCountAggregateOutputType | null
    _avg: IDAvgAggregateOutputType | null
    _sum: IDSumAggregateOutputType | null
    _min: IDMinAggregateOutputType | null
    _max: IDMaxAggregateOutputType | null
  }

  type GetIDGroupByPayload<T extends IDGroupByArgs> = PrismaPromise<
    Array<
      PickArray<IDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IDGroupByOutputType[P]>
            : GetScalarType<T[P], IDGroupByOutputType[P]>
        }
      >
    >


  export type IDSelect = {
    ID?: boolean
    Name?: boolean
    PIN?: boolean
  }


  export type IDGetPayload<S extends boolean | null | undefined | IDArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ID :
    S extends undefined ? never :
    S extends { include: any } & (IDArgs | IDFindManyArgs)
    ? ID 
    : S extends { select: any } & (IDArgs | IDFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ID ? ID[P] : never
  } 
      : ID


  type IDCountArgs = 
    Omit<IDFindManyArgs, 'select' | 'include'> & {
      select?: IDCountAggregateInputType | true
    }

  export interface IDDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ID that matches the filter.
     * @param {IDFindUniqueArgs} args - Arguments to find a ID
     * @example
     * // Get one ID
     * const iD = await prisma.iD.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IDFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, IDFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ID'> extends True ? Prisma__IDClient<IDGetPayload<T>> : Prisma__IDClient<IDGetPayload<T> | null, null>

    /**
     * Find one ID that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IDFindUniqueOrThrowArgs} args - Arguments to find a ID
     * @example
     * // Get one ID
     * const iD = await prisma.iD.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IDFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, IDFindUniqueOrThrowArgs>
    ): Prisma__IDClient<IDGetPayload<T>>

    /**
     * Find the first ID that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDFindFirstArgs} args - Arguments to find a ID
     * @example
     * // Get one ID
     * const iD = await prisma.iD.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IDFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, IDFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ID'> extends True ? Prisma__IDClient<IDGetPayload<T>> : Prisma__IDClient<IDGetPayload<T> | null, null>

    /**
     * Find the first ID that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDFindFirstOrThrowArgs} args - Arguments to find a ID
     * @example
     * // Get one ID
     * const iD = await prisma.iD.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IDFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IDFindFirstOrThrowArgs>
    ): Prisma__IDClient<IDGetPayload<T>>

    /**
     * Find zero or more IDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IDS
     * const iDS = await prisma.iD.findMany()
     * 
     * // Get first 10 IDS
     * const iDS = await prisma.iD.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const iDWithIDOnly = await prisma.iD.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends IDFindManyArgs>(
      args?: SelectSubset<T, IDFindManyArgs>
    ): PrismaPromise<Array<IDGetPayload<T>>>

    /**
     * Create a ID.
     * @param {IDCreateArgs} args - Arguments to create a ID.
     * @example
     * // Create one ID
     * const ID = await prisma.iD.create({
     *   data: {
     *     // ... data to create a ID
     *   }
     * })
     * 
    **/
    create<T extends IDCreateArgs>(
      args: SelectSubset<T, IDCreateArgs>
    ): Prisma__IDClient<IDGetPayload<T>>

    /**
     * Delete a ID.
     * @param {IDDeleteArgs} args - Arguments to delete one ID.
     * @example
     * // Delete one ID
     * const ID = await prisma.iD.delete({
     *   where: {
     *     // ... filter to delete one ID
     *   }
     * })
     * 
    **/
    delete<T extends IDDeleteArgs>(
      args: SelectSubset<T, IDDeleteArgs>
    ): Prisma__IDClient<IDGetPayload<T>>

    /**
     * Update one ID.
     * @param {IDUpdateArgs} args - Arguments to update one ID.
     * @example
     * // Update one ID
     * const iD = await prisma.iD.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IDUpdateArgs>(
      args: SelectSubset<T, IDUpdateArgs>
    ): Prisma__IDClient<IDGetPayload<T>>

    /**
     * Delete zero or more IDS.
     * @param {IDDeleteManyArgs} args - Arguments to filter IDS to delete.
     * @example
     * // Delete a few IDS
     * const { count } = await prisma.iD.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IDDeleteManyArgs>(
      args?: SelectSubset<T, IDDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more IDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IDS
     * const iD = await prisma.iD.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IDUpdateManyArgs>(
      args: SelectSubset<T, IDUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ID.
     * @param {IDUpsertArgs} args - Arguments to update or create a ID.
     * @example
     * // Update or create a ID
     * const iD = await prisma.iD.upsert({
     *   create: {
     *     // ... data to create a ID
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ID we want to update
     *   }
     * })
    **/
    upsert<T extends IDUpsertArgs>(
      args: SelectSubset<T, IDUpsertArgs>
    ): Prisma__IDClient<IDGetPayload<T>>

    /**
     * Count the number of IDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDCountArgs} args - Arguments to filter IDS to count.
     * @example
     * // Count the number of IDS
     * const count = await prisma.iD.count({
     *   where: {
     *     // ... the filter for the IDS we want to count
     *   }
     * })
    **/
    count<T extends IDCountArgs>(
      args?: Subset<T, IDCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ID.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IDAggregateArgs>(args: Subset<T, IDAggregateArgs>): PrismaPromise<GetIDAggregateType<T>>

    /**
     * Group by ID.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IDGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IDGroupByArgs['orderBy'] }
        : { orderBy?: IDGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIDGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ID.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__IDClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ID base type for findUnique actions
   */
  export type IDFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * Filter, which ID to fetch.
     */
    where: IDWhereUniqueInput
  }

  /**
   * ID findUnique
   */
  export interface IDFindUniqueArgs extends IDFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ID findUniqueOrThrow
   */
  export type IDFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * Filter, which ID to fetch.
     */
    where: IDWhereUniqueInput
  }


  /**
   * ID base type for findFirst actions
   */
  export type IDFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * Filter, which ID to fetch.
     */
    where?: IDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IDS to fetch.
     */
    orderBy?: Enumerable<IDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IDS.
     */
    cursor?: IDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IDS.
     */
    distinct?: Enumerable<IDScalarFieldEnum>
  }

  /**
   * ID findFirst
   */
  export interface IDFindFirstArgs extends IDFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ID findFirstOrThrow
   */
  export type IDFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * Filter, which ID to fetch.
     */
    where?: IDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IDS to fetch.
     */
    orderBy?: Enumerable<IDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IDS.
     */
    cursor?: IDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IDS.
     */
    distinct?: Enumerable<IDScalarFieldEnum>
  }


  /**
   * ID findMany
   */
  export type IDFindManyArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * Filter, which IDS to fetch.
     */
    where?: IDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IDS to fetch.
     */
    orderBy?: Enumerable<IDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IDS.
     */
    cursor?: IDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IDS.
     */
    skip?: number
    distinct?: Enumerable<IDScalarFieldEnum>
  }


  /**
   * ID create
   */
  export type IDCreateArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * The data needed to create a ID.
     */
    data: XOR<IDCreateInput, IDUncheckedCreateInput>
  }


  /**
   * ID update
   */
  export type IDUpdateArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * The data needed to update a ID.
     */
    data: XOR<IDUpdateInput, IDUncheckedUpdateInput>
    /**
     * Choose, which ID to update.
     */
    where: IDWhereUniqueInput
  }


  /**
   * ID updateMany
   */
  export type IDUpdateManyArgs = {
    /**
     * The data used to update IDS.
     */
    data: XOR<IDUpdateManyMutationInput, IDUncheckedUpdateManyInput>
    /**
     * Filter which IDS to update
     */
    where?: IDWhereInput
  }


  /**
   * ID upsert
   */
  export type IDUpsertArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * The filter to search for the ID to update in case it exists.
     */
    where: IDWhereUniqueInput
    /**
     * In case the ID found by the `where` argument doesn't exist, create a new ID with this data.
     */
    create: XOR<IDCreateInput, IDUncheckedCreateInput>
    /**
     * In case the ID was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IDUpdateInput, IDUncheckedUpdateInput>
  }


  /**
   * ID delete
   */
  export type IDDeleteArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
    /**
     * Filter which ID to delete.
     */
    where: IDWhereUniqueInput
  }


  /**
   * ID deleteMany
   */
  export type IDDeleteManyArgs = {
    /**
     * Filter which IDS to delete
     */
    where?: IDWhereInput
  }


  /**
   * ID without action
   */
  export type IDArgs = {
    /**
     * Select specific fields to fetch from the ID
     */
    select?: IDSelect | null
  }



  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    ID: number | null
    PIN: number | null
  }

  export type UserSumAggregateOutputType = {
    ID: number | null
    PIN: number | null
  }

  export type UserMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    PIN: number | null
  }

  export type UserMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    PIN: number | null
  }

  export type UserCountAggregateOutputType = {
    ID: number
    Name: number
    PIN: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    ID?: true
    PIN?: true
  }

  export type UserSumAggregateInputType = {
    ID?: true
    PIN?: true
  }

  export type UserMinAggregateInputType = {
    ID?: true
    Name?: true
    PIN?: true
  }

  export type UserMaxAggregateInputType = {
    ID?: true
    Name?: true
    PIN?: true
  }

  export type UserCountAggregateInputType = {
    ID?: true
    Name?: true
    PIN?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    ID: number
    Name: string
    PIN: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    ID?: boolean
    Name?: boolean
    PIN?: boolean
  }


  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const userWithIDOnly = await prisma.user.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
  }



  /**
   * Model productdata
   */


  export type AggregateProductdata = {
    _count: ProductdataCountAggregateOutputType | null
    _avg: ProductdataAvgAggregateOutputType | null
    _sum: ProductdataSumAggregateOutputType | null
    _min: ProductdataMinAggregateOutputType | null
    _max: ProductdataMaxAggregateOutputType | null
  }

  export type ProductdataAvgAggregateOutputType = {
    product_barcode: number | null
    product_id: number | null
    price: number | null
  }

  export type ProductdataSumAggregateOutputType = {
    product_barcode: bigint | null
    product_id: number | null
    price: number | null
  }

  export type ProductdataMinAggregateOutputType = {
    product_barcode: bigint | null
    product_id: number | null
    tiltle: string | null
    code: string | null
    fabric_name: string | null
    front_img: string | null
    back_img: string | null
    price: number | null
    outside_brand: string | null
    description: string | null
    category: string | null
    size: string | null
  }

  export type ProductdataMaxAggregateOutputType = {
    product_barcode: bigint | null
    product_id: number | null
    tiltle: string | null
    code: string | null
    fabric_name: string | null
    front_img: string | null
    back_img: string | null
    price: number | null
    outside_brand: string | null
    description: string | null
    category: string | null
    size: string | null
  }

  export type ProductdataCountAggregateOutputType = {
    product_barcode: number
    product_id: number
    tiltle: number
    code: number
    fabric_name: number
    front_img: number
    back_img: number
    price: number
    outside_brand: number
    description: number
    category: number
    size: number
    _all: number
  }


  export type ProductdataAvgAggregateInputType = {
    product_barcode?: true
    product_id?: true
    price?: true
  }

  export type ProductdataSumAggregateInputType = {
    product_barcode?: true
    product_id?: true
    price?: true
  }

  export type ProductdataMinAggregateInputType = {
    product_barcode?: true
    product_id?: true
    tiltle?: true
    code?: true
    fabric_name?: true
    front_img?: true
    back_img?: true
    price?: true
    outside_brand?: true
    description?: true
    category?: true
    size?: true
  }

  export type ProductdataMaxAggregateInputType = {
    product_barcode?: true
    product_id?: true
    tiltle?: true
    code?: true
    fabric_name?: true
    front_img?: true
    back_img?: true
    price?: true
    outside_brand?: true
    description?: true
    category?: true
    size?: true
  }

  export type ProductdataCountAggregateInputType = {
    product_barcode?: true
    product_id?: true
    tiltle?: true
    code?: true
    fabric_name?: true
    front_img?: true
    back_img?: true
    price?: true
    outside_brand?: true
    description?: true
    category?: true
    size?: true
    _all?: true
  }

  export type ProductdataAggregateArgs = {
    /**
     * Filter which productdata to aggregate.
     */
    where?: productdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productdata to fetch.
     */
    orderBy?: Enumerable<productdataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productdata
    **/
    _count?: true | ProductdataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductdataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductdataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductdataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductdataMaxAggregateInputType
  }

  export type GetProductdataAggregateType<T extends ProductdataAggregateArgs> = {
        [P in keyof T & keyof AggregateProductdata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductdata[P]>
      : GetScalarType<T[P], AggregateProductdata[P]>
  }




  export type ProductdataGroupByArgs = {
    where?: productdataWhereInput
    orderBy?: Enumerable<productdataOrderByWithAggregationInput>
    by: ProductdataScalarFieldEnum[]
    having?: productdataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductdataCountAggregateInputType | true
    _avg?: ProductdataAvgAggregateInputType
    _sum?: ProductdataSumAggregateInputType
    _min?: ProductdataMinAggregateInputType
    _max?: ProductdataMaxAggregateInputType
  }


  export type ProductdataGroupByOutputType = {
    product_barcode: bigint
    product_id: number
    tiltle: string
    code: string
    fabric_name: string | null
    front_img: string
    back_img: string
    price: number
    outside_brand: string | null
    description: string | null
    category: string | null
    size: string | null
    _count: ProductdataCountAggregateOutputType | null
    _avg: ProductdataAvgAggregateOutputType | null
    _sum: ProductdataSumAggregateOutputType | null
    _min: ProductdataMinAggregateOutputType | null
    _max: ProductdataMaxAggregateOutputType | null
  }

  type GetProductdataGroupByPayload<T extends ProductdataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductdataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductdataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductdataGroupByOutputType[P]>
            : GetScalarType<T[P], ProductdataGroupByOutputType[P]>
        }
      >
    >


  export type productdataSelect = {
    product_barcode?: boolean
    product_id?: boolean
    tiltle?: boolean
    code?: boolean
    fabric_name?: boolean
    front_img?: boolean
    back_img?: boolean
    price?: boolean
    outside_brand?: boolean
    description?: boolean
    category?: boolean
    size?: boolean
  }


  export type productdataGetPayload<S extends boolean | null | undefined | productdataArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? productdata :
    S extends undefined ? never :
    S extends { include: any } & (productdataArgs | productdataFindManyArgs)
    ? productdata 
    : S extends { select: any } & (productdataArgs | productdataFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof productdata ? productdata[P] : never
  } 
      : productdata


  type productdataCountArgs = 
    Omit<productdataFindManyArgs, 'select' | 'include'> & {
      select?: ProductdataCountAggregateInputType | true
    }

  export interface productdataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Productdata that matches the filter.
     * @param {productdataFindUniqueArgs} args - Arguments to find a Productdata
     * @example
     * // Get one Productdata
     * const productdata = await prisma.productdata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productdataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productdataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'productdata'> extends True ? Prisma__productdataClient<productdataGetPayload<T>> : Prisma__productdataClient<productdataGetPayload<T> | null, null>

    /**
     * Find one Productdata that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productdataFindUniqueOrThrowArgs} args - Arguments to find a Productdata
     * @example
     * // Get one Productdata
     * const productdata = await prisma.productdata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productdataFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, productdataFindUniqueOrThrowArgs>
    ): Prisma__productdataClient<productdataGetPayload<T>>

    /**
     * Find the first Productdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productdataFindFirstArgs} args - Arguments to find a Productdata
     * @example
     * // Get one Productdata
     * const productdata = await prisma.productdata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productdataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productdataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'productdata'> extends True ? Prisma__productdataClient<productdataGetPayload<T>> : Prisma__productdataClient<productdataGetPayload<T> | null, null>

    /**
     * Find the first Productdata that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productdataFindFirstOrThrowArgs} args - Arguments to find a Productdata
     * @example
     * // Get one Productdata
     * const productdata = await prisma.productdata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productdataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, productdataFindFirstOrThrowArgs>
    ): Prisma__productdataClient<productdataGetPayload<T>>

    /**
     * Find zero or more Productdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productdataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productdata
     * const productdata = await prisma.productdata.findMany()
     * 
     * // Get first 10 Productdata
     * const productdata = await prisma.productdata.findMany({ take: 10 })
     * 
     * // Only select the `product_barcode`
     * const productdataWithProduct_barcodeOnly = await prisma.productdata.findMany({ select: { product_barcode: true } })
     * 
    **/
    findMany<T extends productdataFindManyArgs>(
      args?: SelectSubset<T, productdataFindManyArgs>
    ): PrismaPromise<Array<productdataGetPayload<T>>>

    /**
     * Create a Productdata.
     * @param {productdataCreateArgs} args - Arguments to create a Productdata.
     * @example
     * // Create one Productdata
     * const Productdata = await prisma.productdata.create({
     *   data: {
     *     // ... data to create a Productdata
     *   }
     * })
     * 
    **/
    create<T extends productdataCreateArgs>(
      args: SelectSubset<T, productdataCreateArgs>
    ): Prisma__productdataClient<productdataGetPayload<T>>

    /**
     * Delete a Productdata.
     * @param {productdataDeleteArgs} args - Arguments to delete one Productdata.
     * @example
     * // Delete one Productdata
     * const Productdata = await prisma.productdata.delete({
     *   where: {
     *     // ... filter to delete one Productdata
     *   }
     * })
     * 
    **/
    delete<T extends productdataDeleteArgs>(
      args: SelectSubset<T, productdataDeleteArgs>
    ): Prisma__productdataClient<productdataGetPayload<T>>

    /**
     * Update one Productdata.
     * @param {productdataUpdateArgs} args - Arguments to update one Productdata.
     * @example
     * // Update one Productdata
     * const productdata = await prisma.productdata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productdataUpdateArgs>(
      args: SelectSubset<T, productdataUpdateArgs>
    ): Prisma__productdataClient<productdataGetPayload<T>>

    /**
     * Delete zero or more Productdata.
     * @param {productdataDeleteManyArgs} args - Arguments to filter Productdata to delete.
     * @example
     * // Delete a few Productdata
     * const { count } = await prisma.productdata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productdataDeleteManyArgs>(
      args?: SelectSubset<T, productdataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productdataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productdata
     * const productdata = await prisma.productdata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productdataUpdateManyArgs>(
      args: SelectSubset<T, productdataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Productdata.
     * @param {productdataUpsertArgs} args - Arguments to update or create a Productdata.
     * @example
     * // Update or create a Productdata
     * const productdata = await prisma.productdata.upsert({
     *   create: {
     *     // ... data to create a Productdata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productdata we want to update
     *   }
     * })
    **/
    upsert<T extends productdataUpsertArgs>(
      args: SelectSubset<T, productdataUpsertArgs>
    ): Prisma__productdataClient<productdataGetPayload<T>>

    /**
     * Count the number of Productdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productdataCountArgs} args - Arguments to filter Productdata to count.
     * @example
     * // Count the number of Productdata
     * const count = await prisma.productdata.count({
     *   where: {
     *     // ... the filter for the Productdata we want to count
     *   }
     * })
    **/
    count<T extends productdataCountArgs>(
      args?: Subset<T, productdataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductdataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductdataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductdataAggregateArgs>(args: Subset<T, ProductdataAggregateArgs>): PrismaPromise<GetProductdataAggregateType<T>>

    /**
     * Group by Productdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductdataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductdataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductdataGroupByArgs['orderBy'] }
        : { orderBy?: ProductdataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductdataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductdataGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for productdata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productdataClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * productdata base type for findUnique actions
   */
  export type productdataFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * Filter, which productdata to fetch.
     */
    where: productdataWhereUniqueInput
  }

  /**
   * productdata findUnique
   */
  export interface productdataFindUniqueArgs extends productdataFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * productdata findUniqueOrThrow
   */
  export type productdataFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * Filter, which productdata to fetch.
     */
    where: productdataWhereUniqueInput
  }


  /**
   * productdata base type for findFirst actions
   */
  export type productdataFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * Filter, which productdata to fetch.
     */
    where?: productdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productdata to fetch.
     */
    orderBy?: Enumerable<productdataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productdata.
     */
    cursor?: productdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productdata.
     */
    distinct?: Enumerable<ProductdataScalarFieldEnum>
  }

  /**
   * productdata findFirst
   */
  export interface productdataFindFirstArgs extends productdataFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * productdata findFirstOrThrow
   */
  export type productdataFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * Filter, which productdata to fetch.
     */
    where?: productdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productdata to fetch.
     */
    orderBy?: Enumerable<productdataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productdata.
     */
    cursor?: productdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productdata.
     */
    distinct?: Enumerable<ProductdataScalarFieldEnum>
  }


  /**
   * productdata findMany
   */
  export type productdataFindManyArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * Filter, which productdata to fetch.
     */
    where?: productdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productdata to fetch.
     */
    orderBy?: Enumerable<productdataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productdata.
     */
    cursor?: productdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productdata.
     */
    skip?: number
    distinct?: Enumerable<ProductdataScalarFieldEnum>
  }


  /**
   * productdata create
   */
  export type productdataCreateArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * The data needed to create a productdata.
     */
    data: XOR<productdataCreateInput, productdataUncheckedCreateInput>
  }


  /**
   * productdata update
   */
  export type productdataUpdateArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * The data needed to update a productdata.
     */
    data: XOR<productdataUpdateInput, productdataUncheckedUpdateInput>
    /**
     * Choose, which productdata to update.
     */
    where: productdataWhereUniqueInput
  }


  /**
   * productdata updateMany
   */
  export type productdataUpdateManyArgs = {
    /**
     * The data used to update productdata.
     */
    data: XOR<productdataUpdateManyMutationInput, productdataUncheckedUpdateManyInput>
    /**
     * Filter which productdata to update
     */
    where?: productdataWhereInput
  }


  /**
   * productdata upsert
   */
  export type productdataUpsertArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * The filter to search for the productdata to update in case it exists.
     */
    where: productdataWhereUniqueInput
    /**
     * In case the productdata found by the `where` argument doesn't exist, create a new productdata with this data.
     */
    create: XOR<productdataCreateInput, productdataUncheckedCreateInput>
    /**
     * In case the productdata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productdataUpdateInput, productdataUncheckedUpdateInput>
  }


  /**
   * productdata delete
   */
  export type productdataDeleteArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
    /**
     * Filter which productdata to delete.
     */
    where: productdataWhereUniqueInput
  }


  /**
   * productdata deleteMany
   */
  export type productdataDeleteManyArgs = {
    /**
     * Filter which productdata to delete
     */
    where?: productdataWhereInput
  }


  /**
   * productdata without action
   */
  export type productdataArgs = {
    /**
     * Select specific fields to fetch from the productdata
     */
    select?: productdataSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const IDScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    PIN: 'PIN'
  };

  export type IDScalarFieldEnum = (typeof IDScalarFieldEnum)[keyof typeof IDScalarFieldEnum]


  export const ProductdataScalarFieldEnum: {
    product_barcode: 'product_barcode',
    product_id: 'product_id',
    tiltle: 'tiltle',
    code: 'code',
    fabric_name: 'fabric_name',
    front_img: 'front_img',
    back_img: 'back_img',
    price: 'price',
    outside_brand: 'outside_brand',
    description: 'description',
    category: 'category',
    size: 'size'
  };

  export type ProductdataScalarFieldEnum = (typeof ProductdataScalarFieldEnum)[keyof typeof ProductdataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    PIN: 'PIN'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type IDWhereInput = {
    AND?: Enumerable<IDWhereInput>
    OR?: Enumerable<IDWhereInput>
    NOT?: Enumerable<IDWhereInput>
    ID?: IntFilter | number
    Name?: StringFilter | string
    PIN?: IntFilter | number
  }

  export type IDOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type IDWhereUniqueInput = {
    ID?: number
  }

  export type IDOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
    _count?: IDCountOrderByAggregateInput
    _avg?: IDAvgOrderByAggregateInput
    _max?: IDMaxOrderByAggregateInput
    _min?: IDMinOrderByAggregateInput
    _sum?: IDSumOrderByAggregateInput
  }

  export type IDScalarWhereWithAggregatesInput = {
    AND?: Enumerable<IDScalarWhereWithAggregatesInput>
    OR?: Enumerable<IDScalarWhereWithAggregatesInput>
    NOT?: Enumerable<IDScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    Name?: StringWithAggregatesFilter | string
    PIN?: IntWithAggregatesFilter | number
  }

  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    ID?: IntFilter | number
    Name?: StringFilter | string
    PIN?: IntFilter | number
  }

  export type userOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type userWhereUniqueInput = {
    ID?: number
  }

  export type userOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    Name?: StringWithAggregatesFilter | string
    PIN?: IntWithAggregatesFilter | number
  }

  export type productdataWhereInput = {
    AND?: Enumerable<productdataWhereInput>
    OR?: Enumerable<productdataWhereInput>
    NOT?: Enumerable<productdataWhereInput>
    product_barcode?: BigIntFilter | bigint | number
    product_id?: IntFilter | number
    tiltle?: StringFilter | string
    code?: StringFilter | string
    fabric_name?: StringNullableFilter | string | null
    front_img?: StringFilter | string
    back_img?: StringFilter | string
    price?: IntFilter | number
    outside_brand?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    category?: StringNullableFilter | string | null
    size?: StringNullableFilter | string | null
  }

  export type productdataOrderByWithRelationInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    tiltle?: SortOrder
    code?: SortOrder
    fabric_name?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    price?: SortOrder
    outside_brand?: SortOrder
    description?: SortOrder
    category?: SortOrder
    size?: SortOrder
  }

  export type productdataWhereUniqueInput = {
    product_barcode?: bigint | number
  }

  export type productdataOrderByWithAggregationInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    tiltle?: SortOrder
    code?: SortOrder
    fabric_name?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    price?: SortOrder
    outside_brand?: SortOrder
    description?: SortOrder
    category?: SortOrder
    size?: SortOrder
    _count?: productdataCountOrderByAggregateInput
    _avg?: productdataAvgOrderByAggregateInput
    _max?: productdataMaxOrderByAggregateInput
    _min?: productdataMinOrderByAggregateInput
    _sum?: productdataSumOrderByAggregateInput
  }

  export type productdataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productdataScalarWhereWithAggregatesInput>
    OR?: Enumerable<productdataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productdataScalarWhereWithAggregatesInput>
    product_barcode?: BigIntWithAggregatesFilter | bigint | number
    product_id?: IntWithAggregatesFilter | number
    tiltle?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    fabric_name?: StringNullableWithAggregatesFilter | string | null
    front_img?: StringWithAggregatesFilter | string
    back_img?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    outside_brand?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    category?: StringNullableWithAggregatesFilter | string | null
    size?: StringNullableWithAggregatesFilter | string | null
  }

  export type IDCreateInput = {
    Name: string
    PIN: number
  }

  export type IDUncheckedCreateInput = {
    ID?: number
    Name: string
    PIN: number
  }

  export type IDUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type IDUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type IDUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type IDUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    Name: string
    PIN: number
  }

  export type userUncheckedCreateInput = {
    ID?: number
    Name: string
    PIN: number
  }

  export type userUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type userUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type userUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type userUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    PIN?: IntFieldUpdateOperationsInput | number
  }

  export type productdataCreateInput = {
    product_barcode: bigint | number
    product_id: number
    tiltle: string
    code: string
    fabric_name?: string | null
    front_img: string
    back_img: string
    price: number
    outside_brand?: string | null
    description?: string | null
    category?: string | null
    size?: string | null
  }

  export type productdataUncheckedCreateInput = {
    product_barcode: bigint | number
    product_id: number
    tiltle: string
    code: string
    fabric_name?: string | null
    front_img: string
    back_img: string
    price: number
    outside_brand?: string | null
    description?: string | null
    category?: string | null
    size?: string | null
  }

  export type productdataUpdateInput = {
    product_barcode?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: IntFieldUpdateOperationsInput | number
    tiltle?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fabric_name?: NullableStringFieldUpdateOperationsInput | string | null
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    outside_brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productdataUncheckedUpdateInput = {
    product_barcode?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: IntFieldUpdateOperationsInput | number
    tiltle?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fabric_name?: NullableStringFieldUpdateOperationsInput | string | null
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    outside_brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productdataUpdateManyMutationInput = {
    product_barcode?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: IntFieldUpdateOperationsInput | number
    tiltle?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fabric_name?: NullableStringFieldUpdateOperationsInput | string | null
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    outside_brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productdataUncheckedUpdateManyInput = {
    product_barcode?: BigIntFieldUpdateOperationsInput | bigint | number
    product_id?: IntFieldUpdateOperationsInput | number
    tiltle?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fabric_name?: NullableStringFieldUpdateOperationsInput | string | null
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    outside_brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type IDCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type IDAvgOrderByAggregateInput = {
    ID?: SortOrder
    PIN?: SortOrder
  }

  export type IDMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type IDMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type IDSumOrderByAggregateInput = {
    ID?: SortOrder
    PIN?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type userCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    ID?: SortOrder
    PIN?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    PIN?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    ID?: SortOrder
    PIN?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type productdataCountOrderByAggregateInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    tiltle?: SortOrder
    code?: SortOrder
    fabric_name?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    price?: SortOrder
    outside_brand?: SortOrder
    description?: SortOrder
    category?: SortOrder
    size?: SortOrder
  }

  export type productdataAvgOrderByAggregateInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
  }

  export type productdataMaxOrderByAggregateInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    tiltle?: SortOrder
    code?: SortOrder
    fabric_name?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    price?: SortOrder
    outside_brand?: SortOrder
    description?: SortOrder
    category?: SortOrder
    size?: SortOrder
  }

  export type productdataMinOrderByAggregateInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    tiltle?: SortOrder
    code?: SortOrder
    fabric_name?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    price?: SortOrder
    outside_brand?: SortOrder
    description?: SortOrder
    category?: SortOrder
    size?: SortOrder
  }

  export type productdataSumOrderByAggregateInput = {
    product_barcode?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}