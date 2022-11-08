/**
 * Example 2: resource identifiers (like Atlassians ARI, AWS ARNs)
 */

/**
 * Atlassian Resource Identified (ARI)
 * [Example] "ari:cloud:ecosystem::app/406d303d-0393-4ec4-ad7c-1435be94583a"
 */
type Resource = 'app' | 'site';
type Owner = 'ecosystem' | 'jira' | 'confluence';
type Environment = 'cloud' | 'server';

type Ari = `ari:${Environment}:${Owner}::${Resource}/${string}`;

const mySiteAri: Ari =
  'ari:cloud:ecosystem::site/406d303d-0393-4ec4-ad7c-1435be94583a';

function handleAri(ari: Ari) {
  // do the job
}

// won't compile, string doesn't match pattern
// handleAri('ari:on-prem:me::site/406d303d-0393-4ec4-ad7c-1435be94583a')

// ---------- Unpacking ARI -------------------------------------------------------

type UnpackEnvironment<T> = T extends `ari:${infer TEnvironment}:${string}`
  ? TEnvironment
  : never;
type EnvironmentUnpacked = UnpackEnvironment<Ari>;
// expected `type EnvironmentUnpacked = "cloud" | "server"`

type UnpackOwner<T> = T extends `ari:${string}:${infer TOwner}:${string}`
  ? TOwner
  : never;
type OwnerUnpacked = UnpackOwner<Ari>;
// expected `type OwnerUnpacked = "ecosystem" | "jira" | "confluence"`

type UnpackResource<T> =
  T extends `ari:${string}:${string}::${infer TResource}/${string}`
    ? TResource
    : never;
type ResourceUnpacked = UnpackResource<Ari>;
// Expected `type ResourceUnpacked = "app" | "site"`

type UnpackResourceId<T> =
  T extends `ari:${string}:${string}::${string}/${infer TResource}`
    ? TResource
    : never;
type ResourceIdUnpacked = UnpackResourceId<Ari>;
// this will be just `string` :)

type UnpackAll<T> =
  T extends `ari:${infer TEnvironment}:${infer TOwner}::${infer TResource}/${string}`
    ? { environment: TEnvironment; owner: TOwner; resource: TResource }
    : never;
type UnpackedAll = UnpackAll<Ari>;
// Expected
// type UnpackedAll = {
//   environment: "cloud";
//   owner: "ecosystem";
//   resource: "app";
// } | {
//   environment: "cloud";
//   owner: "ecosystem";
//   resource: "site";
// } | {
//   environment: "cloud";
//   owner: "jira";
//   resource: "app";
// } | {
//   environment: "cloud";
//   owner: "jira";
//   resource: "site";
// } | ... 7 more ... | {
//   ...;
// }

export {};
