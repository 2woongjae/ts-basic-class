/*
class Preference {
  public static getInstance(): Preference {
    if (Preference.instance === null) {
      Preference.instance = new Preference();
    }

    return Preference.instance;
  }
  private static instance: Preference | null = null;
  private constructor() {}
}

const p: Preference = Preference.getInstance();
*/

class PreferenceClass {
  constructor() {}
}

export const Preference = new PreferenceClass();
export type PreferenceType = typeof Preference;
