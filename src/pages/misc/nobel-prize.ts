export interface NobelPrizeJson {
  nobelPrizes: NobelPrize[];
  meta: Meta;
  links: Links;
}

export interface Links {
  first: string;
  self: string;
  last: string;
}

export interface Meta {
  offset: number;
  limit: number;
  count: number;
  terms: string;
  license: string;
  disclaimer: string;
}

export interface NobelPrize {
  awardYear: string;
  category: Category;
  categoryFullName: Category;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  links: LaureateLinks;
  laureates?: Laureate[];
  dateAwarded?: Date;
  topMotivation?: TopMotivation;
}

export interface Category {
  en: string;
  no?: string;
  se?: string;
}

export interface Laureate {
  id: string;
  knownName?: Name;
  fullName?: FullName;
  portion: string;
  sortOrder: string;
  motivation: Category;
  links: LaureateLinks;
  orgName?: Name;
  nativeName?: string;
  acronym?: string;
}

export interface FullName {
  en: string;
}

export interface Name {
  en: string;
  no?: string;
}

export interface LaureateLinks {
  rel: Rel;
  href: string;
  action: Action;
  types: Types;
}

export enum Action {
  Get = "Get",
}

export enum Rel {
  Laureate = "laureate",
  NobelPrize = "nobelPrize",
}

export enum Types {
  ApplicationJSON = "application/json",
}

export interface TopMotivation {
  en: string;
  se?: string;
}
