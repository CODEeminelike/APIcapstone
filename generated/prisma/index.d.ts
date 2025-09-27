
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model images
 * 
 */
export type images = $Result.DefaultSelection<Prisma.$imagesPayload>
/**
 * Model saved_images
 * 
 */
export type saved_images = $Result.DefaultSelection<Prisma.$saved_imagesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saved_images`: Exposes CRUD operations for the **saved_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_images
    * const saved_images = await prisma.saved_images.findMany()
    * ```
    */
  get saved_images(): Prisma.saved_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    comments: 'comments',
    images: 'images',
    saved_images: 'saved_images',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "comments" | "images" | "saved_images" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      images: {
        payload: Prisma.$imagesPayload<ExtArgs>
        fields: Prisma.imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findFirst: {
            args: Prisma.imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findMany: {
            args: Prisma.imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          create: {
            args: Prisma.imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          createMany: {
            args: Prisma.imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          update: {
            args: Prisma.imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          deleteMany: {
            args: Prisma.imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      saved_images: {
        payload: Prisma.$saved_imagesPayload<ExtArgs>
        fields: Prisma.saved_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>
          }
          findFirst: {
            args: Prisma.saved_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>
          }
          findMany: {
            args: Prisma.saved_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>[]
          }
          create: {
            args: Prisma.saved_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>
          }
          createMany: {
            args: Prisma.saved_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.saved_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>
          }
          update: {
            args: Prisma.saved_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>
          }
          deleteMany: {
            args: Prisma.saved_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.saved_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_imagesPayload>
          }
          aggregate: {
            args: Prisma.Saved_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_images>
          }
          groupBy: {
            args: Prisma.saved_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_imagesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    comments?: commentsOmit
    images?: imagesOmit
    saved_images?: saved_imagesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ImagesCountOutputType
   */

  export type ImagesCountOutputType = {
    comments: number
    saved_images: number
  }

  export type ImagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ImagesCountOutputTypeCountCommentsArgs
    saved_images?: boolean | ImagesCountOutputTypeCountSaved_imagesArgs
  }

  // Custom InputTypes
  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesCountOutputType
     */
    select?: ImagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountSaved_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_imagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    images: number
    saved_images: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    images?: boolean | UsersCountOutputTypeCountImagesArgs
    saved_images?: boolean | UsersCountOutputTypeCountSaved_imagesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSaved_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_imagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    imageId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    imageId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    imageId: number | null
    createdAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    imageId: number | null
    createdAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    imageId: number
    createdAt: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    imageId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    content: string
    userId: number
    imageId: number
    createdAt: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    images?: boolean | imagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type commentsSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "imageId" | "createdAt", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    images?: boolean | imagesDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      images: Prisma.$imagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      userId: number
      imageId: number
      createdAt: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends imagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imagesDefaultArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly userId: FieldRef<"comments", 'Int'>
    readonly imageId: FieldRef<"comments", 'Int'>
    readonly createdAt: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    imageName: string | null
    imagePath: string | null
    description: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    imageName: string | null
    imagePath: string | null
    description: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    imageName: number
    imagePath: number
    description: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    imageName?: true
    imagePath?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    imageName?: true
    imagePath?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    imageName?: true
    imagePath?: true
    description?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to aggregate.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithAggregationInput | imagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: number
    imageName: string
    imagePath: string
    description: string | null
    userId: number
    createdAt: Date | null
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageName?: boolean
    imagePath?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    comments?: boolean | images$commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    saved_images?: boolean | images$saved_imagesArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>



  export type imagesSelectScalar = {
    id?: boolean
    imageName?: boolean
    imagePath?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageName" | "imagePath" | "description" | "userId" | "createdAt", ExtArgs["result"]["images"]>
  export type imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | images$commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    saved_images?: boolean | images$saved_imagesArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      saved_images: Prisma.$saved_imagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageName: string
      imagePath: string
      description: string | null
      userId: number
      createdAt: Date | null
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type imagesGetPayload<S extends boolean | null | undefined | imagesDefaultArgs> = $Result.GetResult<Prisma.$imagesPayload, S>

  type imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images'], meta: { name: 'images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {imagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagesFindUniqueArgs>(args: SelectSubset<T, imagesFindUniqueArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagesFindFirstArgs>(args?: SelectSubset<T, imagesFindFirstArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imagesFindManyArgs>(args?: SelectSubset<T, imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {imagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends imagesCreateArgs>(args: SelectSubset<T, imagesCreateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagesCreateManyArgs>(args?: SelectSubset<T, imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {imagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends imagesDeleteArgs>(args: SelectSubset<T, imagesDeleteArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {imagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagesUpdateArgs>(args: SelectSubset<T, imagesUpdateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagesDeleteManyArgs>(args?: SelectSubset<T, imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagesUpdateManyArgs>(args: SelectSubset<T, imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {imagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends imagesUpsertArgs>(args: SelectSubset<T, imagesUpsertArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imagesCountArgs>(
      args?: Subset<T, imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesGroupByArgs} args - Group by arguments.
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
      T extends imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagesGroupByArgs['orderBy'] }
        : { orderBy?: imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images model
   */
  readonly fields: imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends images$commentsArgs<ExtArgs> = {}>(args?: Subset<T, images$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saved_images<T extends images$saved_imagesArgs<ExtArgs> = {}>(args?: Subset<T, images$saved_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images model
   */
  interface imagesFieldRefs {
    readonly id: FieldRef<"images", 'Int'>
    readonly imageName: FieldRef<"images", 'String'>
    readonly imagePath: FieldRef<"images", 'String'>
    readonly description: FieldRef<"images", 'String'>
    readonly userId: FieldRef<"images", 'Int'>
    readonly createdAt: FieldRef<"images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * images findUnique
   */
  export type imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findUniqueOrThrow
   */
  export type imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findFirst
   */
  export type imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findFirstOrThrow
   */
  export type imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findMany
   */
  export type imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images create
   */
  export type imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a images.
     */
    data: XOR<imagesCreateInput, imagesUncheckedCreateInput>
  }

  /**
   * images createMany
   */
  export type imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images update
   */
  export type imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a images.
     */
    data: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
    /**
     * Choose, which images to update.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images updateMany
   */
  export type imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * images upsert
   */
  export type imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the images to update in case it exists.
     */
    where: imagesWhereUniqueInput
    /**
     * In case the images found by the `where` argument doesn't exist, create a new images with this data.
     */
    create: XOR<imagesCreateInput, imagesUncheckedCreateInput>
    /**
     * In case the images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
  }

  /**
   * images delete
   */
  export type imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter which images to delete.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images deleteMany
   */
  export type imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * images.comments
   */
  export type images$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * images.saved_images
   */
  export type images$saved_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    where?: saved_imagesWhereInput
    orderBy?: saved_imagesOrderByWithRelationInput | saved_imagesOrderByWithRelationInput[]
    cursor?: saved_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_imagesScalarFieldEnum | Saved_imagesScalarFieldEnum[]
  }

  /**
   * images without action
   */
  export type imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
  }


  /**
   * Model saved_images
   */

  export type AggregateSaved_images = {
    _count: Saved_imagesCountAggregateOutputType | null
    _avg: Saved_imagesAvgAggregateOutputType | null
    _sum: Saved_imagesSumAggregateOutputType | null
    _min: Saved_imagesMinAggregateOutputType | null
    _max: Saved_imagesMaxAggregateOutputType | null
  }

  export type Saved_imagesAvgAggregateOutputType = {
    userId: number | null
    imageId: number | null
  }

  export type Saved_imagesSumAggregateOutputType = {
    userId: number | null
    imageId: number | null
  }

  export type Saved_imagesMinAggregateOutputType = {
    userId: number | null
    imageId: number | null
    createdAt: Date | null
  }

  export type Saved_imagesMaxAggregateOutputType = {
    userId: number | null
    imageId: number | null
    createdAt: Date | null
  }

  export type Saved_imagesCountAggregateOutputType = {
    userId: number
    imageId: number
    createdAt: number
    _all: number
  }


  export type Saved_imagesAvgAggregateInputType = {
    userId?: true
    imageId?: true
  }

  export type Saved_imagesSumAggregateInputType = {
    userId?: true
    imageId?: true
  }

  export type Saved_imagesMinAggregateInputType = {
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type Saved_imagesMaxAggregateInputType = {
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type Saved_imagesCountAggregateInputType = {
    userId?: true
    imageId?: true
    createdAt?: true
    _all?: true
  }

  export type Saved_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_images to aggregate.
     */
    where?: saved_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_images to fetch.
     */
    orderBy?: saved_imagesOrderByWithRelationInput | saved_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_images
    **/
    _count?: true | Saved_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Saved_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Saved_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_imagesMaxAggregateInputType
  }

  export type GetSaved_imagesAggregateType<T extends Saved_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_images[P]>
      : GetScalarType<T[P], AggregateSaved_images[P]>
  }




  export type saved_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_imagesWhereInput
    orderBy?: saved_imagesOrderByWithAggregationInput | saved_imagesOrderByWithAggregationInput[]
    by: Saved_imagesScalarFieldEnum[] | Saved_imagesScalarFieldEnum
    having?: saved_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_imagesCountAggregateInputType | true
    _avg?: Saved_imagesAvgAggregateInputType
    _sum?: Saved_imagesSumAggregateInputType
    _min?: Saved_imagesMinAggregateInputType
    _max?: Saved_imagesMaxAggregateInputType
  }

  export type Saved_imagesGroupByOutputType = {
    userId: number
    imageId: number
    createdAt: Date | null
    _count: Saved_imagesCountAggregateOutputType | null
    _avg: Saved_imagesAvgAggregateOutputType | null
    _sum: Saved_imagesSumAggregateOutputType | null
    _min: Saved_imagesMinAggregateOutputType | null
    _max: Saved_imagesMaxAggregateOutputType | null
  }

  type GetSaved_imagesGroupByPayload<T extends saved_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_imagesGroupByOutputType[P]>
        }
      >
    >


  export type saved_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    images?: boolean | imagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_images"]>



  export type saved_imagesSelectScalar = {
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
  }

  export type saved_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "imageId" | "createdAt", ExtArgs["result"]["saved_images"]>
  export type saved_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    images?: boolean | imagesDefaultArgs<ExtArgs>
  }

  export type $saved_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_images"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      images: Prisma.$imagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      imageId: number
      createdAt: Date | null
    }, ExtArgs["result"]["saved_images"]>
    composites: {}
  }

  type saved_imagesGetPayload<S extends boolean | null | undefined | saved_imagesDefaultArgs> = $Result.GetResult<Prisma.$saved_imagesPayload, S>

  type saved_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_imagesCountAggregateInputType | true
    }

  export interface saved_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_images'], meta: { name: 'saved_images' } }
    /**
     * Find zero or one Saved_images that matches the filter.
     * @param {saved_imagesFindUniqueArgs} args - Arguments to find a Saved_images
     * @example
     * // Get one Saved_images
     * const saved_images = await prisma.saved_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_imagesFindUniqueArgs>(args: SelectSubset<T, saved_imagesFindUniqueArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_imagesFindUniqueOrThrowArgs} args - Arguments to find a Saved_images
     * @example
     * // Get one Saved_images
     * const saved_images = await prisma.saved_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagesFindFirstArgs} args - Arguments to find a Saved_images
     * @example
     * // Get one Saved_images
     * const saved_images = await prisma.saved_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_imagesFindFirstArgs>(args?: SelectSubset<T, saved_imagesFindFirstArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagesFindFirstOrThrowArgs} args - Arguments to find a Saved_images
     * @example
     * // Get one Saved_images
     * const saved_images = await prisma.saved_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_images
     * const saved_images = await prisma.saved_images.findMany()
     * 
     * // Get first 10 Saved_images
     * const saved_images = await prisma.saved_images.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const saved_imagesWithUserIdOnly = await prisma.saved_images.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends saved_imagesFindManyArgs>(args?: SelectSubset<T, saved_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_images.
     * @param {saved_imagesCreateArgs} args - Arguments to create a Saved_images.
     * @example
     * // Create one Saved_images
     * const Saved_images = await prisma.saved_images.create({
     *   data: {
     *     // ... data to create a Saved_images
     *   }
     * })
     * 
     */
    create<T extends saved_imagesCreateArgs>(args: SelectSubset<T, saved_imagesCreateArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_images.
     * @param {saved_imagesCreateManyArgs} args - Arguments to create many Saved_images.
     * @example
     * // Create many Saved_images
     * const saved_images = await prisma.saved_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_imagesCreateManyArgs>(args?: SelectSubset<T, saved_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Saved_images.
     * @param {saved_imagesDeleteArgs} args - Arguments to delete one Saved_images.
     * @example
     * // Delete one Saved_images
     * const Saved_images = await prisma.saved_images.delete({
     *   where: {
     *     // ... filter to delete one Saved_images
     *   }
     * })
     * 
     */
    delete<T extends saved_imagesDeleteArgs>(args: SelectSubset<T, saved_imagesDeleteArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_images.
     * @param {saved_imagesUpdateArgs} args - Arguments to update one Saved_images.
     * @example
     * // Update one Saved_images
     * const saved_images = await prisma.saved_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_imagesUpdateArgs>(args: SelectSubset<T, saved_imagesUpdateArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_images.
     * @param {saved_imagesDeleteManyArgs} args - Arguments to filter Saved_images to delete.
     * @example
     * // Delete a few Saved_images
     * const { count } = await prisma.saved_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_imagesDeleteManyArgs>(args?: SelectSubset<T, saved_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_images
     * const saved_images = await prisma.saved_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_imagesUpdateManyArgs>(args: SelectSubset<T, saved_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Saved_images.
     * @param {saved_imagesUpsertArgs} args - Arguments to update or create a Saved_images.
     * @example
     * // Update or create a Saved_images
     * const saved_images = await prisma.saved_images.upsert({
     *   create: {
     *     // ... data to create a Saved_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_images we want to update
     *   }
     * })
     */
    upsert<T extends saved_imagesUpsertArgs>(args: SelectSubset<T, saved_imagesUpsertArgs<ExtArgs>>): Prisma__saved_imagesClient<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagesCountArgs} args - Arguments to filter Saved_images to count.
     * @example
     * // Count the number of Saved_images
     * const count = await prisma.saved_images.count({
     *   where: {
     *     // ... the filter for the Saved_images we want to count
     *   }
     * })
    **/
    count<T extends saved_imagesCountArgs>(
      args?: Subset<T, saved_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_imagesAggregateArgs>(args: Subset<T, Saved_imagesAggregateArgs>): Prisma.PrismaPromise<GetSaved_imagesAggregateType<T>>

    /**
     * Group by Saved_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_imagesGroupByArgs} args - Group by arguments.
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
      T extends saved_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_imagesGroupByArgs['orderBy'] }
        : { orderBy?: saved_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, saved_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_images model
   */
  readonly fields: saved_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends imagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imagesDefaultArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saved_images model
   */
  interface saved_imagesFieldRefs {
    readonly userId: FieldRef<"saved_images", 'Int'>
    readonly imageId: FieldRef<"saved_images", 'Int'>
    readonly createdAt: FieldRef<"saved_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * saved_images findUnique
   */
  export type saved_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * Filter, which saved_images to fetch.
     */
    where: saved_imagesWhereUniqueInput
  }

  /**
   * saved_images findUniqueOrThrow
   */
  export type saved_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * Filter, which saved_images to fetch.
     */
    where: saved_imagesWhereUniqueInput
  }

  /**
   * saved_images findFirst
   */
  export type saved_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * Filter, which saved_images to fetch.
     */
    where?: saved_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_images to fetch.
     */
    orderBy?: saved_imagesOrderByWithRelationInput | saved_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_images.
     */
    cursor?: saved_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_images.
     */
    distinct?: Saved_imagesScalarFieldEnum | Saved_imagesScalarFieldEnum[]
  }

  /**
   * saved_images findFirstOrThrow
   */
  export type saved_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * Filter, which saved_images to fetch.
     */
    where?: saved_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_images to fetch.
     */
    orderBy?: saved_imagesOrderByWithRelationInput | saved_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_images.
     */
    cursor?: saved_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_images.
     */
    distinct?: Saved_imagesScalarFieldEnum | Saved_imagesScalarFieldEnum[]
  }

  /**
   * saved_images findMany
   */
  export type saved_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * Filter, which saved_images to fetch.
     */
    where?: saved_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_images to fetch.
     */
    orderBy?: saved_imagesOrderByWithRelationInput | saved_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_images.
     */
    cursor?: saved_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_images.
     */
    skip?: number
    distinct?: Saved_imagesScalarFieldEnum | Saved_imagesScalarFieldEnum[]
  }

  /**
   * saved_images create
   */
  export type saved_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a saved_images.
     */
    data: XOR<saved_imagesCreateInput, saved_imagesUncheckedCreateInput>
  }

  /**
   * saved_images createMany
   */
  export type saved_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_images.
     */
    data: saved_imagesCreateManyInput | saved_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saved_images update
   */
  export type saved_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a saved_images.
     */
    data: XOR<saved_imagesUpdateInput, saved_imagesUncheckedUpdateInput>
    /**
     * Choose, which saved_images to update.
     */
    where: saved_imagesWhereUniqueInput
  }

  /**
   * saved_images updateMany
   */
  export type saved_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_images.
     */
    data: XOR<saved_imagesUpdateManyMutationInput, saved_imagesUncheckedUpdateManyInput>
    /**
     * Filter which saved_images to update
     */
    where?: saved_imagesWhereInput
    /**
     * Limit how many saved_images to update.
     */
    limit?: number
  }

  /**
   * saved_images upsert
   */
  export type saved_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the saved_images to update in case it exists.
     */
    where: saved_imagesWhereUniqueInput
    /**
     * In case the saved_images found by the `where` argument doesn't exist, create a new saved_images with this data.
     */
    create: XOR<saved_imagesCreateInput, saved_imagesUncheckedCreateInput>
    /**
     * In case the saved_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_imagesUpdateInput, saved_imagesUncheckedUpdateInput>
  }

  /**
   * saved_images delete
   */
  export type saved_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    /**
     * Filter which saved_images to delete.
     */
    where: saved_imagesWhereUniqueInput
  }

  /**
   * saved_images deleteMany
   */
  export type saved_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_images to delete
     */
    where?: saved_imagesWhereInput
    /**
     * Limit how many saved_images to delete.
     */
    limit?: number
  }

  /**
   * saved_images without action
   */
  export type saved_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    age: number
    avatar: number
    googleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string | null
    fullName: string
    age: number | null
    avatar: string | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    images?: boolean | users$imagesArgs<ExtArgs>
    saved_images?: boolean | users$saved_imagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "age" | "avatar" | "googleId" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    images?: boolean | users$imagesArgs<ExtArgs>
    saved_images?: boolean | users$saved_imagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      images: Prisma.$imagesPayload<ExtArgs>[]
      saved_images: Prisma.$saved_imagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      fullName: string
      age: number | null
      avatar: string | null
      googleId: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends users$imagesArgs<ExtArgs> = {}>(args?: Subset<T, users$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_images<T extends users$saved_imagesArgs<ExtArgs> = {}>(args?: Subset<T, users$saved_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly fullName: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly googleId: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.images
   */
  export type users$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    cursor?: imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * users.saved_images
   */
  export type users$saved_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_images
     */
    select?: saved_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_images
     */
    omit?: saved_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_imagesInclude<ExtArgs> | null
    where?: saved_imagesWhereInput
    orderBy?: saved_imagesOrderByWithRelationInput | saved_imagesOrderByWithRelationInput[]
    cursor?: saved_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_imagesScalarFieldEnum | Saved_imagesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    imageId: 'imageId',
    createdAt: 'createdAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    imageName: 'imageName',
    imagePath: 'imagePath',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const Saved_imagesScalarFieldEnum: {
    userId: 'userId',
    imageId: 'imageId',
    createdAt: 'createdAt'
  };

  export type Saved_imagesScalarFieldEnum = (typeof Saved_imagesScalarFieldEnum)[keyof typeof Saved_imagesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    age: 'age',
    avatar: 'avatar',
    googleId: 'googleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const commentsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type commentsOrderByRelevanceFieldEnum = (typeof commentsOrderByRelevanceFieldEnum)[keyof typeof commentsOrderByRelevanceFieldEnum]


  export const imagesOrderByRelevanceFieldEnum: {
    imageName: 'imageName',
    imagePath: 'imagePath',
    description: 'description'
  };

  export type imagesOrderByRelevanceFieldEnum = (typeof imagesOrderByRelevanceFieldEnum)[keyof typeof imagesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    avatar: 'avatar',
    googleId: 'googleId'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    userId?: IntFilter<"comments"> | number
    imageId?: IntFilter<"comments"> | number
    createdAt?: DateTimeNullableFilter<"comments"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    images?: XOR<ImagesScalarRelationFilter, imagesWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    images?: imagesOrderByWithRelationInput
    _relevance?: commentsOrderByRelevanceInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    content?: StringFilter<"comments"> | string
    userId?: IntFilter<"comments"> | number
    imageId?: IntFilter<"comments"> | number
    createdAt?: DateTimeNullableFilter<"comments"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    images?: XOR<ImagesScalarRelationFilter, imagesWhereInput>
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    content?: StringWithAggregatesFilter<"comments"> | string
    userId?: IntWithAggregatesFilter<"comments"> | number
    imageId?: IntWithAggregatesFilter<"comments"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type imagesWhereInput = {
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    id?: IntFilter<"images"> | number
    imageName?: StringFilter<"images"> | string
    imagePath?: StringFilter<"images"> | string
    description?: StringNullableFilter<"images"> | string | null
    userId?: IntFilter<"images"> | number
    createdAt?: DateTimeNullableFilter<"images"> | Date | string | null
    comments?: CommentsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    saved_images?: Saved_imagesListRelationFilter
  }

  export type imagesOrderByWithRelationInput = {
    id?: SortOrder
    imageName?: SortOrder
    imagePath?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    saved_images?: saved_imagesOrderByRelationAggregateInput
    _relevance?: imagesOrderByRelevanceInput
  }

  export type imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    imageName?: StringFilter<"images"> | string
    imagePath?: StringFilter<"images"> | string
    description?: StringNullableFilter<"images"> | string | null
    userId?: IntFilter<"images"> | number
    createdAt?: DateTimeNullableFilter<"images"> | Date | string | null
    comments?: CommentsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    saved_images?: Saved_imagesListRelationFilter
  }, "id">

  export type imagesOrderByWithAggregationInput = {
    id?: SortOrder
    imageName?: SortOrder
    imagePath?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: imagesCountOrderByAggregateInput
    _avg?: imagesAvgOrderByAggregateInput
    _max?: imagesMaxOrderByAggregateInput
    _min?: imagesMinOrderByAggregateInput
    _sum?: imagesSumOrderByAggregateInput
  }

  export type imagesScalarWhereWithAggregatesInput = {
    AND?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    OR?: imagesScalarWhereWithAggregatesInput[]
    NOT?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"images"> | number
    imageName?: StringWithAggregatesFilter<"images"> | string
    imagePath?: StringWithAggregatesFilter<"images"> | string
    description?: StringNullableWithAggregatesFilter<"images"> | string | null
    userId?: IntWithAggregatesFilter<"images"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
  }

  export type saved_imagesWhereInput = {
    AND?: saved_imagesWhereInput | saved_imagesWhereInput[]
    OR?: saved_imagesWhereInput[]
    NOT?: saved_imagesWhereInput | saved_imagesWhereInput[]
    userId?: IntFilter<"saved_images"> | number
    imageId?: IntFilter<"saved_images"> | number
    createdAt?: DateTimeNullableFilter<"saved_images"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    images?: XOR<ImagesScalarRelationFilter, imagesWhereInput>
  }

  export type saved_imagesOrderByWithRelationInput = {
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    images?: imagesOrderByWithRelationInput
  }

  export type saved_imagesWhereUniqueInput = Prisma.AtLeast<{
    userId_imageId?: saved_imagesUserIdImageIdCompoundUniqueInput
    AND?: saved_imagesWhereInput | saved_imagesWhereInput[]
    OR?: saved_imagesWhereInput[]
    NOT?: saved_imagesWhereInput | saved_imagesWhereInput[]
    userId?: IntFilter<"saved_images"> | number
    imageId?: IntFilter<"saved_images"> | number
    createdAt?: DateTimeNullableFilter<"saved_images"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    images?: XOR<ImagesScalarRelationFilter, imagesWhereInput>
  }, "userId_imageId">

  export type saved_imagesOrderByWithAggregationInput = {
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: saved_imagesCountOrderByAggregateInput
    _avg?: saved_imagesAvgOrderByAggregateInput
    _max?: saved_imagesMaxOrderByAggregateInput
    _min?: saved_imagesMinOrderByAggregateInput
    _sum?: saved_imagesSumOrderByAggregateInput
  }

  export type saved_imagesScalarWhereWithAggregatesInput = {
    AND?: saved_imagesScalarWhereWithAggregatesInput | saved_imagesScalarWhereWithAggregatesInput[]
    OR?: saved_imagesScalarWhereWithAggregatesInput[]
    NOT?: saved_imagesScalarWhereWithAggregatesInput | saved_imagesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"saved_images"> | number
    imageId?: IntWithAggregatesFilter<"saved_images"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"saved_images"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    fullName?: StringFilter<"users"> | string
    age?: IntNullableFilter<"users"> | number | null
    avatar?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    comments?: CommentsListRelationFilter
    images?: ImagesListRelationFilter
    saved_images?: Saved_imagesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    images?: imagesOrderByRelationAggregateInput
    saved_images?: saved_imagesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    googleId?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringNullableFilter<"users"> | string | null
    fullName?: StringFilter<"users"> | string
    age?: IntNullableFilter<"users"> | number | null
    avatar?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    comments?: CommentsListRelationFilter
    images?: ImagesListRelationFilter
    saved_images?: Saved_imagesListRelationFilter
  }, "id" | "email" | "googleId">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    fullName?: StringWithAggregatesFilter<"users"> | string
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type commentsCreateInput = {
    content: string
    createdAt?: Date | string | null
    users: usersCreateNestedOneWithoutCommentsInput
    images: imagesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    content: string
    userId: number
    imageId: number
    createdAt?: Date | string | null
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
    images?: imagesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyInput = {
    id?: number
    content: string
    userId: number
    imageId: number
    createdAt?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesCreateInput = {
    imageName: string
    imagePath: string
    description?: string | null
    createdAt?: Date | string | null
    comments?: commentsCreateNestedManyWithoutImagesInput
    users: usersCreateNestedOneWithoutImagesInput
    saved_images?: saved_imagesCreateNestedManyWithoutImagesInput
  }

  export type imagesUncheckedCreateInput = {
    id?: number
    imageName: string
    imagePath: string
    description?: string | null
    userId: number
    createdAt?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutImagesInput
    saved_images?: saved_imagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type imagesUpdateInput = {
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutImagesNestedInput
    users?: usersUpdateOneRequiredWithoutImagesNestedInput
    saved_images?: saved_imagesUpdateManyWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutImagesNestedInput
    saved_images?: saved_imagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type imagesCreateManyInput = {
    id?: number
    imageName: string
    imagePath: string
    description?: string | null
    userId: number
    createdAt?: Date | string | null
  }

  export type imagesUpdateManyMutationInput = {
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesCreateInput = {
    createdAt?: Date | string | null
    users: usersCreateNestedOneWithoutSaved_imagesInput
    images: imagesCreateNestedOneWithoutSaved_imagesInput
  }

  export type saved_imagesUncheckedCreateInput = {
    userId: number
    imageId: number
    createdAt?: Date | string | null
  }

  export type saved_imagesUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutSaved_imagesNestedInput
    images?: imagesUpdateOneRequiredWithoutSaved_imagesNestedInput
  }

  export type saved_imagesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesCreateManyInput = {
    userId: number
    imageId: number
    createdAt?: Date | string | null
  }

  export type saved_imagesUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    images?: imagesCreateNestedManyWithoutUsersInput
    saved_images?: saved_imagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    images?: imagesUncheckedCreateNestedManyWithoutUsersInput
    saved_images?: saved_imagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    images?: imagesUpdateManyWithoutUsersNestedInput
    saved_images?: saved_imagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    images?: imagesUncheckedUpdateManyWithoutUsersNestedInput
    saved_images?: saved_imagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ImagesScalarRelationFilter = {
    is?: imagesWhereInput
    isNot?: imagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsOrderByRelevanceInput = {
    fields: commentsOrderByRelevanceFieldEnum | commentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Saved_imagesListRelationFilter = {
    every?: saved_imagesWhereInput
    some?: saved_imagesWhereInput
    none?: saved_imagesWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saved_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imagesOrderByRelevanceInput = {
    fields: imagesOrderByRelevanceFieldEnum | imagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type imagesCountOrderByAggregateInput = {
    id?: SortOrder
    imageName?: SortOrder
    imagePath?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageName?: SortOrder
    imagePath?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type imagesMinOrderByAggregateInput = {
    id?: SortOrder
    imageName?: SortOrder
    imagePath?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type imagesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type saved_imagesUserIdImageIdCompoundUniqueInput = {
    userId: number
    imageId: number
  }

  export type saved_imagesCountOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type saved_imagesAvgOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type saved_imagesMaxOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type saved_imagesMinOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type saved_imagesSumOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ImagesListRelationFilter = {
    every?: imagesWhereInput
    some?: imagesWhereInput
    none?: imagesWhereInput
  }

  export type imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type imagesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<imagesCreateWithoutCommentsInput, imagesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: imagesCreateOrConnectWithoutCommentsInput
    connect?: imagesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type imagesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<imagesCreateWithoutCommentsInput, imagesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: imagesCreateOrConnectWithoutCommentsInput
    upsert?: imagesUpsertWithoutCommentsInput
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutCommentsInput, imagesUpdateWithoutCommentsInput>, imagesUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsCreateNestedManyWithoutImagesInput = {
    create?: XOR<commentsCreateWithoutImagesInput, commentsUncheckedCreateWithoutImagesInput> | commentsCreateWithoutImagesInput[] | commentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImagesInput | commentsCreateOrConnectWithoutImagesInput[]
    createMany?: commentsCreateManyImagesInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutImagesInput = {
    create?: XOR<usersCreateWithoutImagesInput, usersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutImagesInput
    connect?: usersWhereUniqueInput
  }

  export type saved_imagesCreateNestedManyWithoutImagesInput = {
    create?: XOR<saved_imagesCreateWithoutImagesInput, saved_imagesUncheckedCreateWithoutImagesInput> | saved_imagesCreateWithoutImagesInput[] | saved_imagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutImagesInput | saved_imagesCreateOrConnectWithoutImagesInput[]
    createMany?: saved_imagesCreateManyImagesInputEnvelope
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<commentsCreateWithoutImagesInput, commentsUncheckedCreateWithoutImagesInput> | commentsCreateWithoutImagesInput[] | commentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImagesInput | commentsCreateOrConnectWithoutImagesInput[]
    createMany?: commentsCreateManyImagesInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type saved_imagesUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<saved_imagesCreateWithoutImagesInput, saved_imagesUncheckedCreateWithoutImagesInput> | saved_imagesCreateWithoutImagesInput[] | saved_imagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutImagesInput | saved_imagesCreateOrConnectWithoutImagesInput[]
    createMany?: saved_imagesCreateManyImagesInputEnvelope
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type commentsUpdateManyWithoutImagesNestedInput = {
    create?: XOR<commentsCreateWithoutImagesInput, commentsUncheckedCreateWithoutImagesInput> | commentsCreateWithoutImagesInput[] | commentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImagesInput | commentsCreateOrConnectWithoutImagesInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutImagesInput | commentsUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: commentsCreateManyImagesInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutImagesInput | commentsUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutImagesInput | commentsUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<usersCreateWithoutImagesInput, usersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutImagesInput
    upsert?: usersUpsertWithoutImagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutImagesInput, usersUpdateWithoutImagesInput>, usersUncheckedUpdateWithoutImagesInput>
  }

  export type saved_imagesUpdateManyWithoutImagesNestedInput = {
    create?: XOR<saved_imagesCreateWithoutImagesInput, saved_imagesUncheckedCreateWithoutImagesInput> | saved_imagesCreateWithoutImagesInput[] | saved_imagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutImagesInput | saved_imagesCreateOrConnectWithoutImagesInput[]
    upsert?: saved_imagesUpsertWithWhereUniqueWithoutImagesInput | saved_imagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: saved_imagesCreateManyImagesInputEnvelope
    set?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    disconnect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    delete?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    update?: saved_imagesUpdateWithWhereUniqueWithoutImagesInput | saved_imagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: saved_imagesUpdateManyWithWhereWithoutImagesInput | saved_imagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: saved_imagesScalarWhereInput | saved_imagesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<commentsCreateWithoutImagesInput, commentsUncheckedCreateWithoutImagesInput> | commentsCreateWithoutImagesInput[] | commentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutImagesInput | commentsCreateOrConnectWithoutImagesInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutImagesInput | commentsUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: commentsCreateManyImagesInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutImagesInput | commentsUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutImagesInput | commentsUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type saved_imagesUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<saved_imagesCreateWithoutImagesInput, saved_imagesUncheckedCreateWithoutImagesInput> | saved_imagesCreateWithoutImagesInput[] | saved_imagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutImagesInput | saved_imagesCreateOrConnectWithoutImagesInput[]
    upsert?: saved_imagesUpsertWithWhereUniqueWithoutImagesInput | saved_imagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: saved_imagesCreateManyImagesInputEnvelope
    set?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    disconnect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    delete?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    update?: saved_imagesUpdateWithWhereUniqueWithoutImagesInput | saved_imagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: saved_imagesUpdateManyWithWhereWithoutImagesInput | saved_imagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: saved_imagesScalarWhereInput | saved_imagesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSaved_imagesInput = {
    create?: XOR<usersCreateWithoutSaved_imagesInput, usersUncheckedCreateWithoutSaved_imagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_imagesInput
    connect?: usersWhereUniqueInput
  }

  export type imagesCreateNestedOneWithoutSaved_imagesInput = {
    create?: XOR<imagesCreateWithoutSaved_imagesInput, imagesUncheckedCreateWithoutSaved_imagesInput>
    connectOrCreate?: imagesCreateOrConnectWithoutSaved_imagesInput
    connect?: imagesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSaved_imagesNestedInput = {
    create?: XOR<usersCreateWithoutSaved_imagesInput, usersUncheckedCreateWithoutSaved_imagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_imagesInput
    upsert?: usersUpsertWithoutSaved_imagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSaved_imagesInput, usersUpdateWithoutSaved_imagesInput>, usersUncheckedUpdateWithoutSaved_imagesInput>
  }

  export type imagesUpdateOneRequiredWithoutSaved_imagesNestedInput = {
    create?: XOR<imagesCreateWithoutSaved_imagesInput, imagesUncheckedCreateWithoutSaved_imagesInput>
    connectOrCreate?: imagesCreateOrConnectWithoutSaved_imagesInput
    upsert?: imagesUpsertWithoutSaved_imagesInput
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutSaved_imagesInput, imagesUpdateWithoutSaved_imagesInput>, imagesUncheckedUpdateWithoutSaved_imagesInput>
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type imagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput> | imagesCreateWithoutUsersInput[] | imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput | imagesCreateOrConnectWithoutUsersInput[]
    createMany?: imagesCreateManyUsersInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type saved_imagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_imagesCreateWithoutUsersInput, saved_imagesUncheckedCreateWithoutUsersInput> | saved_imagesCreateWithoutUsersInput[] | saved_imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutUsersInput | saved_imagesCreateOrConnectWithoutUsersInput[]
    createMany?: saved_imagesCreateManyUsersInputEnvelope
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type imagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput> | imagesCreateWithoutUsersInput[] | imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput | imagesCreateOrConnectWithoutUsersInput[]
    createMany?: imagesCreateManyUsersInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type saved_imagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_imagesCreateWithoutUsersInput, saved_imagesUncheckedCreateWithoutUsersInput> | saved_imagesCreateWithoutUsersInput[] | saved_imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutUsersInput | saved_imagesCreateOrConnectWithoutUsersInput[]
    createMany?: saved_imagesCreateManyUsersInputEnvelope
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type imagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput> | imagesCreateWithoutUsersInput[] | imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput | imagesCreateOrConnectWithoutUsersInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutUsersInput | imagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: imagesCreateManyUsersInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutUsersInput | imagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutUsersInput | imagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type saved_imagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_imagesCreateWithoutUsersInput, saved_imagesUncheckedCreateWithoutUsersInput> | saved_imagesCreateWithoutUsersInput[] | saved_imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutUsersInput | saved_imagesCreateOrConnectWithoutUsersInput[]
    upsert?: saved_imagesUpsertWithWhereUniqueWithoutUsersInput | saved_imagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_imagesCreateManyUsersInputEnvelope
    set?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    disconnect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    delete?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    update?: saved_imagesUpdateWithWhereUniqueWithoutUsersInput | saved_imagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_imagesUpdateManyWithWhereWithoutUsersInput | saved_imagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_imagesScalarWhereInput | saved_imagesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type imagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput> | imagesCreateWithoutUsersInput[] | imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput | imagesCreateOrConnectWithoutUsersInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutUsersInput | imagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: imagesCreateManyUsersInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutUsersInput | imagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutUsersInput | imagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type saved_imagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_imagesCreateWithoutUsersInput, saved_imagesUncheckedCreateWithoutUsersInput> | saved_imagesCreateWithoutUsersInput[] | saved_imagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_imagesCreateOrConnectWithoutUsersInput | saved_imagesCreateOrConnectWithoutUsersInput[]
    upsert?: saved_imagesUpsertWithWhereUniqueWithoutUsersInput | saved_imagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_imagesCreateManyUsersInputEnvelope
    set?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    disconnect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    delete?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    connect?: saved_imagesWhereUniqueInput | saved_imagesWhereUniqueInput[]
    update?: saved_imagesUpdateWithWhereUniqueWithoutUsersInput | saved_imagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_imagesUpdateManyWithWhereWithoutUsersInput | saved_imagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_imagesScalarWhereInput | saved_imagesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutCommentsInput = {
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: imagesCreateNestedManyWithoutUsersInput
    saved_images?: saved_imagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    images?: imagesUncheckedCreateNestedManyWithoutUsersInput
    saved_images?: saved_imagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type imagesCreateWithoutCommentsInput = {
    imageName: string
    imagePath: string
    description?: string | null
    createdAt?: Date | string | null
    users: usersCreateNestedOneWithoutImagesInput
    saved_images?: saved_imagesCreateNestedManyWithoutImagesInput
  }

  export type imagesUncheckedCreateWithoutCommentsInput = {
    id?: number
    imageName: string
    imagePath: string
    description?: string | null
    userId: number
    createdAt?: Date | string | null
    saved_images?: saved_imagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type imagesCreateOrConnectWithoutCommentsInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutCommentsInput, imagesUncheckedCreateWithoutCommentsInput>
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: imagesUpdateManyWithoutUsersNestedInput
    saved_images?: saved_imagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: imagesUncheckedUpdateManyWithoutUsersNestedInput
    saved_images?: saved_imagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type imagesUpsertWithoutCommentsInput = {
    update: XOR<imagesUpdateWithoutCommentsInput, imagesUncheckedUpdateWithoutCommentsInput>
    create: XOR<imagesCreateWithoutCommentsInput, imagesUncheckedCreateWithoutCommentsInput>
    where?: imagesWhereInput
  }

  export type imagesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: imagesWhereInput
    data: XOR<imagesUpdateWithoutCommentsInput, imagesUncheckedUpdateWithoutCommentsInput>
  }

  export type imagesUpdateWithoutCommentsInput = {
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutImagesNestedInput
    saved_images?: saved_imagesUpdateManyWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saved_images?: saved_imagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type commentsCreateWithoutImagesInput = {
    content: string
    createdAt?: Date | string | null
    users: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutImagesInput = {
    id?: number
    content: string
    userId: number
    createdAt?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutImagesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutImagesInput, commentsUncheckedCreateWithoutImagesInput>
  }

  export type commentsCreateManyImagesInputEnvelope = {
    data: commentsCreateManyImagesInput | commentsCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutImagesInput = {
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    saved_images?: saved_imagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutImagesInput = {
    id?: number
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    saved_images?: saved_imagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutImagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutImagesInput, usersUncheckedCreateWithoutImagesInput>
  }

  export type saved_imagesCreateWithoutImagesInput = {
    createdAt?: Date | string | null
    users: usersCreateNestedOneWithoutSaved_imagesInput
  }

  export type saved_imagesUncheckedCreateWithoutImagesInput = {
    userId: number
    createdAt?: Date | string | null
  }

  export type saved_imagesCreateOrConnectWithoutImagesInput = {
    where: saved_imagesWhereUniqueInput
    create: XOR<saved_imagesCreateWithoutImagesInput, saved_imagesUncheckedCreateWithoutImagesInput>
  }

  export type saved_imagesCreateManyImagesInputEnvelope = {
    data: saved_imagesCreateManyImagesInput | saved_imagesCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutImagesInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutImagesInput, commentsUncheckedUpdateWithoutImagesInput>
    create: XOR<commentsCreateWithoutImagesInput, commentsUncheckedCreateWithoutImagesInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutImagesInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutImagesInput, commentsUncheckedUpdateWithoutImagesInput>
  }

  export type commentsUpdateManyWithWhereWithoutImagesInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutImagesInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    userId?: IntFilter<"comments"> | number
    imageId?: IntFilter<"comments"> | number
    createdAt?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type usersUpsertWithoutImagesInput = {
    update: XOR<usersUpdateWithoutImagesInput, usersUncheckedUpdateWithoutImagesInput>
    create: XOR<usersCreateWithoutImagesInput, usersUncheckedCreateWithoutImagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutImagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutImagesInput, usersUncheckedUpdateWithoutImagesInput>
  }

  export type usersUpdateWithoutImagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    saved_images?: saved_imagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    saved_images?: saved_imagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type saved_imagesUpsertWithWhereUniqueWithoutImagesInput = {
    where: saved_imagesWhereUniqueInput
    update: XOR<saved_imagesUpdateWithoutImagesInput, saved_imagesUncheckedUpdateWithoutImagesInput>
    create: XOR<saved_imagesCreateWithoutImagesInput, saved_imagesUncheckedCreateWithoutImagesInput>
  }

  export type saved_imagesUpdateWithWhereUniqueWithoutImagesInput = {
    where: saved_imagesWhereUniqueInput
    data: XOR<saved_imagesUpdateWithoutImagesInput, saved_imagesUncheckedUpdateWithoutImagesInput>
  }

  export type saved_imagesUpdateManyWithWhereWithoutImagesInput = {
    where: saved_imagesScalarWhereInput
    data: XOR<saved_imagesUpdateManyMutationInput, saved_imagesUncheckedUpdateManyWithoutImagesInput>
  }

  export type saved_imagesScalarWhereInput = {
    AND?: saved_imagesScalarWhereInput | saved_imagesScalarWhereInput[]
    OR?: saved_imagesScalarWhereInput[]
    NOT?: saved_imagesScalarWhereInput | saved_imagesScalarWhereInput[]
    userId?: IntFilter<"saved_images"> | number
    imageId?: IntFilter<"saved_images"> | number
    createdAt?: DateTimeNullableFilter<"saved_images"> | Date | string | null
  }

  export type usersCreateWithoutSaved_imagesInput = {
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    images?: imagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSaved_imagesInput = {
    id?: number
    email: string
    password?: string | null
    fullName: string
    age?: number | null
    avatar?: string | null
    googleId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    images?: imagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSaved_imagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSaved_imagesInput, usersUncheckedCreateWithoutSaved_imagesInput>
  }

  export type imagesCreateWithoutSaved_imagesInput = {
    imageName: string
    imagePath: string
    description?: string | null
    createdAt?: Date | string | null
    comments?: commentsCreateNestedManyWithoutImagesInput
    users: usersCreateNestedOneWithoutImagesInput
  }

  export type imagesUncheckedCreateWithoutSaved_imagesInput = {
    id?: number
    imageName: string
    imagePath: string
    description?: string | null
    userId: number
    createdAt?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutImagesInput
  }

  export type imagesCreateOrConnectWithoutSaved_imagesInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutSaved_imagesInput, imagesUncheckedCreateWithoutSaved_imagesInput>
  }

  export type usersUpsertWithoutSaved_imagesInput = {
    update: XOR<usersUpdateWithoutSaved_imagesInput, usersUncheckedUpdateWithoutSaved_imagesInput>
    create: XOR<usersCreateWithoutSaved_imagesInput, usersUncheckedCreateWithoutSaved_imagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSaved_imagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSaved_imagesInput, usersUncheckedUpdateWithoutSaved_imagesInput>
  }

  export type usersUpdateWithoutSaved_imagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    images?: imagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSaved_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    images?: imagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type imagesUpsertWithoutSaved_imagesInput = {
    update: XOR<imagesUpdateWithoutSaved_imagesInput, imagesUncheckedUpdateWithoutSaved_imagesInput>
    create: XOR<imagesCreateWithoutSaved_imagesInput, imagesUncheckedCreateWithoutSaved_imagesInput>
    where?: imagesWhereInput
  }

  export type imagesUpdateToOneWithWhereWithoutSaved_imagesInput = {
    where?: imagesWhereInput
    data: XOR<imagesUpdateWithoutSaved_imagesInput, imagesUncheckedUpdateWithoutSaved_imagesInput>
  }

  export type imagesUpdateWithoutSaved_imagesInput = {
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutImagesNestedInput
    users?: usersUpdateOneRequiredWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateWithoutSaved_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type commentsCreateWithoutUsersInput = {
    content: string
    createdAt?: Date | string | null
    images: imagesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    content: string
    imageId: number
    createdAt?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type imagesCreateWithoutUsersInput = {
    imageName: string
    imagePath: string
    description?: string | null
    createdAt?: Date | string | null
    comments?: commentsCreateNestedManyWithoutImagesInput
    saved_images?: saved_imagesCreateNestedManyWithoutImagesInput
  }

  export type imagesUncheckedCreateWithoutUsersInput = {
    id?: number
    imageName: string
    imagePath: string
    description?: string | null
    createdAt?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutImagesInput
    saved_images?: saved_imagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type imagesCreateOrConnectWithoutUsersInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
  }

  export type imagesCreateManyUsersInputEnvelope = {
    data: imagesCreateManyUsersInput | imagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type saved_imagesCreateWithoutUsersInput = {
    createdAt?: Date | string | null
    images: imagesCreateNestedOneWithoutSaved_imagesInput
  }

  export type saved_imagesUncheckedCreateWithoutUsersInput = {
    imageId: number
    createdAt?: Date | string | null
  }

  export type saved_imagesCreateOrConnectWithoutUsersInput = {
    where: saved_imagesWhereUniqueInput
    create: XOR<saved_imagesCreateWithoutUsersInput, saved_imagesUncheckedCreateWithoutUsersInput>
  }

  export type saved_imagesCreateManyUsersInputEnvelope = {
    data: saved_imagesCreateManyUsersInput | saved_imagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type imagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: imagesWhereUniqueInput
    update: XOR<imagesUpdateWithoutUsersInput, imagesUncheckedUpdateWithoutUsersInput>
    create: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
  }

  export type imagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: imagesWhereUniqueInput
    data: XOR<imagesUpdateWithoutUsersInput, imagesUncheckedUpdateWithoutUsersInput>
  }

  export type imagesUpdateManyWithWhereWithoutUsersInput = {
    where: imagesScalarWhereInput
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type imagesScalarWhereInput = {
    AND?: imagesScalarWhereInput | imagesScalarWhereInput[]
    OR?: imagesScalarWhereInput[]
    NOT?: imagesScalarWhereInput | imagesScalarWhereInput[]
    id?: IntFilter<"images"> | number
    imageName?: StringFilter<"images"> | string
    imagePath?: StringFilter<"images"> | string
    description?: StringNullableFilter<"images"> | string | null
    userId?: IntFilter<"images"> | number
    createdAt?: DateTimeNullableFilter<"images"> | Date | string | null
  }

  export type saved_imagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: saved_imagesWhereUniqueInput
    update: XOR<saved_imagesUpdateWithoutUsersInput, saved_imagesUncheckedUpdateWithoutUsersInput>
    create: XOR<saved_imagesCreateWithoutUsersInput, saved_imagesUncheckedCreateWithoutUsersInput>
  }

  export type saved_imagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: saved_imagesWhereUniqueInput
    data: XOR<saved_imagesUpdateWithoutUsersInput, saved_imagesUncheckedUpdateWithoutUsersInput>
  }

  export type saved_imagesUpdateManyWithWhereWithoutUsersInput = {
    where: saved_imagesScalarWhereInput
    data: XOR<saved_imagesUpdateManyMutationInput, saved_imagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type commentsCreateManyImagesInput = {
    id?: number
    content: string
    userId: number
    createdAt?: Date | string | null
  }

  export type saved_imagesCreateManyImagesInput = {
    userId: number
    createdAt?: Date | string | null
  }

  export type commentsUpdateWithoutImagesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesUpdateWithoutImagesInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutSaved_imagesNestedInput
  }

  export type saved_imagesUncheckedUpdateWithoutImagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesUncheckedUpdateManyWithoutImagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    content: string
    imageId: number
    createdAt?: Date | string | null
  }

  export type imagesCreateManyUsersInput = {
    id?: number
    imageName: string
    imagePath: string
    description?: string | null
    createdAt?: Date | string | null
  }

  export type saved_imagesCreateManyUsersInput = {
    imageId: number
    createdAt?: Date | string | null
  }

  export type commentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: imagesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesUpdateWithoutUsersInput = {
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutImagesNestedInput
    saved_images?: saved_imagesUpdateManyWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutImagesNestedInput
    saved_images?: saved_imagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesUpdateWithoutUsersInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: imagesUpdateOneRequiredWithoutSaved_imagesNestedInput
  }

  export type saved_imagesUncheckedUpdateWithoutUsersInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saved_imagesUncheckedUpdateManyWithoutUsersInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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