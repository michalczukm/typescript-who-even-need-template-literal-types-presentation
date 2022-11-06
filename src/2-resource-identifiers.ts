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

export {};
