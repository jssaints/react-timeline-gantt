import React from "react";

export function resolveObjectPathData(path, obj) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null
  }, obj || self)
}

export function isObject(thing) {
  if (typeof File !== "undefined" && thing instanceof File) {
    return false;
  }
  return typeof thing === "object" && thing !== null && !Array.isArray(thing);
}

export function DataGroupBy(dataObj) {
  let groupedData = {};
  if (dataObj.groupByType === "Array") {
    groupedData = dataObj.data.reduce((catMemo, item) => {
      item[dataObj.groupByArrayField].map((element, key) => {
        if (element){
          (catMemo[element[dataObj.groupByID]] = catMemo[element[dataObj.groupByID]] || []).push(item);
        }
      });
      return catMemo;
    }, {});

  } else {
    groupedData = dataObj.data.reduce((groupSoFar, item) => {
      if (item && !groupSoFar[item[dataObj.groupByID]]) groupSoFar[item[dataObj.groupByID]] = [];
      groupSoFar[item[dataObj.groupByID]].push(item);
      return groupSoFar;
    }, {});
  }

  return groupedData;
}