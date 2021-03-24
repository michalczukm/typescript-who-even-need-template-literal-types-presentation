/**
 * Example 4: Generate multiple fields per each one while mapping type
 * 
 * Imagine you have to create table which logs each change operation
 * on every value - full auditable, always available
 */

type PatientEntity = {
  id: string;
  name: string;
  birthDateUtc: Date;
  sex: 'Female' | 'Male';
};

type ChangeLog<T> = {
  id: string;
  entityId: string;
  createdDateUtc: Date;
} & {
  [K in keyof T as `${string & K}_${'old' | 'new'}`]?: T[K];
};

// we rather won't change `id`
// type OnlyValues<T> = Omit<T, 'id'>;
// PS we can also do it in `FieldLog`
// [K in keyof Omit<T, 'id'> as `${string & K}_${'old' | 'new'}`]?: string;
type PatientChangeLog = ChangeLog<PatientEntity>;

/**
 * Result type 👇
 * 
 * type PatientChangeLog = {
    id: string;
    entityId: string;
    createdDateUtc: Date;
} & {
    id_old?: string | undefined;
    id_new?: string | undefined;
    name_old?: string | undefined;
    name_new?: string | undefined;
    birthDateUtc_old?: Date | undefined;
    birthDateUtc_new?: Date | undefined;
    sex_old?: "Female" | ... 1 more ... | undefined;
    sex_new?: "Female" | ... 1 more ... | undefined;
}
 */

const patientLog: ChangeLog<PatientEntity> = {
  id: 'fed5ea5b-f7e5-4e5a-a21f-4094f98dbfad',
  entityId: '5de28255-cfab-4105-b886-c610383ceefa',
  createdDateUtc: new Date(),
  // name_old: false, <-- won't compile
  birthDateUtc_old: new Date(),
};

export {};
