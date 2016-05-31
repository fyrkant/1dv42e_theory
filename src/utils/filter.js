/* eslint max-statements-per-line: 0 */
// Helper functions for filtering objects

import flatten from "lodash/flatten";
import filter from "lodash/filter";
import mapValues from "lodash/mapValues";
import values from "lodash/values";

// Flattens a objects values even if nested
//
// example:
//  flattenObject({age: 29, person: {name: "robin"}})
//  returns
//  [29, "robin"]
//
export const flattenObject = obj => {
  return flatten(
    values(
      mapValues(obj, (v, k) => {
        return typeof v === "object" ? values(v) : v;
      })
    )
  );
};

// Filters objects matching against all strings
//
// example:
//  a = [{ name: "robin"}, {person: {name: "mattias"}}]
//  filterObject(a, "mattias")
//  will  return
//  [{person: {name: "mattias"}}]
export const filterObjects = (objects, value) => {
  return filter(objects, obj => {
    const matches = filter(flattenObject(obj), v => {
      return typeof v === "string" ? v.toLowerCase().indexOf(value.toLowerCase()) !== -1
                                   : false;
    });
    return matches.length > 0;
  });
};
